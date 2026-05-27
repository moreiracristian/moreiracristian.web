"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Code2, BarChart3, Database, Server, LineChart, Brain } from "lucide-react";

const iconMap = { Code2, BarChart3, Database, Server, LineChart, Brain } as const;
type IconKey = keyof typeof iconMap;

export default function TechExpertise() {
  const { tr } = useLang();
  const s = tr.techExpertise;

  return (
    <section
      id="expertise"
      style={{
        background: "linear-gradient(160deg, #0A1628 0%, #0F2044 50%, #0A1628 100%)",
        width: "100%",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-8rem", right: "-6rem", width: "36rem", height: "36rem", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10rem", left: "-8rem", width: "40rem", height: "40rem", borderRadius: "50%", background: "radial-gradient(circle, rgba(30,58,138,0.12) 0%, transparent 70%)" }} />
      </div>

      <div className="section-inner" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              marginBottom: "1.5rem",
              border: "1px solid rgba(59,130,246,0.35)",
              color: "#60A5FA",
              background: "rgba(59,130,246,0.1)",
            }}
          >
            {s.tag}
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            {s.title}
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            {s.subtitle}
          </p>
        </div>

        {/* Track grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))",
            gap: "1rem",
          }}
        >
          {s.tracks.map((track) => {
            const Icon = iconMap[track.icon as IconKey];
            return (
              <div
                key={track.num}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: "2px solid rgba(59,130,246,0.5)",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  transition: "background 0.2s, border-color 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.055)";
                  e.currentTarget.style.borderLeftColor = "rgba(96,165,250,0.8)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderLeftColor = "rgba(59,130,246,0.5)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      color: "rgba(96,165,250,0.7)",
                      textTransform: "uppercase",
                      paddingTop: "0.15rem",
                    }}
                  >
                    {track.num}
                  </span>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "0.625rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      flexShrink: 0,
                    }}
                  >
                    {Icon && <Icon size={17} style={{ color: "#60A5FA" }} />}
                  </div>
                </div>

                {/* Title & description */}
                <h3
                  style={{
                    fontSize: "0.975rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "0.5rem",
                    lineHeight: 1.35,
                  }}
                >
                  {track.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.855rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  {track.desc}
                </p>

                {/* Module badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {track.modules.map((mod) => (
                    <span
                      key={mod}
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 500,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "0.375rem",
                        background: "rgba(59,130,246,0.1)",
                        color: "rgba(147,197,253,0.85)",
                        border: "1px solid rgba(59,130,246,0.18)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a
            href="#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: 600,
              fontSize: "0.95rem",
              padding: "1rem 2.25rem",
              borderRadius: "0.75rem",
              background: "#FFFFFF",
              color: "#0F2044",
              textDecoration: "none",
              transition: "opacity 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.92";
              e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
            }}
          >
            {s.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
