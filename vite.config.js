import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const contentPath = fileURLToPath(new URL("./content/portfolio.json", import.meta.url));
const loadContent = () => JSON.parse(readFileSync(contentPath, "utf-8"));

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const absoluteUrl = (base, path = "") =>
  /^https?:\/\//.test(path) ? path : `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

/**
 * Injects SEO meta tags, Open Graph / Twitter cards and JSON-LD (schema.org Person)
 * from content/portfolio.json, and emits robots.txt + sitemap.xml at build time.
 */
function portfolioSeo() {
  return {
    name: "portfolio-seo",
    transformIndexHtml(html) {
      const { site, profile } = loadContent();
      const image = absoluteUrl(site.url, site.ogImage || profile.avatar);
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        jobTitle: profile.role,
        description: site.description,
        url: site.url,
        image,
        email: `mailto:${profile.email}`,
        address: profile.location,
        knowsAbout: site.keywords,
        sameAs: profile.socials.map((s) => s.url).filter((u) => /^https?:\/\//.test(u)),
      };

      const tags = [
        `<title>${escapeHtml(site.title)}</title>`,
        `<meta name="description" content="${escapeHtml(site.description)}" />`,
        `<meta name="keywords" content="${escapeHtml(site.keywords.join(", "))}" />`,
        `<meta name="author" content="${escapeHtml(profile.name)}" />`,
        `<link rel="canonical" href="${escapeHtml(site.url)}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:url" content="${escapeHtml(site.url)}" />`,
        `<meta property="og:title" content="${escapeHtml(site.title)}" />`,
        `<meta property="og:description" content="${escapeHtml(site.description)}" />`,
        `<meta property="og:image" content="${escapeHtml(image)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${escapeHtml(site.title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(site.description)}" />`,
        `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
        `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`,
      ].join("\n    ");

      return html.replace("<!--seo-->", tags);
    },
    generateBundle() {
      const { site } = loadContent();
      const root = `${site.url.replace(/\/$/, "")}/`;
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\nSitemap: ${root}sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url><loc>${escapeHtml(root)}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>\n` +
          `</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  base: "/velan.github.io/",
  plugins: [react(), portfolioSeo()],
  build: {
    // Always emit documents (PDF/images) as real files so they can be viewed and downloaded.
    assetsInlineLimit: (filePath) => (/[\\/]documents[\\/]/.test(filePath) ? false : undefined),
  },
});
