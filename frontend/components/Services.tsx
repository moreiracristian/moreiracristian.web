"use client";

import { useLang } from "@/contexts/LanguageContext";
import { DollarSign, LayoutDashboard, RefreshCw, Package, Database, MessageSquare } from "lucide-react";

const iconMap = { DollarSign, LayoutDashboard, RefreshCw, Package, Database, MessageSquare } as const;
type IconKey = keyof typeof iconMap;

export default function Services() {
  const { tr } = useLang();
  const s = tr.services;

  return (
    <section id="servicios" className="py-24 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 inline-block"
            style={{ border: "1px solid var(--border)", color: "var(--accent-blue)", background: "var(--accent-blue-dim)" }}
          >
            {s.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {s.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            {s.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((item) => {
            const Icon = iconMap[item.icon as IconKey];
            return (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl transition-all duration-300 flex flex-col"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-blue-dim), var(--accent-cyan-dim))",
                    border: "1px solid var(--border)",
                  }}
                >
                  {Icon && <Icon size={20} style={{ color: "var(--accent-cyan)" }} />}
                </div>

                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md"
                      style={{
                        background: "var(--accent-blue-dim)",
                        color: "var(--accent-blue)",
                        border: "1px solid rgba(59,130,246,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all"
            style={{
              border: "1px solid var(--border)",
              color: "var(--accent-cyan)",
              background: "var(--accent-cyan-dim)",
            }}
          >
            {tr.nav.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
