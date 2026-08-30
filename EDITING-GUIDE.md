# Editing guide

You never need to open a component to change what the site says. Everything editable lives in
src/content/. Save a file and the browser refreshes itself.

---

## 0. First five minutes

1. Run: npm install, then npm run dev, then open the address it prints.
2. Open src/content/site.config.js and replace TODO-PASTE-YOUR-LINKEDIN-URL.
3. Put your CV in public/ named exactly Ali_Ajvand_Resume.pdf
4. Put your photo in public/images/ named exactly profile.jpg (square).
5. In every file inside src/content/projects/, replace repo: TODO-REPO-NAME with the real
   GitHub repository name. Just the name, not the full URL.

Until steps 3 and 4 are done the site still works. The avatar shows your initials and the
resume button simply does nothing useful.

---

## 1. Colours and fonts

src/content/design-tokens.js is the only file in the project that contains a colour.
Every component reads from it. Change accent and every button, link and chart follows,
in both themes.

The dark block is what visitors see by default. The light block is the theme behind the
sun / moon button at the bottom of the rail.

If you change a font name, also update the single Google Fonts link tag in index.html,
otherwise the browser has nothing to download.

---

## 2. Adding a project (the important one)

Copy any file in src/content/projects/, rename it, edit it. That is the entire process.
The filename becomes the web address: sales-forecasting.md becomes /projects/sales-forecasting
The project list, the category filter and the sitemap all update themselves.

The block between the two --- lines is the metadata:

    ---
    title: Sales Forecasting Engine
    categories: [Machine Learning, Dashboard]
    repo: sales-forecasting
    tech: [Python, LightGBM, Power BI]
    summary: One or two sentences that make someone click.
    thumbnail: figure:line
    featured: true
    order: 5
    powerBiEmbedUrl:
    screenshots: []
    biSection: Dashboard
    stats:
      - label: Rows modelled
        value: 1.2M
    figures:
      Overview: figure:dashboard
      Results: /images/results-chart.png
    ---

What each line does:

- categories must match names listed in site.config.js. Invent a new one and it is added to
  the filter automatically.
- repo powers the live stars / language / last-updated line and the in-page code browser.
  Leave it as TODO and those parts stay quietly switched off.
- featured: true gives the project a larger card and puts it on the homepage.
- order sorts the list. Lower numbers first.
- figures attaches a picture to a section, matched by the section heading text.

Below the metadata, write the case study using ## headings. Each heading becomes one section
on the page, in the order you write them, each with its own picture slot:

    ## Overview
    ## Problem Statement
    ## Business Goal
    ## Dataset
    ## Data Cleaning
    ## EDA
    ## Feature Engineering
    ## Model
    ## Evaluation
    ## Results
    ## Business Insights
    ## Future Work

Drop or rename any of them freely. Nothing in the code depends on that list.

Built-in figures, usable as figure:name with no image file needed:
dashboard, line, bars, donut, clusters, matrix, rules, shap, map, pipeline, flow.

Real screenshots: drop the file into public/images/, then reference it as
/images/your-file.png. Export around 1600px wide and compress it first so the Lighthouse
score stays high.

Anything you write as a markdown blockquote (a line starting with a right angle bracket)
renders as a visible dashed note. That is what the TODO reminders in the current project files
use, so they never look like finished copy. Delete them as you fill each section in.

---

## 3. Power BI dashboards

In Power BI Service: File, then Embed report, then Publish to web (public). Copy the src URL
out of the iframe snippet it gives you and paste it into powerBiEmbedUrl: in the project file.
The report then renders live inside the case study, lazy loaded so it never slows the page
down, and visitors never download a pbix file.

No embed URL yet? Put screenshots in screenshots: [/images/bi-1.png, /images/bi-2.png] and the
same slot becomes a tabbed screenshot viewer instead.

Warning: Publish to web makes a report public to anyone with the link. Never use it with
client data. For client work, use screenshots.

---

## 4. Experience

One file per job in src/content/experience/. Frontmatter for the facts, markdown bullets for
the content, order: controls which appears first. Logos go in src/content/experience/logos/,
see the README in that folder. Without a logo the site shows a clean monogram, which reads as
intentional rather than broken.

## 5. Skills

src/content/skills.json. Group name on the left, list of skills on the right. Add a group and
it appears. No percentage bars anywhere, on purpose. Nobody believes Python 87 percent.

## 6. How I work

src/content/process.json. Three steps, each with a label, a summary and its items. The items
are the branches that open on hover, tap or keyboard focus.

## 7. Sidebar

src/content/sidebar.config.js. Reorder the list to reorder the icons. The icon value must be a
name from src/lib/icons.js, and that file explains at the top how to register a new one.

---

## 8. SEO

Already handled: semantic landmarks, per route titles and descriptions, canonical URLs,
Open Graph and Twitter cards, Person and CreativeWork structured data, robots.txt, and a
sitemap.xml regenerated on every build.

Still on you:

- Replace public/og-image.png with a branded version once you have a photo (1200x630).
- Submit the sitemap URL to Google Search Console.
- Write descriptive summary lines. They become the meta description of each project page,
  which is the text Google shows in the results list.

One honest limitation. This is a client rendered single page app. Google runs JavaScript so it
indexes fine, but some crawlers and social preview bots do not. Once you have real projects
live and want maximum reach, add a prerender step (react-snap, vite-plugin-ssr, or move to
Astro) so every route also ships as static HTML. The content layer here ports over unchanged.

---

## 9. Custom domain, later

Add a file called CNAME in public/ containing only your domain, point the DNS at GitHub Pages,
then update url: in site.config.js and the Sitemap line in public/robots.txt. Nothing else
changes.

---

## 10. Things that will confuse you once

- A page looks unstyled for a split second on first load. That is the font downloading.
- Repo stats show a rate limit message. GitHub allows 60 unauthenticated calls per hour per
  visitor. Results are cached per browser session, so real visitors almost never hit it.
- You edited a project file and nothing changed. Check that the metadata block still has both
  --- lines and that indentation uses spaces, never tabs.
- Deep links like /projects/something work on GitHub Pages because of public/404.html. Do not
  delete that file.
