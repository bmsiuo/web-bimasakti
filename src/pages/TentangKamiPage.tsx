import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Eye,
  Target,
  CheckCircle2,
  Building2,
  Users,
  TrendingUp,
  Network,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import logoBI from "@/assets/logo-bank-indonesia.png";
import logoPCIDSS from "@/assets/logo-pcidss.png";
import logoASPI from "@/assets/asosiasi/aspi.png";
import logoAFTECH from "@/assets/asosiasi/aftech.png";
import logoAPGI from "@/assets/asosiasi/apgi.png";
import logoAPPUI from "@/assets/asosiasi/appui.png";
import logoAPTIKNAS from "@/assets/asosiasi/aptiknas.png";
import logoASITA from "@/assets/asosiasi/asita.png";
import logoIDEA from "@/assets/asosiasi/idea.png";
import logoADEI from "@/assets/asosiasi/adei.png";

const biLicenses = [
  { code: "No.19/467/DKSP/Srt/B", title: "Penerbit Uang Elektronik" },
  { code: "No.20/92/DSSK/Srt/B", title: "Penyelenggara dan Pendukung Jasa Sistem Pembayaran" },
  { code: "No.21/132/DSSK/Srt/B", title: "Penyelenggara Transfer Dana" },
  { code: "No.22/210/DKSP/Srt/B", title: "Penyelenggara Kegiatan Pemrosesan Transaksi Menggunakan QRIS" },
];

const associations = [
  { name: "ASPI", logo: logoASPI },
  { name: "AFTECH", logo: logoAFTECH },
  { name: "APGI", logo: logoAPGI },
  { name: "APPUI", logo: logoAPPUI },
  { name: "APTIKNAS", logo: logoAPTIKNAS },
  { name: "ASITA", logo: logoASITA },
  { name: "idEA", logo: logoIDEA },
  { name: "ADEI", logo: logoADEI },
];

const missions = [
  "Menyelenggarakan layanan elektronik payment berbasis inovasi dan keunggulan teknologi yang berorientasi pada kepuasan pelanggan",
  "Memperluas jaringan distribusi dan akses layanan user yang menguntungkan dan sesuai kebutuhan pasar",
  "Membangun kemitraan strategis yang fokus pada pasar untuk meningkatkan keunggulan bisnis",
];

