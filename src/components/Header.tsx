import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo-bimasakti.png";

const navItems = [
  { id: "tentang", labelId: "Tentang Kami", labelEn: "About Us", href: "/tentang-kami" },
  { id: "solusi", labelId: "Solusi", labelEn: "Solutions", href: "/solusi" },
  { id: "berita", labelId: "Berita", labelEn: "News", href: "/berita" },
  { id: "karir", labelId: "Karir", labelEn: "Careers", href: "/karir" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-xl" : "bg-card/80 backdrop-blur-md"
      }`}
      style={{ boxShadow: scrolled ? "var(--shadow-header)" : "none" }}
    >
      <div className="container-main flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Bimasakti" className="h-9 md:h-10 w-auto" />
        </Link>

        {/* Desktop Nav — right-aligned */}
        <div className="hidden md:flex items-center gap-1">
          <nav className="flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`relative px-4 py-2 text-[13px] font-medium transition-colors rounded-lg
                    ${isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"}
                  `}
                >
                  {lang === "id" ? item.labelId : item.labelEn}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher */}
          <div className="relative ml-2">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-foreground/50 hover:text-foreground rounded-lg transition-colors border border-transparent hover:border-border"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "id" ? "ID" : "EN"}
              <ChevronDown className="w-3 h-3" />
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-full mt-2 bg-card rounded-xl py-1.5 min-w-[130px] z-50 border border-border/50"
                style={{ boxShadow: "var(--shadow-elevated)" }}
              >
                <button
                  onClick={() => { setLang("id"); setLangOpen(false); }}
                  className={`w-full px-4 py-2 text-left text-xs hover:bg-secondary transition-colors ${lang === "id" ? "text-primary font-semibold" : "text-foreground/60"}`}
                >
                  🇮🇩 Indonesia
                </button>
                <button
                  onClick={() => { setLang("en"); setLangOpen(false); }}
                  className={`w-full px-4 py-2 text-left text-xs hover:bg-secondary transition-colors ${lang === "en" ? "text-primary font-semibold" : "text-foreground/60"}`}
                >
                  🇬🇧 English
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground/70"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border/50">
          <div className="container-main py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${location.pathname === item.href ? "text-primary bg-primary/5" : "text-foreground/60 hover:text-foreground hover:bg-secondary"}
                `}
              >
                {lang === "id" ? item.labelId : item.labelEn}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-4 py-3">
              <Globe className="w-4 h-4 text-muted" />
              <button onClick={() => setLang("id")} className={`text-sm ${lang === "id" ? "text-primary font-semibold" : "text-foreground/60"}`}>ID</button>
              <span className="text-foreground/20">|</span>
              <button onClick={() => setLang("en")} className={`text-sm ${lang === "en" ? "text-primary font-semibold" : "text-foreground/60"}`}>EN</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
