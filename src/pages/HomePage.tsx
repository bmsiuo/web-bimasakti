import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ArrowRight, Zap, Shield, Globe, Server,
  CreditCard, Building2, Smartphone, Wallet, QrCode, Layers, Network,
  TrendingUp, Users, MapPin, Clock
} from "lucide-react";
import { useLatestNews } from "@/hooks/useNews";
import { format } from "date-fns";
import heroEcosystem from "@/assets/hero-ecosystem-v2.jpg";


import logoFastpay from "@/assets/logo-fastpay.png";
import logoWinpay from "@/assets/logo-winpay.png";
import logoRajabiller from "@/assets/logo-rajabiller.png";
import logoSpeedcash from "@/assets/logo-speedcash.png";
import logoAci from "@/assets/logo-aci.png";
import logoJogjkita from "@/assets/logo-jogjkita.png";

import partnerIndomaret from "@/assets/partner-indomaret.png";
import partnerMandiri from "@/assets/partner-mandiri.png";
import partnerKeretaApi from "@/assets/partner-kereta-api.png";
import partnerTelkomsel from "@/assets/partner-telkomsel.png";
import partnerBca from "@/assets/partner-bca.png";
import partnerAlfamart from "@/assets/partner-alfamart.png";
import partnerBri from "@/assets/partner-bri.png";
import partnerBtn from "@/assets/partner-btn.png";
import partnerBni from "@/assets/partner-bni.png";
import partnerPln from "@/assets/partner-pln.png";

const stats = [
  { value: "17+", labelId: "Tahun Pengalaman", labelEn: "Years Experience", icon: Clock },
  { value: "50M+", labelId: "Transaksi/Bulan", labelEn: "Transactions/Month", icon: TrendingUp },
  { value: "1000+", labelId: "Mitra Bisnis", labelEn: "Business Partners", icon: Users },
  { value: "34", labelId: "Provinsi Terjangkau", labelEn: "Provinces Covered", icon: MapPin },
];

const solutions = [
  { icon: CreditCard, title: "Payment Gateway", descId: "Infrastruktur pembayaran yang menghubungkan merchant, bank, dan jaringan pembayaran secara aman.", descEn: "Payment infrastructure connecting merchants, banks, and payment networks securely." },
  { icon: Server, title: "Biller Aggregator", descId: "Integrasi API terpusat untuk layanan pembayaran tagihan.", descEn: "Centralized API integration for bill payment services." },
  { icon: Wallet, title: "Disbursement", descId: "Layanan pembayaran massal termasuk payroll, cashback, dan refund.", descEn: "Bulk payout services including payroll, cashback, and refunds." },
  { icon: QrCode, title: "QRIS Hub", descId: "Infrastruktur QRIS yang menghubungkan peserta ekosistem pembayaran.", descEn: "QRIS infrastructure connecting payment ecosystem participants." },
];

const products = [
  { name: "Fastpay", logo: logoFastpay },
  { name: "Winpay", logo: logoWinpay },
  { name: "Rajabiller", logo: logoRajabiller },
  { name: "SpeedCash", logo: logoSpeedcash },
  { name: "ACI", logo: logoAci },
  { name: "JogjaKita", logo: logoJogjkita },
];

const partners = [
  { name: "Indomaret", logo: partnerIndomaret },
  { name: "Alfamart", logo: partnerAlfamart },
  { name: "Bank Mandiri", logo: partnerMandiri },
  { name: "Bank BCA", logo: partnerBca },
  { name: "Bank BRI", logo: partnerBri },
  { name: "Bank BNI", logo: partnerBni },
  { name: "Bank BTN", logo: partnerBtn },
  { name: "Kereta Api Indonesia", logo: partnerKeretaApi },
  { name: "Telkomsel", logo: partnerTelkomsel },
  { name: "PLN", logo: partnerPln },
];


