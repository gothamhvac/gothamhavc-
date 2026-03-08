import { Zap, Shield, MapPin, Clock, Award, Thermometer } from "lucide-react";

const items = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: MapPin, text: "5 NYC Boroughs" },
  { icon: Zap, text: "Residential & Commercial" },
  { icon: Award, text: "NYSERDA Qualified" },
  { icon: Clock, text: "Same-Week Service" },
  { icon: Thermometer, text: "Heating & Cooling" },
  { icon: MapPin, text: "Tri-State Coverage" },
  { icon: Shield, text: "Code Compliant" },
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="py-6 bg-dark overflow-hidden" aria-label="Company highlights">
      <h2 className="sr-only">Company Highlights</h2>
      <div className="marquee-track flex items-center gap-12 w-max">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-2">
            <item.icon className="w-4 h-4 text-blue flex-shrink-0" />
            <span className="text-white/50 text-sm font-medium whitespace-nowrap uppercase tracking-wider">
              {item.text}
            </span>
            <span className="text-white/10 ml-8" aria-hidden="true">///</span>
          </div>
        ))}
      </div>
    </section>
  );
}
