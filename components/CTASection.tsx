'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

const MINI_BUBBLES = [
  { size: 5,  left: 5,  dur: 12, delay: 0   },
  { size: 8,  left: 20, dur: 9,  delay: 2   },
  { size: 4,  left: 40, dur: 14, delay: 1   },
  { size: 10, left: 60, dur: 11, delay: 3   },
  { size: 6,  left: 78, dur: 10, delay: 0.5 },
  { size: 7,  left: 92, dur: 13, delay: 4   },
]

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 50% 40%, rgba(41,116,121,0.25) 0%, transparent 65%),
          linear-gradient(180deg, #12192B 0%, #0d1520 100%)
        `,
      }}
    >
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {MINI_BUBBLES.map((b, i) => (
          <div
            key={i}
            className="bubble absolute bottom-0"
            style={{
              width:             b.size + 'px',
              height:            b.size + 'px',
              left:              b.left + '%',
              animationDuration: b.dur + 's',
              animationDelay:    b.delay + 's',
            }}
          />
        ))}
      </div>

      {/* Decorative rings */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ border: '1px solid #297479' }}
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none opacity-15"
        style={{ border: '1px solid #297479' }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="inline-block text-ocean font-semibold tracking-[0.35em] text-xs uppercase mb-4">
          ¿Listo para sumergirte?
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
          El océano<br />
          <span className="text-gradient">te está esperando</span>
        </h2>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
          Reserva tu experiencia hoy mismo. Solo necesitas las ganas de descubrir
          el mundo que existe bajo la superficie. Nuestro equipo hace el resto.
        </p>

        {/* Main CTA */}
        <button
          onClick={() => setModalOpen(true)}
          className="btn-coral inline-flex items-center justify-center gap-3 bg-coral text-white px-10 py-5 rounded-full font-black text-lg sm:text-xl mb-5 cursor-pointer"
        >
          <WaIcon />
          Reservar por WhatsApp
        </button>

        <p className="text-gray-500 text-sm">
          También puedes llamarnos al{' '}
          <a
            href="tel:+5358048174"
            className="text-ocean hover:text-coral transition-colors"
          >
            +53 58048174
          </a>
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-gray-500 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-coral" />
            Sin experiencia previa
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-ocean" />
            Grupos reducidos
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-coral" />
            Certificación incluida
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-ocean" />
            100% seguro
          </span>
        </div>
      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
