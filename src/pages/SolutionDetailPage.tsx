import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { getSolutionBySlug, getRelatedSolutions } from "@/data/solutionDetails";
import { ArrowRight, CheckCircle, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import { useEffect } from "react";

const WA_LINK =
  "https://api.whatsapp.com/send/?phone=628818000805&text&type=phone_number&app_absent=0";

export default function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const solution = slug ? getSolutionBySlug(slug) : undefined;
  const related = slug ? getRelatedSolutions(slug) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!solution) return <Navigate to="/solusi" replace />;

  const l = (id: string, en: string) => (lang === "id" ? id : en);

  return (
    <div className="bg-background">
      {/* 1. PREMIUM DARK HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0f1e 0%, #0d1529 45%, #111d35 100%)",
        }}
      >
        {/* Orange glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px circle at 88% 30%, hsl(var(--primary) / 0.22), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(500px circle at 10% 80%, hsl(220 80% 50% / 0.15), transparent 60%)",
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Star dots */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container-main relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                {t("Solusi Enterprise", "Enterprise Solution")}
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                {l(solution.headline, solution.headlineEn)}
              </h1>
              <p className="mt-5 text-lg text-white/70 max-w-xl leading-relaxed">
                {l(solution.subtitle, solution.subtitleEn)}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
                >
                  {t("Hubungi Kami", "Contact Us")} <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/solusi"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all"
                >
                  {t("Lihat Semua Solusi", "View All Solutions")}
                </Link>
              </div>

              {/* Mini stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { v: "99.9%", k: t("Uptime", "Uptime") },
                  { v: "24/7", k: t("Dukungan", "Support") },
                  { v: "100+", k: t("Mitra", "Partners") },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white tabular-nums">
                      {s.v}
                    </div>
                    <div className="text-xs text-white/55 mt-1">{s.k}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right visual */}
            <AnimatedSection delay={0.15}>
              <div className="relative h-[440px] hidden lg:block">
                {/* Central card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 rounded-2xl bg-white/[0.07] backdrop-blur-xl border border-white/15 p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/40">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">{solution.title}</div>
                      <div className="text-white/50 text-xs">
                        {t("Aktif", "Active")} · Live
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {solution.highlights.slice(0, 3).map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-sm text-white/80"
                      >
                        <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                          <h.icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        {l(h.title, h.titleEn)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating card top-right */}
                <div
                  className="absolute top-4 right-0 w-48 rounded-xl bg-white/[0.08] backdrop-blur-xl border border-white/15 p-4 shadow-xl"
                  style={{ animation: "float-slow 6s ease-in-out infinite" }}
                >
                  <div className="flex items-center gap-2 text-xs text-white/60 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                    {t("Transaksi", "Transactions")}
                  </div>
                  <div className="text-white font-bold text-lg">+24.8%</div>
                </div>

                {/* Floating card bottom-left */}
                <div
                  className="absolute bottom-4 left-0 w-52 rounded-xl bg-white/[0.08] backdrop-blur-xl border border-white/15 p-4 shadow-xl"
                  style={{
                    animation: "float-slow 7s ease-in-out infinite",
                    animationDelay: "1s",
                  }}
                >
                  <div className="flex items-center gap-2 text-xs text-white/60 mb-1">
                    <Shield className="w-3.5 h-3.5 text-primary" />
                    {t("Keamanan", "Security")}
                  </div>
                  <div className="text-white font-semibold text-sm">
                    PCI-DSS Compliant
                  </div>
                </div>

                {/* Decorative ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-white/[0.06] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/[0.08] pointer-events-none" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2. TENTANG SOLUSI INI — editorial 2-column */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection>
              <span className="badge-label">
                {t("Tentang Solusi", "About Solution")}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {t("Tentang Solusi Ini", "About This Solution")}
              </h2>
              <p className="mt-5 text-muted leading-relaxed text-base">
                {l(solution.overview, solution.overviewEn)}
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                {t("Hubungi Kami", "Contact Us")} <ArrowRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="card-premium">
                <h3 className="font-bold text-foreground text-lg mb-5">
                  {t("Nilai Utama", "Key Values")}
                </h3>
                <div className="space-y-4">
                  {solution.overviewPoints.map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground text-sm leading-relaxed">
                        {l(p.label, p.labelEn)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. KAPABILITAS — premium DARK section emphasis */}
      <section
        className="relative section-padding overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0f1e 0%, #0d1529 50%, #111d35 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px circle at 50% 0%, hsl(var(--primary) / 0.18), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="container-main relative">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/15 text-primary border border-primary/25">
                {t("Kemampuan Inti", "Core Capabilities")}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                {t(
                  "Fitur yang Mendukung Skala Enterprise",
                  "Features That Power Enterprise Scale"
                )}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {solution.capabilities.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="h-full rounded-2xl p-6 bg-white/[0.04] backdrop-blur border border-white/10 hover:bg-white/[0.07] hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-5 shadow-lg shadow-primary/30">
                    <c.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {l(c.title, c.titleEn)}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    {l(c.desc, c.descEn)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MANFAAT BISNIS — premium card grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="badge-label">{t("Manfaat", "Benefits")}</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                  {t("Manfaat Bisnis", "Business Benefits")}
                </h2>
                <p className="mt-4 text-muted leading-relaxed">
                  {t(
                    "Solusi yang dirancang untuk memberi dampak nyata bagi pertumbuhan dan efisiensi operasional bisnis Anda.",
                    "Solutions designed to deliver real impact on your business growth and operational efficiency."
                  )}
                </p>
              </div>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {solution.benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card-premium h-full group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center mb-5 transition-colors">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">
                    {l(b.title, b.titleEn)}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">
                    {l(b.desc, b.descEn)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CARA KERJA — timeline */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="badge-label">{t("Proses", "Process")}</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                {t("Cara Kerja", "How It Works")}
              </h2>
            </div>
          </AnimatedSection>
          <div className="relative mt-14">
            {/* Connector line */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="grid md:grid-cols-4 gap-8 relative">
              {solution.steps.map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="text-center md:text-left">
                    <div className="flex md:justify-start justify-center">
                      <span className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center text-base font-bold shadow-lg shadow-primary/30 ring-8 ring-card">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 font-bold text-foreground text-lg">
                      {l(s.title, s.titleEn)}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {l(s.desc, s.descEn)}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEGMEN PENGGUNA — visual icon cards */}
      <section className="section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="badge-label">{t("Segmen", "Segments")}</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                {t("Segmen Pengguna", "Use Cases")}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
            {solution.useCases.map((u, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card-premium text-center py-10 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-5 border border-primary/15">
                    <u.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-bold text-foreground text-base">
                    {l(u.label, u.labelEn)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MENGAPA MEMILIH KAMI — premium emphasis */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <AnimatedSection>
            <div className="max-w-2xl">
              <span className="badge-label">
                {t("Keunggulan", "Advantages")}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                {t("Mengapa Memilih Kami", "Why Choose Us")}
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                {t(
                  "Pengalaman, teknologi, dan ekosistem mitra yang dipercaya oleh institusi keuangan dan enterprise di Indonesia.",
                  "Experience, technology, and partner ecosystem trusted by financial institutions and enterprises across Indonesia."
                )}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {solution.whyUs.map((w, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="relative card-premium h-full overflow-hidden group">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="relative">
                    <div className="text-5xl font-bold text-primary/20 mb-3">
                      0{i + 1}
                    </div>
                    <h3 className="font-bold text-foreground text-xl">
                      {l(w.title, w.titleEn)}
                    </h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {l(w.desc, w.descEn)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SOLUSI TERKAIT — horizontal cards */}
      <section className="section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="badge-label">{t("Lainnya", "More")}</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                  {t("Solusi Terkait", "Related Solutions")}
                </h2>
              </div>
              <Link
                to="/solusi"
                className="text-sm font-semibold text-primary hover:gap-3 inline-flex items-center gap-2 transition-all"
              >
                {t("Lihat Semua", "View All")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {related.map((r, i) => (
              <AnimatedSection key={r.slug} delay={i * 0.05}>
                <Link to={`/solutions/${r.slug}`} className="block h-full">
                  <div className="card-premium group h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-primary/15 group-hover:from-primary group-hover:to-primary/70 transition-all">
                        <r.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-foreground text-lg">
                        {r.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed flex-1">
                      {l(r.subtitle, r.subtitleEn)}
                    </p>
                    <span className="mt-5 text-sm font-semibold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      {t("Selengkapnya", "Learn More")}{" "}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA — premium dark */}
      <section className="pb-24 pt-8">
        <div className="container-main">
          <AnimatedSection>
            <div
              className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
              style={{
                background:
                  "linear-gradient(135deg, #0a0f1e 0%, #0d1529 50%, #111d35 100%)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(600px circle at 50% 50%, hsl(var(--primary) / 0.25), transparent 60%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="relative max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-primary" />
                  {t("Mulai Hari Ini", "Start Today")}
                </div>
                <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
                  {t(
                    "Siap Mengakselerasi Bisnis Anda?",
                    "Ready to Accelerate Your Business?"
                  )}
                </h2>
                <p className="mt-5 text-white/70 leading-relaxed">
                  {t(
                    "Diskusikan kebutuhan integrasi pembayaran Anda bersama tim ahli kami dan temukan solusi terbaik untuk bisnis Anda.",
                    "Discuss your payment integration needs with our expert team and discover the best solution for your business."
                  )}
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
                >
                  {t("Hubungi Kami Sekarang", "Contact Us Now")}{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
