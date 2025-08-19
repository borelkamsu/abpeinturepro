const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Salon moderne avec peinture professionnelle"
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Cuisine moderne avec finition peinture parfaite"
  },
  {
    src: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Chambre élégante avec peinture murale parfaite"
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Maison extérieure avec peinture professionnelle"
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Salle de bain moderne avec finition parfaite"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Espace commercial avec peinture professionnelle"
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
