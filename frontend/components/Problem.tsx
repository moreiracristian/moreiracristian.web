"use client";

import { useLang } from "@/contexts/LanguageContext";
import { TrendingDown, Package, BarChart2, Clock } from "lucide-react";

const iconMap = { TrendingDown, Package, BarChart2, Clock } as const;
type IconKey = keyof typeof iconMap;

export default function Problem() {
  const { tr } = useLang();
  const p = tr.problem;

  return (
    <section id="problema" className="py-24 px-6" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 inline-block"
            style={{ border: "1px solid var(--border)", color: "var(--accent-cyan)", background: "var(--accent-cyan-dim)" }}
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {p.cards.map((card) => {
            const Icon = iconMap[card.icon as IconKey];
            return (
              <div
                key={card.title}
                className="group p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--accent-blue-dim)" }}
                >
                  {Icon && <Icon size={22} style={{ color: "var(--accent-blue)" }} />}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
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
