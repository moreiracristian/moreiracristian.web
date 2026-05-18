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

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
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
      id="newsletter"
      style={{
        background: "var(--bg-surface)",
        width: "100%",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle navy glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(30,58,138,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "56rem",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 1.5rem",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
            background: "var(--accent-blue-dim)",
            border: "1px solid rgba(30,58,138,0.2)",
          }}
        >
          <Mail size={24} style={{ color: "var(--accent-blue)" }} />
        </div>

        {/* Tag */}
        <span
          style={{
            display: "inline-block",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.4rem 1rem",
            borderRadius: "9999px",
            marginBottom: "1.25rem",
            border: "1px solid rgba(30,58,138,0.2)",
            color: "var(--accent-blue)",
            background: "var(--accent-blue-dim)",
          }}
        >
          {n.tag}
        </span>

        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            marginBottom: "0.75rem",
            color: "var(--text-primary)",
          }}
        >
          {n.title}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "0.9rem",
            marginBottom: "2rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
          }}
        >
          {n.subtitle}
        </p>

        {/* Form or success */}
        {status === "success" ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "1rem",
              borderRadius: "0.75rem",
              fontSize: "0.875rem",
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.25)",
              color: "#16a34a",
            }}
          >
            <CheckCircle size={18} /> {n.success}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              maxWidth: "28rem",
              margin: "0 auto",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={n.placeholder}
              required
              style={{
                flex: "1 1 10rem",
                background: "var(--bg-card)",
                border: "1px solid rgba(156,163,175,0.4)",
                borderRadius: "10px",
                padding: "12px 16px",
                color: "var(--text-primary)",
                fontSize: "14px",
                outline: "none",
                minWidth: 0,
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxShadow: "var(--shadow-card)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30,58,138,0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(156,163,175,0.4)";
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                fontWeight: 600,
                padding: "12px 24px",
                borderRadius: "10px",
                border: "none",
                background: "var(--accent-blue)",
                color: "white",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.7 : 1,
                whiteSpace: "nowrap",
                fontSize: "0.9rem",
                boxShadow: "0 2px 8px rgba(30,58,138,0.25)",
              }}
            >
              {status === "loading" ? n.subscribing : n.cta}
            </button>
          </form>
        )}

        {/* Error */}
        {status === "error" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "0.75rem",
              fontSize: "0.875rem",
              color: "#dc2626",
            }}
          >
            <AlertCircle size={14} /> {n.error}
          </div>
        )}

        {/* Privacy */}
        <p style={{ fontSize: "0.75rem", marginTop: "1rem", color: "var(--text-muted)" }}>
          {n.privacy}
        </p>
      </div>
    </section>
  );
}
