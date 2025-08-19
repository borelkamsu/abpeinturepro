import HeroSection from "@/components/hero-section";
import ServicesShowcase from "@/components/services-showcase";
import GalleryGrid from "@/components/gallery-grid";
import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Clock, Leaf, Handshake, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import profileImage from "../assets/images/profil.png";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleViewFullGallery = () => {
    setLocation("/gallery");
  };

  return (
    <div className="min-h-screen" data-testid="home-page">
      <HeroSection />
      <ServicesShowcase />
      
      {/* About Section */}
      <section className="py-20 bg-gray-50" data-testid="about-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary-blue mb-6">
                À Propos d'AB-Peinture Pro
              </h2>
              <p className="text-lg text-neutral mb-6 leading-relaxed">
                Dirigée par <strong className="text-secondary-blue">Mbe nde Augustin</strong>, AB-Peinture Pro est votre partenaire de confiance 
                pour tous vos projets de peinture et de rénovation à Québec. Avec des années d'expérience 
                et un engagement envers l'excellence, nous transformons vos espaces avec passion et professionnalisme.
              </p>
              <p className="text-lg text-neutral mb-8 leading-relaxed">
                Notre devise "Les Murs de Augustin" reflète notre approche personnalisée et notre attention 
                aux détails. Chaque projet est unique et mérite une solution sur mesure.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-blue">Qualité Garantie</h4>
                    <p className="text-neutral text-sm">Finitions impeccables</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-blue">Respect des Délais</h4>
                    <p className="text-neutral text-sm">Projets livrés à temps</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center">
                    <Leaf className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-blue">Éco-responsable</h4>
                    <p className="text-neutral text-sm">Peintures écologiques</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-blue rounded-full flex items-center justify-center">
                    <Handshake className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-blue">Service Client</h4>
                    <p className="text-neutral text-sm">Satisfaction garantie</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src={profileImage}
                alt="Mbe nde Augustin - Propriétaire AB-Peinture Pro"
                className="rounded-xl shadow-lg w-full"
              />
              
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-semibold text-secondary-blue mb-4">Nos Coordonnées</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3" data-testid="contact-address">
                      <MapPin className="text-primary-green" size={20} />
                      <span className="text-neutral">3637 rue des sureaux, Charlesbourg, Québec G1G1Z7</span>
                    </div>
                    <div className="flex items-center space-x-3" data-testid="contact-phone">
                      <Phone className="text-primary-green" size={20} />
                      <span className="text-neutral">(418) 473-6433</span>
                    </div>
                    <div className="flex items-center space-x-3" data-testid="contact-email">
                      <Mail className="text-primary-green" size={20} />
                      <span className="text-neutral">augustinmbende82@yahoo.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white" data-testid="gallery-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary-blue mb-4">
              Galerie de nos Réalisations
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets récents et laissez-vous inspirer par notre savoir-faire
            </p>
          </div>

          <GalleryGrid />
          
          <div className="text-center mt-12">
            <Button 
              className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-4 text-lg font-semibold transition-all"
              onClick={handleViewFullGallery}
              data-testid="button-view-full-gallery"
            >
              Voir Plus de Réalisations
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary-blue text-white" data-testid="contact-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Prêt à transformer vos espaces? Obtenez votre devis gratuit dès aujourd'hui
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8">
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-poppins font-semibold mb-6">Informations de Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Adresse</h4>
                      <p className="text-gray-300">
                        3637 rue des sureaux<br/>
                        Charlesbourg, Québec<br/>
                        G1G1Z7
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Téléphone</h4>
                      <p className="text-gray-300">(418) 473-6433</p>
                      <p className="text-sm text-gray-400">Lun-Ven: 8h00-18h00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Email</h4>
                      <p className="text-gray-300">augustinmbende82@yahoo.com</p>
                      <p className="text-sm text-gray-400">Réponse sous 24h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white bg-opacity-10 border-0">
                <CardContent className="p-6">
                  <h4 className="font-poppins font-semibold text-lg mb-4">Pourquoi Choisir AB-Peinture Pro?</h4>
                  <ul className="space-y-3 text-gray-300">
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
              
              <div className="text-center">
                <p className="text-xl font-poppins font-semibold text-primary-green mb-2">
                  Urgence 24/7
                </p>
                <p className="text-gray-300">
                  Pour les projets urgents, n'hésitez pas à nous appeler
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
