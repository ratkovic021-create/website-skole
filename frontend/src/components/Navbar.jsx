import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PHONE_DISPLAY = "064 1140600";
const PHONE_LINK = "tel:+381641140600";

const LANGS = ["sr", "en", "ru"];
const LANG_LABELS = { sr: "SR", en: "EN", ru: "RU" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.languages, href: "#jezici" },
    { label: t.nav.classes, href: "#casovi" },
    { label: t.nav.about, href: "#o-nama" },
    { label: t.nav.location, href: "#lokacija" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between">
        <a
          href="#top"
          data-testid="navbar-logo"
          className="flex items-baseline gap-2 group"
        >
          <span className="font-serif italic text-2xl md:text-3xl text-ink leading-none">
            Language
          </span>
          <span className="font-serif text-2xl md:text-3xl text-brand leading-none">
            First.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="editorial-link font-sans text-sm text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 border border-line rounded-sm overflow-hidden">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`font-sans text-xs px-2.5 py-1.5 transition-colors duration-200 ${
                  lang === l
                    ? "bg-ink text-paper"
                    : "text-ink/60 hover:text-ink hover:bg-paper-warm"
                }`}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
          <a
            href={PHONE_LINK}
            data-testid="navbar-call-button"
            className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-sm font-sans font-medium hover:bg-brand transition-colors duration-300"
          >
            <Phone className="w-4 h-4" strokeWidth={1.8} />
            {PHONE_DISPLAY}
          </a>
        </div>

        <button
          data-testid="navbar-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink"
          aria-label="Meni"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            data-testid="navbar-mobile-menu"
            className="md:hidden bg-paper border-t border-line"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-2xl text-ink"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-1 border border-line rounded-sm overflow-hidden w-fit">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`font-sans text-xs px-3 py-2 transition-colors duration-200 ${
                      lang === l
                        ? "bg-ink text-paper"
                        : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
              <a
                href={PHONE_LINK}
                data-testid="navbar-mobile-call"
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-sm font-sans font-medium w-fit"
              >
                <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
              </a>
              <div className="flex items-start gap-2 text-ink/70 text-sm font-sans">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Petra Drapšina 32, Novi Sad
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
