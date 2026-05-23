"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (spanRef.current) observer.observe(spanRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={spanRef}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 25, suffix: "+", label: "فرع في المملكة" },
  { value: 500, suffix: "+", label: "موظف وموظفة" },
  { value: 50, suffix: "K+", label: "كود أقمشة" },
  { value: 80, suffix: "+", label: "عاماً من التميز" },
];

export default function About() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image — right on desktop */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/about/600/750"
                alt="القثمي"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Decorative border square */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-brand/20 rounded-2xl -z-10" />

            {/* Floating year card */}
            <div className="absolute -bottom-4 right-6 bg-brand text-white rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-3xl font-black leading-none">١٩٤٢</p>
              <p className="text-white/80 text-xs mt-1 font-semibold">سنة التأسيس</p>
            </div>
          </div>

          {/* Text — left on desktop */}
          <div className="order-2 md:order-1">
            <span className="inline-block text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full mb-4">
              قصتنا
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-5 leading-tight">
              حكاية نسجها الشغف
            </h2>
            <p className="text-secondary/60 text-sm leading-loose mb-8">
              منذ عام ١٩٤٢، وبيت القثمي يرسم ملامح الفخامة في عالم الأقمشة والمنسوجات.
              بدأت الرحلة بحلم صغير ونمت لتصبح واحدة من أعرق دور الأقمشة في المملكة العربية السعودية.
              نحن لا نبيع أقمشة، نحن نصنع تجارب وذكريات تبقى حية في كل بيت عربي.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 bg-white rounded-2xl border border-black/[.06]">
                  <p className="text-2xl font-black text-brand mb-0.5">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-secondary/55 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold text-sm rounded-full hover:bg-brand transition-colors duration-300"
            >
              اعرف المزيد عنا
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
