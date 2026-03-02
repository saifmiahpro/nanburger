# ====================================================
# NAN BURGER - Lanceur Dual Display PowerShell
# ====================================================
# Ce script ouvre la caisse sur l'ecran 1 et l'affichage client sur l'ecran 2
# Executez avec: powershell -ExecutionPolicy Bypass -File lancer-caisse.ps1

# CONFIGURATION
$URL = "https://nanburger.fr"  # Changez si necessaire
$ECRAN2_X = 1920  # Position X de l'ecran 2 (resolution ecran 1)

# Detecter le navigateur
$browsers = @(
    "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
    "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
)

$browser = $null
foreach ($b in $browsers) {
    if (Test-Path $b) {
        $browser = $b
        break
    }
}

if (-not $browser) {
    Write-Host "ERREUR: Chrome ou Edge non trouve!" -ForegroundColor Red
    Write-Host "Veuillez installer Google Chrome ou Microsoft Edge"
    Read-Host "Appuyez sur Entree pour fermer"
    exit 1
}

Write-Host "===================================================="
Write-Host "   NAN BURGER - Demarrage du systeme de caisse"
Write-Host "====================================================" -ForegroundColor Yellow
Write-Host ""

# Fermer les anciennes instances (optionnel - commentez si non desire)
Write-Host "Fermeture des anciennes fenetres..."
Get-Process chrome -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Get-Process msedge -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

Write-Host ""
Write-Host "Demarrage de la caisse sur l'ecran principal..." -ForegroundColor Cyan

# Ouvrir la caisse sur l'ecran 1
Start-Process $browser -ArgumentList "--new-window", "--window-position=0,0", "--start-maximized", "$URL/caisse.html"

Start-Sleep -Seconds 2

Write-Host "Demarrage de l'ecran client sur l'ecran secondaire..." -ForegroundColor Cyan

# Ouvrir le display sur l'ecran 2 en mode kiosk (plein ecran sans barre)
Start-Process $browser -ArgumentList "--new-window", "--window-position=$ECRAN2_X,0", "--kiosk", "$URL/display.html"

Write-Host ""
Write-Host "====================================================" -ForegroundColor Green
Write-Host "   Systeme demarre avec succes!" -ForegroundColor Green
Write-Host "====================================================" -ForegroundColor Green
Write-Host ""
Write-Host "RACCOURCIS CLAVIER UTILES:"
Write-Host "  Win + Shift + Fleche  = Deplacer fenetre entre ecrans"
Write-Host "  F11                   = Mode plein ecran"
Write-Host "  Alt + Tab             = Changer de fenetre"
Write-Host "  Echap                 = Quitter mode kiosk"
Write-Host ""
Write-Host "Cette fenetre va se fermer dans 5 secondes..."
Start-Sleep -Seconds 5
