====================================================
   NAN BURGER - Lanceur Dual Display Windows
====================================================

Ces scripts permettent d'ouvrir automatiquement:
- La CAISSE sur l'ecran 1 (principal)
- L'AFFICHAGE CLIENT sur l'ecran 2 (secondaire)

FICHIERS:
---------
- lancer-caisse.bat    : Script simple (double-cliquez)
- lancer-caisse.ps1    : Script PowerShell (plus d'options)

UTILISATION:
------------
1. Double-cliquez sur "lancer-caisse.bat"
   ou
   Clic droit sur "lancer-caisse.ps1" > "Executer avec PowerShell"

CONFIGURATION:
--------------
Si votre ecran principal a une resolution differente de 1920x1080,
modifiez la valeur "1920" dans les scripts:

Dans lancer-caisse.bat:
  --window-position=1920,0

Dans lancer-caisse.ps1:
  $ECRAN2_X = 1920

Exemples de resolutions:
- 1366x768  -> utilisez 1366
- 1920x1080 -> utilisez 1920 (par defaut)
- 2560x1440 -> utilisez 2560

RACCOURCIS CLAVIER UTILES:
--------------------------
Win + Shift + Fleche Droite  = Deplacer fenetre vers ecran 2
Win + Shift + Fleche Gauche  = Deplacer fenetre vers ecran 1
F11                          = Mode plein ecran
Alt + Tab                    = Changer de fenetre active
Echap                        = Quitter le mode kiosk

DEMARRAGE AUTOMATIQUE:
----------------------
Pour lancer automatiquement au demarrage de Windows:
1. Appuyez sur Win + R
2. Tapez: shell:startup
3. Copiez le raccourci de "lancer-caisse.bat" dans ce dossier

PROBLEMES FREQUENTS:
--------------------
Q: L'ecran client s'ouvre sur le mauvais ecran?
R: Modifiez la valeur de position X dans le script

Q: Le navigateur n'est pas detecte?
R: Installez Google Chrome ou Microsoft Edge

Q: Les fenetres ne sont pas maximisees?
R: Utilisez F11 pour le plein ecran ou Win+Up pour maximiser
