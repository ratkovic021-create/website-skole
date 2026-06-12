import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const languages = [
  {
    name: "Engleski jezik",
    label: "EN",
    blurb: "Od osnovnih kurseva do akademskog i poslovnog engleskog.",
  },
  {
    name: "Nemački jezik",
    label: "DE",
    blurb: "Strukturirani program za sve uzraste i nivoe.",
  },
  {
    name: "Ruski jezik",
    label: "RU",
    blurb: "Ćirilica, izgovor i konverzacija od početnog nivoa.",
  },
  {
    name: "Srpski za strance",
    label: "SR",
    blurb: "Serbian for foreigners — friendly and patient approach.",
  },
];

export default function Languages() {
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
              ✦ Jezici koje predajemo
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] mt-5 text-ink">
              Četiri jezika.
              <br />
              <span className="italic">Jedna metoda.</span>
            </h2>
          </div>
          <p className="font-sans text-base md:text-lg text-ink-muted max-w-md leading-relaxed">
            Bilo da krećete od nule ili usavršavate ono što već znate — kod nas
            ćete pronaći program po meri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {languages.map((lang, idx) => (
            <motion.div
              key={lang.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              data-testid={`language-card-${lang.label.toLowerCase()}`}
              className="group bg-paper p-8 md:p-12 hover:bg-ink hover:text-paper transition-colors duration-500 cursor-default"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-serif text-7xl md:text-8xl leading-none text-brand group-hover:text-paper transition-colors duration-500">
                  {lang.label}
                </span>
                <Globe2
                  className="w-5 h-5 mt-2 text-ink-muted group-hover:text-paper transition-colors duration-500"
                  strokeWidth={1.4}
                />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mb-4">
                {lang.name}
              </h3>
              <p className="font-sans text-sm md:text-base text-ink-muted group-hover:text-paper/70 transition-colors duration-500 leading-relaxed max-w-md">
                {lang.blurb}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Početni", "Srednji", "Napredni"].map((lvl) => (
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
