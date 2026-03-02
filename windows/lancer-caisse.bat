@echo off
REM ====================================================
REM NAN BURGER - Lanceur Dual Display
REM Ecrans: 1366x768 + 1366x768
REM ====================================================

SET URL=https://nanburger.fr

echo ====================================================
echo    NAN BURGER - Demarrage
echo ====================================================

REM Fermer Edge si ouvert
taskkill /F /IM msedge.exe 2>nul
timeout /t 2 /nobreak >nul

echo.
echo Ouverture de la CAISSE...
start msedge --new-window --start-maximized "%URL%/caisse.html"
timeout /t 3 /nobreak >nul

echo Ouverture de l'ECRAN CLIENT...
start msedge --new-window --start-maximized "%URL%/display.html"
timeout /t 2 /nobreak >nul

echo.
echo ====================================================
echo    IMPORTANT - Positionnez les fenetres:
echo ====================================================
echo.
echo 1. Cliquez sur la fenetre CAISSE
echo 2. Appuyez sur: Win + Shift + Fleche GAUCHE
echo    (pour la mettre sur l'ecran 1)
echo.
echo 3. Cliquez sur la fenetre DISPLAY (client)
echo 4. Appuyez sur: Win + Shift + Fleche DROITE
echo    (pour la mettre sur l'ecran 2)
echo.
echo 5. Appuyez sur F11 pour le plein ecran
echo.
echo ====================================================
pause
