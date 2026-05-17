"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Mail } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  const { tr } = useLang();
  const f = tr.footer;
  const year = new Date().getFullYear();

  const links = [
    { label: f.links.services, href: "#servicios" },
    { label: f.links.howIWork, href: "#como-trabajo" },
    { label: f.links.projects, href: "#proyectos" },
    { label: f.links.contact, href: "#contacto" },
  ];

  const socials = [
    { href: "https://github.com/moreiracristian", icon: GithubIcon, label: "GitHub" },
    { href: "https://linkedin.com/in/moreiracristian", icon: LinkedinIcon, label: "LinkedIn" },
    { href: "mailto:moreiracristianmiguel@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border)", width: "100%", padding: "4rem 0 2rem" }}>
      <div style={{ width: "100%", maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", boxSizing: "border-box" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "2rem",
            marginBottom: "3rem",
            width: "100%",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ fontWeight: 700, fontSize: "1.25rem", color: "var(--text-primary)", margin: 0 }}>
              CM<span className="gradient-text">.</span>
            </p>
            <p style={{ fontSize: "0.75rem", lineHeight: 1.7, color: "var(--text-muted)", margin: 0 }}>
              {f.tagline}
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
              📍 {f.location}
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-primary)", marginBottom: "0.25rem" }}>
              Navegación
            </p>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s", width: "fit-content" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-primary)", marginBottom: "0.25rem" }}>
              Contacto
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-blue)";
                    e.currentTarget.style.color = "var(--accent-blue)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/543624024589"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                width: "fit-content",
                background: "rgba(37,211,102,0.1)",
                border: "1px solid rgba(37,211,102,0.3)",
                color: "#25D366",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(37,211,102,0.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(37,211,102,0.1)")}
            >
              WhatsApp directo →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
            © {year} {f.copy}
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
            Desarrollado por{" "}
            <span className="gradient-text" style={{ fontWeight: 600 }}>2moreit</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
