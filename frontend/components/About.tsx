"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Briefcase } from "lucide-react";

export default function About() {
  const { tr } = useLang();
  const a = tr.about;

  return (
    <section id="sobre-mi" style={{ background: "var(--bg-surface)", width: "100%", padding: "6rem 0" }}>
      <div className="section-inner">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
          {/* Left */}
          <div>
            <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: "9999px", marginBottom: "2rem", border: "1px solid var(--border)", color: "var(--accent-cyan)", background: "var(--accent-cyan-dim)" }}>
              {a.tag}
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--text-primary)", lineHeight: 1.3 }}>
              {a.title}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {a.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--text-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {a.skills.map((skill) => (
                <span key={skill} style={{ fontSize: "0.75rem", padding: "0.3rem 0.75rem", borderRadius: "9999px", fontWeight: 500, background: "var(--accent-blue-dim)", color: "var(--accent-blue)", border: "1px solid rgba(59,130,246,0.25)" }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <Briefcase size={18} style={{ color: "var(--accent-blue)" }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" }}>Trayectoria</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {a.experience.map((exp, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", padding: "1.25rem", borderRadius: "0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", marginTop: "0.375rem", flexShrink: 0, background: i === 0 ? "var(--accent-cyan)" : "var(--accent-blue)" }} />
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" }}>{exp.company}</p>
                    <p style={{ fontSize: "0.75rem", marginBottom: "0.2rem", color: "var(--accent-cyan)" }}>{exp.role}</p>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{exp.period}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <a href="https://linkedin.com/in/moreiracristian" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--accent-blue)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-blue)")}
              >
                Ver perfil completo en LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
