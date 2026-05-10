"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, tr } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y < 60) {
        setHidden(false);
      } else if (y > lastY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: tr.nav.services, href: "#servicios" },
    { label: tr.nav.howIWork, href: "#como-trabajo" },
    { label: tr.nav.projects, href: "#proyectos" },
    { label: tr.nav.about, href: "#sobre-mi" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.4s ease, background 0.3s ease",
        background: scrolled ? "rgba(10, 15, 30, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(59,130,246,0.15)" : "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#inicio"
          style={{ fontWeight: 700, fontSize: "1.125rem", letterSpacing: "-0.02em", color: "var(--text-primary)", textDecoration: "none" }}
        >
          CM<span className="gradient-text">.</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: lang + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="hidden md:flex">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              background: "var(--accent-blue-dim)",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#contacto"
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
              color: "white",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {tr.nav.cta}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          style={{ color: "var(--text-primary)", background: "none", border: "none", cursor: "pointer", padding: "0.25rem" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(10,15,30,0.98)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: "0.875rem", padding: "0.5rem 0", color: "var(--text-muted)", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.5rem" }}>
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                background: "none",
                cursor: "pointer",
              }}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "0.5rem 1.25rem",
                borderRadius: "0.5rem",
                background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
                color: "white",
                textDecoration: "none",
              }}
            >
              {tr.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
