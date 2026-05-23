"use client";
import { useState } from "react";

const tabs = [
  {
    label: "الرئيسية",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    href: "/",
  },
  {
    label: "المعرض",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    href: "#",
  },
  { label: "center", icon: null, href: "/studio" },
  {
    label: "سلتي",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    href: "#",
  },
  {
    label: "حسابي",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    href: "#",
  },
];

export default function MobileBottomNav() {
  const [active, setActive] = useState(0);

  return (
    <nav className="md:hidden fixed bottom-0 right-0 left-0 z-50 bg-white/95 border-t border-black/[.08] backdrop-blur-2xl pb-safe">
      <div className="grid grid-cols-5 items-end h-16">
        {tabs.map((tab, i) => {
          if (tab.label === "center") {
            return (
              <a
                key="center"
                href={tab.href}
                className="flex flex-col items-center justify-end pb-1 gap-0.5"
              >
                <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center shadow-lg -mt-5 mb-0.5">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                </div>
                <span className="text-[10px] text-secondary/40 leading-none">استديو</span>
              </a>
            );
          }

          return (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center justify-center h-full gap-1 transition-colors duration-200 ${
                active === i ? "text-brand" : "text-secondary/40"
              }`}
            >
              {tab.icon}
              <span className="text-[10px] leading-none">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
