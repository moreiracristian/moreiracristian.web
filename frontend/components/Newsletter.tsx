"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { subscribe } from "@/lib/api";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function Newsletter() {
  const { tr } = useLang();
  const n = tr.newsletter;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await subscribe(email);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: "linear-gradient(135deg, var(--accent-blue-dim), var(--accent-cyan-dim))",
            border: "1px solid var(--border)",
          }}
        >
          <Mail size={24} style={{ color: "var(--accent-cyan)" }} />
        </div>

        <span
          className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 inline-block"
          style={{ border: "1px solid var(--border)", color: "var(--accent-cyan)", background: "var(--accent-cyan-dim)" }}
        >
          {n.tag}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3" style={{ color: "var(--text-primary)" }}>
          {n.title}
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          {n.subtitle}
        </p>

        {status === "success" ? (
          <div
            className="flex items-center justify-center gap-2 p-4 rounded-xl text-sm"
            style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}
          >
            <CheckCircle size={18} /> {n.success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={n.placeholder}
              required
              className="flex-1"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "12px 16px",
                color: "var(--text-primary)",
                fontSize: "14px",
                outline: "none",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
                color: "white",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.7 : 1,
              }}
            >
              {status === "loading" ? n.subscribing : n.cta}
            </button>
          </form>
        )}

        {status === "error" && (
          <div
            className="flex items-center justify-center gap-2 mt-3 text-sm"
            style={{ color: "#f87171" }}
          >
            <AlertCircle size={14} /> {n.error}
          </div>
        )}

        <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
          {n.privacy}
        </p>
      </div>
    </section>
  );
}
