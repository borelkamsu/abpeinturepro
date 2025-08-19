import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { CheckCircle, Layers, Sparkles, Shield, Clock, Award } from "lucide-react";

export default function RevetementsMuraux() {
  const [, setLocation] = useLocation();

  const handleContact = () => {
    setLocation("/contact");
  };

  const services = [
    {
      icon: Sparkles,
      title: "Nettoyage Professionnel",
      description: "Préparation minutieuse des surfaces pour une adhésion parfaite"
    },
    {
      icon: Layers,
      title: "Pose Experte",
      description: "Installation précise de tous types de revêtements muraux"
    },
    {
      icon: Shield,
      title: "Finition Protectrice",
      description: "Application de traitements pour une durabilité maximale"
    }
  ];

  const materials = [
    "Papier peint traditionnel et moderne",
    "Revêtements vinyle et PVC",
    "Tissus muraux haut de gamme",
    "Revêtements texturés et 3D",
    "Panneaux décoratifs",
    "Lambris et boiseries"
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="revetements-muraux-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-blue to-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6" data-testid="service-title">
                Nettoyage et Pose de Revêtements Muraux
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Expertise complète en revêtements muraux : du nettoyage professionnel 
                à la pose experte pour un rendu exceptionnel.
              </p>
              <Button 
                size="lg"
                className="bg-primary-green hover:bg-primary-green/90 px-8 py-4 text-lg"
                onClick={handleContact}
                data-testid="button-get-quote"
              >
                Demander un Devis
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professionnel installant des revêtements muraux"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" data-testid="services-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-4">
              Nos Services Spécialisés
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Une approche complète pour tous vos besoins en revêtements muraux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow" data-testid={`service-${index}`}>
                  <CardContent className="p-8">
                    <IconComponent className="text-primary-green mx-auto mb-6" size={48} />
                    <h3 className="text-xl font-poppins font-semibold text-secondary-blue mb-4">
                      {service.title}
                    </h3>
                    <p className="text-neutral">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-gray-50" data-testid="materials-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-4">
              Types de Revêtements
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Nous travaillons avec tous les types de revêtements muraux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`material-${index}`}>
                <CardContent className="p-6 flex items-center space-x-4">
                  <CheckCircle className="text-primary-green" size={24} />
                  <span className="text-neutral font-medium">{material}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white" data-testid="process-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-6">
                Notre Méthode de Travail
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-blue mb-2">Analyse et Préparation</h4>
                    <p className="text-neutral">Évaluation de l'état des murs et préparation complète des surfaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-blue mb-2">Nettoyage Spécialisé</h4>
                    <p className="text-neutral">Nettoyage professionnel avec produits adaptés à chaque surface</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-blue mb-2">Pose Professionnelle</h4>
                    <p className="text-neutral">Installation experte avec techniques et outils spécialisés</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-blue mb-2">Finition et Contrôle</h4>
                    <p className="text-neutral">Finitions parfaites et contrôle qualité pour un résultat impeccable</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1463620695885-8a91d87c53d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Artisan au travail sur revêtements"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-white" data-testid="cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-poppins font-bold mb-6">
            Transformez Vos Murs Aujourd'hui
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Profitez de notre expertise en revêtements muraux pour créer des espaces uniques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary-green hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={handleContact}
              data-testid="button-contact-cta"
            >
              Obtenir un Devis Gratuit
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-green px-8 py-4 text-lg"
              onClick={() => setLocation("/services")}
              data-testid="button-all-services"
            >
              Découvrir Tous nos Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}