import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNewsList } from "@/hooks/useNews";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
import { format } from "date-fns";

const categories = [
  { id: "all", labelId: "Semua", labelEn: "All" },
  { id: "Siaran Pers", labelId: "Siaran Pers", labelEn: "Press Releases" },
  { id: "Artikel", labelId: "Artikel", labelEn: "Articles" },
  { id: "CSR", labelId: "CSR", labelEn: "CSR" },
];

const ITEMS_PER_PAGE = 6;

export default function BeritaPage() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useNewsList(activeCategory, page, ITEMS_PER_PAGE);
  const items = data?.data ?? [];
  const totalPages = Math.ceil((data?.total ?? 0) / ITEMS_PER_PAGE);

  useEffect(() => {
    document.title = "Berita | Bimasakti";
  }, []);

  return (
    <div>
      {/* Premium Dark Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1529 45%, #111d35 100%)" }}
      >
        {/* Glow accents */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px circle at 15% 30%, hsl(var(--primary) / 0.18), transparent 60%), radial-gradient(500px circle at 85% 70%, hsl(var(--primary) / 0.10), transparent 65%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container-main relative py-24 md:py-32">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                <Newspaper className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-semibold tracking-[0.2em] text-white/80 uppercase">
                  {t("Newsroom", "Newsroom")}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                {t("Berita & Wawasan", "News & Insights")}
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                {t(
                  "Kabar terbaru, siaran pers, dan artikel industri dari Bimasakti Group.",
                  "Latest updates, press releases, and industry articles from Bimasakti Group.",
                )}
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom fade into light section */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* News content */}
      <section className="section-padding">
        <div className="container-main">
          {/* Category tabs - pill style */}
          <div className="flex gap-2 mb-12 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setPage(1);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap border
                  ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                      : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
              >
                {lang === "id" ? cat.labelId : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Loading */}
          {isLoading && (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Empty state */}
          {!isLoading && items.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                {t("Belum ada berita di kategori ini.", "No news in this category yet.")}
              </p>
            </div>
          )}

          {/* Editorial card grid */}
          {!isLoading && items.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {items.map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 0.05}>
                  <Link
                    to={`/berita/${item.slug}`}
                    className="group h-full flex flex-col bg-card rounded-2xl border border-border/60 overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    {/* Image with category badge overlay */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                      <img
                        src={item.cover_image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider shadow-lg">
                        {item.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <p className="text-[11px] text-muted-foreground font-mono tracking-wide uppercase mb-3">
                        {format(new Date(item.publish_date), "d MMM yyyy")}
                      </p>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {item.excerpt}
                      </p>
                      <span className="mt-5 text-xs font-semibold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        {t("Baca Selengkapnya", "Read More")} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Centered circular pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="w-10 h-10 rounded-full border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground disabled:opacity-40 disabled:hover:border-border transition-all flex items-center justify-center"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-full text-sm font-semibold transition-all flex items-center justify-center
                    ${
                      page === i + 1
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "bg-background text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="w-10 h-10 rounded-full border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground disabled:opacity-40 disabled:hover:border-border transition-all flex items-center justify-center"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
