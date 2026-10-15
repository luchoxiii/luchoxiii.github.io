# Lucho · Data Science Engineer

🌐 [Español](README.md) | [English](README.en.md) | [Português](README.pt.md) | **Français** | [Italiano](README.it.md) | [Deutsch](README.de.md)

Data Science Engineer avec plus de 6 ans d'expérience en Machine Learning, Data Engineering, BI et analytique avancée. Je travaille sur des modèles prédictifs, la Computer Vision, l'Edge AI, les pipelines de données, les agents d'IA et le MLOps, avec un accent sur la Data & AI Governance et l'AI Safety. J'enseigne la Data Science et le Machine Learning depuis plus de 3 ans.

👉 **Portfolio :** [luchoxiii.github.io](https://luchoxiii.github.io/?lang=fr)

## Projets

| Projet | Description | Code |
|---|---|---|
| Détection de plaques et de visages en périphérie (Edge AI) | Vidéosurveillance avec 2 caméras IP et un DVR Dahua, inférence sur un Raspberry Pi 4 de 1 Go et un LLM affiné qui corrige les lectures de plaques | [car_patent_pi](https://github.com/luchoxiii/car_patent_pi) |
| Estimation des loyers : Buenos Aires et Mendoza | Régression sur des données propres collectées par scraping de Properati et ZonaProp, avec une analyse SIG de l'effet de la localisation | [scraper_propiedad](https://github.com/luchoxiii/scraper_propiedad) |
| Classificateur de déchets | Computer Vision pour trier les déchets par matériau ; en cours d'adaptation sur Raspberry Pi | — |
| Détecteur de somnolence | Détection en temps réel de la fermeture prolongée des yeux et des bâillements pour prévenir les accidents | — |
| Détecteur d'émotions | Reconnaissance des émotions faciales en vidéo en temps réel | — |
| Prédiction du churn | Classification axée sur l'explicabilité pour guider les actions de fidélisation | — |
| Système de recommandation e-commerce | Moteur hybride : filtrage collaboratif + recommandation basée sur le contenu | — |

## Travail à la une

**Mortalité hospitalière chez les patients atteints du VIH et de tuberculose.** Analyse des facteurs associés, présentée sous forme d'affiche scientifique avec l'équipe de l'Hôpital Posadas et de la SADI. [Voir l'affiche (PDF)](assets/poster-tbc-sadi-op3.pdf)

## Stack

- **Langages :** Python, SQL
- **ML et Deep Learning :** Scikit-learn, XGBoost, TensorFlow, PyTorch, Pandas, NumPy
- **Computer Vision et Edge AI :** OCR, reconnaissance faciale, inférence sur Raspberry Pi, RTSP
- **Visualisation et BI :** Power BI, Tableau, Looker, Qlik, Matplotlib, Seaborn, Plotly
- **Ingénierie et MLOps :** Git, Docker, API, pipelines ETL
- **Cloud :** AWS, Azure, GCP

## Ressources pour les étudiants

Notebooks, guides et exercices de Data Science et de Machine Learning dans le dépôt [Students](https://github.com/luchoxiii/Students).

## Contact

Mon e-mail professionnel se trouve dans la [section contact du portfolio](https://luchoxiii.github.io/?lang=fr#contact). Je ne le publie pas ici pour éviter le spam.

## À propos de ce dépôt

C'est le code source du portfolio, un site statique publié avec GitHub Pages depuis la branche `main`. Aucune étape de build : chaque modification envoyée est publiée automatiquement.

| Fichier | Contenu |
|---|---|
| `index.html` | La page entière : structure, styles, textes en 6 langues et logique |
| `accessibility.js` / `accessibility.css` | Panneau d'accessibilité et améliorations ARIA |
| `assets/` | Favicons et affiche scientifique (JPG et PDF) |
| `foto.jpg` | Photo de profil et image pour les réseaux sociaux |
| `sitemap.xml`, `robots.txt` | SEO |

**Comment modifier l'essentiel (tout se trouve dans `index.html`) :**

- **Certifications :** l'objet `certConfig`. Renseignez `verifyUrl` avec le lien Credly ou Microsoft Learn et la carte n'apparaît plus comme « bientôt disponible ».
- **Affiche et dons :** l'objet `portfolioConfig`.
- **Textes et langues :** les objets `content`, `extras` et `i18n`. Si vous ajoutez un texte dans le HTML, donnez-lui `data-i18n="cle"` et ajoutez cette clé dans les 6 langues dans `i18n` ; sinon, il restera non traduit.
