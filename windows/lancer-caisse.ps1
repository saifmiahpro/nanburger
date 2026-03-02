# ====================================================
# NAN BURGER - Lanceur Dual Display PowerShell
# Ecrans: 1366x768 + 1366x768
# ====================================================

$URL = "https://nanburger.fr"
$ECRAN2_X = 1366  # Position X ecran 2 = largeur ecran 1

Write-Host "====================================================" -ForegroundColor Yellow
Write-Host "   NAN BURGER - Demarrage du systeme de caisse" -ForegroundColor Yellow
Write-Host "====================================================" -ForegroundColor Yellow
Write-Host ""

# Fermer Edge
Write-Host "Fermeture des anciennes fenetres..."
Get-Process msedge -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

Write-Host "Demarrage de la CAISSE sur l'ecran 1..." -ForegroundColor Cyan
Start-Process "msedge" -ArgumentList "--new-window", "--window-position=0,0", "--start-maximized", "$URL/caisse.html"

Start-Sleep -Seconds 2

Write-Host "Demarrage de l'ECRAN CLIENT sur l'ecran 2..." -ForegroundColor Cyan
Start-Process "msedge" -ArgumentList "--new-window", "--window-position=$ECRAN2_X,0", "--kiosk", "$URL/display.html"

Write-Host ""
Write-Host "====================================================" -ForegroundColor Green
Write-Host "   Systeme demarre!" -ForegroundColor Green
Write-Host "====================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Fermeture dans 5 secondes..."
Start-Sleep -Seconds 5
