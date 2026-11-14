import { useState } from "react";
import { resumes, certificates } from "../content.js";
import Section, { ExternalLink } from "./Section.jsx";
import Icon from "./Icon.jsx";
import Modal from "./Modal.jsx";

const formatDate = (value) => {
  if (!value) return "";
  const [y, m] = String(value).split("-");
  if (!m) return y;
  const d = new Date(Number(y), Number(m) - 1, 1);
  return Number.isNaN(d.getTime()) ? value : d.toLocaleDateString(undefined, { month: "short", year: "numeric" });
};

export default function Credentials({ section }) {
  const [viewing, setViewing] = useState(null);

  return (
    <Section section={section}>
      {resumes.length > 0 && (
        <DocumentGroup title="Résumé" icon="file" docs={resumes} onView={setViewing} />
      )}
      {certificates.length > 0 && (
        <DocumentGroup title="Certifications" icon="award" docs={certificates} onView={setViewing} />
      )}
      {viewing && <DocumentViewer doc={viewing} onClose={() => setViewing(null)} />}
    </Section>
  );
}

function DocumentGroup({ title, icon, docs, onView }) {
  return (
    <div className="docs">
      <h3 className="docs__title">
        <Icon name={icon} /> {title}
        <span className="filter__count">{docs.length}</span>
      </h3>
      <div className="grid grid--3">
        {docs.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} onView={() => onView(doc)} />
        ))}
      </div>
    </div>
  );
}

function DocumentCard({ doc, onView }) {
  const meta = [doc.issuer, formatDate(doc.date)].filter(Boolean).join(" · ");
  return (
    <article className="card doc">
      <button type="button" className="doc__preview" onClick={onView} aria-label={`View ${doc.title}`}>
        {doc.type === "image" ? (
          <img src={doc.url} alt="" loading="lazy" />
        ) : (
          <span className="doc__pdf">
            <Icon name="file" size={40} />
            <span>PDF</span>
          </span>
        )}
      </button>
      <div className="doc__body">
        <h4 className="doc__name">{doc.title}</h4>
        {meta && <p className="muted small doc__meta">{meta}</p>}
        {doc.description && <p className="muted small">{doc.description}</p>}
      </div>
      <footer className="doc__actions">
        <button type="button" className="btn btn--ghost btn--sm" onClick={onView}>
          <Icon name="eye" size={16} /> View
        </button>
        <a href={doc.url} download={doc.fileName} className="icon-btn" aria-label={`Download ${doc.title}`} title="Download">
          <Icon name="download" />
        </a>
        {doc.credentialUrl && (
          <ExternalLink href={doc.credentialUrl} className="icon-btn" aria-label={`Verify ${doc.title}`} title="Verify credential">
            <Icon name="external" />
          </ExternalLink>
        )}
      </footer>
    </article>
  );
}

function DocumentViewer({ doc, onClose }) {
  return (
    <Modal labelledBy="doc-viewer-title" className="dialog--wide" onClose={onClose}>
      {(close) => (
        <div className="dialog__body viewer">
          <header className="dialog__head">
            <div>
              <span className="eyebrow">{doc.issuer || (doc.type === "pdf" ? "PDF document" : "Image")}</span>
              <h2 id="doc-viewer-title">{doc.title}</h2>
            </div>
            <button type="button" className="icon-btn" onClick={close} aria-label="Close">
              <Icon name="close" />
            </button>
          </header>

          <div className="viewer__frame">
            {doc.type === "pdf" ? (
              <iframe src={doc.url} title={doc.title} />
            ) : (
              <img src={doc.url} alt={doc.title} />
            )}
          </div>

          <footer className="dialog__actions">
            <ExternalLink href={doc.url} className="btn btn--ghost">
              Open in new tab <Icon name="external" />
            </ExternalLink>
            <a href={doc.url} download={doc.fileName} className="btn btn--primary">
              <Icon name="download" /> Download
            </a>
            {doc.credentialUrl && (
              <ExternalLink href={doc.credentialUrl} className="btn btn--ghost">
                Verify credential <Icon name="external" />
              </ExternalLink>
            )}
          </footer>
        </div>
      )}
    </Modal>
  );
}
