"use client";

import { useLang } from "@/contexts/LanguageContext";
import { TrendingDown, Package, BarChart2, Clock } from "lucide-react";

const iconMap = { TrendingDown, Package, BarChart2, Clock } as const;
type IconKey = keyof typeof iconMap;

export default function Problem() {
  const { tr } = useLang();
  const p = tr.problem;

  return (
    <section id="problema" style={{ background: "var(--bg-surface)", width: "100%", padding: "6rem 0" }}>
      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              marginBottom: "1.5rem",
              border: "1px solid rgba(30,58,138,0.2)",
              color: "var(--accent-blue)",
              background: "var(--accent-blue-dim)",
            }}
          >
            {p.tag}
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
            {p.title}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            {p.subtitle}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "1.5rem" }}>
          {p.cards.map((card) => {
            const Icon = iconMap[card.icon as IconKey];
            return (
              <div
                key={card.title}
                className="site-card"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  cursor: "default",
                  boxShadow: "var(--shadow-card)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(30,58,138,0.35)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--accent-blue-dim)", marginBottom: "1rem" }}>
                  {Icon && <Icon size={22} style={{ color: "var(--accent-blue)" }} />}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
