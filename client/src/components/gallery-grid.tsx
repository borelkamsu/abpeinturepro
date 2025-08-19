// Import des images de la galerie
import gallery1 from "../assets/gallery/services-platrage-tirage-de-joints_stge0r.jpg";
import gallery2 from "../assets/gallery/pose-de-carrelage.jpeg";
import gallery3 from "../assets/gallery/etapes-tirage-de-joints.jpg";
import gallery4 from "../assets/gallery/1394668902.jpg";
import gallery5 from "../assets/gallery/2020-05-Poser-du-carrelage-de-salle-de-bains-2.jpg";
import gallery6 from "../assets/gallery/istockphoto-1384317531-612x612.jpg";
import gallery7 from "../assets/gallery/pexels-photo-2293822.jpeg";
import gallery8 from "../assets/gallery/pexels-photo-5799375.jpeg";
import gallery9 from "../assets/gallery/pexels-photo-5853925.jpeg";
import gallery10 from "../assets/gallery/pexels-photo-5691694.jpeg";
import gallery11 from "../assets/gallery/pexels-photo-5682313.jpeg";
import gallery12 from "../assets/gallery/pexels-photo-7896639.jpeg";
import gallery13 from "../assets/gallery/pexels-photo-4993081.jpeg";
import gallery14 from "../assets/gallery/pexels-photo-7217924.jpeg";
import gallery15 from "../assets/gallery/pexels-photo-5799046.jpeg";
import gallery16 from "../assets/gallery/pexels-photo-5481512.jpeg";

const portfolioImages = [
  // Peinture Intérieure
  {
    src: gallery6,
    alt: "Peinture intérieure professionnelle - Salon moderne",
    category: "interior"
  },
  {
    src: gallery7,
    alt: "Travaux de peinture résidentielle - Chambre élégante",
    category: "interior"
  },
  {
    src: gallery8,
    alt: "Finitions de peinture intérieure - Cuisine moderne",
    category: "interior"
  },
  {
    src: gallery10,
    alt: "Peinture commerciale - Bureau professionnel",
    category: "interior"
  },
  {
    src: gallery13,
    alt: "Projet de peinture résidentielle - Salle à manger",
    category: "interior"
  },
  {
    src: gallery14,
    alt: "Finitions professionnelles - Salon contemporain",
    category: "interior"
  },
  {
    src: gallery15,
    alt: "Travaux de peinture intérieure - Chambre d'enfant",
    category: "interior"
  },
  {
    src: gallery16,
    alt: "Projet de rénovation - Salle de bain moderne",
    category: "interior"
  },
  // Images supplémentaires pour peinture intérieure
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Peinture intérieure - Salon élégant avec couleurs modernes",
    category: "interior"
  },
  {
    src: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Peinture intérieure - Chambre principale avec finition parfaite",
    category: "interior"
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Peinture intérieure - Cuisine moderne avec peinture professionnelle",
    category: "interior"
  },
  
  // Peinture Extérieure
  {
    src: gallery11,
    alt: "Services de peinture extérieure - Façade résidentielle",
    category: "exterior"
  },
  {
    src: gallery12,
    alt: "Rénovation et peinture - Extérieur de maison",
    category: "exterior"
  },
  // Images supplémentaires pour peinture extérieure
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Peinture extérieure - Façade de maison moderne",
    category: "exterior"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Peinture extérieure - Extérieur commercial professionnel",
    category: "exterior"
  },
  {
    src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Peinture extérieure - Maison résidentielle avec finition parfaite",
    category: "exterior"
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Peinture extérieure - Façade rénovée avec couleurs modernes",
    category: "exterior"
  },
  
  // Rénovation (autres services)
  {
    src: gallery1,
    alt: "Services de plâtrage et tirage de joints - A&B PEINTURE",
    category: "renovation"
  },
  {
    src: gallery2,
    alt: "Pose de carrelage professionnel - A&B PEINTURE",
    category: "renovation"
  },
  {
    src: gallery3,
    alt: "Étapes de tirage de joints - A&B PEINTURE",
    category: "renovation"
  },
  {
    src: gallery4,
    alt: "Rénovation intérieure - A&B PEINTURE",
    category: "renovation"
  },
  {
    src: gallery5,
    alt: "Pose de carrelage de salle de bains - A&B PEINTURE",
    category: "renovation"
  },
  {
    src: gallery9,
    alt: "Projet de rénovation complet - A&B PEINTURE",
    category: "renovation"
  }
];

interface GalleryGridProps {
  showAll?: boolean;
  category?: string;
}

export default function GalleryGrid({ showAll = false, category = "all" }: GalleryGridProps) {
  const filteredImages = category === "all" 
    ? portfolioImages 
    : portfolioImages.filter(image => image.category === category);
    
  const imagesToShow = showAll ? filteredImages : filteredImages.slice(0, 6);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="gallery-grid">
      {imagesToShow.map((image, index) => (
        <div key={index} className="group cursor-pointer" data-testid={`gallery-image-${index}`}>
          <img 
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
