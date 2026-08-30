# Ali Ajvand - Portfolio

Personal portfolio of **Ali Ajvand**, Data Scientist, ML Engineer & BI Developer.

Static React + Vite site deployed to GitHub Pages at
[https://aliajvand.github.io/portfolio](https://aliajvand.github.io/portfolio).
Dark-first premium UI, live GitHub integration, in-page code viewer, Power BI embeds, SEO ready.

## Run it locally

    npm install
    npm run dev

## Build and deploy

    npm run build
    npm run preview

`npm run build` regenerates `public/sitemap.xml` first, then builds into `dist/`.

Push to `main` and the included GitHub Action (`.github/workflows/deploy.yml`) builds and
publishes to GitHub Pages automatically. Do this once in the repo: **Settings → Pages →**
set **Source** to **GitHub Actions**.

## Where things live

| I want to change | Open this |
| --- | --- |
| Colours, fonts, spacing | src/content/design-tokens.js |
| Name, contact details, links, resume path | src/content/site.config.js |
| Sidebar icons and their order | src/content/sidebar.config.js |
| About Me text | src/content/about.md |
| Skills | src/content/skills.json |
| Services | src/content/services.md |
| The 3 step How I Work map | src/content/process.json |
| A job | src/content/experience/*.md |
| A project or case study | src/content/projects/*.md |

Full instructions in plain language: EDITING-GUIDE.md

## Stack

React 18, Vite 5, TailwindCSS v4, Framer Motion, React Router 6, lucide-react,
react-markdown with remark-gfm, GitHub REST API. No backend, no secrets.
