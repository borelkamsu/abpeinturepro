import { useState } from "react";
import GalleryGrid from "@/components/gallery-grid";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const galleryCategories = [
  { id: "all", name: "Tous les Projets" },
  { id: "interior", name: "Peinture Intérieure" },
  { id: "exterior", name: "Peinture Extérieure" },
  { id: "renovation", name: "Rénovation" },
  { id: "commercial", name: "Commercial" }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [, setLocation] = useLocation();

  const handleContact = () => {
    setLocation("/contact");
  };

  return (
    <div className="min-h-screen pt-20" data-testid="gallery-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-blue to-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6" data-testid="gallery-hero-title">
            Galerie de nos Réalisations
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Découvrez nos projets récents et laissez-vous inspirer par notre savoir-faire exceptionnel
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b" data-testid="gallery-filters">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`
                  ${activeCategory === category.id 
                    ? "bg-primary-green hover:bg-primary-green/90" 
                    : "border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
                  }
                `}
                onClick={() => setActiveCategory(category.id)}
                data-testid={`filter-${category.id}`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50" data-testid="gallery-grid-section">
        <div className="container mx-auto px-4">
          <GalleryGrid showAll={true} category={activeCategory} />
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-white" data-testid="before-after-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary-blue mb-4">
              Avant / Après
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Voyez la transformation remarquable de nos projets
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-secondary-blue mb-4">
                Transformation Complète
              </h3>
              <p className="text-lg text-neutral mb-6 leading-relaxed">
                Chaque projet raconte une histoire de transformation. De l'évaluation initiale 
                à la finition finale, nous documentons chaque étape pour vous montrer 
                l'évolution remarquable de vos espaces.
              </p>
              <p className="text-lg text-neutral mb-8 leading-relaxed">
                Notre approche méticuleuse garantit non seulement un résultat esthétique 
                exceptionnel, mais aussi une durabilité qui résistera à l'épreuve du temps.
              </p>
              <Button 
                className="bg-primary-green hover:bg-primary-green/90"
                onClick={handleContact}
                data-testid="button-request-transformation"
              >
                Demander une Transformation
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-secondary-blue mb-2 text-center">Avant</h4>
                <img 
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                  alt="Avant rénovation"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-primary-green mb-2 text-center">Après</h4>
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                  alt="Après rénovation"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-green text-white" data-testid="testimonials-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              La satisfaction de nos clients est notre plus belle récompense
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center" data-testid="testimonial-1">
              <p className="text-lg mb-4 italic">
                "Augustin et son équipe ont transformé notre salon. Le résultat dépasse nos attentes!"
              </p>
              <h4 className="font-semibold">Marie L.</h4>
              <p className="text-sm opacity-80">Charlesbourg</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center" data-testid="testimonial-2">
              <p className="text-lg mb-4 italic">
                "Professionnel, ponctuel et d'une qualité irréprochable. Je recommande vivement!"
              </p>
              <h4 className="font-semibold">Jean-Pierre D.</h4>
              <p className="text-sm opacity-80">Québec</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center" data-testid="testimonial-3">
              <p className="text-lg mb-4 italic">
                "Un service exceptionnel du devis à la finition. Merci pour ce magnifique travail!"
              </p>
              <h4 className="font-semibold">Sophie M.</h4>
              <p className="text-sm opacity-80">Sainte-Foy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary-blue text-white" data-testid="gallery-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-poppins font-bold mb-6">
            Prêt à Créer Votre Propre Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et recevoir un devis personnalisé
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
              data-testid="button-services-cta"
            >
              Voir nos Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
