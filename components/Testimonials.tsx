const reviews = [
  {
    name: "فهد العتيبي",
    role: "مصمم داخلي",
    text: "أقمشة القثمي غيرت معايير التصميم الداخلي في مشاريعي. الجودة لا مثيل لها والتنوع يلهم الإبداع.",
    seed: "fahad",
  },
  {
    name: "نورة الشمري",
    role: "صاحبة منزل",
    text: "من أفخم الأقمشة اللي جربتها. لمسة الفخامة واضحة في كل قطعة. أنصح الجميع بتجربة القثمي.",
    seed: "noura",
  },
  {
    name: "خالد الدوسري",
    role: "منجّد محترف",
    text: "أتعامل مع القثمي من أكثر من ١٥ سنة. دائماً يقدمون الأفضل في عالم الأقمشة بتشكيلة لا تُضاهى.",
    seed: "khalid",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full mb-3">
            آراء عملائنا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-secondary">ماذا يقولون عنا</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-3xl border border-black/[.06] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Quote mark */}
              <div className="text-6xl font-serif leading-none text-brand/15 mb-2 select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand fill-brand" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-secondary/70 text-sm leading-relaxed mb-5">{review.text}</p>

              {/* Divider */}
              <hr className="border-black/[.06] mb-4" />

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm">{review.name}</p>
                  <p className="text-secondary/40 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
