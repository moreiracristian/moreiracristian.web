"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { sendContact } from "@/lib/api";
import { Send, MessageCircle, Mail, CheckCircle, AlertCircle } from "lucide-react";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const inputStyle: React.CSSProperties = {
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  color: "var(--text-primary)",
  borderRadius: "10px",
  padding: "12px 16px",
  width: "100%",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const { tr } = useLang();
  const c = tr.contact;

  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContact(form);
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const directLinks = [
    { icon: MessageCircle, label: c.direct.whatsapp, href: "https://wa.me/543624024589", color: "#25D366" },
    { icon: Mail, label: "moreiracristianmiguel@gmail.com", href: "mailto:moreiracristianmiguel@gmail.com", color: "var(--accent-blue)" },
    { icon: LinkedinIcon, label: "linkedin.com/in/moreiracristian", href: "https://linkedin.com/in/moreiracristian", color: "#0A66C2" },
  ];

  return (
    <section id="contacto" style={{ background: "var(--bg-primary)", width: "100%", padding: "6rem 0" }}>
      <div className="section-inner">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              marginBottom: "1.5rem",
              border: "1px solid var(--border)",
              color: "var(--accent-blue)",
              background: "var(--accent-blue-dim)",
            }}
          >
            {c.tag}
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
            {c.title}
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)" }}>
            {c.subtitle}
          </p>
        </div>

        {/* Grid: form + direct contact */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "stretch",
          }}
        >
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 0, height: "100%" }}>
            <div className="grid-form-row">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={c.form.name}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={c.form.email}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </div>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder={c.form.company}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={c.form.message}
              required
              rows={5}
              style={{ ...inputStyle, resize: "vertical", flexGrow: 1, minHeight: "8rem" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />

            {status === "success" && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", borderRadius: "0.5rem", fontSize: "0.875rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}>
                <CheckCircle size={16} /> {c.form.success}
              </div>
            )}
            {status === "error" && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", borderRadius: "0.5rem", fontSize: "0.875rem", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }}>
                <AlertCircle size={16} /> {c.form.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                fontWeight: 600,
                padding: "1rem 2rem",
                borderRadius: "0.75rem",
                border: "none",
                background: status === "sending" ? "var(--bg-card)" : "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
                color: status === "sending" ? "var(--text-muted)" : "white",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                fontSize: "0.95rem",
                transition: "opacity 0.2s",
              }}
            >
              <Send size={16} />
              {status === "sending" ? c.form.sending : c.form.send}
            </button>
          </form>

          {/* Direct contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 0, height: "100%" }}>
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              {c.direct.title}
            </p>

            {directLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = item.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background: `${item.color}20`,
                  }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <span style={{ fontSize: "0.875rem", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.label}
                </span>
              </a>
            ))}

            {/* Availability badge */}
            <div
              style={{
                marginTop: "0.5rem",
                padding: "1rem",
                borderRadius: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
              }}
            >
              <div
                style={{
                  width: "0.625rem",
                  height: "0.625rem",
                  borderRadius: "9999px",
                  background: "#4ade80",
                  flexShrink: 0,
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
              <span style={{ fontSize: "0.75rem", color: "#4ade80" }}>
                Disponible para nuevos proyectos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
