@echo off
REM ====================================================
REM NAN BURGER - Lanceur Dual Display
REM Ecrans: 1366x768 + 1366x768
REM ====================================================

SET URL=https://nanburger.fr

echo ====================================================
echo    NAN BURGER - Demarrage du systeme de caisse
echo ====================================================
echo.

REM Fermer les anciennes fenetres Edge
echo Fermeture des anciennes fenetres...
taskkill /F /IM msedge.exe 2>nul
timeout /t 2 /nobreak >nul

echo.
echo Demarrage de la CAISSE sur l'ecran 1...
REM Ouvrir la caisse sur l'ecran 1 (position 0,0)
start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --new-window --window-position=0,0 --start-maximized "%URL%/caisse.html"

timeout /t 2 /nobreak >nul

echo Demarrage de l'ECRAN CLIENT sur l'ecran 2...
REM Ouvrir le display sur l'ecran 2 (position 1366,0 car ecran 1 fait 1366px de large)
start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --new-window --window-position=1366,0 --kiosk "%URL%/display.html"

echo.
echo ====================================================
echo    Systeme demarre avec succes!
echo ====================================================
echo.
echo RACCOURCIS CLAVIER:
echo   Win + Shift + Fleche  = Deplacer fenetre entre ecrans
echo   F11                   = Mode plein ecran
echo   Echap                 = Quitter mode kiosk
echo.
timeout /t 5 /nobreak >nul