export default function TentangKamiPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Tentang Kami | Bimasakti";
  }, []);

  return (
    <div className="bg-background">
      {/* ============ 1. HERO ============ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1529 45%, #111d35 100%)" }}
      >
        {/* radial glows */}
        <div
          className="absolute top-0 right-0 w-[750px] h-[750px] rounded-full opacity-50 pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(32 93% 54% / 0.32) 0%, transparent 65%)",
            transform: "translate(25%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(210 80% 50% / 0.25) 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container-main relative pt-32 pb-28 md:pt-40 md:pb-36">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-8">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-semibold tracking-[0.18em] text-white/85 uppercase">
                Tentang Kami
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl">
              Profil <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Bimasakti Group</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <p className="mt-7 text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl">
              Mengenal lebih dekat perusahaan infrastruktur pembayaran digital terdepan di Indonesia.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                { v: "17+", l: "Tahun Pengalaman" },
                { v: "1000+", l: "Mitra & Ekosistem" },
                { v: "Jutaan", l: "Transaksi / bulan" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="px-5 py-3 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md"
                >
                  <p className="text-lg font-bold text-white">{s.v}</p>
                  <p className="text-[11px] text-white/55 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      </section>

      {/* ============ 2. SEKILAS TENTANG BIMASAKTI ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: visual card */}
            <AnimatedSection className="lg:col-span-5">
              <div className="relative">
                {/* background glow */}
                <div
                  className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
                  style={{ background: "radial-gradient(circle, hsl(32 93% 54% / 0.18), transparent 70%)" }}
                />
                <div
                  className="relative rounded-3xl overflow-hidden border border-border/60 shadow-xl p-8"
                  style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #111d35 100%)" }}
                >
                  {/* dot grid */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/55 uppercase tracking-wider">Company</p>
                        <p className="text-sm font-bold text-white">PT Bimasakti Multi Sinergi</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { icon: Network, label: "Infrastruktur Pembayaran", value: "Enterprise-grade" },
                        { icon: ShieldCheck, label: "Lisensi Resmi", value: "Bank Indonesia" },
                        { icon: TrendingUp, label: "Skala Operasi", value: "Nasional" },
                        { icon: Users, label: "Segmen Layanan", value: "Enterprise & FI" },
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/10"
                        >
                          <div className="flex items-center gap-3">
                            <row.icon className="w-4 h-4 text-primary" />
                            <span className="text-xs text-white/70">{row.label}</span>
                          </div>
                          <span className="text-xs font-semibold text-white">{row.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10 flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">17+</span>
                      <span className="text-xs text-white/55">Tahun membangun ekosistem pembayaran</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: content */}
            <AnimatedSection delay={0.1} className="lg:col-span-7">
              <span className="inline-block text-xs font-semibold tracking-[0.18em] text-primary uppercase mb-4">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Sekilas Tentang Bimasakti
              </h2>
              <div className="mt-7 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  PT Bimasakti Multi Sinergi didirikan dengan visi untuk menjadi penyedia ekosistem
                  layanan pembayaran digital terintegrasi di Indonesia. Selama lebih dari 17 tahun,
                  kami telah membangun infrastruktur pembayaran yang handal, menyediakan layanan
                  keuangan berbasis API, platform pembayaran digital, dan solusi integrasi fintech
                  untuk enterprise.
                </p>
                <p>
                  Kami melayani berbagai segmen termasuk enterprise, lembaga keuangan, institusi
                  pemerintah, dan platform digital dengan solusi pembayaran yang aman, cepat, dan
                  skalabel.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ 3. SKALA & DAMPAK ============ */}
      <section
        className="relative overflow-hidden py-24 md:py-28"
        style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1529 50%, #111d35 100%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[400px] rounded-full opacity-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(ellipse, hsl(32 93% 54% / 0.3) 0%, transparent 70%)" }}
        />
        <div className="container-main relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] text-primary uppercase mb-4">
              Skala & Dampak
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Dipercaya untuk skala enterprise
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed">
              Kapabilitas yang teruji dalam mendukung jutaan transaksi dan ribuan mitra di seluruh Indonesia.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { v: "17+", l: "Tahun Pengalaman", d: "Membangun infrastruktur pembayaran sejak awal era digital Indonesia.", icon: TrendingUp },
              { v: "1000+", l: "Mitra & Ekosistem", d: "Bekerja sama dengan enterprise, lembaga keuangan, dan platform digital.", icon: Users },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 hover:border-primary/40 transition-all">
                  <div
                    className="absolute -top-px left-8 right-8 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, hsl(32 93% 54% / 0.6), transparent)" }}
                  />
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-5xl md:text-6xl font-bold text-white tracking-tight">{s.v}</p>
                  <p className="mt-3 text-base font-semibold text-white/85">{s.l}</p>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. VISI & MISI ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] text-primary uppercase mb-4">
              Arah & Tujuan
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Visi & Misi
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* VISI */}
            <AnimatedSection>
              <div className="relative h-full rounded-3xl border border-border/60 bg-card p-10 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Visi</span>
                </div>
                <blockquote className="relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-primary/15 font-serif leading-none">"</span>
                  <p className="relative text-2xl md:text-3xl font-bold text-foreground leading-snug tracking-tight">
                    Menjadi Pemain Utama dalam Bisnis Electronic Payment
                  </p>
                </blockquote>
              </div>
            </AnimatedSection>

            {/* MISI */}
            <AnimatedSection delay={0.1}>
              <div className="relative h-full rounded-3xl border border-border/60 bg-card p-10 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Misi</span>
                </div>
                <ul className="space-y-5">
                  {missions.map((m, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-0.5">
                        {m}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ 5. LISENSI & SERTIFIKASI ============ */}
      <section className="py-24 md:py-28 bg-muted/30">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] text-primary uppercase mb-4">
              Regulasi & Kepatuhan
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Lisensi & Sertifikasi
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Bimasakti telah memperoleh izin dan sertifikasi resmi dari Bank Indonesia dan lembaga terkait.
            </p>
          </AnimatedSection>

          {/* BLOCK 1 — Bank Indonesia */}
          <AnimatedSection>
            <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 pb-8 mb-8 border-b border-border/60">
                <div className="shrink-0 w-32 h-20 md:w-40 md:h-24 rounded-xl bg-white border border-border/60 flex items-center justify-center p-3">
                  <img src={logoBI} alt="Bank Indonesia" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Izin Bank Indonesia</h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Terdaftar dan diawasi oleh Bank Indonesia sebagai otoritas sistem pembayaran nasional.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {biLicenses.map((lic, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border/60 bg-background p-6 hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <p className="text-xs font-mono text-muted-foreground">{lic.code}</p>
                    </div>
                    <p className="text-base font-bold text-foreground leading-snug">{lic.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* BLOCK 2 — PCI DSS */}
          <AnimatedSection delay={0.1}>
            <div className="mt-6 rounded-3xl border border-border/60 bg-card p-8 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                <div className="shrink-0 w-32 h-20 md:w-40 md:h-24 rounded-xl bg-white border border-border/60 flex items-center justify-center p-3">
                  <img src={logoPCIDSS} alt="PCI DSS Compliant" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold tracking-wider text-primary uppercase">Sertifikasi Internasional</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">PCI DSS Compliant</h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Payment Card Industry Data Security Standard — standar keamanan internasional tertinggi
                    untuk pemrosesan, penyimpanan, dan transmisi data kartu pembayaran.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ 6. ASOSIASI INDUSTRI ============ */}
      <section className="py-24 md:py-28">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] text-primary uppercase mb-4">
              Asosiasi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Anggota Asosiasi Industri di Indonesia
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Bimasakti aktif terlibat di berbagai asosiasi strategis yang mendukung pertumbuhan industri
              fintech, pembayaran digital, teknologi, dan ekosistem digital di Indonesia.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {associations.map((a, i) => (
                <div
                  key={i}
                  className="aspect-[3/2] rounded-2xl border border-border/60 bg-card flex items-center justify-center p-6 hover:border-primary/40 hover:shadow-md transition-all group"
                >
                  <img
                    src={a.logo}
                    alt={`Logo ${a.name}`}
                    className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ 7. PERAN KAMI ============ */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1529 50%, #111d35 100%)" }}
      >
        <div
          className="absolute top-0 left-1/2 w-[700px] h-[500px] rounded-full opacity-30 pointer-events-none -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, hsl(32 93% 54% / 0.3) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container-main relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] text-primary uppercase mb-5">
              Peran Kami
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Peran Kami dalam{" "}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Ekosistem Digital
              </span>
            </h2>
            <p className="mt-7 text-base md:text-lg text-white/65 leading-relaxed">
              Bimasakti tidak hanya menyediakan layanan pembayaran, tetapi membangun infrastruktur yang
              menjadi penghubung berbagai kebutuhan digital. Dengan pendekatan bisnis berbasis kemitraan
              dan teknologi, Bimasakti berperan sebagai enabler yang memungkinkan institusi dan bisnis
              untuk berkembang lebih cepat, efisien, dan berkelanjutan.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["Infrastruktur", "Kemitraan", "Teknologi", "Skalabilitas", "Inklusi Digital"].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] text-xs font-semibold text-white/80 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
