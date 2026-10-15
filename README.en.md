# Lucho · Data Science Engineer

🌐 [Español](README.md) | **English** | [Português](README.pt.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Deutsch](README.de.md)

Data Science Engineer with 6+ years of experience in Machine Learning, Data Engineering, BI and advanced analytics. I work on predictive models, Computer Vision, Edge AI, data pipelines, AI agents and MLOps, with a focus on Data & AI Governance and AI Safety. I have been teaching Data Science and Machine Learning for over 3 years.

👉 **Portfolio:** [luchoxiii.github.io](https://luchoxiii.github.io/?lang=en)

## Projects

| Project | What it does | Code |
|---|---|---|
| License plate and face detection at the edge (Edge AI) | Video surveillance with 2 IP cameras and a Dahua DVR, inference on a 1 GB Raspberry Pi 4, and a fine-tuned LLM that corrects license plate readings | [car_patent_pi](https://github.com/luchoxiii/car_patent_pi) |
| Rental price estimation: Buenos Aires City and Mendoza | Regression on custom data scraped from Properati and ZonaProp, plus GIS analysis of the effect of location | [scraper_propiedad](https://github.com/luchoxiii/scraper_propiedad) |
| Waste classifier | Computer Vision to sort waste by material; being adapted to Raspberry Pi | — |
| Drowsiness detector | Real-time detection of prolonged eye closure and yawning to prevent accidents | — |
| Emotion detector | Real-time facial emotion recognition from video | — |
| Churn prediction | Classification focused on explainability to drive retention actions | — |
| E-commerce recommendation system | Hybrid engine: collaborative filtering + content-based recommendation | — |

## Featured work

**In-hospital mortality in patients with HIV and tuberculosis.** Analysis of associated factors, presented as a scientific poster with the Hospital Posadas and SADI team. [View poster (PDF)](assets/poster-tbc-sadi-op3.pdf)

## Stack

- **Languages:** Python, SQL
- **ML and Deep Learning:** Scikit-learn, XGBoost, TensorFlow, PyTorch, Pandas, NumPy
- **Computer Vision and Edge AI:** OCR, face recognition, inference on Raspberry Pi, RTSP
- **Visualization and BI:** Power BI, Tableau, Looker, Qlik, Matplotlib, Seaborn, Plotly
- **Engineering and MLOps:** Git, Docker, APIs, ETL pipelines
- **Cloud:** AWS, Azure, GCP

## Resources for students

Notebooks, guides and exercises on Data Science and Machine Learning in the [Students](https://github.com/luchoxiii/Students) repository.

## Contact

My professional email is in the [contact section of the portfolio](https://luchoxiii.github.io/?lang=en#contact). I don't publish it here to avoid spam.

## About this repository

This is the source code of the portfolio, a static site published with GitHub Pages from the `main` branch. There is no build step: every change you push goes live automatically.

| File | Contents |
|---|---|
| `index.html` | The whole page: structure, styles, texts in 6 languages and logic |
| `accessibility.js` / `accessibility.css` | Accessibility panel and ARIA enhancements |
| `assets/` | Favicons and scientific poster (JPG and PDF) |
| `foto.jpg` | Profile photo and social media image |
| `sitemap.xml`, `robots.txt` | SEO |

**How to edit the most common things (all inside `index.html`):**

- **Certifications:** the `certConfig` object. Fill in `verifyUrl` with the Credly or Microsoft Learn link and the card stops showing as "coming soon".
- **Poster and donations:** the `portfolioConfig` object.
- **Texts and languages:** the `content`, `extras` and `i18n` objects. When you add new text to the HTML, give it `data-i18n="key"` and add that key in all 6 languages inside `i18n`; otherwise it will stay untranslated.
