import Image from "next/image";
import Logo from "../assets/Gemini_Generated_Image_8k77p28k77p28k77 (1).png";
/*
 * ▶ Actualiza estos enlaces con los reales cuando los tengas:
 *   WHATSAPP_GROUP   → enlace al grupo de WhatsApp
 *   WHATSAPP_CHANNEL → enlace al canal de WhatsApp
 *   INSTAGRAM        → URL del perfil de Instagram
 */
const LINKS = {
  WHATSAPP_DIRECT: "https://wa.me/5358048174",
  WHATSAPP_GROUP: "https://chat.whatsapp.com/XXXXXX", // ← reemplazar
  WHATSAPP_CHANNEL: "https://whatsapp.com/channel/XXXXXX", // ← reemplazar
  INSTAGRAM: "https://www.instagram.com/goblue.diving", // ← reemplazar
};

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#certificacion", label: "Certificación" },
  { href: "#conservacion", label: "Conservación" },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 px-4"
      style={{ background: "#0d1520" }}
    >
      {/* Top wave */}
      <div className="absolute top-0 inset-x-0 pointer-events-none" aria-hidden>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full block rotate-180"
          style={{ height: "50px" }}
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#0d1520"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="relative w-20 h-20 mb-4">
              {/* ▶ Logo en /public/assets/logo.png */}
              <Image
                src={Logo}
                alt="GoBlue Diving Project"
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>

            <p className="text-ocean text-xs font-bold tracking-[0.35em] uppercase mb-3">
              Explore · Protect · Inspire
            </p>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Proyecto de buceo recreativo y ecológico en Santa Fe, Playa, La
              Habana, Cuba. Seguros, únicos, divertidos y comprometidos con el
              océano.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {/* Instagram */}
              <a
                href={LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-coral transition-colors"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <InstagramIcon />
              </a>

              {/* WhatsApp direct */}
              <a
                href={LINKS.WHATSAPP_DIRECT}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-coral transition-colors"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <WaIcon />
              </a>

              {/* WhatsApp channel */}
              <a
                href={LINKS.WHATSAPP_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal de WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-ocean transition-colors"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                title="Canal de WhatsApp"
              >
                <ChannelIcon />
              </a>

              {/* WhatsApp group */}
              <a
                href={LINKS.WHATSAPP_GROUP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grupo de WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-ocean transition-colors"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                title="Grupo de WhatsApp"
              >
                <GroupIcon />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 tracking-wide">
              Navegación
            </h3>
            <ul className="space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-ocean transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 tracking-wide">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+5358048174"
                  className="text-gray-400 hover:text-coral transition-colors text-sm"
                >
                  +53 58048174
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Santa Fe, Playa,
                  <br />
                  La Habana, Cuba
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a
                  href={LINKS.WHATSAPP_DIRECT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-coral transition-colors text-sm"
                >
                  WhatsApp directo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/6 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-600 text-xs">
          <p>
            © {new Date().getFullYear()} GoBlue Diving Project. Todos los
            derechos reservados.
          </p>
          <p className="text-gray-700">Santa Fe, Playa, La Habana · Cuba 🇨🇺</p>
        </div>
      </div>
    </footer>
  );
}

/* ── Icons ──────────────────────────────────────── */

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function ChannelIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  );
}
