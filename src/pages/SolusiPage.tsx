import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import logoFastpay from "@/assets/logo-fastpay.png";
import logoWinpay from "@/assets/logo-winpay.png";
import logoRajabiller from "@/assets/logo-rajabiller.png";
import logoSpeedcash from "@/assets/logo-speedcash.png";
import logoAci from "@/assets/logo-aci.png";
import logoJogjkita from "@/assets/logo-jogjkita.png";
import logoWinme from "@/assets/logo-winme.png";
import logoInstaqris from "@/assets/logo-instaqris.png";
import logoTiketkai from "@/assets/logo-tiketkai.png";
import logoGigapulsa from "@/assets/logo-gigapulsa.png";
import logoPulsagram from "@/assets/logo-pulsagram.png";
import {
  CreditCard, Server, Wallet, QrCode, Layers, Monitor, ArrowLeftRight, ArrowRight,
  ShieldCheck, Plug, TrendingUp, Network, Sparkles, Activity
} from "lucide-react";

const enterpriseSolutions = [
  { icon: CreditCard, title: "Payment Gateway", slug: "payment-gateway", descId: "Infrastruktur yang menghubungkan merchant, bank, dan jaringan pembayaran secara aman dan andal.", descEn: "Infrastructure connecting merchants, banks, and payment networks securely and reliably." },
  { icon: Server, title: "Biller Aggregator", slug: "biller-aggregator", descId: "Integrasi API terpusat untuk layanan pembayaran tagihan dari berbagai penyedia layanan.", descEn: "Centralized API integration for bill payment services from various service providers." },
  { icon: Wallet, title: "Disbursement", slug: "disbursement", descId: "Layanan pembayaran massal termasuk payroll, cashback, insentif, dan refund.", descEn: "Bulk payout services including payroll, cashback, incentives, and refunds." },
  { icon: QrCode, title: "QRIS Hub", slug: "qris-hub", descId: "Infrastruktur QRIS yang menghubungkan seluruh peserta ekosistem pembayaran.", descEn: "QRIS infrastructure connecting all payment ecosystem participants." },
  { icon: Layers, title: "Xperience Apps Solution (XAS)", slug: "xas", descId: "Platform enablement fitur yang memungkinkan mitra mengintegrasikan layanan dengan mudah.", descEn: "Feature enablement platform allowing partners to integrate services easily." },
  { icon: Monitor, title: "Mini ATM", slug: "mini-atm", descId: "Perangkat transaksi keuangan digital yang serupa dengan EDC untuk inklusi keuangan.", descEn: "Digital financial transaction device similar to EDC for financial inclusion." },
  { icon: ArrowLeftRight, title: "Remittances", slug: "remittance", descId: "Infrastruktur transfer uang domestik yang cepat, aman, dan terjangkau.", descEn: "Fast, secure, and affordable domestic money transfer infrastructure." },
];

const digitalProducts = [
  { name: "Fastpay", logo: logoFastpay, link: "https://www.fastpay.co.id/", descId: "Aplikasi keagenan dengan lebih dari 1 juta mitra di seluruh Indonesia.", descEn: "Agent application with more than 1 million partners across Indonesia." },
  { name: "Winpay", logo: logoWinpay, link: "https://www.winpay.id/", descId: "Payment gateway sebagai solusi transaksi online dan offline dengan 20 metode pembayaran.", descEn: "Payment gateway as a solution for online and offline transactions with 20 payment methods." },
  { name: "Rajabiller", logo: logoRajabiller, link: "https://www.rajabiller.com/", descId: "Billing Provider & Aggregator terlengkap dan termurah di Indonesia.", descEn: "The most complete and affordable Billing Provider & Aggregator in Indonesia." },
  { name: "Speedcash", logo: logoSpeedcash, link: "https://www.speedcash.co.id/", descId: "Platform e-wallet untuk 1KlikPay+, bayar tagihan, transfer, top up seperti checkout di marketplace, dan pembayaran QRIS.", descEn: "E-wallet platform for 1KlikPay+, bill payments, transfers, top-ups like marketplace checkout, and QRIS payments." },
  { name: "ACI", logo: logoAci, link: "https://aci.id/", descId: "Solusi transportasi online, pesan makan online, dan belanja barang dalam 1 aplikasi dengan 800 jenis layanan pembayaran.", descEn: "Online transportation, online food ordering, and goods shopping solution in 1 application with 800 types of payment services." },
  { name: "JogjaKita", logo: logoJogjkita, link: "https://jogjakita.co.id/", descId: "Solusi transportasi, kurir, dan belanja yang praktis melalui JogjaRide, JogjaCar, JogjaShop, JogjaSend, serta 800 jenis layanan pembayaran.", descEn: "Practical transportation, courier, and shopping solutions through JogjaRide, JogjaCar, JogjaShop, JogjaSend, and 800 types of payment services." },
  { name: "Winme", logo: logoWinme, link: "https://www.winme.id/page/", descId: "Platform digital untuk jualan produk digital dan fisik dengan 100% bebas potongan.", descEn: "Digital platform for selling digital and physical products with 100% free of deductions." },
  { name: "InstaQRIS", logo: logoInstaqris, link: "https://www.instaqris.id/", descId: "Platform pendaftaran dan pengelolaan QRIS yang cepat, praktis, legal, dengan izin resmi Bank Indonesia.", descEn: "QRIS registration and management platform that is fast, practical, legal, with official Bank Indonesia license." },
  { name: "TiketKAI", logo: logoTiketkai, link: "https://www.tiketkai.com/", descId: "Layanan pembelian tiket kereta api Indonesia yang mudah dan praktis dengan pembayaran yang lengkap.", descEn: "Easy and practical Indonesian train ticket purchasing service with complete payment options." },
  { name: "Gigapulsa", logo: logoGigapulsa, link: "https://new.gigapulsa.com/", descId: "Layanan H2H produk PPOB, pulsa, game, e-money, dan lainnya dengan kemudahan integrasi untuk bisnis.", descEn: "H2H service for PPOB products, credit, games, e-money, and more with easy integration for business." },
  { name: "Pulsagram", logo: logoPulsagram, link: "https://www.pulsagram.com/", descId: "Aplikasi agen pulsa.", descEn: "Credit agent application." },
];

