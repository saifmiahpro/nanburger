# Guide de Déploiement NAN BURGER sur Hostinger

## Étape 1 : Créer la Base de Données MySQL

1. Connectez-vous à **hPanel Hostinger**
2. Allez dans **Bases de données** > **MySQL**
3. Créez une nouvelle base de données :
   - **Nom de la BDD** : `nanburger` (sera préfixé automatiquement)
   - **Utilisateur** : `admin` (sera préfixé automatiquement)
   - **Mot de passe** : Choisissez un mot de passe sécurisé

4. **Notez les informations** qui vous sont données :
   - Nom complet de la BDD : `u123456789_nanburger`
   - Utilisateur : `u123456789_admin`
   - Mot de passe : votre mot de passe
   - Hôte : `localhost`

## Étape 2 : Configurer le fichier config.php

Ouvrez le fichier `api/config.php` et modifiez ces lignes avec vos infos :

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'u123456789_nanburger');  // Votre nom de BDD
define('DB_USER', 'u123456789_admin');       // Votre utilisateur
define('DB_PASS', 'VotreMotDePasse123!');    // Votre mot de passe
```

## Étape 3 : Déployer les fichiers

### Option A : Via Git (Recommandé)
```bash
git add .
git commit -m "PHP backend ready for Hostinger"
git push origin main
```
Puis dans hPanel > Git, cliquez sur "Deploy".

### Option B : Via File Manager
1. Dans hPanel, allez dans **File Manager**
2. Naviguez vers `public_html`
3. Uploadez tous les fichiers du projet

## Étape 4 : Initialiser la Base de Données

Après le déploiement, visitez cette URL **UNE SEULE FOIS** :

```
https://votre-domaine.com/api/init.php
```

Vous devriez voir :
```json
{
  "success": true,
  "message": "Base de données initialisée avec succès!",
  "tables": ["orders", "sse_events"]
}
```

## Étape 5 : Vérifier le Fonctionnement

1. **Page d'accueil client** : `https://votre-domaine.com/`
2. **Caisse POS** : `https://votre-domaine.com/caisse.html`
3. **API Health Check** : `https://votre-domaine.com/api/health.php`

## Étape 6 : Sécurité (IMPORTANT!)

### Changer le code PIN de la caisse
Dans `caisse.html`, ligne 188, changez :
```javascript
const CORRECT_PIN = '1234';  // Changez ce code!
```

### Désactiver le mode debug
Dans `api/config.php`, assurez-vous que :
```php
define('DEBUG_MODE', false);
```

### Activer HTTPS
Dans `.htaccess`, décommentez ces lignes :
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Structure des Fichiers

```
public_html/
├── index.html          # Page client (commandes web)
├── caisse.html         # Interface caisse POS
├── rapport.html        # Rapports journaliers
├── app.js              # JS client
├── caisse.js           # JS caisse
├── style.css           # CSS client
├── caisse.css          # CSS caisse
├── logo.png            # Logo
├── .htaccess           # Config Apache
└── api/
    ├── config.php      # Configuration BDD
    ├── init.php        # Initialisation BDD (une fois)
    ├── orders.php      # API commandes
    ├── events.php      # Polling temps réel
    └── health.php      # Health check
```

## Dépannage

### Erreur "Database connection failed"
- Vérifiez les identifiants dans `api/config.php`
- L'hôte doit être `localhost` sur Hostinger

### Erreur 500
- Vérifiez les permissions des fichiers (644 pour fichiers, 755 pour dossiers)
- Activez `DEBUG_MODE` temporairement pour voir l'erreur

### Les commandes web n'apparaissent pas
- Vérifiez que la table `sse_events` existe
- Rafraîchissez la page caisse

## Contact Support

Si problème, contactez le support Hostinger avec ces infos :
- Plan : Business Web Hosting
- Technologie : PHP 8.x + MySQL
- Framework : Aucun (PHP natif)
