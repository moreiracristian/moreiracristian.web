"use client";

import { useLang } from "@/contexts/LanguageContext";
import { ShoppingCart, Truck, Store, Building2 } from "lucide-react";

const iconMap = { ShoppingCart, Truck, Store, Building2 } as const;
type IconKey = keyof typeof iconMap;

export default function Segments() {
  const { tr } = useLang();
  const s = tr.segments;

  return (
    <section id="clientes" style={{ background: "var(--bg-surface)", width: "100%", padding: "6rem 0" }}>
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "1.5rem" }}>
          {s.items.map((item) => {
            const Icon = iconMap[item.icon as IconKey];
            return (
              <div
                key={item.title}
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem", transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s", boxShadow: "var(--shadow-card)" }}
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
                <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--accent-blue-dim)", border: "1px solid rgba(30,58,138,0.15)", flexShrink: 0 }}>
                  {Icon && <Icon size={20} style={{ color: "var(--accent-blue)" }} />}
                </div>

                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
                  {item.examples.map((ex) => (
                    <span key={ex} style={{ fontSize: "0.7rem", padding: "0.2rem 0.6rem", borderRadius: "0.375rem", background: "var(--accent-blue-dim)", color: "var(--accent-blue)", border: "1px solid rgba(30,58,138,0.15)" }}>
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
