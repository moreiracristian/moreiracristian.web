"use client";

import { useLang } from "@/contexts/LanguageContext";
import { DollarSign, LayoutDashboard, RefreshCw, Package, Database, MessageSquare } from "lucide-react";

const iconMap = { DollarSign, LayoutDashboard, RefreshCw, Package, Database, MessageSquare } as const;
type IconKey = keyof typeof iconMap;

export default function Services() {
  const { tr } = useLang();
  const s = tr.services;

  return (
    <section id="servicios" style={{ background: "var(--bg-primary)", width: "100%", padding: "6rem 0" }}>
      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: "9999px", marginBottom: "1.5rem", border: "1px solid rgba(30,58,138,0.2)", color: "var(--accent-blue)", background: "var(--accent-blue-dim)" }}>
            {s.tag}
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
            {s.title}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            {s.subtitle}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {s.items.map((item) => {
            const Icon = iconMap[item.icon as IconKey];
            return (
              <div
                key={item.title}
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.75rem", transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s", display: "flex", flexDirection: "column", boxShadow: "var(--shadow-card)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(30,58,138,0.35)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", background: "var(--accent-blue-dim)", border: "1px solid rgba(30,58,138,0.15)" }}>
                  {Icon && <Icon size={20} style={{ color: "var(--accent-blue)" }} />}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-muted)", flex: 1 }}>
                  {item.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "0.375rem", background: "var(--accent-blue-dim)", color: "var(--accent-blue)", border: "1px solid rgba(30,58,138,0.15)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="#contacto"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, padding: "1rem 2rem", borderRadius: "0.75rem", background: "var(--accent-blue)", color: "#FFFFFF", textDecoration: "none", transition: "opacity 0.2s, box-shadow 0.2s", boxShadow: "0 2px 8px rgba(30,58,138,0.3)" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {tr.nav.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