export default function HomePage() {
  const { t, lang } = useLanguage();
  const { data: latestNews, isLoading: newsLoading } = useLatestNews(3);

  useEffect(() => {
    document.title = "Bimasakti Multi Sinergi";
  }, []);

  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1529 40%, #111d35 100%)" }}>
        {/* Radial orange glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 50% 60% at 70% 45%, hsl(32 93% 54% / 0.10), transparent 70%)"
        }} />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        <div className="container-main relative py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* ── Left Column: Content ── */}
            <div className="lg:col-span-6 xl:col-span-5">
              <AnimatedSection>
                {/* Eyebrow pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/[0.08] mb-7">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-primary">
                    PT Bimasakti Multi Sinergi
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.025em]" style={{ color: "#f0f2f7" }}>
                  {t(
                    "Infrastruktur Pembayaran untuk Masa Depan Indonesia",
                    "Payment Infrastructure for Indonesia's Future"
                  )}
                </h1>

                {/* Subheadline */}
                <p className="mt-6 text-[15px] md:text-base leading-[1.7] max-w-[480px]" style={{ color: "rgba(180, 190, 210, 0.85)" }}>
                  {t(
                    "Dari infrastruktur hingga aplikasi, Bimasakti menghubungkan enterprise, institusi keuangan, dan jutaan pengguna dalam satu ekosistem pembayaran digital yang terintegrasi dan scalable.",
                    "From infrastructure to applications, Bimasakti connects enterprises, financial institutions, and millions of users in one integrated and scalable digital payment ecosystem."
                  )}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3.5 mt-9">
                  <Link
                    to="/solusi"
                    className="group bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-[0.98] flex items-center gap-2.5"
                    style={{ boxShadow: "0 4px 20px -4px hsl(32 93% 54% / 0.5)" }}
                  >
                    {t("Jelajahi Solusi", "Explore Solutions")}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {/* Trust chips */}
                <div className="flex flex-wrap gap-2.5 mt-10">
                  {[
                    { val: "17+", label: t("Tahun Pengalaman", "Years Experience"), icon: Clock },
                    { val: "1000+", label: t("Mitra Bisnis", "Business Partners"), icon: Users },
                    { val: "34", label: t("Provinsi", "Provinces"), icon: MapPin },
                    { val: "50M+", label: t("Transaksi/Bulan", "Transactions/Mo"), icon: TrendingUp },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-3.5 py-2 rounded-lg border" style={{
                      background: "rgba(255,255,255,0.03)",
                      borderColor: "rgba(255,255,255,0.08)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)"
                    }}>
                      <item.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="text-xs font-bold tabular-nums" style={{ color: "#e2e6ef" }}>{item.val}</span>
                      <span className="text-[10px] font-medium" style={{ color: "rgba(160,170,190,0.7)" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* ── Right Column: Ecosystem Visual ── */}
            <AnimatedSection delay={0.15} className="lg:col-span-6 xl:col-span-7 hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-[520px] aspect-square">
                {/* Outer orbital ring dotted */}
                <div className="absolute inset-0 rounded-full border border-dashed" style={{ borderColor: "rgba(255,255,255,0.06)" }} />
                {/* Middle orbital ring dotted */}
                <div className="absolute inset-[15%] rounded-full border border-dashed" style={{ borderColor: "rgba(255,255,255,0.05)" }} />
                {/* Inner orbital ring */}
                <div className="absolute inset-[32%] rounded-full border" style={{ borderColor: "rgba(247,147,30,0.12)" }} />

                {/* Central glowing hub */}
                <div className="absolute inset-[38%] rounded-full flex items-center justify-center" style={{
                  background: "radial-gradient(circle, hsl(32 93% 54% / 0.35) 0%, hsl(32 93% 54% / 0.08) 60%, transparent 100%)",
                  boxShadow: "0 0 60px 20px hsl(32 93% 54% / 0.12), 0 0 120px 40px hsl(32 93% 54% / 0.06)"
                }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{
                    background: "linear-gradient(135deg, hsl(32 93% 54%) 0%, hsl(28 100% 48%) 100%)",
                    boxShadow: "0 0 30px 8px hsl(32 93% 54% / 0.35)"
                  }}>
                    <Network className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Floating ecosystem cards */}
                {[
                  { label: "Merchant", sub: "10.000+ aktif", icon: Building2, top: "2%", left: "50%", tx: "-50%" },
                  { label: "Komunitas", sub: "Jutaan pengguna", icon: Users, top: "18%", left: "92%", tx: "-50%" },
                  { label: "Inklusi", sub: "Keuangan digital", icon: Globe, top: "55%", left: "96%", tx: "-50%" },
                  { label: "Pertumbuhan", sub: "Skala nasional", icon: TrendingUp, top: "85%", left: "65%", tx: "-50%" },
                  { label: "Digital Lifestyle", sub: "Terkoneksi", icon: Smartphone, top: "85%", left: "25%", tx: "-50%" },
                  { label: "Jangkauan", sub: "Seluruh Indonesia", icon: MapPin, top: "55%", left: "-4%", tx: "-50%" },
                  { label: "Ekosistem", sub: "Terintegrasi", icon: Layers, top: "18%", left: "2%", tx: "-50%" },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="absolute flex items-center gap-2.5 px-4 py-3 rounded-xl border"
                    style={{
                      top: card.top,
                      left: card.left,
                      transform: `translate(${card.tx}, -50%)`,
                      background: "linear-gradient(135deg, rgba(15,22,42,0.85) 0%, rgba(20,30,55,0.75) 100%)",
                      borderColor: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 4px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04), 0 0 20px -8px hsl(32 93% 54% / 0.08)",
                      animation: `float-slow ${3 + i * 0.4}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                      background: "rgba(247,147,30,0.1)",
                      border: "1px solid rgba(247,147,30,0.15)"
                    }}>
                      <card.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold leading-tight" style={{ color: "#e2e6ef" }}>{card.label}</p>
                      <p className="text-[9px] font-medium leading-tight mt-0.5" style={{ color: "rgba(160,170,190,0.6)" }}>{card.sub}</p>
                    </div>
                  </div>
                ))}

                {/* Glowing particle dots */}
                {[
                  { top: "12%", left: "32%" },
                  { top: "30%", left: "82%" },
                  { top: "70%", left: "88%" },
                  { top: "78%", left: "12%" },
                  { top: "38%", left: "8%" },
                  { top: "48%", left: "72%" },
                  { top: "62%", left: "28%" },
                ].map((dot, i) => (
                  <div key={`dot-${i}`} className="absolute w-1.5 h-1.5 rounded-full animate-pulse" style={{
                    top: dot.top,
                    left: dot.left,
                    background: "hsl(32 93% 54%)",
                    boxShadow: "0 0 8px 2px hsl(32 93% 54% / 0.4)",
                    animationDelay: `${i * 0.5}s`
                  }} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════ COMPANY INTRO ═══════════ */}
      <section className="section-padding relative">
        <div className="absolute inset-0 opacity-30" style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(32 93% 54% / 0.04), transparent)"
        }} />
        <div className="container-main relative">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="badge-label mb-4">Bimasakti Group</span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4">
                {t(
                  "Ekosistem Pembayaran Digital Terintegrasi",
                  "Integrated Digital Payment Ecosystem"
                )}
              </h2>
              <p className="mt-6 text-base text-muted leading-relaxed max-w-2xl mx-auto">
                {t(
                  "PT Bimasakti Multi Sinergi menyediakan ekosistem layanan pembayaran digital terintegrasi meliputi infrastruktur pembayaran, layanan keuangan berbasis API, platform pembayaran digital, dan integrasi fintech untuk enterprise.",
                  "PT Bimasakti Multi Sinergi provides an integrated digital payment service ecosystem including payment infrastructure, API-based financial services, digital payment platforms, and enterprise fintech integration."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
            {[
              { icon: Zap, titleId: "Infrastruktur Pembayaran", titleEn: "Payment Infrastructure", descId: "Gateway & settlement", descEn: "Gateway & settlement" },
              { icon: Globe, titleId: "Layanan Keuangan API", titleEn: "API Financial Services", descId: "RESTful API integration", descEn: "RESTful API integration" },
              { icon: Smartphone, titleId: "Platform Pembayaran Digital", titleEn: "Digital Payment Platforms", descId: "Multi-channel solutions", descEn: "Multi-channel solutions" },
              { icon: Shield, titleId: "Integrasi Fintech Enterprise", titleEn: "Enterprise Fintech Integration", descId: "PCI DSS certified", descEn: "PCI DSS certified" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card-premium text-center group h-full">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-all group-hover:scale-105">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-foreground">{lang === "id" ? item.titleId : item.titleEn}</p>
                  <p className="text-xs text-muted mt-1.5">{lang === "id" ? item.descId : item.descEn}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EXPERIENCE / STATS ═══════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, hsl(220 20% 96%) 0%, hsl(var(--card)) 50%, hsl(220 25% 97%) 100%)"
        }} />
        <div className="absolute inset-0 opacity-30" style={{
          background: "radial-gradient(ellipse 40% 50% at 80% 50%, hsl(32 93% 54% / 0.06), transparent)"
        }} />
        <div className="container-main relative section-padding">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-7xl md:text-8xl font-extrabold text-gradient-orange tabular-nums leading-none">17</span>
                <span className="text-2xl md:text-3xl font-bold text-foreground">+</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t("Tahun Melayani Indonesia", "Years Serving Indonesia")}
              </h2>
              <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">
                {t(
                  "Selama lebih dari 17 tahun, Bimasakti telah membangun infrastruktur pembayaran digital yang handal, melayani jutaan transaksi setiap hari di seluruh Indonesia.",
                  "For over 17 years, Bimasakti has built reliable digital payment infrastructure, serving millions of transactions daily across Indonesia."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-card rounded-2xl p-6 text-center border border-border/40 transition-all hover:border-primary/20" style={{ boxShadow: "var(--shadow-base)" }}>
                  <div className="w-10 h-10 mx-auto rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">{stat.value}</span>
                  <p className="mt-1.5 text-xs text-muted font-medium">{lang === "id" ? stat.labelId : stat.labelEn}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SOLUTIONS & PRODUCTS ═══════════ */}
      <section className="section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-14">
              <div>
                <span className="badge-label mb-4">{t("Layanan", "Services")}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                  {t("Solusi & Produk", "Solutions & Products")}
                </h2>
                <p className="mt-3 text-muted max-w-lg">
                  {t(
                    "Ekosistem pembayaran digital terlengkap untuk kebutuhan bisnis Anda.",
                    "The most comprehensive digital payment ecosystem for your business needs."
                  )}
                </p>
              </div>
              <Link to="/solusi" className="hidden md:flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                {t("Lihat Semua", "View All")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((sol, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card-premium group cursor-pointer h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-105 transition-all">
                    <sol.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-[15px]">{sol.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{lang === "id" ? sol.descId : sol.descEn}</p>
                  <span className="mt-4 text-xs font-semibold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    {t("Selengkapnya", "Learn More")} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Products row */}
          <AnimatedSection className="mt-14">
            <div className="text-center mb-8">
              <h3 className="text-lg font-bold text-foreground">
                {t("Produk Digital Kami", "Our Digital Products")}
              </h3>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {products.map((product) => (
                <Link
                  key={product.name}
                  to="/solusi"
                  className="bg-card rounded-2xl border border-border/40 text-center py-6 px-3 cursor-pointer transition-all hover:border-primary/20 hover:shadow-lg group"
                  style={{ boxShadow: "var(--shadow-xs)" }}
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-white flex items-center justify-center mb-3 overflow-hidden">
                    <img src={product.logo} alt={product.name} className="w-14 h-14 object-contain" />
                  </div>
                  <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</p>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <div className="mt-8 text-center md:hidden">
            <Link to="/solusi" className="text-primary font-semibold text-sm flex items-center justify-center gap-2">
              {t("Lihat Semua Solusi", "View All Solutions")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ NEWS ═══════════ */}
      <section className="section-padding relative" style={{
        background: "linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(var(--card)) 100%)"
      }}>
        <div className="container-main">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-14">
              <div>
                <span className="badge-label mb-4">{t("Terbaru", "Latest")}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                  {t("Berita Terbaru", "Latest News")}
                </h2>
              </div>
              <Link to="/berita" className="hidden md:flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                {t("Semua Berita", "All News")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {newsLoading ? (
            <div className="flex justify-center py-16">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {(latestNews ?? []).map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 0.05}>
                  <Link to={`/berita/${item.slug}`} className="card-premium group cursor-pointer h-full flex flex-col">
                    <div className="aspect-[16/10] rounded-xl bg-secondary mb-5 overflow-hidden border border-border/30">
                      <img
                        src={item.cover_image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold">
                        {item.category}
                      </span>
                      <p className="text-[11px] text-muted font-mono tracking-wide uppercase">
                        {format(new Date(item.publish_date), "d MMM yyyy")}
                      </p>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
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
          )}

          {/* Lihat Semua Berita button */}
          <div className="mt-10 text-center">
            <Link
              to="/berita"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:brightness-110 hover:shadow-lg"
              style={{ boxShadow: "0 4px 20px -4px hsl(32 93% 54% / 0.4)" }}
            >
              {t("Lihat Semua Berita", "View All News")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ PARTNERS ═══════════ */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 20% 97%) 50%, hsl(var(--background)) 100%)" }}>
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="badge-label mb-4">{t("Kepercayaan", "Trust")}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3">
                {t("Dipercaya oleh Mitra Terbaik Indonesia", "Trusted by Indonesia's Leading Partners")}
              </h2>
              <p className="text-muted mt-3 max-w-lg mx-auto text-sm">
                {t(
                  "Bermitra dengan institusi keuangan, korporasi, dan platform digital terkemuka di Indonesia.",
                  "Partnering with leading financial institutions, corporations, and digital platforms in Indonesia."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="relative rounded-2xl border border-border/30 bg-card/60 backdrop-blur-sm py-10 px-2" style={{ boxShadow: "0 4px 40px -12px hsl(var(--primary) / 0.06)" }}>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card/90 to-transparent z-10 rounded-l-2xl" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card/90 to-transparent z-10 rounded-r-2xl" />

            {/* Marquee track */}
            <div className="overflow-hidden [&:hover_.marquee-track]:pause">
              <div className="marquee-track flex animate-marquee gap-12 items-center w-max">
                {[...partners, ...partners].map((partner, i) => (
                  <div
                    key={i}
                    className="shrink-0 flex items-center justify-center w-[160px] h-[80px] rounded-xl bg-white border border-border/30 transition-all duration-300 hover:border-primary/30 hover:shadow-md grayscale hover:grayscale-0"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-[48px] max-w-[120px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
