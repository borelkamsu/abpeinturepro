import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Clock, Leaf, Handshake, Phone, Mail, MapPin, CheckCircle, Star, Users, Target } from "lucide-react";
import { useLocation } from "wouter";
import profileImage from "../assets/images/profil.png";

export default function About() {
  const [, setLocation] = useLocation();

  const handleContact = () => {
    setLocation("/contact");
  };

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Nous nous engageons à livrer des résultats exceptionnels sur chaque projet"
    },
    {
      icon: Handshake,
      title: "Intégrité",
      description: "Transparence et honnêteté dans toutes nos relations clients"
    },
    {
      icon: Leaf,
      title: "Durabilité",
      description: "Utilisation de matériaux écologiques et pratiques responsables"
    },
    {
      icon: Users,
      title: "Service Client",
      description: "Satisfaction client au cœur de toutes nos décisions"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projets Réalisés" },
    { number: "98%", label: "Clients Satisfaits" },
    { number: "10+", label: "Années d'Expérience" },
    { number: "24h", label: "Temps de Réponse" }
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-blue to-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6" data-testid="about-hero-title">
            À Propos d'AB-Peinture Pro
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            "Les Murs de Augustin" - Une histoire de passion, d'expertise et d'engagement envers l'excellence
          </p>
        </div>
      </section>

      {/* Owner Story */}
      <section className="py-20 bg-white" data-testid="owner-story">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-6">
                Mbe nde Augustin
              </h2>
              <h3 className="text-xl text-primary-green font-semibold mb-4">
                Fondateur et Propriétaire
              </h3>
              <p className="text-lg text-neutral mb-6 leading-relaxed">
                Passionné par l'art de la transformation des espaces, Augustin a fondé AB-Peinture Pro 
                avec une vision claire : offrir des services de peinture et de rénovation qui dépassent 
                les attentes de ses clients.
              </p>
              <p className="text-lg text-neutral mb-6 leading-relaxed">
                Fort de nombreuses années d'expérience dans le domaine, il a développé une expertise 
                reconnue dans la région de Québec. Son approche personnalisée et son attention 
                méticuleuse aux détails font de chaque projet une réussite.
              </p>
              <p className="text-lg text-neutral mb-8 leading-relaxed">
                La devise "Les Murs de Augustin" n'est pas qu'un slogan - c'est l'engagement personnel 
                d'Augustin envers chaque client de traiter votre projet comme s'il s'agissait de sa propre maison.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary-green hover:bg-primary-green/90"
                  onClick={handleContact}
                  data-testid="button-contact-augustin"
                >
                  Contacter Augustin
                </Button>
                <Button 
                  className="border-primary-green bg-transparent text-primary-green hover:bg-primary-green hover:text-white"
                  onClick={() => setLocation("/services")}
                  data-testid="button-view-services"
                >
                  Voir nos Services
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src={profileImage}
                alt="Mbe nde Augustin - Fondateur AB-Peinture Pro"
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50" data-testid="company-values">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary-blue mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Les principes qui guident notre travail et notre relation avec nos clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`value-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-secondary-blue mb-3">
                      {value.title}
                    </h3>
                    <p className="text-neutral">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary-green text-white" data-testid="achievements">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Des chiffres qui témoignent de notre engagement et de notre expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center" data-testid={`achievement-${index}`}>
                <div className="text-5xl font-poppins font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-xl">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white" data-testid="why-choose-us">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-6">
                Pourquoi Choisir AB-Peinture Pro?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary-green mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary-blue mb-2">Expertise Reconnue</h4>
                    <p className="text-neutral">Des années d'expérience et une formation continue pour rester à la pointe des techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary-green mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary-blue mb-2">Matériaux de Qualité</h4>
                    <p className="text-neutral">Utilisation exclusive de peintures et matériaux haut de gamme pour une durabilité maximale</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary-green mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary-blue mb-2">Service Personnalisé</h4>
                    <p className="text-neutral">Chaque projet est unique et bénéficie d'une approche sur mesure</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary-green mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary-blue mb-2">Garantie Satisfaction</h4>
                    <p className="text-neutral">Nous ne considérons le travail terminé que lorsque vous êtes entièrement satisfait</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-primary-green hover:bg-primary-green/90"
                onClick={handleContact}
                data-testid="button-start-project"
              >
                Commencer Votre Projet
              </Button>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Équipe AB-Peinture Pro au travail"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-secondary-blue text-white" data-testid="contact-info">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppins font-bold mb-4">
              Contactez Augustin
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Prêt à discuter de votre projet? Augustin est à votre écoute
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white bg-opacity-10 border-0 text-center">
              <CardContent className="p-6">
                <Phone className="text-primary-green mx-auto mb-4" size={32} />
                <h4 className="font-semibold text-lg mb-2">Téléphone</h4>
                <p className="text-gray-300">(418) 473-6433</p>
                <p className="text-sm text-gray-400 mt-1">Lun-Ven: 8h00-18h00</p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-0 text-center">
              <CardContent className="p-6">
                <Mail className="text-primary-green mx-auto mb-4" size={32} />
                <h4 className="font-semibold text-lg mb-2">Email</h4>
                <p className="text-gray-300">augustinmbende82@yahoo.com</p>
                <p className="text-sm text-gray-400 mt-1">Réponse sous 24h</p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-0 text-center">
              <CardContent className="p-6">
                <MapPin className="text-primary-green mx-auto mb-4" size={32} />
                <h4 className="font-semibold text-lg mb-2">Adresse</h4>
                <p className="text-gray-300">
                  3637 rue des sureaux<br/>
                  Charlesbourg, Québec<br/>
                  G1G1Z7
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary-green hover:bg-primary-green/90 px-8 py-4 text-lg"
              onClick={handleContact}
              data-testid="button-contact-now"
            >
              Nous Contacter Maintenant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
