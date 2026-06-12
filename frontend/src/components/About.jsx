import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function About() {
  return (
    <section
      id="o-nama"
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-paper"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558443957-d056622df610?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxsYW5ndWFnZSUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3ODEyNzg2NzN8MA&ixlib=rb-4.1.0&q=85"
              alt="Tabla u učionici sa zapisanim rečima"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.25em] uppercase text-brand"
          >
            ✦ O školi
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] mt-5 text-ink"
          >
            Mali razredi.
            <br />
            <span className="italic text-ink-muted">Veliki napredak.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 font-sans text-base md:text-lg text-ink-muted leading-relaxed max-w-2xl"
          >
            Verujemo da se jezik uči razgovorom, a ne formularima. Naši
            predavači su profesori sa višegodišnjim iskustvom koji individualno
            prate svakog polaznika — od prvog susreta sa azbukom do tečne
            konverzacije.
          </motion.p>

          {/* Rating block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-px bg-line border border-line"
          >
            <div className="bg-paper p-6 md:p-8">
              <div className="font-serif text-5xl md:text-6xl text-ink leading-none">
                5.0
              </div>
              <div className="flex mt-3 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-brand fill-brand"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <div className="font-sans text-xs uppercase tracking-[0.15em] text-ink-muted">
                Ocena na Google-u
              </div>
            </div>
            <div className="bg-paper p-6 md:p-8">
              <div className="font-serif text-5xl md:text-6xl text-ink leading-none">
                27
              </div>
              <div className="mt-3 mb-2 h-4" />
              <div className="font-sans text-xs uppercase tracking-[0.15em] text-ink-muted">
                Recenzija polaznika
              </div>
            </div>
            <div className="bg-paper p-6 md:p-8 col-span-2 md:col-span-1">
              <div className="font-serif text-5xl md:text-6xl text-ink leading-none">
                100%
              </div>
              <div className="mt-3 mb-2 h-4" />
              <div className="font-sans text-xs uppercase tracking-[0.15em] text-ink-muted">
                Posvećenost svakom polazniku
              </div>
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 relative pl-8 border-l-2 border-brand"
          >
            <Quote
              className="absolute -left-3 -top-2 w-6 h-6 text-brand bg-paper"
              strokeWidth={1.5}
            />
            <p className="font-serif italic text-2xl md:text-3xl text-ink leading-snug">
              {"„Atmosfera je topla, predavači posvećeni, a napredak vidljiv već posle prvih nekoliko časova.\u201C"}
            </p>
            <footer className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-ink-muted">
              — polaznik škole, Novi Sad
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
