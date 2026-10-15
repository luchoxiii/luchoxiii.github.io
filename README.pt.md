# Lucho · Data Science Engineer

🌐 [Español](README.md) | [English](README.en.md) | **Português** | [Français](README.fr.md) | [Italiano](README.it.md) | [Deutsch](README.de.md)

Data Science Engineer com mais de 6 anos de experiência em Machine Learning, Data Engineering, BI e analytics avançada. Trabalho com modelos preditivos, Computer Vision, Edge AI, pipelines de dados, agentes de IA e MLOps, com foco em Data & AI Governance e AI Safety. Dou aulas de Data Science e Machine Learning há mais de 3 anos.

👉 **Portfolio:** [luchoxiii.github.io](https://luchoxiii.github.io/?lang=pt)

## Projetos

| Projeto | Do que se trata | Código |
|---|---|---|
| Detecção de placas e rostos na borda (Edge AI) | Videomonitoramento com 2 câmeras IP e um DVR Dahua, inferência em um Raspberry Pi 4 de 1 GB e um LLM com fine-tuning que corrige as leituras de placas | [car_patent_pi](https://github.com/luchoxiii/car_patent_pi) |
| Estimativa de preços de aluguel: Buenos Aires e Mendoza | Regressão com dados próprios obtidos por scraping do Properati e do ZonaProp, mais análise GIS do efeito da localização | [scraper_propiedad](https://github.com/luchoxiii/scraper_propiedad) |
| Classificador de resíduos | Computer Vision para separar resíduos por material; em adaptação para Raspberry Pi | — |
| Detector de sonolência | Detecção em tempo real de fechamento prolongado dos olhos e bocejos para prevenir acidentes | — |
| Detector de emoções | Reconhecimento de emoções faciais em vídeo em tempo real | — |
| Predição de churn | Classificação com foco em explicabilidade para orientar ações de retenção | — |
| Sistema de recomendação para e-commerce | Motor híbrido: filtragem colaborativa + recomendação baseada em conteúdo | — |

## Trabalho em destaque

**Mortalidade intra-hospitalar em pacientes com HIV e tuberculose.** Análise de fatores associados, apresentada como pôster científico com a equipe do Hospital Posadas e da SADI. [Ver pôster (PDF)](assets/poster-tbc-sadi-op3.pdf)

## Stack

- **Linguagens:** Python, SQL
- **ML e Deep Learning:** Scikit-learn, XGBoost, TensorFlow, PyTorch, Pandas, NumPy
- **Computer Vision e Edge AI:** OCR, reconhecimento facial, inferência em Raspberry Pi, RTSP
- **Visualização e BI:** Power BI, Tableau, Looker, Qlik, Matplotlib, Seaborn, Plotly
- **Engenharia e MLOps:** Git, Docker, APIs, pipelines ETL
- **Cloud:** AWS, Azure, GCP

## Recursos para alunos

Notebooks, guias e exercícios de Data Science e Machine Learning no repositório [Students](https://github.com/luchoxiii/Students).

## Contato

Meu e-mail profissional está na [seção de contato do portfolio](https://luchoxiii.github.io/?lang=pt#contact). Não o publico aqui para evitar spam.

## Sobre este repositório

É o código do portfolio, um site estático publicado com GitHub Pages a partir da branch `main`. Não há etapa de build: cada alteração enviada é publicada automaticamente.

| Arquivo | Conteúdo |
|---|---|
| `index.html` | A página inteira: estrutura, estilos, textos em 6 idiomas e lógica |
| `accessibility.js` / `accessibility.css` | Painel de acessibilidade e melhorias ARIA |
| `assets/` | Favicons e pôster científico (JPG e PDF) |
| `foto.jpg` | Foto de perfil e imagem para redes sociais |
| `sitemap.xml`, `robots.txt` | SEO |

**Como editar o mais comum (tudo dentro de `index.html`):**

- **Certificações:** objeto `certConfig`. Preencha `verifyUrl` com o link do Credly ou do Microsoft Learn e o cartão deixa de aparecer como "em breve".
- **Pôster e doações:** objeto `portfolioConfig`.
- **Textos e idiomas:** objetos `content`, `extras` e `i18n`. Ao adicionar um texto novo no HTML, coloque `data-i18n="chave"` e cadastre essa chave nos 6 idiomas dentro de `i18n`; caso contrário, ele ficará sem tradução.
