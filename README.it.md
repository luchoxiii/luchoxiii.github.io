# Lucho · Data Science Engineer

🌐 [Español](README.md) | [English](README.en.md) | [Português](README.pt.md) | [Français](README.fr.md) | **Italiano** | [Deutsch](README.de.md)

Data Science Engineer con oltre 6 anni di esperienza in Machine Learning, Data Engineering, BI e analisi avanzata. Lavoro su modelli predittivi, Computer Vision, Edge AI, pipeline di dati, agenti di IA e MLOps, con un'attenzione particolare a Data & AI Governance e AI Safety. Insegno Data Science e Machine Learning da più di 3 anni.

👉 **Portfolio:** [luchoxiii.github.io](https://luchoxiii.github.io/?lang=it)

## Progetti

| Progetto | Di cosa si tratta | Codice |
|---|---|---|
| Rilevamento di targhe e volti sull'edge (Edge AI) | Videosorveglianza con 2 telecamere IP e un DVR Dahua, inferenza su un Raspberry Pi 4 da 1 GB e un LLM con fine-tuning che corregge le letture delle targhe | [car_patent_pi](https://github.com/luchoxiii/car_patent_pi) |
| GestionQuincaillerie: ERP e punto vendita per ferramenta | Monorepo TypeScript (React, NestJS, PostgreSQL, Redis) con POS, inventario multimagazzino, fatturazione AFIP e integrazione con Mercado Libre; include analisi clienti con RFM, segmentazione e score di churn spiegabile | [GestionQuincaillerie](https://github.com/luchoxiii/GestionQuincaillerie) |
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
- **Ingegneria e MLOps:** Git, Docker, Podman, API, pipeline ETL, TypeScript, React, NestJS, PostgreSQL
- **Cloud:** AWS, Azure, GCP

## Risorse per studenti

Notebook, guide ed esercizi di Data Science e Machine Learning nel repository [Students](https://github.com/luchoxiii/Students).

## Contatti

La mia e-mail professionale si trova nella [sezione contatti del portfolio](https://luchoxiii.github.io/?lang=it#contact). Non la pubblico qui per evitare lo spam.

## Informazioni su questo repository

È il codice del portfolio, un sito statico pubblicato con GitHub Pages dal branch `main`. Non c'è alcuna fase di build: ogni modifica caricata va online automaticamente.

| File | Contenuto |
|---|---|
| `index.html` | Struttura, stili e logica della pagina |
| `i18n/` | Testi di ogni lingua: `es.js`, `en.js`, `pt.js`, `fr.js`, `it.js`, `de.js` |
| `404.html` | Pagina di errore che rispetta la lingua e il tema del visitatore |
| `avatar.webp` | Foto profilo ritagliata e ottimizzata |
| `accessibility.js` / `accessibility.css` | Pannello di accessibilità e miglioramenti ARIA |
| `assets/` | Favicon e poster scientifico (JPG e PDF) |
| `foto.jpg` | Immagine mostrata quando il link viene condiviso sui social |
| `sitemap.xml`, `robots.txt` | SEO |

**Come modificare le cose più comuni:**

- **Certificazioni:** l'oggetto `certConfig` in `index.html`. Inserisci in `verifyUrl` il link di Credly o Microsoft Learn e la scheda smette di apparire come "prossimamente".
- **Poster e link Ko-fi:** l'oggetto `portfolioConfig` in `index.html`. Lascia `kofiUrl` vuoto per nascondere la riga nel piè di pagina.
- **Testi e lingue:** ogni lingua ha il suo file in `i18n/`. Per aggiungere un nuovo testo, assegna all'elemento HTML `data-i18n="chiave"` e aggiungi quella chiave in tutti e 6 i file. Se ne dimentichi uno, la console del browser mostra un avviso con le chiavi mancanti.
