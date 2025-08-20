import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Lightbulb, Palette, Users, Award, CheckCircle, Star } from "lucide-react";
import profileImage from "../../assets/images/profil.png";

export default function ConseilExpert() {
  const [, setLocation] = useLocation();

  const handleContact = () => {
    setLocation("/contact");
  };

  const consultingServices = [
    {
      icon: Palette,
      title: "Choix des Couleurs",
      description: "Sélection experte des couleurs selon vos goûts et l'éclairage naturel"
    },
    {
      icon: Award,
      title: "Finitions Adaptées",
      description: "Recommandation des meilleures finitions selon l'usage de chaque pièce"
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Conseil individualisé adapté à votre style de vie et budget"
    }
  ];

  const expertiseAreas = [
    "Harmonisation des couleurs",
    "Choix de finitions (mat, satin, brillant)",
    "Techniques de peinture spécialisées",
    "Coordination avec votre décoration",
    "Optimisation de la luminosité",
    "Tendances et styles contemporains",
    "Solutions pour pièces difficiles",
    "Conseils d'entretien durable"
  ];

  const benefits = [
    {
      title: "Évitez les Erreurs Coûteuses",
      description: "Nos conseils vous évitent les mauvais choix et les retouches"
    },
    {
      title: "Résultat Professionnel",
      description: "Bénéficiez de l'œil expert d'Augustin pour un rendu harmonieux"
    },
    {
      title: "Gain de Temps",
      description: "Trouvez rapidement les bonnes solutions grâce à notre expérience"
    },
    {
      title: "Satisfaction Garantie",
      description: "Un conseil personnalisé pour un résultat qui vous ressemble"
    }
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="conseil-expert-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-blue to-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6" data-testid="service-title">
                Conseil Expert
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Accompagnement personnalisé par Augustin dans le choix des couleurs, 
                finitions et techniques adaptées à vos besoins spécifiques.
              </p>
              <Button 
                size="lg"
                className="bg-primary-green hover:bg-primary-green/90 px-8 py-4 text-lg"
                onClick={handleContact}
                data-testid="button-get-consultation"
              >
                Réserver une Consultation
              </Button>
            </div>
            <div>
              <img 
                src={profileImage}
                alt="Augustin - Expert en conseil peinture"
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
              Nos Services de Conseil
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              L'expertise d'Augustin au service de vos projets de décoration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => {
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

      {/* Expertise Areas Section */}
      <section className="py-20 bg-gray-50" data-testid="expertise-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-4">
              Domaines d'Expertise
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Augustin vous guide dans tous les aspects de votre projet peinture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`expertise-${index}`}>
                <CardContent className="p-4 flex items-center space-x-3">
                  <CheckCircle className="text-primary-green" size={20} />
                  <span className="text-neutral font-medium text-sm">{area}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white" data-testid="benefits-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-4">
              Pourquoi Faire Appel à un Expert
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Les avantages d'un conseil professionnel pour votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`benefit-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold text-secondary-blue mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary-green text-white" data-testid="process-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold mb-4">
              Comment Se Déroule une Consultation
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Un processus structuré pour vous donner les meilleurs conseils
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Analyse des Lieux",
                description: "Visite et évaluation de vos espaces et de l'éclairage"
              },
              {
                step: "2", 
                title: "Écoute de vos Besoins",
                description: "Discussion sur vos goûts, style de vie et budget"
              },
              {
                step: "3",
                title: "Propositions Adaptées",
                description: "Présentation de solutions personnalisées"
              },
              {
                step: "4",
                title: "Plan d'Action",
                description: "Remise d'un plan détaillé avec recommandations"
              }
            ].map((process, index) => (
              <Card key={index} className="bg-white bg-opacity-10 border-0 text-center" data-testid={`process-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent-orange text-secondary-blue rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-poppins font-semibold mb-3">
                    {process.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" data-testid="testimonials-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Témoignages sur nos services de conseil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Augustin a su comprendre exactement ce que nous voulions. Ses conseils ont transformé notre salon!",
                author: "Marie-Claire D.",
                location: "Charlesbourg"
              },
              {
                text: "Grâce aux conseils d'Augustin, nous avons évité plusieurs erreurs coûteuses. Un vrai professionnel!",
                author: "Jean-François L.",
                location: "Québec"
              },
              {
                text: "Son expertise en couleurs est remarquable. Il a créé une harmonie parfaite dans toute la maison.",
                author: "Sophie R.",
                location: "Sainte-Foy"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6 text-center">
                  <Star className="text-accent-orange mx-auto mb-4" size={24} />
                  <p className="text-neutral mb-4 italic">"{testimonial.text}"</p>
                  <h4 className="font-semibold text-secondary-blue">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-blue text-white" data-testid="cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-poppins font-bold mb-6">
            Prêt à Bénéficier de Nos Conseils d'Expert?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez Augustin aujourd'hui pour une consultation personnalisée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary-green hover:bg-primary-green/90 px-8 py-4 text-lg"
              onClick={handleContact}
              data-testid="button-contact-cta"
            >
              Réserver une Consultation
            </Button>
            <Button 
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-secondary-blue px-8 py-4 text-lg"
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