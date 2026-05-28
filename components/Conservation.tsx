const GROUPS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Grupo de Tierra',
    desc: 'Recogida de desechos a lo largo de la costa. Puede participar cualquier persona, incluidos niños acompañados.',
    require: 'Sin requisitos',
    requireColor: 'coral',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
      </svg>
    ),
    label: 'Grupo de Mar',
    desc: 'Recogida de desechos dentro del agua. Requiere experiencia en el mar y equipo básico propio.',
    require: 'Máscara · Snorkel · Aletas',
    requireColor: 'ocean',
  },
]

const BRING = ['Agua', 'Ropa cómoda', 'Guantes', 'Bolsa para desechos']

export default function Conservation() {
  return (
    <section
      id="conservacion"
      className="relative py-24 px-4 bg-navy"
    >
      {/* Teal accent top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ocean/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: text */}
          <div>
            <span className="inline-block text-ocean font-semibold tracking-[0.35em] text-xs uppercase mb-4">
              Misión ecológica
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
              Cuidar el mar{' '}
              <span className="text-gradient">es responsabilidad de todos</span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-5">
              GoBlue, en colaboración con <span className="text-white font-medium">Oasis</span> —
              proyecto dedicado al cuidado medioambiental — organiza jornadas periódicas de
              recogida de basura en las costas de Santa Fe, La Habana.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Con pequeñas acciones colectivas podemos generar un impacto real y crear mayor
              conciencia ambiental en nuestra comunidad. Al finalizar realizamos talleres de
              ecosistemas marinos y actividades de conciencia ambiental. 🌎♻️
            </p>

            {/* What to bring */}
            <div
              className="rounded-2xl p-5"
              style={{ background: 'rgba(41,116,121,0.08)', border: '1px solid rgba(41,116,121,0.2)' }}
            >
              <p className="text-ocean text-xs font-bold tracking-widest uppercase mb-3">
                ⚠️ Cada participante debe traer:
              </p>
              <div className="flex flex-wrap gap-2">
                {BRING.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5358048174"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral inline-flex items-center gap-2 mt-8 bg-coral text-white px-7 py-3.5 rounded-full font-bold text-sm"
            >
              Unirme a la próxima jornada
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="mt-3 text-gray-600 text-xs">La participación es totalmente gratuita.</p>
          </div>

          {/* Right: groups cards */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base mb-3">
              Grupos de trabajo:
            </h3>

            {GROUPS.map((g, i) => (
              <div
                key={i}
                className="card-service rounded-2xl p-5 flex gap-4"
                style={{ background: 'linear-gradient(135deg, rgba(41,116,121,0.07) 0%, rgba(13,21,32,0.6) 100%)' }}
              >
                <div className={`flex-shrink-0 p-3 rounded-xl ${g.requireColor === 'coral' ? 'text-coral bg-coral/10' : 'text-ocean bg-ocean/10'}`}>
                  {g.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">{g.label}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">{g.desc}</p>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${g.requireColor === 'coral' ? 'bg-coral/15 text-coral' : 'bg-ocean/15 text-ocean'}`}>
                    {g.require}
                  </span>
                </div>
              </div>
            ))}

            {/* Location card */}
            <div
              className="rounded-2xl p-5"
              style={{ background: 'rgba(213,108,48,0.07)', border: '1px solid rgba(213,108,48,0.2)' }}
            >
              <p className="text-coral text-xs font-bold tracking-widest uppercase mb-2">📍 Punto de encuentro</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Calle 1ra A #28415 entre 284 y 286,<br />
                <span className="font-semibold text-white">La Puntilla de Santa Fe, Playa, La Habana.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
