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
        padding: "5rem 1.5rem 4rem",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0A1628 0%, #1E3A8A 55%, #1D4ED8 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "20%",
          width: "28rem",
          height: "28rem",
          borderRadius: "9999px",
          filter: "blur(80px)",
          opacity: 0.25,
          pointerEvents: "none",
          background: "#3B82F6",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "20%",
          width: "20rem",
          height: "20rem",
          borderRadius: "9999px",
          filter: "blur(80px)",
          opacity: 0.18,
          pointerEvents: "none",
          background: "#BFDBFE",
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
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.08)",
              color: "#93C5FD",
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
            color: "#FFFFFF",
          }}
        >
          {h.headline1}
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #93C5FD, #BFDBFE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {h.headline2}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "40rem",
            margin: "0 auto 2.5rem",
          }}
        >
          {h.sub}
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <a
            href="#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: 600,
              padding: "1rem 2rem",
              borderRadius: "0.75rem",
              background: "#FFFFFF",
              color: "#1E3A8A",
              textDecoration: "none",
              transition: "opacity 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.92";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.2)";
            }}
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
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              background: "rgba(255,255,255,0.08)",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
              backdropFilter: "blur(4px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.background = "rgba(255,255,255,0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            }}
          >
            {h.cta2}
          </a>
        </div>

        {/* Stats */}
        <div className="grid-stats">
          {[h.stat1, h.stat2, h.stat3].map((s) => (
            <div
              key={s.label}
              className="stat-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="stat-value"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #FFFFFF, #93C5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  marginTop: "0.25rem",
                  textAlign: "center",
                  lineHeight: 1.4,
                  color: "rgba(255,255,255,0.6)",
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
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
