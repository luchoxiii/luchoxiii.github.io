# Lucho · Data Science Engineer

🌐 **Español** | [English](README.en.md) | [Português](README.pt.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Deutsch](README.de.md)

Data Science Engineer con más de 6 años de experiencia en Machine Learning, Data Engineering, BI y analítica avanzada. Trabajo en modelos predictivos, Computer Vision, Edge AI, pipelines de datos, agentes de IA y MLOps, con foco en Data & AI Governance y AI Safety. Hace más de 3 años que doy clases de Data Science y Machine Learning.

👉 **Portfolio:** [luchoxiii.github.io](https://luchoxiii.github.io)

## Proyectos

| Proyecto | De qué se trata | Código |
|---|---|---|
| Detección de patentes y rostros en el borde (Edge AI) | Videovigilancia con 2 cámaras IP y un DVR Dahua, inferencia en una Raspberry Pi 4 de 1 GB y un LLM con fine-tuning que corrige las lecturas de patentes | [car_patent_pi](https://github.com/luchoxiii/car_patent_pi) |
| GestionQuincaillerie: ERP y punto de venta para ferreterías | Monorepo TypeScript (React, NestJS, PostgreSQL, Redis) con POS, inventario multidepósito, facturación AFIP e integración con Mercado Libre; incluye analítica de clientes con RFM, segmentación y score de churn explicable | [GestionQuincaillerie](https://github.com/luchoxiii/GestionQuincaillerie) |
| Estimación de precios de alquiler: CABA y Mendoza | Regresión con datos propios obtenidos por scraping de Properati y ZonaProp, más análisis GIS del efecto de la ubicación | [scraper_propiedad](https://github.com/luchoxiii/scraper_propiedad) |
| Clasificador de residuos | Computer Vision para separar residuos por material; en adaptación a Raspberry Pi | — |
| Detector de somnolencia | Detección en tiempo real de cierre prolongado de ojos y bostezos para prevenir accidentes | — |
| Detector de emociones | Reconocimiento de emociones faciales en video en tiempo real | — |
| Predicción de churn | Clasificación con foco en explicabilidad para accionar retención | — |
| Sistema de recomendación para e-commerce | Motor híbrido: filtrado colaborativo + recomendación basada en contenido | — |

## Trabajo destacado

**Mortalidad intrahospitalaria en pacientes con VIH y tuberculosis.** Análisis de factores asociados, presentado como póster científico junto al equipo del Hospital Posadas y SADI. [Ver póster (PDF)](assets/poster-tbc-sadi-op3.pdf)

## Stack

- **Lenguajes:** Python, SQL
- **ML y Deep Learning:** Scikit-learn, XGBoost, TensorFlow, PyTorch, Pandas, NumPy
- **Computer Vision y Edge AI:** OCR, reconocimiento facial, inferencia en Raspberry Pi, RTSP
- **Visualización y BI:** Power BI, Tableau, Looker, Qlik, Matplotlib, Seaborn, Plotly
- **Ingeniería y MLOps:** Git, Docker, Podman, APIs, pipelines ETL, TypeScript, React, NestJS, PostgreSQL
- **Cloud:** AWS, Azure, GCP

## Recursos para alumnos

Notebooks, guías y ejercicios de Data Science y Machine Learning en el repositorio [Students](https://github.com/luchoxiii/Students).

## Contacto

El correo profesional está en la [sección de contacto del portfolio](https://luchoxiii.github.io/#contact). No lo publico acá para evitar spam.

## Sobre este repositorio

Es el código del portfolio, un sitio estático publicado con GitHub Pages desde la rama `main`. No necesita build: cualquier cambio que subas se publica solo.

| Archivo | Qué contiene |
|---|---|
| `index.html` | Estructura, estilos y lógica de la página |
| `i18n/` | Textos en cada idioma: `es.js`, `en.js`, `pt.js`, `fr.js`, `it.js`, `de.js` |
| `404.html` | Página de error que respeta el idioma y el tema del visitante |
| `avatar.webp` | Foto de perfil recortada y optimizada |
| `accessibility.js` / `accessibility.css` | Panel de accesibilidad y mejoras ARIA |
| `assets/` | Favicons y póster científico (JPG y PDF) |
| `foto.jpg` | Imagen que se muestra al compartir el link en redes |
| `sitemap.xml`, `robots.txt` | SEO |

**Cómo editar lo más común:**

- **Certificaciones:** objeto `certConfig` en `index.html`. Completá `verifyUrl` con el link de Credly o Microsoft Learn y la tarjeta deja de verse como "próximamente".
- **Póster y link de Ko-fi:** objeto `portfolioConfig` en `index.html`. Si dejás `kofiUrl` vacío, desaparece la línea del pie de página.
- **Textos e idiomas:** cada idioma está en su archivo dentro de `i18n/`. Para agregar un texto nuevo, ponele `data-i18n="clave"` al elemento en el HTML y agregá esa clave en los 6 archivos. Si te olvidás de alguno, la consola del navegador muestra un aviso con las claves que faltan.
