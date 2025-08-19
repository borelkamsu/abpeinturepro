import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Calculator, CheckCircle, Clock, FileText, Users, Star } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function EstimationGratuite() {
  const [, setLocation] = useLocation();

  const handleContact = () => {
    setLocation("/contact");
  };

  const estimationFeatures = [
    {
      icon: FileText,
      title: "Devis Détaillé",
      description: "Estimation complète avec détail des matériaux et main d'œuvre"
    },
    {
      icon: Clock,
      title: "Réponse Rapide",
      description: "Devis fourni sous 24h maximum après la visite"
    },
    {
      icon: Users,
      title: "Conseil Personnalisé",
      description: "Recommandations adaptées à vos besoins et votre budget"
    },
    {
      icon: Star,
      title: "Sans Engagement",
      description: "Estimation gratuite sans obligation d'achat"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Demande d'Estimation",
      description: "Remplissez notre formulaire ou appelez-nous directement"
    },
    {
      step: "2",
      title: "Visite Gratuite",
      description: "Augustin se déplace chez vous pour évaluer vos besoins"
    },
    {
      step: "3",
      title: "Analyse Complète",
      description: "Étude détaillée de vos surfaces et de vos exigences"
    },
    {
      step: "4",
      title: "Devis Personnalisé",
      description: "Remise d'un devis détaillé adapté à votre projet"
    }
  ];

  const includedServices = [
    "Évaluation complète des surfaces",
    "Conseil sur le choix des couleurs",
    "Recommandation des matériaux",
    "Estimation du temps de réalisation",
    "Planification des étapes",
    "Conseils d'entretien"
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="estimation-gratuite-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-blue to-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6" data-testid="service-title">
                Estimation Gratuite
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Obtenez une évaluation précise et transparente de vos projets. 
                Devis détaillé gratuit sous 24h par "Les Murs de Augustin".
              </p>
              <Button 
                size="lg"
                className="bg-primary-green hover:bg-primary-green/90 px-8 py-4 text-lg"
                onClick={handleContact}
                data-testid="button-request-estimate"
              >
                Demander une Estimation
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Expert effectuant une estimation"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" data-testid="features-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-4">
              Pourquoi Choisir Notre Service d'Estimation
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Une approche professionnelle pour vous donner toutes les informations nécessaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {estimationFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow" data-testid={`feature-${index}`}>
                  <CardContent className="p-6">
                    <IconComponent className="text-primary-green mx-auto mb-4" size={40} />
                    <h3 className="text-lg font-poppins font-semibold text-secondary-blue mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50" data-testid="process-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-4">
              Comment Ça Fonctionne
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Un processus simple et efficace pour obtenir votre estimation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`process-${index}`}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-secondary-blue mb-3">
                    {process.title}
                  </h3>
                  <p className="text-neutral text-sm">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services Section */}
      <section className="py-20 bg-white" data-testid="included-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-6">
                Ce Qui Est Inclus
              </h2>
              <p className="text-xl text-neutral mb-8">
                Notre service d'estimation gratuite comprend une évaluation complète 
                de votre projet pour vous permettre de prendre une décision éclairée.
              </p>
              <div className="space-y-4">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`included-${index}`}>
                    <CheckCircle className="text-primary-green" size={24} />
                    <span className="text-neutral font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professionnel donnant des conseils"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary-blue text-white" data-testid="contact-form-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold mb-4">
              Demandez Votre Estimation Gratuite
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous et Augustin vous contactera sous 24h
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8">
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <Card className="bg-white bg-opacity-10 border-0">
                <CardContent className="p-6">
                  <Calculator className="text-primary-green mb-4" size={32} />
                  <h4 className="font-poppins font-semibold text-xl mb-4">Estimation Professionnelle</h4>
                  <p className="mb-4">
                    Augustin utilise son expertise de plus de 10 ans pour vous fournir 
                    une estimation précise et réaliste de votre projet.
                  </p>
                  <ul className="text-sm space-y-2 opacity-90">
                    <li>• Évaluation sur site gratuite</li>
                    <li>• Devis détaillé sous 24h</li>
                    <li>• Conseils personnalisés inclus</li>
                    <li>• Sans engagement de votre part</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white bg-opacity-10 border-0">
                <CardContent className="p-6 text-center">
                  <Clock className="text-accent-orange mx-auto mb-4" size={32} />
                  <h4 className="font-poppins font-semibold text-lg mb-2">
                    Réponse Rapide Garantie
                  </h4>
                  <p>
                    Nous nous engageons à vous fournir votre estimation 
                    dans les 24h suivant notre visite.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}