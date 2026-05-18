"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { tr } = useLang();
  const f = tr.faq;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "var(--bg-surface)", width: "100%", padding: "6rem 0" }}>
      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: "9999px", marginBottom: "1.5rem", border: "1px solid rgba(30,58,138,0.2)", color: "var(--accent-blue)", background: "var(--accent-blue-dim)" }}>
            {f.tag}
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
            {f.title}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            {f.subtitle}
          </p>
        </div>

        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {f.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                border: `1px solid ${open === i ? "rgba(30,58,138,0.35)" : "var(--border)"}`,
                borderRadius: "0.875rem",
                overflow: "hidden",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxShadow: open === i ? "var(--shadow-card-hover)" : "var(--shadow-card)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.5rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}
              >
                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }}>
                  {item.q}
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <ChevronDown size={18} style={{ color: "var(--accent-blue)" }} />
                </span>
              </button>

              {open === i && (
                <div style={{ padding: "0 1.5rem 1.25rem" }}>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--text-muted)" }}>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
