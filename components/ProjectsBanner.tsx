export default function ProjectsBanner() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://picsum.photos/seed/projects/1920/800"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-secondary/60" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <span className="inline-block text-xs font-bold text-brand bg-brand/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
          أقمشة فاخرة
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
          لمشاريعك الكبرى
        </h2>
        <p className="text-white/50 text-base md:text-lg mb-8 leading-relaxed">
          نخدم الفنادق والمطاعم والقصور — أكثر من ٨٠ عاماً من الخبرة
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-7 py-3 border-2 border-white/30 text-white rounded-full hover:bg-white hover:text-secondary transition-all duration-300 font-semibold text-sm"
        >
          اكتشف حلول المشاريع
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
