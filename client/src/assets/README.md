# Dossier Assets - A&B PEINTURE

Ce dossier contient tous les assets (images, icônes, etc.) utilisés dans l'application A&B PEINTURE.

## 📁 Structure recommandée

```
assets/
├── images/          # Images générales (photos, illustrations)
├── icons/           # Icônes et logos
├── backgrounds/     # Images de fond
└── gallery/         # Images de la galerie
```

## 🎨 Utilisation

### Images
- **Format recommandé** : WebP, PNG, JPG
- **Optimisation** : Compresser les images pour le web
- **Nommage** : Utiliser des noms descriptifs en kebab-case
  - Exemple : `hero-background.jpg`, `paint-brushes.webp`

### Icônes
- **Format recommandé** : SVG, PNG
- **Taille** : 16px, 24px, 32px, 48px
- **Nommage** : `icon-[nom].svg`

## 📝 Exemples d'import

```typescript
// Import d'une image
import heroImage from '../assets/images/hero-background.jpg';

// Import d'une icône
import paintIcon from '../assets/icons/icon-paint.svg';
```

## 🔧 Optimisation

- Utiliser des formats modernes (WebP)
- Compresser les images
- Utiliser des tailles appropriées
- Considérer le lazy loading pour les images

---

**A&B PEINTURE** - "PASSION & ESPACE DE VIE" 🎨
