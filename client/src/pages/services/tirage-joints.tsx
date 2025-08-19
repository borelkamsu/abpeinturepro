import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Wrench, CheckCircle, Shield, Award, Clock, Star } from "lucide-react";

export default function TirageJoints() {
  const [, setLocation] = useLocation();

  const handleContact = () => {
    setLocation("/contact");
  };

  const serviceFeatures = [
    {
      icon: Wrench,
      title: "Technique Professionnelle",
      description: "Maîtrise parfaite des techniques de tirage de joints modernes"
    },
    {
      icon: Shield,
      title: "Finition Durable",
      description: "Joints résistants aux fissures et à l'usure du temps"
    },
    {
      icon: Award,
      title: "Résultat Impeccable",
      description: "Surfaces parfaitement lisses prêtes pour la peinture"
    }
  ];

  const processSteps = [
    {
      title: "Préparation des Surfaces",
      description: "Nettoyage et inspection de tous les joints de gypse",
      details: ["Dépoussiérage complet", "Vérification de la solidité", "Protection des surfaces adjacentes"]
    },
    {
      title: "Application du Composé",
      description: "Pose experte du composé à joints en plusieurs couches",
      details: ["Première couche de base", "Couches de finition", "Respect des temps de séchage"]
    },
    {
      title: "Ponçage de Finition",
      description: "Ponçage minutieux pour obtenir une surface parfaitement lisse",
      details: ["Ponçage progressif", "Élimination des imperfections", "Nettoyage final"]
    },
    {
      title: "Préparation Peinture",
      description: "Surface prête à recevoir l'apprêt et la peinture finale",
      details: ["Vérification de la planéité", "Application d'apprêt si nécessaire", "Protection finale"]
    }
  ];

  const applications = [
    "Construction neuve",
    "Rénovation de maisons",
    "Réparation de fissures",
    "Finition de sous-sols",
    "Ajout de cloisons",
    "Réparations suite à dégâts d'eau"
  ];

  const qualityStandards = [
    "Joints invisibles une fois peints",
    "Résistance aux mouvements de structure",
    "Finition lisse et uniforme",
    "Adhérence parfaite sur gypse",
    "Préparation optimale pour peinture",
    "Respect des normes de construction"
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="tirage-joints-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-blue to-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6" data-testid="service-title">
                Tirage des Joints
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Finition parfaite des joints de gypse pour des surfaces lisses 
                et prêtes à recevoir la peinture. Expertise garantie par "Les Murs de Augustin".
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
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Artisan effectuant le tirage de joints"
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
              Notre Expertise en Tirage de Joints
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Des techniques professionnelles pour des finitions parfaites
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow" data-testid={`feature-${index}`}>
                  <CardContent className="p-8">
                    <IconComponent className="text-primary-green mx-auto mb-6" size={48} />
                    <h3 className="text-xl font-poppins font-semibold text-secondary-blue mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-neutral">
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
              Notre Processus de Travail
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Une méthode éprouvée en 4 étapes pour des résultats parfaits
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-testid={`step-${index}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary-green text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-poppins font-semibold text-secondary-blue">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-neutral mb-6">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="text-primary-green" size={20} />
                        <span className="text-neutral">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <img 
                        src={`https://images.unsplash.com/photo-150430765125${index + 4}-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400`}
                        alt={`Étape ${index + 1}: ${step.title}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white" data-testid="applications-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-4">
              Applications de notre Service
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Le tirage de joints est essentiel pour de nombreux projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((application, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`application-${index}`}>
                <CardContent className="p-4 flex items-center space-x-3">
                  <CheckCircle className="text-primary-green" size={24} />
                  <span className="text-neutral font-medium">{application}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 bg-primary-green text-white" data-testid="quality-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold mb-6">
                Standards de Qualité
              </h2>
              <p className="text-xl mb-8">
                Nous respectons les plus hauts standards de l'industrie pour 
                vous garantir des finitions parfaites et durables.
              </p>
              <div className="space-y-4">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`quality-${index}`}>
                    <Star className="text-accent-orange" size={24} />
                    <span className="font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="bg-white bg-opacity-10 border-0">
                <CardContent className="p-8 text-center">
                  <Clock className="text-accent-orange mx-auto mb-6" size={48} />
                  <h3 className="text-2xl font-poppins font-semibold mb-4">
                    Garantie de Satisfaction
                  </h3>
                  <p className="mb-6">
                    Nous garantissons la qualité de nos travaux de tirage de joints. 
                    Si vous n'êtes pas satisfait, nous corrigeons gratuitement.
                  </p>
                  <Button 
                    className="bg-white text-primary-green hover:bg-gray-100"
                    onClick={handleContact}
                    data-testid="button-guarantee"
                  >
                    En Savoir Plus
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-blue text-white" data-testid="cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-poppins font-bold mb-6">
            Besoin de Tirage de Joints Professionnel?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir des surfaces parfaitement lisses et prêtes à peindre
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary-green hover:bg-primary-green/90 px-8 py-4 text-lg"
              onClick={handleContact}
              data-testid="button-contact-cta"
            >
              Obtenir un Devis
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-secondary-blue px-8 py-4 text-lg"
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