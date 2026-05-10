"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { sendContact } from "@/lib/api";
import { Send, MessageCircle, Mail, CheckCircle, AlertCircle } from "lucide-react";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

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

  const inputStyle = {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    borderRadius: "10px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contacto" className="py-24 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 inline-block"
            style={{ border: "1px solid var(--border)", color: "var(--accent-blue)", background: "var(--accent-blue-dim)" }}
          >
            {c.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {c.title}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />

            {/* Status messages */}
            {status === "success" && (
              <div
                className="flex items-center gap-2 p-3 rounded-lg text-sm"
                style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}
              >
                <CheckCircle size={16} /> {c.form.success}
              </div>
            )}
            {status === "error" && (
              <div
                className="flex items-center gap-2 p-3 rounded-lg text-sm"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }}
              >
                <AlertCircle size={16} /> {c.form.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all"
              style={{
                background: status === "sending"
                  ? "var(--bg-card)"
                  : "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
                color: status === "sending" ? "var(--text-muted)" : "white",
                cursor: status === "sending" ? "not-allowed" : "pointer",
              }}
            >
              <Send size={16} />
              {status === "sending" ? c.form.sending : c.form.send}
            </button>
          </form>

          {/* Direct contact */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              {c.direct.title}
            </p>

            {[
              {
                icon: MessageCircle,
                label: c.direct.whatsapp,
                href: "https://wa.me/543624024589",
                color: "#25D366",
              },
              {
                icon: Mail,
                label: "moreiracristianmiguel@gmail.com",
                href: "mailto:moreiracristianmiguel@gmail.com",
                color: "var(--accent-blue)",
              },
              {
                icon: LinkedinIcon,
                label: "linkedin.com/in/moreiracristian",
                href: "https://linkedin.com/in/moreiracristian",
                color: "#0A66C2",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = item.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}20` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <span className="text-sm truncate" style={{ color: "var(--text-muted)" }}>
                  {item.label}
                </span>
              </a>
            ))}

            {/* Availability badge */}
            <div
              className="mt-4 p-4 rounded-xl flex items-center gap-3"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span className="text-xs" style={{ color: "#4ade80" }}>
                Disponible para nuevos proyectos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
