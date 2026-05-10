"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, tr } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 15, 30, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(59,130,246,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="font-bold text-lg tracking-tight" style={{ color: "var(--text-primary)" }}>
          CM<span className="gradient-text">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors hover:opacity-100"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: lang toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-xs font-medium px-3 py-1 rounded-full transition-all"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              background: "var(--accent-blue-dim)",
            }}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#contacto"
            className="text-sm font-semibold px-5 py-2 rounded-lg transition-all"
            style={{
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
              color: "white",
            }}
          >
            {tr.nav.cta}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          style={{ color: "var(--text-primary)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(10,15,30,0.98)", borderTop: "1px solid var(--border)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm py-2"
              style={{ color: "var(--text-muted)" }}
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold px-5 py-2 rounded-lg"
              style={{
                background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
                color: "white",
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
