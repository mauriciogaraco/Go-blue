import Image from "next/image";
import Logo from "../assets/Gemini_Generated_Image_8k77p28k77p28k77 (1).png";

/* Pre-defined positions to avoid SSR/client hydration mismatch */
const BUBBLES = [
  { size: 6, left: 7, duration: 14, delay: 0 },
  { size: 10, left: 17, duration: 11, delay: 3 },
  { size: 4, left: 28, duration: 16, delay: 1 },
  { size: 8, left: 38, duration: 12, delay: 5 },
  { size: 15, left: 50, duration: 9, delay: 2 },
  { size: 5, left: 62, duration: 15, delay: 4 },
  { size: 9, left: 72, duration: 13, delay: 0.5 },
  { size: 12, left: 82, duration: 10, delay: 3.5 },
  { size: 7, left: 91, duration: 17, delay: 1.5 },
  { size: 3, left: 45, duration: 18, delay: 6 },
  { size: 11, left: 33, duration: 11, delay: 7 },
  { size: 6, left: 68, duration: 14, delay: 4.5 },
  { size: 4, left: 22, duration: 19, delay: 8 },
  { size: 8, left: 56, duration: 13, delay: 2.5 },
  { size: 5, left: 88, duration: 16, delay: 5.5 },
];

const SHAFTS = [8, 24, 42, 60, 78, 94];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* ── Bubbles ─────────────────────────────────── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className="bubble absolute bottom-0"
            style={{
              width: b.size + "px",
              height: b.size + "px",
              left: b.left + "%",
              animationDuration: b.duration + "s",
              animationDelay: b.delay + "s",
            }}
          />
        ))}
      </div>

      {/* ── Light shafts ────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        {SHAFTS.map((pos, i) => (
          <div
            key={i}
            className="light-shaft absolute top-0 w-px h-full"
            style={{
              left: pos + "%",
              background:
                "linear-gradient(180deg, rgba(41,116,121,0.9) 0%, transparent 100%)",
              animationDelay: i * 0.7 + "s",
            }}
          />
        ))}
      </div>

      {/* ── Central glow ────────────────────────────── */}
      <div
        className="absolute pointer-events-none hero-glow"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "550px",
          height: "400px",
        }}
        aria-hidden
      />

      {/* ── Content ─────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 max-w-4xl mx-auto pt-24 pb-32">
        {/* Logo */}
        <div
          className="float-anim mb-6"
          style={{
            animation:
              "slideInUp 0.8s ease 0.1s both, floatUp 5s ease-in-out 1s infinite",
          }}
        >
          <div
            className="relative mx-auto"
            style={{ width: "160px", height: "160px" }}
          >
            {/* ▶ Coloca tu logo en /public/assets/logo.png */}
            <Image
              src={Logo}
              alt="GoBlue Diving Project"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="160px"
            />
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-ocean font-semibold tracking-[0.45em] text-xs sm:text-sm uppercase mb-5"
          style={{ animation: "slideInUp 0.75s ease 0.35s both" }}
        >
          Explora &bull; Protege &bull; Inspira
        </p>

        {/* Headline */}
        <h1
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-5"
          style={{ animation: "slideInUp 0.75s ease 0.55s both" }}
        >
          Descubre el Mundo
          <br />
          <span className="text-gradient">Bajo el Mar</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-gray-300 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ animation: "slideInUp 0.75s ease 0.75s both" }}
        >
          Proyecto de buceo recreativo y ecológico en{" "}
          <span className="text-ocean font-semibold">Santa Fe, La Habana</span>.
          Una experiencia única, segura y conectada con el océano.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
          style={{ animation: "slideInUp 0.75s ease 0.95s both" }}
        >
          <a
            href="https://wa.me/5358048174"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral flex items-center justify-center gap-3 bg-coral text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg"
          >
            <WaIconLg />
            Reserva tu Experiencia
          </a>
          <a
            href="#servicios"
            className="btn-ocean flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg"
          >
            Ver Servicios
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Phone */}
        <p
          className="mt-8 text-white/40 text-sm tracking-wider"
          style={{ animation: "fadeIn 1s ease 1.2s both" }}
        >
          📱 +53 58048174
        </p>
      </div>

      {/* ── Wave transition ──────────────────────────── */}
      <div
        className="absolute bottom-0 inset-x-0 pointer-events-none"
        aria-hidden
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "80px" }}
        >
          <path
            d="M0,50 C180,100 360,0 540,50 C720,100 900,0 1080,50 C1260,100 1350,30 1440,50 L1440,100 L0,100 Z"
            fill="#12192B"
          />
        </svg>
      </div>
    </section>
  );
}

function WaIconLg() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
