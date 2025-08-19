import * as nodemailer from 'nodemailer';
import { type Contact } from '@shared/schema';

export class EmailService {
  private transporter: any;

  constructor() {
    // Vérifier si les variables d'environnement sont configurées
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.warn('Configuration Gmail manquante. Les emails ne seront pas envoyés.');
      return;
    }

    try {
      this.transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });
    } catch (error) {
      console.error('Erreur lors de la création du transporteur email:', error);
    }
  }

  async sendContactNotification(contact: Contact): Promise<void> {
    if (!this.transporter) {
      console.warn('Transporteur email non configuré. Email de notification non envoyé.');
      return;
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Envoi à vous-même pour notification
      subject: `Nouvelle demande de devis - ${contact.firstName} ${contact.lastName}`,
      html: this.generateContactEmailHTML(contact),
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Email de notification envoyé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      throw error;
    }
  }

  async sendConfirmationToClient(contact: Contact): Promise<void> {
    if (!this.transporter) {
      console.warn('Transporteur email non configuré. Email de confirmation non envoyé.');
      return;
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: contact.email,
      subject: 'Confirmation de votre demande de devis - A&B PEINTURE',
      html: this.generateConfirmationEmailHTML(contact),
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Email de confirmation envoyé au client');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email de confirmation:', error);
      // Ne pas faire échouer le processus si l'email de confirmation échoue
    }
  }

  private generateContactEmailHTML(contact: Contact): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Nouvelle demande de devis</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1e3a8a; }
          .value { margin-left: 10px; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎨 Nouvelle Demande de Devis</h1>
            <p>A&B PEINTURE - Les Murs de Augustin</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">Nom complet:</span>
              <span class="value">${contact.firstName} ${contact.lastName}</span>
            </div>
            
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${contact.email}</span>
            </div>
            
            ${contact.phone ? `
            <div class="field">
              <span class="label">Téléphone:</span>
              <span class="value">${contact.phone}</span>
            </div>
            ` : ''}
            
            <div class="field">
              <span class="label">Service demandé:</span>
              <span class="value">${contact.serviceType}</span>
            </div>
            
            <div class="field">
              <span class="label">Description du projet:</span>
              <div class="value" style="margin-top: 10px; padding: 10px; background-color: white; border-left: 3px solid #1e3a8a;">
                ${contact.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div class="field">
              <span class="label">Date de soumission:</span>
              <span class="value">${new Date(contact.createdAt).toLocaleString('fr-CA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</span>
            </div>
          </div>
          
          <div class="footer">
            <p>Ce message a été envoyé automatiquement depuis le formulaire de contact d'A&B PEINTURE</p>
            <p>Contactez le client dans les 24h pour un devis personnalisé</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateConfirmationEmailHTML(contact: Contact): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Confirmation de votre demande</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .highlight { background-color: #e0f2fe; padding: 15px; border-left: 4px solid #1e3a8a; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          .contact-info { background-color: white; padding: 15px; margin: 20px 0; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎨 Merci pour votre demande !</h1>
            <p>A&B PEINTURE - Les Murs de Augustin</p>
          </div>
          
          <div class="content">
            <p>Bonjour ${contact.firstName},</p>
            
            <p>Nous avons bien reçu votre demande de devis pour <strong>${contact.serviceType}</strong>.</p>
            
            <div class="highlight">
              <h3>📋 Récapitulatif de votre demande :</h3>
              <p><strong>Service :</strong> ${contact.serviceType}</p>
              <p><strong>Description :</strong> ${contact.message}</p>
            </div>
            
            <h3>⏰ Prochaines étapes :</h3>
            <ul>
              <li>Notre équipe va analyser votre projet</li>
              <li>Nous vous contacterons sous <strong>24 heures</strong></li>
              <li>Vous recevrez un devis personnalisé et détaillé</li>
            </ul>
            
            <div class="contact-info">
              <h3>📞 Nos coordonnées :</h3>
              <p><strong>Téléphone :</strong> (418) 473-6433</p>
              <p><strong>Email :</strong> augustinmbende82@yahoo.com</p>
              <p><strong>Localisation :</strong> Charlesbourg, Québec</p>
            </div>
            
            <p>Merci de votre confiance !</p>
            <p><strong>L'équipe A&B PEINTURE</strong></p>
          </div>
          
          <div class="footer">
            <p>Ce message est envoyé automatiquement. Merci de ne pas y répondre.</p>
            <p>A&B PEINTURE - "PASSION & ESPACE DE VIE"</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

export const emailService = new EmailService();
