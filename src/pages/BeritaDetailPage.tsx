import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNewsDetail, useRelatedNews } from "@/hooks/useNews";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, ArrowRight, Calendar, User, Tag } from "lucide-react";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";

export default function BeritaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const { data: article, isLoading, error } = useNewsDetail(slug ?? "");
  const { data: related } = useRelatedNews(slug ?? "", article?.category ?? "", 3);

  useEffect(() => {
    document.title = article?.title ? `${article.title} | Bimasakti` : "Berita | Bimasakti";
  }, [article?.title]);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-muted text-lg">{t("Artikel tidak ditemukan.", "Article not found.")}</p>
        <Link to="/berita" className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> {t("Kembali ke Berita", "Back to News")}
        </Link>
      </div>
    );
  }

  const publishDate = new Date(article.publish_date);

  // Render plain text with paragraph spacing
  const renderContent = (content: string) => {
    return content.split(/\n\s*\n/).map((paragraph, i) => (
      <p key={i} className="mb-5 leading-[1.8]">
        {paragraph.split("\n").map((line, j) => (
          <span key={j}>
            {j > 0 && <br />}
            {line}
          </span>
        ))}
      </p>
    ));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="w-full aspect-[21/9] md:aspect-[3/1] bg-secondary overflow-hidden">
          <img
            src={article.cover_image_url}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              {/* Back link */}
              <Link
                to="/berita"
                className="inline-flex items-center gap-2 text-muted hover:text-primary text-sm font-medium transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("Kembali ke Berita", "Back to News")}
              </Link>

              {/* Category badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                {article.category}
              </span>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mt-5 pb-8 border-b border-border/50">
                <div className="flex items-center gap-1.5 text-muted text-sm">
                  <Calendar className="w-4 h-4" />
                  {format(publishDate, lang === "id" ? "d MMMM yyyy" : "MMMM d, yyyy", {
                    locale: lang === "id" ? idLocale : undefined,
                  })}
                </div>
                <div className="flex items-center gap-1.5 text-muted text-sm">
                  <User className="w-4 h-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-1.5 text-muted text-sm">
                  <Tag className="w-4 h-4" />
                  {article.category}
                </div>
              </div>

              {/* Body */}
              <div className="mt-8 text-foreground text-[15px] md:text-base">
                {renderContent(article.content)}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related && related.length > 0 && (
        <section className="section-padding relative" style={{
          background: "linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(var(--card)) 100%)"
        }}>
          <div className="container-main">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
                {t("Artikel Terkait", "Related Articles")}
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 0.05}>
                  <Link
                    to={`/berita/${item.slug}`}
                    className="card-premium group cursor-pointer h-full flex flex-col"
                  >
                    <div className="aspect-[16/10] rounded-xl bg-secondary mb-5 overflow-hidden border border-border/30">
                      <img
                        src={item.cover_image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold mb-2">
                      {item.category}
                    </span>
                    <p className="text-[11px] text-muted font-mono tracking-wide uppercase">
                      {format(new Date(item.publish_date), "d MMM yyyy")}
                    </p>
                    <h3 className="font-semibold text-foreground mt-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted leading-relaxed line-clamp-2 flex-1">
                      {item.excerpt}
                    </p>
                    <span className="mt-4 text-xs font-semibold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      {t("Baca Selengkapnya", "Read More")} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
