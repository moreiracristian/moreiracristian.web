"use client";

import { useLang } from "@/contexts/LanguageContext";

export default function About() {
  const { tr } = useLang();
  const a = tr.about;

  return (
    <section id="sobre-mi" style={{ background: "var(--bg-surface)", width: "100%", padding: "6rem 0" }}>
      <div className="section-inner">
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: "9999px", marginBottom: "2rem", border: "1px solid var(--border)", color: "var(--accent-cyan)", background: "var(--accent-cyan-dim)" }}>
            {a.tag}
          </span>

          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--text-primary)", lineHeight: 1.3 }}>
            {a.title}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {a.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
                {p}
              </p>
            ))}
          </div>

          {/* Skills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem", justifyContent: "center" }}>
            {a.skills.map((skill) => (
              <span key={skill} style={{ fontSize: "0.75rem", padding: "0.3rem 0.75rem", borderRadius: "9999px", fontWeight: 500, background: "var(--accent-blue-dim)", color: "var(--accent-blue)", border: "1px solid rgba(59,130,246,0.25)" }}>
                {skill}
              </span>
            ))}
          </div>

          <a
            href="https://linkedin.com/in/moreiracristian"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--accent-blue)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-blue)")}
          >
            Ver perfil completo en LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
