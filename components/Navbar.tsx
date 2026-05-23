"use client";
import { useState, useEffect } from "react";

const navLinks = [
  {
    label: "الرئيسية",
    href: "/",
    dropdown: null,
  },
  {
    label: "الأقمشة",
    href: "#",
    dropdown: ["أقمشة التنجيد", "أقمشة الستائر", "أقمشة الديكور", "أقمشة مخصصة"],
  },
  {
    label: "الستائر",
    href: "#",
    dropdown: ["ستائر كلاسيكية", "ستائر حديثة", "ستائر شفافة", "ستائر مخصصة"],
  },
  {
    label: "الخدمات",
    href: "#",
    dropdown: ["تصميم داخلي", "تنجيد احترافي", "قياس وتركيب", "استشارات"],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-secondary" : "text-white";
  const logoColor = scrolled ? "text-brand" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className={`text-2xl font-black tracking-wide ${logoColor} transition-colors duration-300`}>
            القثمي
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 ${textColor}`}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full right-0 mt-1 bg-white rounded-2xl shadow-xl border border-black/[.06] py-2 min-w-[180px] z-50 animate-fadeIn">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-secondary/80 hover:text-brand hover:bg-surface transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/studio"
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                scrolled
                  ? "border-brand text-brand hover:bg-brand hover:text-white"
                  : "border-white/70 text-white hover:bg-white hover:text-secondary"
              }`}
            >
              استديو AI
            </a>

            {/* Search */}
            <button className={`p-2 rounded-full hover:bg-white/10 transition-colors ${textColor}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Heart */}
            <button className={`p-2 rounded-full hover:bg-white/10 transition-colors ${textColor}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Cart */}
            <button className={`p-2 rounded-full hover:bg-white/10 transition-colors relative ${textColor}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute top-0 left-0 w-4 h-4 bg-brand text-white text-[9px] flex items-center justify-center rounded-full font-bold">
                ٢
              </span>
            </button>

            {/* Login */}
            <button
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-secondary text-white hover:bg-brand"
                  : "bg-white/15 text-white hover:bg-white hover:text-secondary"
              }`}
            >
              تسجيل الدخول
            </button>

            {/* Language */}
            <button className={`text-xs font-medium flex items-center gap-1 ${textColor}`}>
              <span>🇸🇦</span> AR
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors hover:bg-white/10 ${textColor}`}
            onClick={() => setMobileOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[300px] bg-white flex flex-col shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/[.06]">
            <span className="text-xl font-black text-brand">القثمي</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full hover:bg-surface transition-colors text-secondary"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="text-secondary font-bold text-base block mb-2 hover:text-brand transition-colors"
                >
                  {link.label}
                </a>
                {link.dropdown && (
                  <div className="space-y-1 pe-4 border-e-2 border-brand/20">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-sm text-secondary/55 hover:text-brand py-1 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="px-5 py-4 border-t border-black/[.06] space-y-3">
            <a
              href="/studio"
              className="block w-full text-center py-2.5 rounded-full bg-brand text-white font-semibold text-sm hover:bg-brand/90 transition-colors"
            >
              استديو AI
            </a>
            <button className="block w-full text-center py-2.5 rounded-full border border-secondary/20 text-secondary font-semibold text-sm hover:bg-surface transition-colors">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
