"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Certificates", "/certificates"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-black">
          SG<span className="text-blue-400">.</span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`relative ${
                pathname === href
                  ? "text-blue-400 font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {label}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-400 transition ${
                  pathname === href ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* RESUME */}
        <a
          href="https://drive.google.com/file/d/1iGT-5dTQN69ggTyxWIdt9l0pKwuY5E7m/view?usp=sharing"
          target="_blank"
          className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}