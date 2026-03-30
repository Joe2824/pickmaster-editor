# ⚡ PickMaster Twin - Fast Pattern Editor

Eine blitzschnelle, leichtgewichtige Alternative zum integrierten Pattern Editor in **ABB PickMaster™ Twin**.

## 🎯 Motivation

Wer regelmäßig mit PickMaster Twin arbeitet, kennt das Problem: Bei komplexen Trays und Containern mit vielen Pick-Positionen wird der native Pattern Editor oft träge, langsam und unübersichtlich. Das Bearbeiten von dutzenden oder hunderten Koordinaten kostet unnötig viel Zeit.

Dieser **Fast Pattern Editor** löst genau dieses Problem. Er läuft in deinem Browser und ermöglicht das Bearbeiten der `ContainerModel.json`-Dateien in Lichtgeschwindigkeit.

## ✨ Features

* 🚀 **Blitzschnell:** Keine Ladezeiten, flüssiges Arbeiten auch bei sehr vielen Elementen.
* 🖱️ **Drag & Drop:** Positionen einfach mit der Maus verschieben.
* ⌨️ **Tastatur-Steuerung:** Elemente mit den Pfeiltasten pixelgenau verschieben (inkl. Shift-Modus für 10er-Schritte) und per `Entf`-Taste löschen.
* 🔄 **Visuelle Rotation:** Die Z-Rotation (`RZ`) wird direkt grafisch am Rechteck angezeigt.
* 🎨 **Automatische Farbcodierung:** Verschiedene Produkte (`ItemId`) bekommen automatisch unterschiedliche Farben zur besseren Unterscheidung.
* 👯 **Klonen:** Mit einem Klick Elemente duplizieren, um schnell Muster und Reihen aufzubauen.
* ⚠️ **Fehlererkennung:** Doppelt vergebene Order-Nummern (Reihenfolge) werden sofort visuell rot und blinkend hervorgehoben.
* 💾 **Autosave:** Änderungen werden im Hintergrund im Browser-Speicher abgelegt. Schließt du den Tab aus Versehen, kannst du deinen Entwurf einfach wiederherstellen.

## 🛠️ Installation & Nutzung

Da das Projekt moderne Web-Technologien nutzt, wird für die Ausführung ein lokaler Entwicklungsserver benötigt.

**Voraussetzung:** [Node.js](https://nodejs.org/) muss auf deinem Rechner installiert sein.

1. Klone dieses Repository (`git clone ...`) oder lade es als ZIP herunter und entpacke es.
2. Öffne ein Terminal (Kommandozeile) im Projektordner.
3. Führe `npm install` aus, um alle nötigen Abhängigkeiten herunterzuladen.
4. Starte den lokalen Server mit dem Befehl `npm run dev`.
5. Öffne den im Terminal angezeigten lokalen Link (meist `http://localhost:5173`) in einem modernen Webbrowser (Chrome, Edge, Firefox).
6. Klicke auf **JSON Laden** und wähle deine aus PickMaster exportierte Container-JSON aus.
7. Bearbeite dein Tray flüssig und bequem.
8. Klicke auf **JSON Exportieren** – die Datei ist sofort bereit für den Re-Import in PickMaster.

## 🔒 Datenschutz & Sicherheit

Dieses Tool ist für den Einsatz im industriellen Umfeld konzipiert:
* **100% Lokal:** Der Server läuft ausschließlich auf deinem eigenen Rechner (`localhost`). Es gibt kein externes Backend.
* **Keine Cloud:** Deine JSON-Dateien und Roboter-Koordinaten verlassen niemals deinen Rechner. Die Verarbeitung und der Autosave finden ausschließlich lokal im Arbeitsspeicher und Local Storage deines Browsers statt.

## 💻 Tech-Stack

* **HTML5 / JavaScript**
* **[Vite](https://vitejs.dev/)** als extrem schneller lokaler Dev-Server und Build-Tool.
* **[Alpine.js](https://alpinejs.dev/)** für die reaktive Logik und das Daten-Binding.
* **[Tailwind CSS](https://tailwindcss.com/)** für das moderne, saubere UI.

## 🤝 Mitwirken

Pull Requests sind jederzeit willkommen! Wenn du Ideen für neue Features hast oder einen Bug findest, öffne gerne ein Issue.

---
*Disclaimer: Dieses Projekt ist nicht offiziell mit der ABB-Gruppe verbunden. PickMaster ist eine eingetragene Marke von ABB.*