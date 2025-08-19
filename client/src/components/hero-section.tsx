import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import coverImage from "../assets/images/couverture.jpeg";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  const handleGetQuote = () => {
    setLocation("/contact");
  };

  const handleDiscoverServices = () => {
    setLocation("/services");
  };

  return (
    <section className="pt-20" data-testid="hero-section">
      <div className="relative min-h-screen flex items-center">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 45, 70, 0.7), rgba(27, 31, 42, 0.8)), url(${coverImage})`
          }}
        />
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6" data-testid="hero-title">
            Les Murs de <span className="text-primary-green">Augustin</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtitle">
            Transformons vos espaces avec la passion et l'expertise d'AB-Peinture Pro. 
            Votre vision, notre savoir-faire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105"
              onClick={handleGetQuote}
              data-testid="button-get-quote"
            >
              Obtenir un Devis Gratuit
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary-blue px-8 py-4 text-lg font-semibold transition-all"
              onClick={handleDiscoverServices}
              data-testid="button-discover-services"
            >
              Découvrir nos Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
