"use client";
import { useRef, useState } from "react";

const collections = [
  { name: "مجموعة مكعب", seed: "cube" },
  { name: "مجموعة أرسيليا", seed: "arcelia" },
  { name: "مجموعة ديزرت روز", seed: "desert" },
  { name: "مجموعة نخلة", seed: "palm" },
  { name: "مجموعة بلومينج جريس", seed: "blooming" },
  { name: "مجموعة جاردان", seed: "jardan" },
  { name: "مجموعة هدوء", seed: "hudo" },
  { name: "مجموعة ويسبر", seed: "whisper" },
  { name: "مجموعة سينسوري جاردن", seed: "sensory" },
  { name: "مجموعة سيرين", seed: "serene" },
];

export default function CollectionsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScroll, setStartScroll] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setStartScroll(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const delta = e.pageX - startX;
    scrollRef.current.scrollLeft = startScroll + delta;
  };

  const onMouseUp = () => setIsDragging(false);

  const scrollBy = (dir: "next" | "prev") => {
    if (!scrollRef.current) return;
    const amount = 290;
    scrollRef.current.scrollBy({ left: dir === "next" ? -amount : amount, behavior: "smooth" });
    setActiveIndex((prev) =>
      dir === "next" ? Math.min(prev + 1, collections.length - 1) : Math.max(prev - 1, 0)
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="inline-block text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full mb-2">
              اكتشف أحدث
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brand">مجموعاتنا</h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollBy("prev")}
              className="w-10 h-10 rounded-full border border-black/[.1] flex items-center justify-center text-secondary hover:bg-brand hover:text-white hover:border-brand transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy("next")}
              className="w-10 h-10 rounded-full border border-black/[.1] flex items-center justify-center text-secondary hover:bg-brand hover:text-white hover:border-brand transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {collections.map((col, i) => (
            <div
              key={col.seed}
              className="w-[270px] flex-shrink-0 snap-center group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-3 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                <img
                  src={`https://picsum.photos/seed/${col.seed}/400/530`}
                  alt={col.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <p className="text-center font-bold text-secondary text-sm">{col.name}</p>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-5 mb-6">
          {collections.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-5 h-2 bg-brand" : "w-2 h-2 bg-black/15 hover:bg-black/30"
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand text-white font-bold text-sm rounded-2xl hover:bg-brand/90 transition-colors"
        >
          استكشف أحدث المجموعات
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
