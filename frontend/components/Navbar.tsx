"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const { lang, setLang, tr } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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

  const p = isHome ? "" : "/";
  const links = [
    { label: tr.nav.services, href: `${p}#servicios` },
    { label: tr.nav.howIWork, href: `${p}#como-trabajo` },
    { label: tr.nav.projects, href: `${p}#proyectos` },
    { label: tr.nav.about, href: `${p}#sobre-mi` },
    { label: tr.nav.blog, href: "/blog" },
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
        transition: "transform 0.4s ease, background 0.3s ease, box-shadow 0.3s ease",
        background: (scrolled || open) ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: (scrolled || open) ? "blur(12px)" : "none",
        borderBottom: (scrolled || open) ? "1px solid rgba(156,163,175,0.2)" : "none",
        boxShadow: (scrolled || open) ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
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
        <a href={isHome ? "#inicio" : "/"} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src={(scrolled || open) ? "/icon-blue.png" : "/icon-light.png"}
            alt="Cristian Moreira"
            width={36}
            height={36}
            style={{ display: "block" }}
            priority
          />
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: "0.875rem", color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.75)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? "var(--accent-blue)" : "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.75)")}
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
              border: scrolled ? "1px solid rgba(156,163,175,0.4)" : "1px solid rgba(255,255,255,0.3)",
              color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.8)",
              background: scrolled ? "var(--accent-blue-dim)" : "rgba(255,255,255,0.08)",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = scrolled ? "var(--accent-blue)" : "rgba(255,255,255,0.6)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = scrolled ? "rgba(156,163,175,0.4)" : "rgba(255,255,255,0.3)")}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href={`${p}#contacto`}
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
              background: scrolled ? "var(--accent-blue)" : "#FFFFFF",
              color: scrolled ? "#FFFFFF" : "#1E3A8A",
              textDecoration: "none",
              transition: "opacity 0.2s, box-shadow 0.2s",
              boxShadow: scrolled ? "none" : "0 2px 8px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {tr.nav.cta}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          style={{ color: (scrolled || open) ? "var(--text-primary)" : "#FFFFFF", background: "none", border: "none", cursor: "pointer", padding: "0.25rem" }}
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
            background: "rgba(255,255,255,0.98)",
            borderTop: "1px solid rgba(156,163,175,0.2)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
          className="md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: "0.9rem", padding: "0.75rem 0", color: "var(--text-primary)", textDecoration: "none", borderBottom: "1px solid rgba(156,163,175,0.12)", display: "block", fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", paddingTop: "0.75rem" }}>
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                border: "1px solid rgba(156,163,175,0.4)",
                color: "var(--text-muted)",
                background: "var(--accent-blue-dim)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <a
              href={`${p}#contacto`}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                padding: "0.6rem 1.5rem",
                borderRadius: "0.5rem",
                background: "var(--accent-blue)",
                color: "white",
                textDecoration: "none",
                flexShrink: 0,
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
