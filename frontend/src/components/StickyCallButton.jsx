import { Phone } from "lucide-react";

const PHONE_LINK = "tel:+381641140600";

export default function StickyCallButton() {
  return (
    <a
      href={PHONE_LINK}
      data-testid="sticky-mobile-call"
      className="md:hidden fixed bottom-5 left-5 right-5 z-40 bg-brand hover:bg-brand-hover text-paper px-5 py-4 font-sans text-sm font-medium flex items-center justify-center gap-2 shadow-lg shadow-brand/30"
    >
      <Phone className="w-5 h-5" strokeWidth={1.8} />
      Pozovite nas: 064 1140600
    </a>
  );
}
