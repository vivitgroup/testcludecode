"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <img
        src="https://picsum.photos/seed/newsletter/1920/600"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-secondary/85 backdrop-blur-sm" />

      <div className="relative z-10 text-center px-4 max-w-xl mx-auto">
        {/* Decorative vertical line */}
        <div className="w-px h-16 mx-auto mb-6 bg-gradient-to-b from-transparent via-brand to-transparent" />

        <span className="inline-block text-xs font-bold text-brand bg-brand/20 px-3 py-1 rounded-full mb-4">
          ابقَ على اطلاع
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">كن أول من يعرف</h2>
        <p className="text-white/50 text-sm mb-8 leading-relaxed">
          اشترك الآن واستقبل أحدث المجموعات والعروض الحصرية مباشرة إلى بريدك
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-brand font-bold text-base">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            شكراً! تم تسجيلك بنجاح
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="بريدك الإلكتروني"
              required
              className="flex-1 bg-white/10 border border-white/15 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand/60 focus:bg-white/15 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand text-white font-bold text-sm rounded-xl hover:bg-brand/90 transition-colors whitespace-nowrap"
            >
              اشتراك
            </button>
          </form>
        )}

        <p className="text-white/25 text-xs mt-4">
          لن نشارك بريدك الإلكتروني مع أي جهة خارجية. يمكنك إلغاء الاشتراك في أي وقت.
        </p>
      </div>
    </section>
  );
}
