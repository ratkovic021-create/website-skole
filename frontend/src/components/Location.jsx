import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PHONE_DISPLAY = "064 1140600";
const PHONE_LINK = "tel:+381641140600";
const ADDRESS = "Petra Drapšina 32, Novi Sad 21000";

const times = [
  "10:00 — 21:00",
  "10:00 — 21:00",
  "10:00 — 21:00",
  "10:00 — 21:00",
  "10:00 — 21:00",
  "10:00 — 16:00",
  null,
];

const mapEmbed = "https://www.google.com/maps?q=Petra+Drap%C5%A1ina+32,+Novi+Sad&output=embed";

export default function Location() {
  const { t } = useLanguage();
  const l = t.location;

  const hours = l.days.map((day, i) => ({
    day,
    time: times[i] ?? l.closed,
    closed: times[i] === null,
  }));

  return (
    <section
      id="lokacija"
      data-testid="location-section"
      className="relative py-24 md:py-32 bg-ink text-paper overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-6">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand">
              {l.tag}
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.92] mt-5 text-paper">
              {l.h2a}
              <br />
              <span className="italic text-brand">{l.h2b}</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end gap-8">
            <a
              href="https://maps.google.com/?q=Petra+Drap%C5%A1ina+32,+Novi+Sad"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="address-link"
              className="group flex items-start gap-5 border-b border-paper/15 pb-6 hover:border-brand transition-colors"
            >
              <MapPin className="w-6 h-6 text-brand mt-1 shrink-0" strokeWidth={1.4} />
              <div className="flex-1">
                <div className="font-sans text-xs uppercase tracking-[0.2em] text-paper/50 mb-2">
                  {l.addressLabel}
                </div>
                <div className="font-serif text-2xl md:text-3xl text-paper group-hover:text-brand transition-colors">
                  {ADDRESS}
                </div>
              </div>
            </a>

            <a
              href={PHONE_LINK}
              data-testid="location-call-button"
              className="group flex items-start gap-5 border-b border-paper/15 pb-6 hover:border-brand transition-colors"
            >
              <Phone className="w-6 h-6 text-brand mt-1 shrink-0" strokeWidth={1.4} />
              <div className="flex-1">
                <div className="font-sans text-xs uppercase tracking-[0.2em] text-paper/50 mb-2">
                  {l.callLabel}
                </div>
                <div className="font-serif text-3xl md:text-4xl text-paper group-hover:text-brand transition-colors">
                  {PHONE_DISPLAY}
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-paper/10 border border-paper/10">
          <div className="lg:col-span-8 bg-ink min-h-[400px] md:min-h-[500px] relative">
            <iframe
              data-testid="location-map"
              title="Lokacija škole — Petra Drapšina 32, Novi Sad"
              src={mapEmbed}
              className="absolute inset-0 w-full h-full grayscale-[40%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-4 bg-ink p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-brand" strokeWidth={1.4} />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-paper/60">
                {l.hoursLabel}
              </span>
            </div>

            <ul className="divide-y divide-paper/10">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-baseline justify-between py-3.5"
                >
                  <span className="font-serif text-lg md:text-xl text-paper">{h.day}</span>
                  <span className={`font-sans text-sm tabular-nums ${h.closed ? "text-brand" : "text-paper/70"}`}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={PHONE_LINK}
              data-testid="hours-call-button"
              className="mt-8 inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-paper px-5 py-3 text-sm font-sans font-medium w-full justify-center"
            >
              <Phone className="w-4 h-4" strokeWidth={1.8} />
              {l.bookBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
