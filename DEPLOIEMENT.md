# Guide de Déploiement NAN BURGER - OVH VPS

## 1. Commander le VPS chez OVH

1. Aller sur https://www.ovhcloud.com/fr/vps/
2. Choisir **VPS Starter** (~4.20€ TTC/mois)
3. Sélectionner:
   - Localisation: **France (Gravelines ou Roubaix)**
   - OS: **Ubuntu 22.04**
4. Payer avec la carte du client
5. Attendre l'email avec les identifiants SSH (IP + mot de passe root)

## 2. Commander le nom de domaine

1. Aller sur https://www.ovh.com/fr/domaines/
2. Rechercher le domaine souhaité (ex: `nanburger.fr`)
3. Commander (~7€/an pour un .fr)

## 3. Se connecter au VPS

```bash
# Depuis un terminal (Mac/Linux) ou PowerShell (Windows)
ssh root@IP_DU_VPS
# Entrer le mot de passe reçu par email
```

## 4. Installer Node.js sur le VPS

```bash
# Mettre à jour le système
apt update && apt upgrade -y

# Installer Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Vérifier l'installation
node --version  # doit afficher v20.x.x
npm --version

# Installer PM2 (gestionnaire de processus)
npm install -g pm2

# Installer les dépendances pour better-sqlite3
apt install -y build-essential python3
```

## 5. Transférer les fichiers

### Option A: Avec Git (recommandé)
```bash
# Sur le VPS
cd /var/www
git clone https://github.com/TON_REPO/nanburger.git
cd nanburger
```

### Option B: Avec SCP (copie directe)
```bash
# Depuis ton Mac (pas sur le VPS)
scp -r /Users/saif/NanBurger root@IP_DU_VPS:/var/www/nanburger
```

## 6. Installer les dépendances et lancer

```bash
# Sur le VPS
cd /var/www/nanburger

# Installer les dépendances
npm install

# Tester que ça marche
node server.js
# Tu dois voir "NAN BURGER - Serveur démarré!"
# Ctrl+C pour arrêter

# Lancer avec PM2 (reste actif même si tu te déconnectes)
pm2 start server.js --name nanburger

# Configurer PM2 pour redémarrer au reboot
pm2 startup
pm2 save
```

## 7. Configurer Nginx (reverse proxy)

```bash
# Installer Nginx
apt install -y nginx

# Créer la config
nano /etc/nginx/sites-available/nanburger
```

Coller cette configuration:
```nginx
server {
    listen 80;
    server_name nanburger.fr www.nanburger.fr;  # Remplacer par ton domaine

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;

        # Pour SSE (temps réel)
        proxy_set_header Connection '';
        proxy_buffering off;
        proxy_read_timeout 86400s;
    }
}
```

Sauvegarder: `Ctrl+O`, `Enter`, `Ctrl+X`

```bash
# Activer le site
ln -s /etc/nginx/sites-available/nanburger /etc/nginx/sites-enabled/

# Tester la config
nginx -t

# Redémarrer Nginx
systemctl restart nginx
```

## 8. Configurer le DNS (chez OVH)

1. Aller dans l'espace client OVH > Domaines > nanburger.fr
2. Onglet "Zone DNS"
3. Ajouter/modifier l'entrée:
   - Type: **A**
   - Sous-domaine: *(vide pour nanburger.fr)*
   - Cible: **IP_DU_VPS**
   - TTL: 3600

4. Ajouter aussi pour www:
   - Type: **A**
   - Sous-domaine: **www**
   - Cible: **IP_DU_VPS**
   - TTL: 3600

⚠️ La propagation DNS peut prendre 5-30 minutes.

## 9. Ajouter HTTPS (Let's Encrypt)

```bash
# Installer Certbot
apt install -y certbot python3-certbot-nginx

# Obtenir le certificat SSL
certbot --nginx -d nanburger.fr -d www.nanburger.fr

# Suivre les instructions (entrer email, accepter les conditions)
# Choisir "2" pour rediriger HTTP vers HTTPS

# Le certificat se renouvellera automatiquement
```

## 10. Tester!

- Site client: https://nanburger.fr
- Dashboard cuisine: https://nanburger.fr/admin

---

## Commandes utiles

```bash
# Voir les logs
pm2 logs nanburger

# Redémarrer l'application
pm2 restart nanburger

# Voir le statut
pm2 status

# Voir l'utilisation ressources
pm2 monit
```

## Configuration imprimante thermique (tablette Windows 10)

1. Brancher l'imprimante Epson en USB
2. Windows devrait installer les drivers automatiquement
3. Aller dans **Paramètres > Imprimantes**
4. Définir l'imprimante Epson comme **imprimante par défaut**
5. Dans les propriétés de l'imprimante:
   - Format papier: **80mm** ou **Receipt 80mm**
   - Marges: **Minimales**
6. Ouvrir https://nanburger.fr/admin dans Chrome
7. Cliquer sur l'icône 🖨️ d'une commande
8. Dans la fenêtre d'impression, vérifier que c'est la bonne imprimante et imprimer

## Dépannage

### Le site ne charge pas
```bash
# Vérifier que Node tourne
pm2 status

# Vérifier Nginx
systemctl status nginx

# Voir les erreurs
pm2 logs nanburger --err
```

### Les commandes n'arrivent pas en temps réel
- Vérifier que le navigateur du dashboard est bien connecté (point vert)
- Actualiser la page admin
- Vérifier les logs: `pm2 logs nanburger`

### Erreur "Cannot find module"
```bash
cd /var/www/nanburger
rm -rf node_modules
npm install
pm2 restart nanburger
```
