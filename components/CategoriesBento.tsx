export default function CategoriesBento() {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-brand uppercase tracking-widest mb-3 px-3 py-1 bg-brand/10 rounded-full">
            المجموعات
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-secondary">تشكيلات القثمي</h2>
          <p className="text-secondary/50 mt-2 text-sm">اكتشف أفخم الأقمشة المختارة بعناية لمنزلك</p>
        </div>

        {/* Bento Grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "220px 140px 200px",
            height: "auto",
          }}
        >
          {/* Large Card — Upholstery (col 1-2, row 1-2) */}
          <div
            className="relative rounded-[1.5rem] overflow-hidden group cursor-pointer"
            style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}
          >
            <img
              src="https://picsum.photos/seed/upholstery/900/600"
              alt="أقمشة التنجيد"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 right-0 p-6">
              <span className="inline-block text-xs font-bold text-brand bg-brand/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                الأكثر طلباً
              </span>
              <h3 className="text-white text-2xl font-black mb-3">أقمشة التنجيد</h3>
              <a
                href="#"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors group/link"
              >
                تسوق الآن
                <svg className="w-4 h-4 rotate-180 transition-transform group-hover/link:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Top Right — Curtains (col 3, row 1) */}
          <div
            className="relative rounded-[1.5rem] overflow-hidden group cursor-pointer"
            style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
          >
            <img
              src="https://picsum.photos/seed/curtains/500/400"
              alt="أقمشة الستائر"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="absolute bottom-0 right-0 p-4">
              <span className="inline-block text-xs font-bold text-brand bg-brand/20 backdrop-blur-sm px-2.5 py-1 rounded-full mb-1.5">
                أناقة طبيعية
              </span>
              <h3 className="text-white text-lg font-black">أقمشة الستائر</h3>
            </div>
          </div>

          {/* Brand Card — Studio (col 3, row 2-3) */}
          <div
            className="relative rounded-[1.5rem] overflow-hidden bg-brand flex flex-col items-center justify-center p-6 text-center"
            style={{ gridColumn: "3 / 4", gridRow: "2 / 4" }}
          >
            {/* Decorative stars */}
            <svg className="absolute top-4 right-4 w-8 h-8 text-white/15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg className="absolute bottom-4 left-4 w-5 h-5 text-white/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>

            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-black mb-2">صمم منزلك</h3>
            <p className="text-white/75 text-sm mb-5 leading-relaxed">
              جرّب أقمشتنا في غرفتك مع الذكاء الاصطناعي
            </p>
            <a
              href="/studio"
              className="px-5 py-2.5 bg-white text-brand font-bold text-sm rounded-full hover:bg-white/90 transition-colors"
            >
              جرب الآن
            </a>
          </div>

          {/* Bottom — Accessories (col 1-2, row 3) */}
          <div
            className="relative rounded-[1.5rem] overflow-hidden group cursor-pointer"
            style={{ gridColumn: "1 / 3", gridRow: "3 / 4" }}
          >
            <img
              src="https://picsum.photos/seed/accessories/900/300"
              alt="الإكسسوارات"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 right-0 p-5">
              <span className="inline-block text-xs font-bold text-brand bg-brand/20 backdrop-blur-sm px-2.5 py-1 rounded-full mb-1.5">
                لمسة الكمال
              </span>
              <h3 className="text-white text-xl font-black">الإكسسوارات</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
