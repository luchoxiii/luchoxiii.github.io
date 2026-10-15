# Lucho · Data Science Engineer

🌐 [Español](README.md) | [English](README.en.md) | [Português](README.pt.md) | [Français](README.fr.md) | [Italiano](README.it.md) | **Deutsch**

Data Science Engineer mit über 6 Jahren Erfahrung in Machine Learning, Data Engineering, BI und fortgeschrittener Analytik. Ich arbeite an Prognosemodellen, Computer Vision, Edge AI, Datenpipelines, KI-Agenten und MLOps, mit Schwerpunkt auf Data & AI Governance und AI Safety. Seit über 3 Jahren unterrichte ich Data Science und Machine Learning.

👉 **Portfolio:** [luchoxiii.github.io](https://luchoxiii.github.io/?lang=de)

## Projekte

| Projekt | Worum es geht | Code |
|---|---|---|
| Kennzeichen- und Gesichtserkennung am Edge (Edge AI) | Videoüberwachung mit 2 IP-Kameras und einem Dahua-DVR, Inferenz auf einem Raspberry Pi 4 mit 1 GB und ein per Fine-Tuning angepasstes LLM, das die Kennzeichen korrigiert | [car_patent_pi](https://github.com/luchoxiii/car_patent_pi) |
| GestionQuincaillerie: ERP- und Kassensystem für Eisenwarenhandlungen | TypeScript-Monorepo (React, NestJS, PostgreSQL, Redis) mit Kassensystem, Lagerverwaltung über mehrere Standorte, AFIP-Rechnungsstellung und Mercado-Libre-Anbindung; enthält Kundenanalyse mit RFM, Segmentierung und erklärbarem Churn-Score | [GestionQuincaillerie](https://github.com/luchoxiii/GestionQuincaillerie) |
| Mietpreisschätzung: Buenos Aires und Mendoza | Regression auf eigenen Daten, per Scraping von Properati und ZonaProp gewonnen, plus GIS-Analyse des Einflusses der Lage | [scraper_propiedad](https://github.com/luchoxiii/scraper_propiedad) |
| Abfallklassifikator | Computer Vision zur Trennung von Abfällen nach Material; wird auf Raspberry Pi portiert | — |
| Müdigkeitserkennung | Echtzeit-Erkennung von längerem Augenschließen und Gähnen zur Unfallvermeidung | — |
| Emotionserkennung | Echtzeit-Erkennung von Gesichtsemotionen in Videos | — |
| Churn-Prognose | Klassifikation mit Fokus auf Erklärbarkeit, um Maßnahmen zur Kundenbindung zu steuern | — |
| Empfehlungssystem für E-Commerce | Hybride Engine: kollaboratives Filtern + inhaltsbasierte Empfehlung | — |

## Ausgewählte Arbeit

**Krankenhausmortalität bei Patienten mit HIV und Tuberkulose.** Analyse assoziierter Faktoren, präsentiert als wissenschaftliches Poster mit dem Team des Hospital Posadas und der SADI. [Poster ansehen (PDF)](assets/poster-tbc-sadi-op3.pdf)

## Stack

- **Sprachen:** Python, SQL
- **ML und Deep Learning:** Scikit-learn, XGBoost, TensorFlow, PyTorch, Pandas, NumPy
- **Computer Vision und Edge AI:** OCR, Gesichtserkennung, Inferenz auf Raspberry Pi, RTSP
- **Visualisierung und BI:** Power BI, Tableau, Looker, Qlik, Matplotlib, Seaborn, Plotly
- **Engineering und MLOps:** Git, Docker, Podman, APIs, ETL-Pipelines, TypeScript, React, NestJS, PostgreSQL
- **Cloud:** AWS, Azure, GCP

## Ressourcen für Studierende

Notebooks, Leitfäden und Übungen zu Data Science und Machine Learning im Repository [Students](https://github.com/luchoxiii/Students).

## Kontakt

Meine berufliche E-Mail-Adresse finden Sie im [Kontaktbereich des Portfolios](https://luchoxiii.github.io/?lang=de#contact). Zum Schutz vor Spam veröffentliche ich sie hier nicht.

## Über dieses Repository

Das ist der Quellcode des Portfolios, einer statischen Website, die mit GitHub Pages aus dem Branch `main` veröffentlicht wird. Es gibt keinen Build-Schritt: Jede gepushte Änderung geht automatisch online.

| Datei | Inhalt |
|---|---|
| `index.html` | Struktur, Styles und Logik der Seite |
| `i18n/` | Texte pro Sprache: `es.js`, `en.js`, `pt.js`, `fr.js`, `it.js`, `de.js` |
| `404.html` | Fehlerseite, die Sprache und Design des Besuchers übernimmt |
| `avatar.webp` | Zugeschnittenes und optimiertes Profilfoto |
| `accessibility.js` / `accessibility.css` | Barrierefreiheits-Panel und ARIA-Verbesserungen |
| `assets/` | Favicons und wissenschaftliches Poster (JPG und PDF) |
| `foto.jpg` | Bild, das beim Teilen des Links in sozialen Netzwerken erscheint |
| `sitemap.xml`, `robots.txt` | SEO |

**So bearbeiten Sie die häufigsten Dinge:**

- **Zertifizierungen:** das Objekt `certConfig` in `index.html`. Tragen Sie in `verifyUrl` den Credly- oder Microsoft-Learn-Link ein, dann wird die Karte nicht mehr als „Demnächst" angezeigt.
- **Poster und Ko-fi-Link:** das Objekt `portfolioConfig` in `index.html`. Lassen Sie `kofiUrl` leer, um die Zeile in der Fußzeile auszublenden.
- **Texte und Sprachen:** Jede Sprache hat eine eigene Datei in `i18n/`. Für einen neuen Text geben Sie dem HTML-Element `data-i18n="schluessel"` und tragen diesen Schlüssel in alle 6 Dateien ein. Fehlt einer, zeigt die Browserkonsole eine Warnung mit den fehlenden Schlüsseln.
