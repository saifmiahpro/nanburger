@echo off
REM ====================================================
REM NAN BURGER - Lanceur Dual Display (Sans Souris)
REM ====================================================
REM Ce script ouvre la caisse sur l'ecran 1 et l'affichage client sur l'ecran 2
REM
REM CONFIGURATION: Modifiez l'URL si necessaire
SET URL=https://nanburger.fr
REM Pour test local: SET URL=http://localhost

REM Detecter le navigateur
SET BROWSER=
IF EXIST "%ProgramFiles%\Google\Chrome\Application\chrome.exe" SET BROWSER="%ProgramFiles%\Google\Chrome\Application\chrome.exe"
IF EXIST "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" SET BROWSER="%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
IF EXIST "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" SET BROWSER="%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
IF EXIST "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" SET BROWSER="%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"

IF "%BROWSER%"=="" (
    echo ERREUR: Chrome ou Edge non trouve!
    echo Veuillez installer Google Chrome ou Microsoft Edge
    pause
    exit /b 1
)

echo ====================================================
echo    NAN BURGER - Demarrage du systeme de caisse
echo ====================================================
echo.

REM Fermer les anciennes instances (optionnel)
echo Fermeture des anciennes fenetres...
taskkill /F /IM chrome.exe 2>nul
taskkill /F /IM msedge.exe 2>nul
timeout /t 2 /nobreak >nul

echo.
echo Demarrage de la caisse sur l'ecran principal...
REM Ouvrir la caisse sur l'ecran 1 (position 0,0)
start "" %BROWSER% --new-window --window-position=0,0 --start-maximized "%URL%/caisse.html"

REM Attendre que la premiere fenetre s'ouvre
timeout /t 2 /nobreak >nul

echo Demarrage de l'ecran client sur l'ecran secondaire...
REM Ouvrir le display sur l'ecran 2 (position 1920,0 pour ecran Full HD a droite)
REM Modifiez 1920 selon la resolution de votre ecran principal
start "" %BROWSER% --new-window --window-position=1920,0 --start-maximized --app="%URL%/display.html"

echo.
echo ====================================================
echo    Systeme demarre avec succes!
echo ====================================================
echo.
echo RACCOURCIS CLAVIER UTILES:
echo   Win + Shift + Fleche  = Deplacer fenetre entre ecrans
echo   F11                   = Mode plein ecran
echo   Alt + Tab             = Changer de fenetre
echo.
echo Cette fenetre va se fermer dans 5 secondes...
timeout /t 5 /nobreak >nul
