import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PHONE_DISPLAY = "064 1140600";
const PHONE_LINK = "tel:+381641140600";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer
      data-testid="site-footer"
      className="bg-paper border-t border-line py-14 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif italic text-3xl text-ink">Language</span>
              <span className="font-serif text-3xl text-brand">First.</span>
            </div>
            <p className="mt-4 font-sans text-sm text-ink-muted max-w-sm leading-relaxed">
              {f.desc}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-sans text-xs uppercase tracking-[0.2em] text-ink-muted mb-4">
              {f.contact}
            </div>
            <a
              href={PHONE_LINK}
              data-testid="footer-call"
              className="flex items-center gap-2 font-serif text-2xl text-ink hover:text-brand transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={1.8} />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="md:col-span-4">
            <div className="font-sans text-xs uppercase tracking-[0.2em] text-ink-muted mb-4">
              {f.address}
            </div>
            <a
              href="https://maps.google.com/?q=Petra+Drap%C5%A1ina+32,+Novi+Sad"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-address"
              className="flex items-start gap-2 font-serif text-xl text-ink hover:text-brand transition-colors"
            >
              <MapPin className="w-4 h-4 mt-1.5" strokeWidth={1.8} />
              Petra Drapšina 32,
              <br />
              Novi Sad 21000
            </a>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="font-sans text-xs text-ink-muted">
            © {new Date().getFullYear()} Language First · {f.copy}
          </p>
          <p className="font-sans text-xs text-ink-muted italic">
            {f.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
