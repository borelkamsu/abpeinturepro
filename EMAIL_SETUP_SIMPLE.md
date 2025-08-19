# Configuration Email Simple pour A&B PEINTURE

## 📧 Solution Email Simplifiée

Cette approche utilise des services webhook gratuits pour envoyer les emails automatiquement.

## 🚀 Options Recommandées

### Option 1 : Formspree (Recommandé)
1. Allez sur [formspree.io](https://formspree.io)
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Copiez l'URL du webhook (ex: `https://formspree.io/f/xaybzwkd`)

### Option 2 : Netlify Forms
1. Si vous déployez sur Netlify, les formulaires sont automatiques
2. Pas de configuration supplémentaire nécessaire

### Option 3 : Webhook.site (Test)
1. Allez sur [webhook.site](https://webhook.site)
2. Copiez l'URL unique générée
3. Parfait pour tester

## ⚙️ Configuration

### Pour le développement local :
1. Ouvrez le fichier `.env`
2. Ajoutez votre webhook :
```env
EMAIL_WEBHOOK_URL=https://formspree.io/f/votre-form-id
```

### Pour Render (Production) :
1. Allez sur votre dashboard Render
2. Cliquez sur "Environment"
3. Ajoutez : `EMAIL_WEBHOOK_URL` = votre-url-webhook

## 🎯 Fonctionnement

- ✅ **Formulaire soumis** → Données envoyées au webhook
- ✅ **Webhook reçoit** → Envoie un email à votre adresse
- ✅ **Vous recevez** → Notification avec tous les détails
- ✅ **Client reçoit** → Confirmation automatique (selon le service)

## 📋 Informations envoyées

- Nom complet du client
- Email du client
- Téléphone (si fourni)
- Type de service demandé
- Description détaillée du projet
- Date et heure de soumission

## 🆓 Services Gratuits

- **Formspree** : 50 soumissions/mois gratuites
- **Netlify Forms** : 100 soumissions/mois gratuites
- **Webhook.site** : Illimité (pour test)

## 🚀 Déploiement

1. Configurez votre webhook
2. Ajoutez l'URL dans les variables d'environnement
3. Redéployez sur Render
4. Testez le formulaire

## ✅ Avantages

- ✅ **Simple** : Pas de configuration SMTP complexe
- ✅ **Fiable** : Services professionnels
- ✅ **Gratuit** : Pour commencer
- ✅ **Sécurisé** : Pas de mots de passe à gérer

---

**A&B PEINTURE** - "PASSION & ESPACE DE VIE" 🎨
