"use client";

import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "", label: "NYC Boroughs Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic with slight bounce at end
      let eased: number;
      if (progress < 0.9) {
        eased = 1 - Math.pow(1 - progress / 0.9, 3);
        eased *= 0.95;
      } else {
        const bounceProgress = (progress - 0.9) / 0.1;
        eased = 0.95 + 0.05 * (1 + Math.sin(bounceProgress * Math.PI));
        eased = Math.min(eased, 1);
      }
      setDisplayed(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {displayed}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-28 sm:py-36 bg-dark relative overflow-hidden" aria-label="Company statistics">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern" />
      {/* Mesh glow orbs */}
      <div className="gradient-orb w-[500px] h-[300px] bg-blue/8 top-[-80px] left-[10%]" />
      <div className="gradient-orb w-[400px] h-[250px] bg-blue/6 bottom-[-60px] right-[15%]" />
      <div className="gradient-orb w-[300px] h-[200px] bg-indigo-500/5 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-4 ${
                i < stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              <div className="stat-glow mb-4">
                <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-white/30 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
