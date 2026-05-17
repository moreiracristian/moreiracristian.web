"use client";

import { useLang } from "@/contexts/LanguageContext";
import { articles, getArticle, formatDate, type ContentBlock } from "@/lib/blog";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={i} style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", margin: "2.5rem 0 0.75rem", lineHeight: 1.3 }}>
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={i} style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.25rem" }}>
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={i} style={{ marginBottom: "1.25rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {block.items.map((item, j) => (
            <li key={j} style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-muted)" }}>
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i} style={{ margin: "2rem 0", padding: "1.25rem 1.5rem", borderLeft: "3px solid var(--accent-cyan)", background: "var(--accent-cyan-dim)", borderRadius: "0 0.75rem 0.75rem 0" }}>
          <p style={{ fontSize: "1rem", fontStyle: "italic", lineHeight: 1.75, color: "var(--text-primary)" }}>
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      );
    default:
      return null;
  }
}

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang, tr } = useLang();
  const b = tr.blog;
  const article = getArticle(slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>Artículo no encontrado.</p>
            <Link href="/blog" style={{ color: "var(--accent-cyan)", textDecoration: "none" }}>
              {b.backToBlog}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "5rem" }}>
        <article style={{ width: "100%", padding: "4rem 0 6rem" }}>
          <div className="section-inner" style={{ maxWidth: "720px" }}>
            <div style={{ marginBottom: "2rem" }}>
              <Link
                href="/blog"
                style={{ fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {b.backToBlog}
              </Link>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
              {article.tags.map((tag) => (
                <span key={tag} style={{ fontSize: "0.7rem", padding: "0.2rem 0.6rem", borderRadius: "0.375rem", background: "var(--accent-blue-dim)", color: "var(--accent-blue)", border: "1px solid rgba(59,130,246,0.2)" }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.25, marginBottom: "1.25rem" }}>
              {article.title[lang]}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                {formatDate(article.date, lang)}
              </span>
              <span style={{ width: "1px", height: "1rem", background: "var(--border)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Clock size={14} style={{ color: "var(--text-muted)" }} />
                <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                  {article.readTime} {b.readTime}
                </span>
              </div>
            </div>

            <div>
              {article.content[lang].map((block, i) => renderBlock(block, i))}
            </div>

            <div style={{ marginTop: "4rem", padding: "2rem", borderRadius: "1rem", background: "linear-gradient(135deg, var(--accent-blue-dim), var(--accent-cyan-dim))", border: "1px solid var(--border)", textAlign: "center" }}>
              <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                {lang === "es" ? "¿Tiene sentido para tu negocio?" : "Does this make sense for your business?"}
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                {lang === "es" ? "Contame de tu caso. La primera consulta es sin cargo." : "Tell me about your case. The first consultation is free."}
              </p>
              <Link
                href="/#contacto"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, padding: "0.75rem 1.75rem", borderRadius: "0.75rem", background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))", color: "white", textDecoration: "none" }}
              >
                {lang === "es" ? "Hablemos" : "Let's talk"} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>

        {otherArticles.length > 0 && (
          <section style={{ background: "var(--bg-surface)", width: "100%", padding: "4rem 0" }}>
            <div className="section-inner">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "1.5rem" }}>
                {lang === "es" ? "Más artículos" : "More articles"}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {otherArticles.map((a) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} style={{ textDecoration: "none" }}>
                    <div
                      style={{ padding: "1.5rem", borderRadius: "1rem", background: "var(--bg-card)", border: "1px solid var(--border)", transition: "border-color 0.2s", cursor: "pointer" }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    >
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.75rem" }}>
                        {a.tags.slice(0, 2).map((tag) => (
                          <span key={tag} style={{ fontSize: "0.65rem", padding: "0.15rem 0.5rem", borderRadius: "0.375rem", background: "var(--accent-blue-dim)", color: "var(--accent-blue)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                        {a.title[lang]}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                        <Clock size={12} style={{ color: "var(--text-muted)" }} />
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{a.readTime} {b.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
