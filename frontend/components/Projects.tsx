"use client";

import { useLang } from "@/contexts/LanguageContext";
import { ExternalLink, Zap } from "lucide-react";

export default function Projects() {
  const { tr } = useLang();
  const p = tr.projects;

  return (
    <section id="proyectos" style={{ background: "var(--bg-primary)", width: "100%", padding: "6rem 0" }}>
      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: "9999px", marginBottom: "1.5rem", border: "1px solid rgba(30,58,138,0.2)", color: "var(--accent-blue)", background: "var(--accent-blue-dim)" }}>
            {p.tag}
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
            {p.title}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            {p.subtitle}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {p.items.map((item) => (
            <div
              key={item.title}
              className="site-card"
              style={{ display: "flex", flexDirection: "column", padding: "1.75rem", borderRadius: "1rem", background: "var(--bg-card)", border: "1px solid var(--border)", transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: "var(--shadow-card)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(30,58,138,0.35)";
                e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--accent-cyan)" }}>
                  {item.company}
                </span>
                {"link" in item && item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-muted)", opacity: 0.5, transition: "opacity 0.2s" }}
                    aria-label="Ver en GitHub"
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-muted)", flex: 1 }}>
                {item.desc}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", padding: "0.75rem", borderRadius: "0.5rem", background: "var(--accent-blue-dim)", border: "1px solid rgba(30,58,138,0.15)" }}>
                <Zap size={14} style={{ color: "var(--accent-blue)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--accent-blue)" }}>
                  {item.highlight}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
                {item.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "0.375rem", background: "var(--bg-surface)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="https://github.com/moreiracristian"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-blue)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <ExternalLink size={16} />
            Ver todos los proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
