# Lucho · Data Science Engineer

🌐 [Español](README.md) | [English](README.en.md) | [Português](README.pt.md) | [Français](README.fr.md) | **Italiano** | [Deutsch](README.de.md)

Data Science Engineer con oltre 6 anni di esperienza in Machine Learning, Data Engineering, BI e analisi avanzata. Lavoro su modelli predittivi, Computer Vision, Edge AI, pipeline di dati, agenti di IA e MLOps, con un'attenzione particolare a Data & AI Governance e AI Safety. Insegno Data Science e Machine Learning da più di 3 anni.

👉 **Portfolio:** [luchoxiii.github.io](https://luchoxiii.github.io/?lang=it)

## Progetti

| Progetto | Di cosa si tratta | Codice |
|---|---|---|
| Rilevamento di targhe e volti sull'edge (Edge AI) | Videosorveglianza con 2 telecamere IP e un DVR Dahua, inferenza su un Raspberry Pi 4 da 1 GB e un LLM con fine-tuning che corregge le letture delle targhe | [car_patent_pi](https://github.com/luchoxiii/car_patent_pi) |
| Stima dei prezzi d'affitto: Buenos Aires e Mendoza | Regressione su dati propri raccolti tramite scraping di Properati e ZonaProp, con analisi GIS dell'effetto della posizione | [scraper_propiedad](https://github.com/luchoxiii/scraper_propiedad) |
| Classificatore di rifiuti | Computer Vision per separare i rifiuti per materiale; in fase di adattamento a Raspberry Pi | — |
| Rilevatore di sonnolenza | Rilevamento in tempo reale della chiusura prolungata degli occhi e degli sbadigli per prevenire incidenti | — |
| Rilevatore di emozioni | Riconoscimento delle emozioni facciali da video in tempo reale | — |
| Previsione del churn | Classificazione orientata alla spiegabilità per guidare le azioni di fidelizzazione | — |
| Sistema di raccomandazione per e-commerce | Motore ibrido: filtraggio collaborativo + raccomandazione basata sui contenuti | — |

## Lavoro in evidenza

**Mortalità intraospedaliera in pazienti con HIV e tubercolosi.** Analisi dei fattori associati, presentata come poster scientifico con il team dell'Ospedale Posadas e della SADI. [Vedi il poster (PDF)](assets/poster-tbc-sadi-op3.pdf)

## Stack

- **Linguaggi:** Python, SQL
- **ML e Deep Learning:** Scikit-learn, XGBoost, TensorFlow, PyTorch, Pandas, NumPy
- **Computer Vision ed Edge AI:** OCR, riconoscimento facciale, inferenza su Raspberry Pi, RTSP
- **Visualizzazione e BI:** Power BI, Tableau, Looker, Qlik, Matplotlib, Seaborn, Plotly
- **Ingegneria e MLOps:** Git, Docker, API, pipeline ETL
- **Cloud:** AWS, Azure, GCP

## Risorse per studenti

Notebook, guide ed esercizi di Data Science e Machine Learning nel repository [Students](https://github.com/luchoxiii/Students).

## Contatti

La mia e-mail professionale si trova nella [sezione contatti del portfolio](https://luchoxiii.github.io/?lang=it#contact). Non la pubblico qui per evitare lo spam.

## Informazioni su questo repository

È il codice del portfolio, un sito statico pubblicato con GitHub Pages dal branch `main`. Non c'è alcuna fase di build: ogni modifica caricata va online automaticamente.

| File | Contenuto |
|---|---|
| `index.html` | L'intera pagina: struttura, stili, testi in 6 lingue e logica |
| `accessibility.js` / `accessibility.css` | Pannello di accessibilità e miglioramenti ARIA |
| `assets/` | Favicon e poster scientifico (JPG e PDF) |
| `foto.jpg` | Foto profilo e immagine per i social |
| `sitemap.xml`, `robots.txt` | SEO |

**Come modificare le cose più comuni (tutto dentro `index.html`):**

- **Certificazioni:** l'oggetto `certConfig`. Inserisci in `verifyUrl` il link di Credly o Microsoft Learn e la scheda smette di apparire come "prossimamente".
- **Poster e donazioni:** l'oggetto `portfolioConfig`.
- **Testi e lingue:** gli oggetti `content`, `extras` e `i18n`. Se aggiungi un nuovo testo all'HTML, assegnagli `data-i18n="chiave"` e inserisci quella chiave in tutte e 6 le lingue dentro `i18n`; altrimenti resterà non tradotto.
