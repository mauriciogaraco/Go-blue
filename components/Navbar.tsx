"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../assets/Gemini_Generated_Image_8k77p28k77p28k77 (1).png";
const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#certificacion", label: "Certificación" },
  { href: "#conservacion", label: "Conservación" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#inicio" className="relative flex-shrink-0 w-11 h-11">
          {/* Replace with your logo file at /public/assets/logo.png */}
          <Image
            src={Logo}
            width={800}
            placeholder="blur"
            style={{ borderRadius: "100%" }}
            height={800}
            alt="GoBlue Diving Project"
            className="object-contain"
            sizes="100px"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/75 hover:text-ocean transition-colors text-sm font-medium tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/5358048174"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-coral text-white px-5 py-2 rounded-full font-semibold text-sm btn-coral"
        >
          <WaIcon className="w-4 h-4" />
          Reservar
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-navy/98 backdrop-blur-md border-t border-ocean/20`}
      >
        <nav className="flex flex-col px-5 py-4 gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="text-white/80 hover:text-ocean transition-colors font-medium py-3 border-b border-ocean/10 text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5358048174"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 bg-coral text-white px-5 py-3.5 rounded-full font-bold mt-3 text-base"
          >
            <WaIcon className="w-5 h-5" />
            Reservar Ahora
          </a>
        </nav>
      </div>
    </header>
  );
}

function WaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
