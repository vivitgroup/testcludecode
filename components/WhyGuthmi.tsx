const cards = [
  {
    num: "01",
    title: "أقمشة عالمية",
    desc: "نستورد أجود الأقمشة من أرقى المصانع الأوروبية والعالمية",
    seed: "global",
  },
  {
    num: "02",
    title: "خبرة ٨٠ عاماً",
    desc: "ثمانية عقود من التميز في صناعة الأقمشة والمفروشات الفاخرة",
    seed: "heritage",
  },
  {
    num: "03",
    title: "تصاميم حصرية",
    desc: "مجموعات حصرية صُممت خصيصاً لتناسب الذوق العربي الرفيع",
    seed: "exclusive",
  },
];

export default function WhyGuthmi() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full mb-3">
            لماذا القثمي
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-secondary">معايير جودتنا</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.num} className="group">
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-5">
                <img
                  src={`https://picsum.photos/seed/${card.seed}/500/670`}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Big number */}
                <span className="absolute top-4 left-4 text-[80px] font-black text-white/20 leading-none select-none">
                  {card.num}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-lg font-black text-secondary mb-2 transition-colors duration-300 group-hover:text-brand">
                {card.title}
              </h3>
              <p className="text-sm text-secondary/50 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
