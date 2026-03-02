' ====================================================
' NAN BURGER - Lanceur Automatique Dual Display
' Ce script positionne automatiquement les fenetres
' ====================================================

Set WshShell = CreateObject("WScript.Shell")

URL = "https://nanburger.fr"

' Fermer Edge
WshShell.Run "taskkill /F /IM msedge.exe", 0, True
WScript.Sleep 2000

' Ouvrir la CAISSE sur ecran 1
WshShell.Run "msedge --new-window --start-maximized " & URL & "/caisse.html"
WScript.Sleep 3000

' S'assurer que la fenetre est active et sur ecran 1
WshShell.AppActivate "Caisse"
WScript.Sleep 500
' Win+Shift+Left pour ecran gauche
WshShell.SendKeys "^{ESC}"  ' Ouvrir menu demarrer pour focus
WScript.Sleep 200
WshShell.SendKeys "{ESC}"   ' Fermer menu
WScript.Sleep 200

' Ouvrir l'ECRAN CLIENT
WshShell.Run "msedge --new-window --start-maximized " & URL & "/display.html"
WScript.Sleep 3000

' Deplacer la 2eme fenetre vers ecran droit avec Win+Shift+Right
WshShell.SendKeys "#+{RIGHT}"
WScript.Sleep 500

' Mettre en plein ecran avec F11
WshShell.SendKeys "{F11}"

MsgBox "Systeme demarre!" & vbCrLf & vbCrLf & "Si les fenetres ne sont pas bien placees:" & vbCrLf & "- Win+Shift+Fleche pour deplacer" & vbCrLf & "- F11 pour plein ecran", vbInformation, "NAN BURGER"
