# Configuration Gmail SMTP pour A&B PEINTURE

## 📧 Configuration des emails automatiques

Ce guide vous explique comment configurer l'envoi automatique d'emails pour les demandes de devis.

### 🔐 Étape 1 : Activer l'authentification à 2 facteurs

1. Allez sur [myaccount.google.com](https://myaccount.google.com)
2. Cliquez sur "Sécurité"
3. Activez "La validation en 2 étapes" si ce n'est pas déjà fait

### 🔑 Étape 2 : Créer un mot de passe d'application

1. Toujours dans "Sécurité", cliquez sur "Mots de passe d'application"
2. Sélectionnez "Application" → "Autre (nom personnalisé)"
3. Entrez "A&B PEINTURE" comme nom
4. Cliquez sur "Générer"
5. **Copiez le mot de passe de 16 caractères** (ex: `abcd efgh ijkl mnop`)

### ⚙️ Étape 3 : Configurer les variables d'environnement

1. Ouvrez le fichier `.env` dans la racine du projet
2. Remplacez les valeurs par vos informations :

```env
NODE_ENV=development
PORT=5000

# Configuration Gmail SMTP
GMAIL_USER=votre-email@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

**⚠️ Important :**
- Utilisez votre vrai email Gmail
- Utilisez le mot de passe d'application (pas votre mot de passe Gmail normal)
- Ne partagez jamais ces informations

### 🚀 Étape 4 : Tester la configuration

1. Redémarrez le serveur : `npm run dev`
2. Allez sur `http://localhost:5000/contact`
3. Remplissez le formulaire de demande de devis
4. Vérifiez que vous recevez :
   - Un email de notification (à votre adresse Gmail)
   - Un email de confirmation (à l'adresse du client)

### 📧 Types d'emails envoyés

#### 1. Email de notification (pour vous)
- **Destinataire :** Votre email Gmail
- **Contenu :** Détails complets de la demande de devis
- **But :** Vous informer d'une nouvelle demande

#### 2. Email de confirmation (pour le client)
- **Destinataire :** Email du client
- **Contenu :** Confirmation de réception + prochaines étapes
- **But :** Rassurer le client et maintenir le professionnalisme

### 🔧 Configuration pour la production (Render)

Pour déployer sur Render, ajoutez ces variables d'environnement dans votre dashboard Render :

1. Allez sur votre service Render
2. Cliquez sur "Environment"
3. Ajoutez :
   - `GMAIL_USER` = votre-email@gmail.com
   - `GMAIL_APP_PASSWORD` = votre-mot-de-passe-d-application

### 🛠️ Dépannage

**Erreur "Invalid login" :**
- Vérifiez que l'authentification à 2 facteurs est activée
- Vérifiez que vous utilisez le mot de passe d'application (pas votre mot de passe normal)

**Erreur "Less secure app access" :**
- Cette option n'est plus disponible, utilisez obligatoirement un mot de passe d'application

**Emails non reçus :**
- Vérifiez vos spams
- Vérifiez que les variables d'environnement sont correctes
- Redémarrez le serveur après modification du `.env`

### 📞 Support

Si vous rencontrez des problèmes, vérifiez :
1. Les logs du serveur dans la console
2. Que votre email Gmail est correct
3. Que le mot de passe d'application est bien copié

---

**A&B PEINTURE** - "PASSION & ESPACE DE VIE" 🎨
