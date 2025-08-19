import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Layers, Calculator, Lightbulb, Wrench, Star } from "lucide-react";
import { useLocation } from "wouter";

const mainServices = [
  {
    icon: Home,
    title: "Peinture Résidentielle Intérieure",
    description: "Transformez vos espaces de vie avec notre expertise en peinture intérieure. Finitions impeccables garanties.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  },
  {
    icon: Layers,
    title: "Revêtements Muraux",
    description: "Nettoyage professionnel et pose experte de tous types de revêtements muraux pour un rendu exceptionnel.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  },
  {
    icon: Calculator,
    title: "Estimation Gratuite",
    description: "Évaluation précise et transparente de vos projets. Devis détaillé gratuit sous 24h.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  },
  {
    icon: Lightbulb,
    title: "Conseil Expert",
    description: "Accompagnement personnalisé dans le choix des couleurs, finitions et techniques adaptées à vos besoins.",
    image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  },
  {
    icon: Wrench,
    title: "Tirage des Joints",
    description: "Finition parfaite des joints de gypse pour des surfaces lisses et prêtes à recevoir la peinture.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  }
];

export default function ServicesShowcase() {
  const [, setLocation] = useLocation();

  const handleServiceDetails = () => {
    setLocation("/services");
  };

  const handleViewAllServices = () => {
    setLocation("/services");
  };

  return (
    <section className="py-20 bg-white" data-testid="services-showcase">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary-blue mb-4" data-testid="services-title">
            Nos Services Principaux
          </h2>
          <p className="text-xl text-neutral max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de peinture et de rénovation pour tous vos projets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-shadow overflow-hidden" data-testid={`service-card-${index}`}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <IconComponent className="text-primary-green text-2xl mr-3" size={24} />
                    <h3 className="text-xl font-poppins font-semibold text-secondary-blue">{service.title}</h3>
                  </div>
                  <p className="text-neutral mb-4">
                    {service.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary-green font-semibold hover:text-secondary-blue p-0"
                    onClick={handleServiceDetails}
                    data-testid={`button-service-details-${index}`}
                  >
                    En savoir plus →
                  </Button>
                </CardContent>
              </Card>
            );
          })}

          {/* Premium Service Highlight */}
          <Card className="bg-gradient-to-br from-primary-green to-secondary-blue text-white group hover:shadow-xl transition-shadow" data-testid="premium-service-card">
            <CardContent className="p-8 text-center">
              <Star className="text-4xl mb-4 text-accent-orange mx-auto" size={48} />
              <h3 className="text-xl font-poppins font-semibold mb-4">Service Premium</h3>
              <p className="mb-6">
                Découvrez notre gamme complète de services de rénovation et de finition
              </p>
              <Button 
                className="bg-white text-secondary-blue hover:bg-gray-100"
                onClick={handleViewAllServices}
                data-testid="button-view-all-services"
              >
                Voir Tous nos Services
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
