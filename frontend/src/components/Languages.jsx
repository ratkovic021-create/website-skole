import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const LABELS = ["EN", "DE", "RU", "SR"];

export default function Languages() {
  const { t } = useLanguage();
  const l = t.languages;

  return (
    <section
      id="jezici"
      data-testid="languages-section"
      className="relative py-24 md:py-32 bg-paper-warm grain"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand">
              {l.tag}
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] mt-5 text-ink">
              {l.h2a}
              <br />
              <span className="italic">{l.h2b}</span>
            </h2>
          </div>
          <p className="font-sans text-base md:text-lg text-ink-muted max-w-md leading-relaxed">
            {l.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {l.list.map((lang, idx) => (
            <motion.div
              key={LABELS[idx]}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              data-testid={`language-card-${LABELS[idx].toLowerCase()}`}
              className="group bg-paper p-8 md:p-12 hover:bg-ink hover:text-paper transition-colors duration-500 cursor-default"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-serif text-7xl md:text-8xl leading-none text-brand group-hover:text-paper transition-colors duration-500">
                  {LABELS[idx]}
                </span>
                <Globe2 className="w-5 h-5 mt-2 text-ink-muted group-hover:text-paper transition-colors duration-500" strokeWidth={1.4} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mb-4">{lang.name}</h3>
              <p className="font-sans text-sm md:text-base text-ink-muted group-hover:text-paper/70 transition-colors duration-500 leading-relaxed max-w-md">
                {lang.blurb}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {l.levels.map((lvl) => (
                  <span
                    key={lvl}
                    className="font-sans text-[11px] tracking-[0.15em] uppercase border border-current px-3 py-1.5"
                  >
                    {lvl}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
