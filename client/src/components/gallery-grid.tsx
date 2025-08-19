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
  {
    src: gallery1,
    alt: "Services de plâtrage et tirage de joints - A&B PEINTURE"
  },
  {
    src: gallery2,
    alt: "Pose de carrelage professionnel - A&B PEINTURE"
  },
  {
    src: gallery3,
    alt: "Étapes de tirage de joints - A&B PEINTURE"
  },
  {
    src: gallery4,
    alt: "Rénovation intérieure - A&B PEINTURE"
  },
  {
    src: gallery5,
    alt: "Pose de carrelage de salle de bains - A&B PEINTURE"
  },
  {
    src: gallery6,
    alt: "Peinture intérieure professionnelle - A&B PEINTURE"
  },
  {
    src: gallery7,
    alt: "Travaux de peinture résidentielle - A&B PEINTURE"
  },
  {
    src: gallery8,
    alt: "Finitions de peinture intérieure - A&B PEINTURE"
  },
  {
    src: gallery9,
    alt: "Projet de rénovation complet - A&B PEINTURE"
  },
  {
    src: gallery10,
    alt: "Peinture commerciale - A&B PEINTURE"
  },
  {
    src: gallery11,
    alt: "Services de peinture extérieure - A&B PEINTURE"
  },
  {
    src: gallery12,
    alt: "Rénovation et peinture - A&B PEINTURE"
  },
  {
    src: gallery13,
    alt: "Projet de peinture résidentielle - A&B PEINTURE"
  },
  {
    src: gallery14,
    alt: "Finitions professionnelles - A&B PEINTURE"
  },
  {
    src: gallery15,
    alt: "Travaux de peinture intérieure - A&B PEINTURE"
  },
  {
    src: gallery16,
    alt: "Projet de rénovation - A&B PEINTURE"
  }
];

interface GalleryGridProps {
  showAll?: boolean;
}

export default function GalleryGrid({ showAll = false }: GalleryGridProps) {
  const imagesToShow = showAll ? portfolioImages : portfolioImages.slice(0, 6);

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
