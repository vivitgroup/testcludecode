export default function AIStudioBanner() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-secondary rounded-3xl overflow-hidden">
          {/* Decorative stars */}
          <svg
            className="absolute top-4 left-6 w-24 h-24 text-white/[.07] pointer-events-none"
            fill="currentColor"
            viewBox="0 0 200 200"
          >
            <polygon points="100,0 117,68 186,68 131,110 149,178 100,136 51,178 69,110 14,68 83,68" />
          </svg>
          <svg
            className="absolute bottom-4 right-8 w-16 h-16 text-white/[.05] pointer-events-none"
            fill="currentColor"
            viewBox="0 0 200 200"
          >
            <polygon points="100,0 117,68 186,68 131,110 149,178 100,136 51,178 69,110 14,68 83,68" />
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-8 md:py-10">
            {/* Text */}
            <div>
              <span className="inline-block text-xs font-bold text-brand bg-brand/20 px-3 py-1 rounded-full mb-3">
                مدعوم بالذكاء الاصطناعي
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                جرّب استديو القثمي بالذكاء الاصطناعي
              </h3>
              <p className="text-white/50 text-sm max-w-lg">
                صمّم غرفتك، جرّب ألوان الأقمشة، واحصل على توصيات مخصصة — كل هذا بضغطة زر.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="/studio"
              className="flex items-center gap-2 px-7 py-3.5 bg-brand text-white font-bold text-sm rounded-2xl hover:bg-brand/90 transition-all duration-300 whitespace-nowrap group"
            >
              جرب الآن
              <svg
                className="w-4 h-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
