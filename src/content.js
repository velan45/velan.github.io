import data from "../content/portfolio.json";

export const content = data;

/** Resolve a path from the content file to a URL (handles absolute URLs and the Vite base path). */
export function asset(path) {
  if (!path) return "";
  if (/^(https?:|mailto:|tel:|data:)/.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

/* ---------------------------------------------------------------------------
   Documents: any PDF / image dropped into documents/resumes or
   documents/certificates is picked up automatically at build time.
   Optional metadata is keyed by file name in content/portfolio.json → documents.
   --------------------------------------------------------------------------- */
const resumeFiles = import.meta.glob(
  "/documents/resumes/*.{pdf,PDF,jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}",
  { eager: true, query: "?url", import: "default" }
);
const certificateFiles = import.meta.glob(
  "/documents/certificates/*.{pdf,PDF,jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}",
  { eager: true, query: "?url", import: "default" }
);

const titleFromFileName = (name) =>
  name
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

function buildDocuments(files, meta = {}) {
  return Object.entries(files)
    .map(([path, url]) => {
      const fileName = path.split("/").pop();
      const info = meta[fileName] ?? {};
      return {
        ...info,
        id: fileName,
        fileName,
        url,
        type: /\.pdf$/i.test(fileName) ? "pdf" : "image",
        title: info.title || titleFromFileName(fileName),
      };
    })
    .filter((doc) => doc.visible !== false)
    .sort(
      (a, b) =>
        Number(Boolean(b.primary)) - Number(Boolean(a.primary)) ||
        String(b.date ?? "").localeCompare(String(a.date ?? "")) ||
        a.title.localeCompare(b.title)
    );
}

export const resumes = buildDocuments(resumeFiles, data.documents?.resumes);
export const certificates = buildDocuments(certificateFiles, data.documents?.certificates);
export const primaryResume = resumes[0] ?? null;

const hasContent = {
  resume: resumes.length > 0,
  certificates: certificates.length > 0,
};

/** Sections render in the order their keys appear in content/portfolio.json. */
export const visibleSections = Object.entries(data.sections)
  .filter(([id, cfg]) => cfg.visible && hasContent[id] !== false)
  .map(([id, cfg]) => ({ id, ...cfg }));
