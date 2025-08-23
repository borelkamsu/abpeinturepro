import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema } from "@shared/schema";

const formSchema = insertContactSchema;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Envoyer directement à Formspree
      const response = await fetch("https://formspree.io/f/mkgzdllv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `🎨 Nouvelle demande de devis - ${data.firstName} ${data.lastName}`,
          from: data.email,
          name: `${data.firstName} ${data.lastName}`,
          message: `
🎨 NOUVELLE DEMANDE DE DEVIS - A&B PEINTURE 🎨

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 INFORMATIONS CLIENT :
• Nom complet : ${data.firstName} ${data.lastName}
• Email : ${data.email}
• Téléphone : ${data.phone || 'Non fourni'}
• Service demandé : ${data.serviceType}

📝 DESCRIPTION DU PROJET :
${data.message}

⏰ Date de soumission : ${new Date().toLocaleString('fr-CA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 ACTION REQUISE :
Contactez le client dans les 24h pour un devis personnalisé.

📞 VOS COORDONNÉES :
• Téléphone : (418) 473-6433
• Email : augustinmbende82@yahoo.com
• Localisation : Charlesbourg, Québec

---
Ce message a été envoyé automatiquement depuis le formulaire de contact d'A&B PEINTURE
"PASSION & ESPACE DE VIE"
          `,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé!",
          description: "Merci pour votre demande! Nous vous contacterons sous 24h.",
        });
        form.reset();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    "Peinture résidentielle intérieure",
    "Peinture extérieure",
    "Rénovation complète",
    "Revêtement muraux",
    "Sablage et vernissage",
    "Autre (préciser dans le message)"
  ];

  return (
    <Card className="shadow-xl" data-testid="contact-form">
      <CardHeader>
        <CardTitle className="text-2xl font-poppins font-semibold text-secondary-blue">
          Demande de Devis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom *</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre prénom" {...field} data-testid="input-firstName" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom *</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre nom" {...field} data-testid="input-lastName" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="votre@email.com" {...field} data-testid="input-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(418) 000-0000" {...field} value={field.value || ""} data-testid="input-phone" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de Service *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-serviceType">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service} value={service} data-testid={`option-${service}`}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description du Projet *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Décrivez votre projet en détail..."
                      rows={4}
                      {...field}
                      data-testid="textarea-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-primary-green hover:bg-primary-green/90 text-white py-4 text-lg font-semibold transition-all transform hover:scale-105"
              disabled={isSubmitting}
              data-testid="button-submit-contact"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma Demande"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
