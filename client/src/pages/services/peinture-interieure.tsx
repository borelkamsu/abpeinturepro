import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { CheckCircle, Home, Palette, Shield, Clock, Star } from "lucide-react";
import profileImage from "../../assets/images/profil.png";

export default function PeintureInterieure() {
  const [, setLocation] = useLocation();

  const handleContact = () => {
    setLocation("/contact");
  };

  const features = [
    "Préparation minutieuse des surfaces",
    "Choix expert des couleurs et finitions", 
    "Peintures écologiques de qualité supérieure",
    "Protection complète de vos meubles",
    "Nettoyage complet après travaux",
    "Garantie satisfaction 100%"
  ];

  const processSteps = [
    {
      title: "Évaluation Gratuite",
      description: "Visite de votre domicile pour évaluer vos besoins et vous conseiller"
    },
    {
      title: "Préparation",
      description: "Nettoyage, ponçage et préparation soignée de toutes les surfaces"
    },
    {
      title: "Application",
      description: "Peinture professionnelle avec techniques et outils spécialisés"
    },
    {
      title: "Finition",
      description: "Inspection finale et nettoyage complet pour un résultat parfait"
    }
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="peinture-interieure-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-blue to-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6" data-testid="service-title">
                Peinture Résidentielle Intérieure
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Transformez vos espaces de vie avec notre expertise en peinture intérieure. 
                Finitions impeccables garanties par "Les Murs de Augustin".
              </p>
              <Button 
                size="lg"
                className="bg-primary-green hover:bg-primary-green/90 px-8 py-4 text-lg"
                onClick={handleContact}
                data-testid="button-get-quote"
              >
                Obtenir un Devis Gratuit
              </Button>
            </div>
            <div>
              <img 
                src={profileImage}
                alt="Peintre professionnel au travail"
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
              Ce Qui Nous Distingue
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Notre approche professionnelle garantit des résultats exceptionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`feature-${index}`}>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="text-primary-green mx-auto mb-4" size={32} />
                  <p className="text-neutral font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50" data-testid="process-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Une méthode éprouvée pour des résultats parfaits à chaque fois
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`process-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-secondary-blue mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white" data-testid="gallery-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets de peinture intérieure récents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
              "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
              "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
              "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
            ].map((src, index) => (
              <div key={index} className="group cursor-pointer" data-testid={`gallery-image-${index}`}>
                <img 
                  src={src}
                  alt={`Projet peinture intérieure ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-white" data-testid="cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-poppins font-bold mb-6">
            Prêt à Transformer Votre Intérieur?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary-green hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={handleContact}
              data-testid="button-contact-cta"
            >
              Demander un Devis
            </Button>
            <Button 
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary-green px-8 py-4 text-lg"
              onClick={() => setLocation("/services")}
              data-testid="button-all-services"
            >
              Voir Tous nos Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}