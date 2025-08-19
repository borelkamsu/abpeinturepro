# AbPeinturePro 🎨

Site web professionnel pour une entreprise de peinture et rénovation au Canada.

## 🚀 Déploiement

Ce projet est configuré pour être déployé sur [Render](https://render.com).

### Déploiement automatique

1. Connectez votre repository GitHub à Render
2. Render détectera automatiquement le fichier `render.yaml` et configurera le déploiement
3. Le site sera accessible à l'URL fournie par Render

### Variables d'environnement

Les variables d'environnement suivantes sont configurées automatiquement :
- `NODE_ENV=production` (défini dans render.yaml)
- `PORT` (assigné automatiquement par Render)

## 🛠️ Développement local

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/borelkamsu/abpeinturepro.git
cd abpeinturepro

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5000`

### Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm start` - Lance l'application en production
- `npm run check` - Vérifie les types TypeScript
- `npm run db:push` - Pousse les changements de base de données

## 📁 Structure du projet

```
AbPeinturePro/
├── client/                 # Application React frontend
│   ├── src/
│   │   ├── components/     # Composants React
│   │   ├── pages/         # Pages de l'application
│   │   └── hooks/         # Hooks personnalisés
│   └── index.html
├── server/                # Serveur Express backend
│   ├── index.ts          # Point d'entrée du serveur
│   ├── routes.ts         # Routes API
│   └── storage.ts        # Gestion du stockage
├── shared/               # Code partagé entre client et serveur
│   └── schema.ts         # Schémas de données
└── dist/                 # Fichiers de build (généré)
```

## 🎨 Technologies utilisées

### Frontend
- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Radix UI** - Composants d'interface
- **Framer Motion** - Animations
- **Wouter** - Routage

### Backend
- **Express.js** - Framework serveur
- **Drizzle ORM** - ORM pour base de données
- **Passport.js** - Authentification
- **WebSocket** - Communication temps réel

### Outils
- **Vite** - Build tool et dev server
- **ESBuild** - Bundler pour la production
- **PostCSS** - Traitement CSS

## 📱 Fonctionnalités

- **Page d'accueil** - Présentation de l'entreprise
- **Services** - Catalogue des services de peinture
- **Galerie** - Portfolio des réalisations
- **Contact** - Formulaire de contact
- **À propos** - Informations sur l'entreprise
- **Estimation gratuite** - Demande de devis

## 🔧 Configuration

### Base de données

Le projet utilise Drizzle ORM avec une base de données compatible PostgreSQL. Pour configurer la base de données :

1. Créez une base de données PostgreSQL
2. Configurez la variable d'environnement `DATABASE_URL`
3. Exécutez `npm run db:push` pour créer les tables

### Variables d'environnement

```env
NODE_ENV=production
# PORT est assigné automatiquement par Render
DATABASE_URL=postgresql://user:password@host:port/database
```

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails.

## 👥 Contact

Pour toute question concernant ce projet, contactez l'équipe de développement.

---

**AbPeinturePro** - Votre partenaire peinture au Canada 🇨🇦
