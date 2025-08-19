import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Layers, 
  Calculator, 
  Lightbulb, 
  Wrench, 
  Hammer, 
  Palette, 
  Construction, 
  Box, 
  Settings, 
  Scissors, 
  Zap, 
  Crown 
} from "lucide-react";
import { useLocation } from "wouter";

const mainServices = [
  {
    icon: Home,
    title: "Peinture Résidentielle Intérieure",
    description: "Transformez vos espaces de vie avec notre expertise en peinture intérieure. Finitions impeccables garanties.",
    features: ["Préparation des surfaces", "Choix de couleurs expert", "Finitions de qualité"]
  },
  {
    icon: Layers,
    title: "Nettoyage et Pose de Revêtement Muraux",
    description: "Nettoyage professionnel et pose experte de tous types de revêtements muraux pour un rendu exceptionnel.",
    features: ["Nettoyage professionnel", "Pose experte", "Tous types de revêtements"]
  },
  {
    icon: Calculator,
    title: "Estimation",
    description: "Évaluation précise et transparente de vos projets. Devis détaillé gratuit sous 24h.",
    features: ["Devis gratuit", "Évaluation précise", "Réponse sous 24h"]
  },
  {
    icon: Lightbulb,
    title: "Conseil",
    description: "Accompagnement personnalisé dans le choix des couleurs, finitions et techniques adaptées à vos besoins.",
    features: ["Conseil personnalisé", "Choix de couleurs", "Techniques adaptées"]
  },
  {
    icon: Wrench,
    title: "Tirage des Joints",
    description: "Finition parfaite des joints de gypse pour des surfaces lisses et prêtes à recevoir la peinture.",
    features: ["Joints de gypse", "Surfaces lisses", "Préparation optimale"]
  }
];

const additionalServices = [
  {
    icon: Hammer,
    title: "Rénovation Intérieure",
    description: "Salon, cuisine, sous-sol - transformation complète de vos espaces de vie",
    features: ["Rénovation de salon", "Rénovation de cuisine", "Aménagement de sous-sol"]
  },
  {
    icon: Layers,
    title: "Sablage et Vernissage",
    description: "Restauration et protection de vos planchers de bois",
    features: ["Sablage professionnel", "Vernissage de qualité", "Restauration complète"]
  },
  {
    icon: Palette,
    title: "Crépy Acrylique",
    description: "Finition texturée moderne pour vos murs intérieurs et extérieurs",
    features: ["Application professionnelle", "Différentes textures", "Durabilité garantie"]
  },
  {
    icon: Construction,
    title: "Revêtement d'Époxy",
    description: "Protection durable pour terrasses en béton et escaliers",
    features: ["Terrasses en béton", "Escaliers extérieurs", "Résistance aux intempéries"]
  },
  {
    icon: Box,
    title: "Fabrication de Patio",
    description: "Conception et construction de patios sur mesure",
    features: ["Design personnalisé", "Construction complète", "Matériaux de qualité"]
  },
  {
    icon: Settings,
    title: "Travaux de Plomberie",
    description: "Services de plomberie générale et débouchage",
    features: ["Réparations diverses", "Débouchage des drains", "Installation sanitaire"]
  },
  {
    icon: Scissors,
    title: "Menuiserie et Charpenterie",
    description: "Travaux de bois sur mesure et charpenterie",
    features: ["Menuiserie fine", "Charpenterie générale", "Réparations structurelles"]
  },
  {
    icon: Zap,
    title: "Travaux d'Électricité",
    description: "Installation et réparation électrique professionnelle",
    features: ["Installation de prises", "Éclairage moderne", "Mise aux normes"]
  }
];

export default function Services() {
  const [, setLocation] = useLocation();

  const handleContactForProject = () => {
    setLocation("/contact");
  };

  const handleServiceDetails = (serviceName: string) => {
    const serviceRoutes: { [key: string]: string } = {
      "Peinture Résidentielle Intérieure": "/services/peinture-interieure",
      "Nettoyage et Pose de Revêtement Muraux": "/services/revetements-muraux", 
      "Estimation": "/services/estimation-gratuite",
      "Conseil": "/services/conseil-expert",
      "Tirage des Joints": "/services/tirage-joints"
    };
    setLocation(serviceRoutes[serviceName] || "/services");
  };

  return (
    <div className="min-h-screen pt-20" data-testid="services-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-blue to-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6" data-testid="services-hero-title">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de services pour tous vos besoins en peinture, rénovation et finition
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white" data-testid="main-services-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary-blue mb-4">
              Services Principaux
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Nos services de base pour tous vos projets de peinture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow" data-testid={`main-service-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-primary-green text-2xl mr-3" size={24} />
                      <h3 className="text-xl font-poppins font-semibold text-secondary-blue">{service.title}</h3>
                    </div>
                    <p className="text-neutral mb-4">{service.description}</p>
                    <ul className="text-sm text-neutral space-y-1 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                    <Button 
                      variant="link" 
                      className="text-primary-green font-semibold hover:text-secondary-blue p-0"
                      onClick={() => handleServiceDetails(service.title)}
                      data-testid={`button-service-details-${index}`}
                    >
                      En savoir plus →
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50" data-testid="additional-services-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary-blue mb-4">
              Services Complémentaires
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Une gamme étendue de services pour tous vos besoins en rénovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow" data-testid={`additional-service-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-primary-green text-2xl mr-3" size={24} />
                      <h3 className="text-xl font-poppins font-semibold text-secondary-blue">{service.title}</h3>
                    </div>
                    <p className="text-neutral mb-4">{service.description}</p>
                    <ul className="text-sm text-neutral space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}

            {/* Premium Service */}
            <Card className="bg-gradient-to-br from-primary-green to-secondary-blue text-white hover:shadow-xl transition-shadow" data-testid="premium-service">
              <CardContent className="p-6 text-center">
                <Crown className="text-4xl mb-4 text-accent-orange mx-auto" size={48} />
                <h3 className="text-xl font-poppins font-semibold mb-4">Service Complet</h3>
                <p className="mb-6">Projet complexe? Nous gérons tout de A à Z</p>
                <Button 
                  className="bg-white text-secondary-blue hover:bg-gray-100"
                  onClick={handleContactForProject}
                  data-testid="button-complex-project"
                >
                  Discuter de votre Projet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-green text-white" data-testid="services-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-poppins font-bold mb-6">
            Prêt à Commencer Votre Projet?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={handleContactForProject}
            data-testid="button-get-quote-cta"
          >
            Obtenir un Devis Gratuit
          </Button>
        </div>
      </section>
    </div>
  );
}
