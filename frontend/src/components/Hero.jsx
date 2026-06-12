import { motion } from "framer-motion";
import { Phone, MapPin, Star, ArrowDownRight } from "lucide-react";

const PHONE_DISPLAY = "064 1140600";
const PHONE_LINK = "tel:+381641140600";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden grain"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        {/* LEFT — Editorial text */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-brand fill-brand"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-ink-muted">
              5.0 · 27 recenzija na Google-u
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[14vw] sm:text-[10vw] lg:text-[8.5rem] xl:text-[9.5rem] leading-[0.92] tracking-tight text-ink"
          >
            Reči koje
            <br />
            <span className="italic text-brand">otvaraju</span> svet.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 max-w-xl font-sans text-base md:text-lg leading-relaxed text-ink-muted"
          >
            Škola stranih jezika u srcu Novog Sada. Već godinama predajemo
            engleski, nemački, ruski i srpski za strance — s posvećenošću,
            metodom i ljudskim pristupom koji se pamti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href={PHONE_LINK}
              data-testid="hero-call-button"
              className="group inline-flex items-center gap-3 bg-brand hover:bg-brand-hover text-paper px-7 py-4 font-sans text-base font-medium transition-all duration-300"
            >
              <Phone
                className="w-5 h-5 group-hover:rotate-12 transition-transform"
                strokeWidth={1.8}
              />
              Pozovite nas: {PHONE_DISPLAY}
            </a>

            <a
              href="#lokacija"
              data-testid="hero-location-link"
              className="inline-flex items-center gap-2 editorial-link font-sans text-sm text-ink"
            >
              <MapPin className="w-4 h-4" strokeWidth={1.8} />
              Petra Drapšina 32, Novi Sad
              <ArrowDownRight className="w-4 h-4" strokeWidth={1.8} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Image with editorial frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-warm">
            <img
              src="https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxsYW5ndWFnZSUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3ODEyNzg2NzN8MA&ixlib=rb-4.1.0&q=85"
              alt="Polaznici na času u Language First školi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-paper border border-line px-5 py-4 max-w-[220px]">
            <div className="font-serif text-3xl text-ink leading-none">
              4 <span className="text-brand">jezika</span>
            </div>
            <div className="font-sans text-xs uppercase tracking-[0.18em] text-ink-muted mt-2">
              Engleski · Nemački
              <br />
              Ruski · Srpski
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
