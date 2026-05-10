"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Shield, Clock, Heart, HandshakeIcon } from "lucide-react";

const iconMap = { Shield, Clock, Heart, Handshake: HandshakeIcon } as const;
type IconKey = keyof typeof iconMap;

export default function HowIWork() {
  const { tr } = useLang();
  const h = tr.howIWork;

  return (
    <section id="como-trabajo" className="py-24 px-6" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 inline-block"
            style={{ border: "1px solid var(--border)", color: "var(--accent-cyan)", background: "var(--accent-cyan-dim)" }}
          >
            {h.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {h.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            {h.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="flex flex-col gap-8">
            {h.steps.map((step, i) => (
              <div key={step.num} className="flex gap-5">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{
                      background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
                      color: "white",
                    }}
                  >
                    {step.num}
                  </div>
                  {i < h.steps.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: "var(--border)", minHeight: "32px" }} />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 gap-4">
            {h.values.map((v) => {
              const Icon = iconMap[v.icon as IconKey];
              return (
                <div
                  key={v.label}
                  className="p-6 rounded-2xl flex flex-col items-center text-center gap-3"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, var(--accent-blue-dim), var(--accent-cyan-dim))" }}
                  >
                    {Icon && <Icon size={22} style={{ color: "var(--accent-cyan)" }} />}
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {v.label}
                  </span>
                </div>
              );
            })}

            {/* Quote card */}
            <div
              className="col-span-2 p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, var(--accent-blue-dim), var(--accent-cyan-dim))",
                border: "1px solid var(--border)",
              }}
            >
              <p className="text-sm italic leading-relaxed" style={{ color: "var(--text-muted)" }}>
                &ldquo;No entrego un informe y desaparezco. Soy tu respaldo continuo para entender lo que pasa en tu negocio.&rdquo;
              </p>
              <p className="text-xs mt-3 font-semibold" style={{ color: "var(--accent-cyan)" }}>
                — Cristian Moreira
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
