import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import logo from "@/assets/logo-bimasakti.png";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Company Identity — takes more space */}
          <div className="lg:col-span-4">
            <img src={logo} alt="Bimasakti" className="h-16 w-auto mb-5 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed font-medium">
              PT Bimasakti Multi Sinergi
            </p>
            <p className="text-sm text-primary-foreground/60 mt-2 leading-relaxed max-w-sm">
              {t(
                "Penyedia ekosistem layanan pembayaran digital terintegrasi untuk enterprise, lembaga keuangan, dan platform digital di Indonesia.",
                "Integrated digital payment ecosystem provider for enterprises, financial institutions, and digital platforms in Indonesia."
              )}
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://id.linkedin.com/company/bimasaktimultisinergi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/bimasaktimultisinergi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all hover:scale-105"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Menu Utama */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-sm mb-5 text-primary-foreground/90 uppercase tracking-wider">{t("Menu Utama", "Main Menu")}</h4>
            <ul className="space-y-3">
              {[
                { label: t("Beranda", "Home"), href: "/" },
                { label: t("Tentang Kami", "About Us"), href: "/tentang-kami" },
                { label: t("Solusi", "Solutions"), href: "/solusi" },
                { label: t("Berita", "News"), href: "/berita" },
                { label: t("Karir", "Careers"), href: "/karir" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kantor */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-sm mb-5 text-primary-foreground/90 uppercase tracking-wider">{t("Kantor", "Offices")}</h4>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-foreground/40" />
                <div>
                  <p className="text-sm font-medium text-primary-foreground/80">Sidoarjo Office</p>
                  <p className="text-xs text-primary-foreground/50 mt-1 leading-relaxed">
                    Grha Bimasakti, Delta Raya Utara Kav 49-51 Deltasari Baru, Waru Sidoarjo 61256, Jawa Timur.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-foreground/40" />
                <div>
                  <p className="text-sm font-medium text-primary-foreground/80">Jakarta Office</p>
                  <p className="text-xs text-primary-foreground/50 mt-1 leading-relaxed">
                    MT Haryono Square Jakarta, Jl. Letjen M.T. Haryono No 6 Lantai 3A Unit 12, Jatinegara, Jakarta Timur, DKI Jakarta 13330.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kontak */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-sm mb-5 text-primary-foreground/90 uppercase tracking-wider">{t("Kontak", "Contact")}</h4>
            <div className="space-y-4">
              <a href="tel:+62881800805" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors group">
                <Phone className="w-4 h-4 text-primary-foreground/40 group-hover:text-primary-foreground/70 transition-colors" />
                +62 881 8000 805
              </a>
              <a href="mailto:support@bimasakti.co.id" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors group">
                <Mail className="w-4 h-4 text-primary-foreground/40 group-hover:text-primary-foreground/70 transition-colors" />
                support@bimasakti.co.id
              </a>
              <a href="mailto:partnership@bimasakti.co.id" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors group">
                <ExternalLink className="w-4 h-4 text-primary-foreground/40 group-hover:text-primary-foreground/70 transition-colors" />
                partnership@bimasakti.co.id
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} PT Bimasakti Multi Sinergi. {t("Seluruh hak dilindungi.", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
}
