const STATS = [
  { value: '8m',   label: 'Profundidad Scuba Experience' },
  { value: '7',    label: 'Máx. personas por curso'       },
  { value: '100%', label: 'Compromiso con el océano'      },
  { value: '0',    label: 'Experiencia previa necesaria'  },
]

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative py-24 px-4 bg-navy"
    >
      {/* Subtle teal top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ocean/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text column ─────────────────────────── */}
          <div>
            <span className="inline-block text-ocean font-semibold tracking-[0.35em] text-xs uppercase mb-4">
              Sobre GoBlue
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              Más que buceo,{' '}
              <span className="text-gradient">una experiencia de vida</span>
            </h2>

            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                GoBlue Diving Project nació con una visión clara: hacer el buceo accesible,
                seguro y consciente para todos. Somos un proyecto cubano ubicado en
                <span className="text-white font-medium"> Santa Fe, Playa, La Habana</span>,
                comprometidos con la belleza del océano que nos rodea.
              </p>
              <p>
                Sabemos que dar el primer paso puede dar miedo, pero nuestro equipo está
                preparado para acompañarte con seguridad, confianza y buena energía en
                cada experiencia.
              </p>
              <p>
                Aquí no solo vienes a bucear: vienes a descubrir que todo está conectado,
                desde cada ola hasta cada persona que decide cuidar el océano junto a nosotros.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['Seguro', 'Único', 'Divertido', 'Confiable', 'Ecológico'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-ocean/35 text-ocean bg-ocean/8"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5358048174"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral inline-flex items-center gap-2 mt-10 bg-coral text-white px-7 py-3.5 rounded-full font-bold text-sm"
            >
              Contacta con nosotros
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* ── Visual column ────────────────────────── */}
          <div className="space-y-4">
            {/* Main image placeholder */}
            {/* ▶ Coloca tu imagen principal en /public/assets/about-main.jpg */}
            <div
              className="img-placeholder rounded-2xl w-full flex flex-col items-center justify-center text-center p-8"
              style={{ aspectRatio: '4/3' }}
            >
              <svg className="w-16 h-16 text-ocean/50 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-ocean/60 text-sm">about-main.jpg</p>
              <p className="text-gray-600 text-xs mt-1">/public/assets/about-main.jpg</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-center"
                  style={{ background: 'rgba(41,116,121,0.08)', border: '1px solid rgba(41,116,121,0.18)' }}
                >
                  <p className="text-2xl font-black text-coral">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
