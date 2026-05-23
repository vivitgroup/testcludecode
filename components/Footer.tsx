const footerLinks = [
  {
    title: "عن القثمي",
    links: ["قصتنا", "الفروع", "الوظائف", "المشاريع"],
  },
  {
    title: "المساعدة",
    links: ["تواصل معنا", "مركز الدعم", "تتبع طلبك", "الأسئلة الشائعة"],
  },
  {
    title: "القانونية",
    links: ["الشروط والأحكام", "سياسة الخصوصية", "حقوق المستهلك", "الإرجاع والاستبدال"],
  },
  {
    title: "أدوات",
    links: ["حاسبة الأقمشة", "مود بورد", "استديو AI", "استديو التصميم"],
  },
];

const socialIcons = [
  {
    label: "Facebook",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Snapchat",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.065 2C8.887 2 6.34 4.547 6.34 7.725v.583c-.306.135-.627.207-.952.211a.75.75 0 000 1.5c.294 0 .59-.049.877-.136-.17.57-.278 1.163-.278 1.773 0 2.34 1.358 4.396 3.31 5.43-.078.274-.21.526-.389.742-.362.432-.861.656-1.487.656-.24 0-.47-.033-.685-.085A.75.75 0 006 18.918c0 .414.336.75.75.75.624 0 1.22-.09 1.75-.262.617.537 1.45.844 2.333.844h2.334c.883 0 1.716-.307 2.333-.844.53.172 1.126.262 1.75.262a.75.75 0 000-1.5c-.215.052-.445.085-.685.085-.626 0-1.125-.224-1.487-.656a1.898 1.898 0 01-.389-.742c1.952-1.034 3.31-3.09 3.31-5.43 0-.61-.108-1.203-.278-1.773.287.087.583.136.877.136a.75.75 0 000-1.5c-.325-.004-.646-.076-.952-.211v-.583C17.66 4.547 15.113 2 11.935 2z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Desktop layout */}
        <div className="hidden md:flex gap-10">
          {/* Brand column */}
          <div className="w-60 flex-shrink-0">
            <div className="text-2xl font-black text-brand mb-3">القثمي</div>
            <p className="text-white/40 text-xs leading-loose mb-5">
              إرث من الأقمشة والمنسوجات منذُ عام ١٩٤٢
            </p>
            <div className="flex gap-2 flex-wrap">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white/[.06] flex items-center justify-center text-white/60 hover:bg-brand hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="flex-1 grid grid-cols-4 gap-6">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/35 text-sm hover:text-brand transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact column */}
          <div className="w-52 flex-shrink-0">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">تواصل معنا</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span dir="ltr">920 000 531</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.999 2C6.477 2 2 6.484 2 12.017c0 1.987.586 3.842 1.594 5.384L2 22l4.761-1.549A9.938 9.938 0 0012 21.99c5.522 0 10-4.485 10-10.016S17.521 2 11.999 2z" />
                </svg>
                <span dir="ltr">054 661 8873</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@alguthmi.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-6">
          <div className="text-2xl font-black text-brand">القثمي</div>
          <p className="text-white/40 text-xs">إرث من الأقمشة والمنسوجات منذُ عام ١٩٤٢</p>

          {/* Contact grid */}
          <div className="grid grid-cols-3 gap-4 text-xs text-white/40">
            <div>
              <p className="text-white/60 font-bold mb-1">الهاتف</p>
              <p dir="ltr">920 000 531</p>
            </div>
            <div>
              <p className="text-white/60 font-bold mb-1">واتساب</p>
              <p dir="ltr">054 661 8873</p>
            </div>
            <div>
              <p className="text-white/60 font-bold mb-1">البريد</p>
              <p>info@alguthmi.com</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-2">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 rounded-full bg-white/[.06] flex items-center justify-center text-white/60 hover:bg-brand hover:text-white transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[.06]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col-reverse md:flex-row items-center justify-between gap-2 text-xs text-white/25">
          <p>جميع الحقوق محفوظة © ٢٠٢٤ القثمي</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-brand transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
