"use client";

import { useLang } from "@/contexts/LanguageContext";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const { tr } = useLang();
  const h = tr.hero;

  return (
    <section
      id="inicio"
      className="grid-pattern"
      style={{
        width: "100%",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 1.5rem",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "24rem",
          height: "24rem",
          borderRadius: "9999px",
          filter: "blur(64px)",
          opacity: 0.2,
          pointerEvents: "none",
          background: "var(--accent-blue)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          right: "25%",
          width: "18rem",
          height: "18rem",
          borderRadius: "9999px",
          filter: "blur(64px)",
          opacity: 0.15,
          pointerEvents: "none",
          background: "var(--accent-cyan)",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "56rem", margin: "0 auto" }}>
        {/* Badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              border: "1px solid var(--border)",
              background: "var(--accent-blue-dim)",
              color: "var(--accent-cyan)",
            }}
          >
            {h.badge}
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: "1.5rem",
            color: "var(--text-primary)",
          }}
        >
          {h.headline1}
          <br />
          <span className="gradient-text">{h.headline2}</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.75,
            color: "var(--text-muted)",
            maxWidth: "40rem",
            margin: "0 auto 2.5rem",
          }}
        >
          {h.sub}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          <a
            href="#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: 600,
              padding: "1rem 2rem",
              borderRadius: "0.75rem",
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
              color: "white",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {h.cta1}
            <ArrowRight size={18} />
          </a>
          <a
            href="#servicios"
            style={{
              fontWeight: 600,
              padding: "1rem 2rem",
              borderRadius: "0.75rem",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              background: "var(--accent-blue-dim)",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            {h.cta2}
          </a>
        </div>

        {/* Stats */}
        <div className="grid-stats">
          {[h.stat1, h.stat2, h.stat3].map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                borderRadius: "0.75rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <span className="gradient-text" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                {s.value}
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  marginTop: "0.25rem",
                  textAlign: "center",
                  lineHeight: 1.4,
                  color: "var(--text-muted)",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text-muted)",
        }}
      >
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
