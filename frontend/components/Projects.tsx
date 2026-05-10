"use client";

import { useLang } from "@/contexts/LanguageContext";
import { ExternalLink, Zap } from "lucide-react";

export default function Projects() {
  const { tr } = useLang();
  const p = tr.projects;

  return (
    <section id="proyectos" className="py-24 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 inline-block"
            style={{ border: "1px solid var(--border)", color: "var(--accent-blue)", background: "var(--accent-blue-dim)" }}
          >
            {p.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {p.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            {p.subtitle}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {p.items.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col p-6 rounded-2xl transition-all duration-300"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              {/* Company + link */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium" style={{ color: "var(--accent-cyan)" }}>
                  {item.company}
                </span>
                {"link" in item && item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-50 hover:opacity-100 transition-opacity"
                    style={{ color: "var(--text-muted)" }}
                    aria-label="Ver proyecto en GitHub"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                {item.desc}
              </p>

              {/* Highlight */}
              <div
                className="flex items-center gap-2 mt-4 p-3 rounded-lg"
                style={{ background: "var(--accent-blue-dim)", border: "1px solid rgba(59,130,246,0.15)" }}
              >
                <Zap size={14} style={{ color: "var(--accent-blue)", flexShrink: 0 }} />
                <span className="text-xs font-medium" style={{ color: "var(--accent-blue)" }}>
                  {item.highlight}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "var(--text-muted)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/moreiracristian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <ExternalLink size={16} />
            Ver todos los proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
