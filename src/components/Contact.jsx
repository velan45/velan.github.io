import { useState } from "react";
import { content } from "../content.js";
import Section, { SocialLinks } from "./Section.jsx";
import Icon from "./Icon.jsx";

const EMPTY = { name: "", email: "", message: "" };

export default function Contact({ section, onCopyEmail, notify }) {
  const { profile, contact } = content;
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!contact.formEndpoint) {
      const subject = `Portfolio inquiry from ${form.name}`;
      const body = `${form.message}\n\n— ${form.name} (${form.email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      setForm(EMPTY);
      notify("Thanks! Your message has been sent.");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section section={section} className="contact-section">
      <div className="contact">
        <div className="contact__info">
          <p className="lead">{contact.text}</p>
          <div className="card contact__email">
            <div>
              <span className="muted small">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <button type="button" className="icon-btn" onClick={onCopyEmail} aria-label="Copy email address" title="Copy">
              <Icon name="copy" />
            </button>
          </div>
          <p className="muted contact__loc">
            <Icon name="pin" size={16} /> {profile.location}
          </p>
          <SocialLinks socials={profile.socials} />
        </div>

        <form className="card form" onSubmit={onSubmit}>
          <div className="form__row">
            <label>
              <span>Name</span>
              <input name="name" value={form.name} onChange={update} required maxLength={100} autoComplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                required
                maxLength={200}
                autoComplete="email"
              />
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea name="message" rows={5} value={form.message} onChange={update} required maxLength={5000} />
          </label>
          <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"} <Icon name="arrowRight" />
          </button>
          {status === "error" && (
            <p className="form__error" role="alert">
              Something went wrong. Please email me directly at {profile.email}.
            </p>
          )}
          {status === "sent" && <p className="form__ok">Message sent — I&apos;ll get back to you soon.</p>}
        </form>
      </div>
    </Section>
  );
}
