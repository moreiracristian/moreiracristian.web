"use client";

import { useLang } from "@/contexts/LanguageContext";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const { tr } = useLang();
  const h = tr.hero;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 grid-pattern overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "var(--accent-blue)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "var(--accent-cyan)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{
              border: "1px solid var(--border)",
              background: "var(--accent-blue-dim)",
              color: "var(--accent-cyan)",
            }}
          >
            {h.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
          {h.headline1}
          <br />
          <span className="gradient-text">{h.headline2}</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {h.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a
            href="#contacto"
            className="group flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all glow-blue text-white"
            style={{
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
            }}
          >
            {h.cta1}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicios"
            className="font-semibold px-8 py-4 rounded-xl transition-all"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              background: "var(--accent-blue-dim)",
            }}
          >
            {h.cta2}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {[h.stat1, h.stat2, h.stat3].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center p-4 rounded-xl"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <span className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</span>
              <span className="text-xs mt-1 text-center leading-tight" style={{ color: "var(--text-muted)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-slow" style={{ color: "var(--text-muted)" }}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
