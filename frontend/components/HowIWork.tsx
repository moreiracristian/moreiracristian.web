"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Shield, Clock, Heart, HandshakeIcon } from "lucide-react";

const iconMap = { Shield, Clock, Heart, Handshake: HandshakeIcon } as const;
type IconKey = keyof typeof iconMap;

export default function HowIWork() {
  const { tr } = useLang();
  const h = tr.howIWork;

  return (
    <section id="como-trabajo" style={{ background: "var(--bg-surface)", width: "100%", padding: "6rem 0" }}>
      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: "9999px", marginBottom: "1.5rem", border: "1px solid rgba(30,58,138,0.2)", color: "var(--accent-blue)", background: "var(--accent-blue-dim)" }}>
            {h.tag}
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
            {h.title}
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            {h.subtitle}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "clamp(2rem, 5vw, 4rem)", alignItems: "start" }}>
          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {h.steps.map((step, i) => (
              <div key={step.num} style={{ display: "flex", gap: "1.25rem" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", color: "white", background: "var(--accent-blue)", flexShrink: 0 }}>
                    {step.num}
                  </div>
                  {i < h.steps.length - 1 && (
                    <div style={{ width: "1px", flex: 1, marginTop: "0.5rem", minHeight: "2rem", background: "rgba(30,58,138,0.2)" }} />
                  )}
                </div>
                <div style={{ paddingBottom: "0.5rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.25rem", color: "var(--text-primary)" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {h.values.map((v) => {
              const Icon = iconMap[v.icon as IconKey];
              return (
                <div key={v.label} style={{ padding: "1.5rem", borderRadius: "1rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow-card)" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--accent-blue-dim)" }}>
                    {Icon && <Icon size={22} style={{ color: "var(--accent-blue)" }} />}
                  </div>
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-primary)" }}>
                    {v.label}
                  </span>
                </div>
              );
            })}

            <div style={{ gridColumn: "span 2", padding: "1.5rem", borderRadius: "1rem", background: "var(--accent-blue-dim)", border: "1px solid rgba(30,58,138,0.15)" }}>
              <p style={{ fontSize: "0.875rem", fontStyle: "italic", lineHeight: 1.7, color: "var(--text-muted)" }}>
                &ldquo;No entrego un informe y desaparezco. Soy tu respaldo continuo para que entiendas lo que pasa en tu negocio y puedas actuar sobre eso.&rdquo;
              </p>
              <p style={{ fontSize: "0.75rem", marginTop: "0.75rem", fontWeight: 600, color: "var(--accent-blue)" }}>
                — Cristian Moreira
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
