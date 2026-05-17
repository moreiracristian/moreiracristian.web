"use client";

import { useLang } from "@/contexts/LanguageContext";
import { articles, formatDate } from "@/lib/blog";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function BlogTeaser() {
  const { lang, tr } = useLang();
  const b = tr.blog;

  return (
    <section id="blog" style={{ background: "var(--bg-surface)", width: "100%", padding: "6rem 0" }}>
      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: "9999px", marginBottom: "1.5rem", border: "1px solid var(--border)", color: "var(--accent-blue)", background: "var(--accent-blue-dim)" }}>
            {b.tag}
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
            {b.title}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            {b.subtitle}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{ height: "100%", display: "flex", flexDirection: "column", padding: "1.75rem", borderRadius: "1rem", background: "var(--bg-card)", border: "1px solid var(--border)", transition: "border-color 0.2s, transform 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                  {article.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "0.7rem", padding: "0.2rem 0.6rem", borderRadius: "0.375rem", background: "var(--accent-blue-dim)", color: "var(--accent-blue)", border: "1px solid rgba(59,130,246,0.2)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text-primary)", lineHeight: 1.4, flex: 1 }}>
                  {article.title[lang]}
                </h3>

                <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                  {article.excerpt[lang]}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Clock size={13} style={{ color: "var(--text-muted)" }} />
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {article.readTime} {b.readTime}
                    </span>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {formatDate(article.date, lang)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, padding: "1rem 2rem", borderRadius: "0.75rem", border: "1px solid var(--border)", color: "var(--accent-blue)", background: "var(--accent-blue-dim)", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {b.allArticles}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
