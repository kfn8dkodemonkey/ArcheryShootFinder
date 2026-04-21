# 🏹 ArcheryShootFinder

A high-performance, headless website for finding archery shoots. Built with **Gatsby** for the frontend, **WordPress** as a headless CMS, and hosted on **GitHub Pages**.

## 🏗 Architecture Overview

This project uses a "Headless" approach to ensure maximum speed and SEO performance:

*   **Frontend:** [Gatsby](https://gatsbyjs.com) (React-based Static Site Generator).
*   **CMS:** [WordPress](https://wordpress.org) (Hosted on SiteGround at `://archeryshootfinder.com`).
*   **API:** [WPGraphQL](https://wpgraphql.com) to bridge WordPress data to Gatsby.
*   **Hosting:** [GitHub Pages](https://github.com) for the live site.
*   **DNS:** Custom domain `archeryshootfinder.com` configured with split DNS between GitHub (Apex) and SiteGround (Subdomain).

## 🚀 Getting Started

### Prerequisites

*   Node.js (LTS version)
*   Gatsby CLI: `npm install -g gatsby-cli`

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com
    cd archeryshootfinder
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment:**
    Ensure your `gatsby-config.js` points to the WordPress GraphQL endpoint:
    ```javascript
    url: `https://://archeryshootfinder.com/graphql`
    ```

4.  **Start developing:**
    ```bash
    gatsby clean && gatsby develop
    ```
    The site will be running at `http://localhost:8000`.

## 📦 Deployment

This site is deployed to GitHub Pages. To push a new build:

1.  **Ensure a CNAME file exists** in your `/static` folder containing `archeryshootfinder.com`.
2.  **Run the deploy script:**
    ```bash
    npm run deploy
    ```
    *Note: This usually runs `gatsby build` and pushes the contents of the `public` folder to the `gh-pages` branch.*

## 🛠 Features

- [x] **Blazing Fast:** Static files served via GitHub's CDN.
- [x] **SEO Optimized:** Automatic sitemap and metadata generation via Gatsby.
- [x] **Easy Content Management:** Traditional WordPress dashboard for easy updates.
- [x] **Responsive Design:** Mobile-first layout for archers on the go.

---
*Created by [Your Name]*
