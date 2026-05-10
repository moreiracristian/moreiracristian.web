"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Briefcase } from "lucide-react";

export default function About() {
  const { tr } = useLang();
  const a = tr.about;

  return (
    <section id="sobre-mi" className="py-24 px-6" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 inline-block"
              style={{ border: "1px solid var(--border)", color: "var(--accent-cyan)", background: "var(--accent-cyan-dim)" }}
            >
              {a.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {a.title}
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              {a.paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {a.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: "var(--accent-blue-dim)",
                    color: "var(--accent-blue)",
                    border: "1px solid rgba(59,130,246,0.25)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: experience timeline */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={18} style={{ color: "var(--accent-blue)" }} />
              <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                Trayectoria
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {a.experience.map((exp, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: i === 0 ? "var(--accent-cyan)" : "var(--accent-blue)" }}
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {exp.company}
                    </p>
                    <p className="text-xs mb-1" style={{ color: "var(--accent-cyan)" }}>
                      {exp.role}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* LinkedIn link */}
            <div className="mt-6">
              <a
                href="https://linkedin.com/in/moreiracristian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--accent-blue)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-blue)")}
              >
                Ver perfil completo en LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