const advantages = [
  { icon: ShieldCheck, titleId: "Infrastruktur Andal & Aman", titleEn: "Reliable & Secure Infrastructure", descId: "Sistem pembayaran berlisensi BI dan PCI DSS dengan uptime tinggi.", descEn: "BI-licensed and PCI DSS-compliant payment system with high uptime." },
  { icon: Plug, titleId: "API-First Integration", titleEn: "API-First Integration", descId: "Dokumentasi lengkap dan SDK modern untuk integrasi yang cepat.", descEn: "Comprehensive documentation and modern SDKs for fast integration." },
  { icon: TrendingUp, titleId: "Tingkat Sukses Transaksi Tinggi", titleEn: "High Transaction Success Rate", descId: "Routing cerdas dan monitoring real-time menjaga performa transaksi.", descEn: "Smart routing and real-time monitoring keep transaction performance high." },
  { icon: Network, titleId: "Skalabilitas Ekosistem", titleEn: "Scalable Ecosystem Support", descId: "Mendukung skala enterprise dengan jaringan mitra dan biller terluas.", descEn: "Supports enterprise scale with the widest partner and biller network." },
];

export default function SolusiPage() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = "Solusi | Bimasakti";
  }, []);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1529 45%, #111d35 100%)" }}
      >
        {/* Glows */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(32 93% 54% / 0.35) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(220 80% 50% / 0.4) 0%, transparent 70%)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="container-main relative z-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" /> {t("Solusi & Produk", "Solutions & Products")}
              </span>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                {t("Solusi Bisnis & ", "Business Solutions & ")}
                <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  {t("Produk Digital", "Digital Products")}
                </span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
                {t(
                  "Beragam solusi infrastruktur pembayaran dan produk digital untuk mendukung kebutuhan transaksi, operasional, dan layanan lintas ekosistem.",
                  "A range of payment infrastructure solutions and digital products supporting transactions, operations, and services across ecosystems."
                )}
              </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    <a href="#enterprise">{t("Jelajahi Solusi", "Explore Solutions")}</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white">
                    <a href="https://wa.me/628818000805" target="_blank" rel="noopener noreferrer">{t("Hubungi Tim Kami", "Talk to Our Team")}</a>
                  </Button>
                </div>
            </AnimatedSection>

            {/* Right — fintech composition */}
            <AnimatedSection delay={0.15}>
              <div className="relative h-[440px] md:h-[480px]">
                {/* Center hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-44 h-44 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_60px_hsl(32_93%_54%_/_0.4)]">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                      <Activity className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating card 1 — Nominal */}
                <div className="absolute top-2 left-0 md:left-2 w-56 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2 text-white/60 text-[11px] font-medium uppercase tracking-wider">
                    <CreditCard className="w-3.5 h-3.5 text-primary" /> {t("Nominal Transaksi", "Transaction Volume")}
                  </div>
                  <p className="mt-2 text-2xl font-bold text-white">Rp 12,4 T</p>
                  <p className="text-[11px] text-emerald-400 font-semibold mt-1">+18% YoY</p>
                </div>

                {/* Floating card 2 — Mitra */}
                <div className="absolute top-8 right-0 md:right-2 w-52 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2 text-white/60 text-[11px] font-medium uppercase tracking-wider">
                    <Network className="w-3.5 h-3.5 text-primary" /> {t("Jumlah Mitra", "Active Partners")}
                  </div>
                  <p className="mt-2 text-2xl font-bold text-white">10.000+</p>
                  <p className="text-[11px] text-white/50 mt-1">{t("Merchant & biller", "Merchants & billers")}</p>
                </div>

                {/* Floating card 3 — Settlement */}
                <div className="absolute bottom-6 left-4 md:left-12 w-56 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2 text-white/60 text-[11px] font-medium uppercase tracking-wider">
                    <Wallet className="w-3.5 h-3.5 text-primary" /> Settlement / Payout
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-white">99,98%</p>
                    <span className="text-[11px] text-white/50">success</span>
                  </div>
                </div>

                {/* Floating card 4 — QRIS */}
                <div className="absolute bottom-2 right-2 md:right-6 w-44 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2 text-white/60 text-[11px] font-medium uppercase tracking-wider">
                    <QrCode className="w-3.5 h-3.5 text-primary" /> QRIS / API
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">{t("Real-time", "Real-time")}</p>
                  <p className="text-[11px] text-white/50 mt-0.5">{t("Routing & monitoring", "Routing & monitoring")}</p>
                </div>

                {/* Decorative connection dots */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary animate-pulse" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION — ENTERPRISE SOLUTIONS */}
      <section id="enterprise" className="section-padding">
        <div className="container-main">
          <AnimatedSection>
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
              Enterprise Solutions
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              {t("Solusi Bisnis Enterprise", "Enterprise Business Solutions")}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              {t(
                "Infrastruktur pembayaran yang dirancang untuk kebutuhan enterprise, lembaga keuangan, dan institusi pemerintah.",
                "Payment infrastructure designed for enterprise, financial institutions, and government agencies."
              )}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {enterpriseSolutions.map((sol, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="group h-full flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <sol.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{sol.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {lang === "id" ? sol.descId : sol.descEn}
                  </p>
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="mt-4 text-sm font-semibold text-primary inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  >
                    {t("Selengkapnya", "Learn More")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — DIGITAL PRODUCTS */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <AnimatedSection>
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
              Product Ecosystem
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              {t("Produk Pembayaran Digital", "Digital Payment Products")}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              {t(
                "Ekosistem produk pembayaran digital yang melayani berbagai kebutuhan transaksi di Indonesia.",
                "Digital payment product ecosystem serving various transaction needs in Indonesia."
              )}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
            {digitalProducts.map((product, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <div className="group h-full flex flex-col rounded-2xl border border-border bg-background p-5 hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="h-16 flex items-center justify-start">
                    <img
                      src={product.logo}
                      alt={product.name}
                      className="max-h-12 max-w-[140px] object-contain"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{product.name}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed flex-1">
                    {lang === "id" ? product.descId : product.descEn}
                  </p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all self-start"
                  >
                    {t("Selengkapnya", "Learn More")} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — ADVANTAGES */}
      <section className="section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                {t("Keunggulan Bimasakti sebagai Mitra Infrastruktur", "Why Bimasakti as Your Infrastructure Partner")}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {t(
                  "Alasan utama mengapa Bimasakti dipercaya sebagai fondasi infrastruktur pembayaran mereka.",
                  "Key reasons enterprises trust Bimasakti as the foundation of their payment infrastructure."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {advantages.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    <a.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {lang === "id" ? a.titleId : a.titleEn}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {lang === "id" ? a.descId : a.descEn}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — CTA */}
      <section
        id="cta"
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1529 50%, #111d35 100%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsl(32 93% 54% / 0.3) 0%, transparent 70%)" }}
        />
        <div className="container-main relative z-10 py-20 md:py-24 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
              {t(
                "Siap Mengembangkan Ekosistem Pembayaran Anda?",
                "Ready to Scale Your Payment Ecosystem?"
              )}
            </h2>
            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-base md:text-lg">
              {t(
                "Bangun solusi pembayaran yang scalable, aman, dan terintegrasi bersama Bimasakti.",
                "Build scalable, secure, and integrated payment solutions with Bimasakti."
              )}
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <a href="https://wa.me/628818000805" target="_blank" rel="noopener noreferrer">
                  {t("Hubungi Tim Kami", "Talk to Our Team")} <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
