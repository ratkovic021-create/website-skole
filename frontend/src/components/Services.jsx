import { motion } from "framer-motion";
import { Users, User, Monitor, Briefcase, Phone } from "lucide-react";

const PHONE_DISPLAY = "064 1140600";
const PHONE_LINK = "tel:+381641140600";

const classes = [
  {
    icon: Users,
    title: "Grupni časovi",
    desc: "Manje grupe u kojima ima prostora za svakog. Učenje uz razgovor i interakciju.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: User,
    title: "Individualni časovi",
    desc: "Program u potpunosti prilagođen vašem tempu i ciljevima.",
    span: "md:col-span-2",
  },
  {
    icon: Monitor,
    title: "Online časovi",
    desc: "Časovi uživo, gde god se nalazite.",
    span: "",
  },
  {
    icon: Briefcase,
    title: "Časovi za odrasle",
    desc: "Profesionalni i opšti kursevi za poslovno okruženje.",
    span: "",
  },
];

const levels = [
  { name: "Početni nivo", small: "A1 — A2" },
  { name: "Srednji nivo", small: "B1 — B2" },
  { name: "Napredni nivo", small: "C1 — C2" },
];

export default function Services() {
  return (
    <section
      id="casovi"
      data-testid="services-section"
      className="relative py-24 md:py-32 bg-paper"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8 mb-14 md:mb-20">
          <div className="md:col-span-8">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand">
              ✦ Tipovi nastave
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] mt-5 text-ink">
              Pronađite svoj
              <br />
              <span className="italic">ritam učenja.</span>
            </h2>
          </div>
          <div className="md:col-span-4 font-sans text-ink-muted text-base leading-relaxed">
            Grupno ili individualno, online ili u učionici — svaki polaznik
            ima svoj put.
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[200px] gap-4 md:gap-5">
          {classes.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                data-testid={`service-card-${c.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`relative bg-paper-warm border border-line p-8 md:p-10 hover:bg-ink hover:text-paper transition-all duration-500 group ${c.span}`}
              >
                <Icon
                  className="w-7 h-7 text-brand group-hover:text-paper transition-colors duration-500"
                  strokeWidth={1.4}
                />
                <h3 className="font-serif text-3xl md:text-4xl mt-6 leading-tight">
                  {c.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-ink-muted group-hover:text-paper/70 transition-colors duration-500 mt-3 max-w-sm leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Levels strip */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand">
              ✦ Nivoi
            </span>
            <div className="flex-1 h-px bg-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
            {levels.map((lvl, idx) => (
              <motion.div
                key={lvl.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-paper p-8 md:p-10 flex items-baseline justify-between"
              >
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-ink">
                    {lvl.name}
                  </div>
                  <div className="font-sans text-xs uppercase tracking-[0.2em] text-ink-muted mt-2">
                    {lvl.small}
                  </div>
                </div>
                <div className="font-serif italic text-5xl md:text-6xl text-brand opacity-60">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA inline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-line pt-12"
        >
          <p className="font-serif text-3xl md:text-4xl text-ink max-w-xl leading-snug">
            Nismo sigurni koji program je{" "}
            <span className="italic text-brand">pravi za vas?</span>
          </p>
          <a
            href={PHONE_LINK}
            data-testid="services-call-button"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 font-sans text-base font-medium hover:bg-brand transition-colors duration-300"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" strokeWidth={1.8} />
            Pozovite: {PHONE_DISPLAY}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
