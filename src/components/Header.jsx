import React from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/Abdumalik", label: "О БРЕНДЕ" },
  { to: "/Muslima", label: "ПРЕИМУЩЕСТВА" },
  { to: "/Solixa", label: "ОТКРЫТЬ КЛУБ" },
  { to: "/Sarvar", label: "КОНТАКТЫ" },
];

const LANGUAGES = [
  { code: "ru", flag: "🇷🇺", label: "RU" },
  { code: "uz", flag: "🇺🇿", label: "UZ" },
  { code: "en", flag: "🇬🇧", label: "EN" },
];

export default function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-[1290px] mx-auto px-4">
        <div className="py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              className="w-16 h-16"
            >
              <polygon points="42,2 6,58 42,58" fill="#06b1e5" />
              <polygon points="8,40 42,2 26,42" fill="#29c7f0" />
            </svg>
            <span className="text-4xl font-extrabold tracking-wide text-gray-800">
              TRUE<sup className="text-sm align-top">®</sup>
            </span>
          </a>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <select
              defaultValue="ru"
              aria-label="Til / Язык"
              className="border border-gray-200 rounded px-2 py-1 text-sm"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.label}
                </option>
              ))}
            </select>

            <a href="tel:+998906066666" className="text-sm text-gray-700">
              +998 (90)-606-66-66
            </a>

            <a
              href="#request"
              className="bg-[#06b1e5] text-white px-5 py-2 rounded font-semibold text-sm"
            >
              ОСТАВИТЬ ЗАЯВКУ
            </a>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-1" />

        <nav className="py-4">
          <ul className="flex justify-between uppercase font-bold text-sm tracking-wide">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="flex-1 text-center">
                <a href={link.to} className="text-gray-800 hover:text-[#06b1e5]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}