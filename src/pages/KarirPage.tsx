import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { useCareers } from "@/hooks/useCareers";
import { Users, ArrowRight, CheckCircle, Briefcase, Clock, FileText, UserCheck, Zap, Target, Trophy, MapPin } from "lucide-react";

const seaValues = [
  {
    icon: Zap,
    letter: "S",
    title: "Speed",
    descId: "Bergerak cepat dalam merespons peluang, tantangan, dan kebutuhan bisnis dengan tetap menjaga kualitas.",
    descEn: "Move quickly in responding to opportunities, challenges, and business needs while maintaining quality.",
  },
  {
    icon: Target,
    letter: "E",
    title: "Execute",
    descId: "Fokus pada tindakan nyata, disiplin dalam eksekusi, dan memastikan setiap rencana berjalan efektif.",
    descEn: "Focus on real action, disciplined execution, and ensuring every plan runs effectively.",
  },
  {
    icon: Trophy,
    letter: "A",
    title: "Achieve",
    descId: "Berorientasi pada hasil, pencapaian target, dan dampak yang terukur bagi bisnis dan ekosistem.",
    descEn: "Result-oriented, target achievement, and measurable impact for business and ecosystem.",
  },
];

const recruitmentSteps = [
  { icon: FileText, titleId: "Kirim Lamaran", titleEn: "Submit Application", descId: "Kirim CV dan portofolio melalui form online.", descEn: "Send your CV and portfolio through the online form." },
  { icon: UserCheck, titleId: "Seleksi Administrasi", titleEn: "Administrative Selection", descId: "Tim HR akan meninjau kelengkapan dokumen Anda.", descEn: "HR team will review your documents." },
  { icon: Users, titleId: "Interview", titleEn: "Interview", descId: "Wawancara dengan HR dan tim terkait.", descEn: "Interview with HR and relevant teams." },
  { icon: CheckCircle, titleId: "Penawaran Kerja", titleEn: "Job Offer", descId: "Kandidat terpilih akan menerima penawaran resmi.", descEn: "Selected candidates receive an official offer." },
];

export default function KarirPage() {
  const { t, lang } = useLanguage();
  const { data: careers = [], isLoading, error } = useCareers();

  useEffect(() => {
    document.title = "Karir | Bimasakti";
  }, []);

  return (
    <div>
      {/* Premium Dark Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1529 45%, #111d35 100%)" }}
      >
        {/* Radial orange glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px circle at 85% 30%, hsl(var(--primary) / 0.22), transparent 60%), radial-gradient(500px circle at 10% 80%, hsl(var(--primary) / 0.10), transparent 65%)",
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
        {/* Dot stars */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="container-main relative py-24 md:py-32">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
                <Briefcase className="w-3.5 h-3.5" /> {t("Karir", "Careers")}
              </span>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                {t("Bangun Masa Depan", "Build the Future")}{" "}
                <span className="text-primary">{t("Pembayaran Digital", "of Digital Payments")}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                {t(
                  "Bergabunglah dengan tim kami dan jadilah bagian dari transformasi pembayaran digital Indonesia.",
                  "Join our team and be part of Indonesia's digital payment transformation."
                )}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#open-positions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  {t("Lihat Lowongan", "View Openings")} <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#sea-values"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white font-semibold hover:bg-white/15 transition-all"
                >
                  {t("Pelajari Budaya Kami", "Explore Our Culture")}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SEA Values */}
      <section id="sea-values" className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {t("Nilai Kami", "Our Values")}
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                SEA Values
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                {t(
                  "Budaya kerja Bimasakti yang mendorong tim bergerak cepat, eksekusi tepat, dan mencapai hasil nyata.",
                  "Bimasakti's work culture that drives the team to move fast, execute precisely, and achieve real results."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {seaValues.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Big translucent letter */}
                  <span className="absolute -top-4 -right-2 text-[120px] font-black text-primary/[0.06] leading-none select-none group-hover:text-primary/10 transition-colors">
                    {value.letter}
                  </span>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                      <value.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-xs font-mono font-semibold text-primary">0{i + 1}</span>
                      <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {lang === "id" ? value.descId : value.descEn}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="section-padding bg-muted/5" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted) / 0.04) 100%)" }}>
        <div className="container-main">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {t("Karir Tersedia", "Available Careers")}
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  {t("Lowongan Terbuka", "Open Positions")}
                </h2>
                <p className="mt-3 text-muted">
                  {t("Temukan posisi yang sesuai dengan keahlian Anda.", "Find a position that matches your skills.")}
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm text-muted">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {careers.length} {t("posisi tersedia", "positions available")}
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-3">
            {isLoading ? (
              <p className="text-sm text-muted">Memuat lowongan...</p>
            ) : error ? (
              <p className="text-sm text-muted">Gagal memuat lowongan.</p>
            ) : careers.length === 0 ? (
              <p className="text-sm text-muted">Belum ada lowongan tersedia saat ini.</p>
            ) : (
              careers.map((pos, i) => (
                <AnimatedSection key={`${pos.title}-${i}`} delay={i * 0.03}>
                  <div className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Briefcase className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {pos.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2">
                            <span className="text-xs text-muted flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" /> {pos.department}
                            </span>
                            <span className="text-xs text-muted flex items-center gap-1.5">
                              <Clock className="w-3 h-3" /> {pos.employment_type}
                            </span>
                            <span className="text-xs text-muted flex items-center gap-1.5">
                              <MapPin className="w-3 h-3" /> {pos.location}
                            </span>
                          </div>
                          {pos.summary ? (
                            <p className="mt-3 text-sm text-muted leading-relaxed">
                              {pos.summary}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <a
                        href={pos.apply_url || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition-all shrink-0 group-hover:gap-2.5"
                      >
                        {t("Lamar Sekarang", "Apply Now")} <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {t("Proses", "Process")}
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {t("Proses Rekrutmen", "Recruitment Process")}
              </h2>
              <p className="mt-4 text-muted">
                {t(
                  "Empat langkah sederhana untuk bergabung bersama kami.",
                  "Four simple steps to join us."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {/* Connector line for desktop */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {recruitmentSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="relative rounded-2xl border border-border bg-card p-6 text-center h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="relative w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center border-2 border-card">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-bold text-foreground text-base">
                    {lang === "id" ? step.titleId : step.titleEn}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {lang === "id" ? step.descId : step.descEn}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
