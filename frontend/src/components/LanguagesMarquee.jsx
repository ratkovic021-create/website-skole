import Marquee from "react-fast-marquee";

const items = [
  "Engleski jezik",
  "Nemački jezik",
  "Ruski jezik",
  "Srpski za strance",
];

export default function LanguagesMarquee() {
  return (
    <section
      data-testid="languages-marquee"
      className="bg-paper-warm border-y border-line py-8 md:py-10 overflow-hidden"
    >
      <Marquee speed={50} gradient={false} pauseOnHover>
        {[...Array(3)].map((_, loop) =>
          items.map((item, idx) => (
            <span
              key={`${loop}-${idx}`}
              className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-ink px-10 flex items-center gap-10"
            >
              {item}
              <span className="text-brand not-italic font-sans text-2xl">✦</span>
            </span>
          ))
        )}
      </Marquee>
    </section>
  );
}
