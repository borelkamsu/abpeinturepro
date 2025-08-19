import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-blue to-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6" data-testid="contact-hero-title">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Prêt à transformer vos espaces? Obtenez votre devis gratuit dès aujourd'hui
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white" data-testid="main-contact-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-poppins font-semibold text-secondary-blue mb-6">
                  Informations de Contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="contact-address-info">
                    <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Adresse</h4>
                      <p className="text-neutral">
                        3637 rue des sureaux<br/>
                        Charlesbourg, Québec<br/>
                        G1G1Z7
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-phone-info">
                    <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Téléphone</h4>
                      <p className="text-neutral">(418) 473-6433</p>
                      <p className="text-sm text-gray-500">Lun-Ven: 8h00-18h00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-email-info">
                    <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Email</h4>
                      <p className="text-neutral">augustinmbende82@yahoo.com</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-hours-info">
                    <div className="w-12 h-12 bg-secondary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Heures d'Ouverture</h4>
                      <div className="text-neutral text-sm">
                        <p>Lundi - Vendredi: 8h00 - 18h00</p>
                        <p>Samedi: 9h00 - 16h00</p>
                        <p>Dimanche: Sur rendez-vous</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="font-poppins font-semibold text-lg mb-4 text-secondary-blue">
                    Pourquoi Choisir AB-Peinture Pro?
                  </h4>
                  <ul className="space-y-3 text-neutral">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-green" size={20} />
                      <span>Devis gratuit et détaillé</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-green" size={20} />
                      <span>Matériaux de qualité supérieure</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-green" size={20} />
                      <span>Équipe expérimentée et assurée</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-green" size={20} />
                      <span>Satisfaction client garantie</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-primary-green text-white">
                <CardContent className="p-6 text-center">
                  <Star className="text-accent-orange mx-auto mb-4" size={32} />
                  <h4 className="font-poppins font-semibold text-xl mb-2">
                    Urgence 24/7
                  </h4>
                  <p className="mb-4">
                    Pour les projets urgents, n'hésitez pas à nous appeler
                  </p>
                  <Button 
                    className="bg-white text-primary-green hover:bg-gray-100"
                    data-testid="button-emergency-call"
                  >
                    Appeler Maintenant
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50" data-testid="service-areas">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary-blue mb-4">
              Zones de Service
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Nous desservons fièrement la région de Québec et ses environs
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Charlesbourg", "Québec", "Sainte-Foy", "Sillery",
              "Cap-Rouge", "L'Ancienne-Lorette", "Saint-Augustin", "Beauport"
            ].map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`service-area-${index}`}>
                <CardContent className="p-4">
                  <MapPin className="text-primary-green mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-secondary-blue">{area}</h4>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral mb-4">
              Votre ville n'est pas listée? Contactez-nous, nous nous déplaçons!
            </p>
            <Button 
              className="bg-primary-green hover:bg-primary-green/90"
              data-testid="button-ask-service-area"
            >
              Vérifier la Disponibilité
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" data-testid="faq-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary-blue mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card data-testid="faq-1">
              <CardContent className="p-6">
                <h4 className="font-semibold text-secondary-blue mb-3">
                  Combien de temps prend un projet de peinture intérieure?
                </h4>
                <p className="text-neutral">
                  La durée dépend de la taille du projet. Une pièce standard prend 2-3 jours, 
                  une maison complète peut prendre 1-2 semaines.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="faq-2">
              <CardContent className="p-6">
                <h4 className="font-semibold text-secondary-blue mb-3">
                  Fournissez-vous les matériaux?
                </h4>
                <p className="text-neutral">
                  Oui, nous fournissons tous les matériaux nécessaires de qualité supérieure. 
                  Le coût est inclus dans notre devis.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="faq-3">
              <CardContent className="p-6">
                <h4 className="font-semibold text-secondary-blue mb-3">
                  Offrez-vous une garantie sur vos travaux?
                </h4>
                <p className="text-neutral">
                  Absolument! Nous offrons une garantie de satisfaction complète et 
                  une garantie matériaux selon les spifications du fabricant.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="faq-4">
              <CardContent className="p-6">
                <h4 className="font-semibold text-secondary-blue mb-3">
                  Travaillez-vous en fin de semaine?
                </h4>
                <p className="text-neutral">
                  Nous travaillons du lundi au samedi. Les dimanches sont disponibles 
                  sur rendez-vous pour les projets urgents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
