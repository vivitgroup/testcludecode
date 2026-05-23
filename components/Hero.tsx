"use client";
import { useState, useEffect, useCallback } from "react";

const slides = [
  "https://picsum.photos/seed/fabric1/1920/1080",
  "https://picsum.photos/seed/fabric2/1920/1080",
  "https://picsum.photos/seed/fabric3/1920/1080",
  "https://picsum.photos/seed/fabric4/1920/1080",
  "https://picsum.photos/seed/fabric5/1920/1080",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animKeys, setAnimKeys] = useState([0, 0, 0, 0, 0]);

  const goTo = useCallback((index: number) => {
    const next = ((index % slides.length) + slides.length) % slides.length;
    setCurrent(next);
    setAnimKeys((prev) => prev.map((k, i) => (i === next ? k + 1 : k)));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setAnimKeys((keys) => keys.map((k, i) => (i === next ? k + 1 : k)));
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <section
      className="relative h-[78vh] md:h-[100dvh] overflow-hidden bg-secondary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            key={animKeys[i]}
            src={src}
            alt=""
            className="w-full h-full object-cover ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/55" />
        </div>
      ))}

      {/* Right Arrow (prev in RTL) */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="الشريحة السابقة"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Left Arrow (next in RTL) */}
      <button
        onClick={() => goTo(current + 1)}
        aria-label="الشريحة التالية"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Line Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`الشريحة ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === current ? "w-12 bg-white" : "w-6 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
