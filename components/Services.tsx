const SERVICES = [
  {
    badge:       'Más Popular',
    badgeColor:  'coral',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title:       'Scuba Experience',
    subtitle:    'Introducción al buceo',
    description: 'Clase teórica breve e inmersión hasta 8 metros de profundidad. Llegarás a la barrera coralina y apreciarás la fauna marina en todo su esplendor.',
    highlights:  ['Hasta 8m de profundidad', 'Barrera coralina', 'Certificación incluida', 'Sin experiencia previa'],
    cta:         'Reservar Scuba Experience',
  },
  {
    badge:       '32% Descuento',
    badgeColor:  'ocean',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title:       'PSS Open Water Diver',
    subtitle:    'Certificación internacional',
    description: 'Certifícate como buceador autónomo con reconocimiento internacional PSS. Grupos de máximo 7 personas para una atención personalizada.',
    highlights:  ['Certificación internacional', 'Máx. 7 personas', 'No requiere saber nadar', '32% dto. para la comunidad'],
    cta:         'Inscribirme al Curso',
  },
  {
    badge:       'Gratis',
    badgeColor:  'ocean',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title:       'Conservación Marina',
    subtitle:    'Limpiezas costeras y marinas',
    description: 'Únete a nuestras jornadas de recogida de basura en Santa Fe. Dos grupos: tierra y mar. Incluye talleres de ecosistemas marinos y actividades educativas.',
    highlights:  ['Participación gratuita', 'Grupos tierra y mar', 'Talleres educativos', 'Toda la comunidad'],
    cta:         'Unirme a la próxima jornada',
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 px-4"
      style={{ background: 'linear-gradient(180deg, #1a2540 0%, #12192B 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-ocean font-semibold tracking-[0.35em] text-xs uppercase mb-3">
            Lo que ofrecemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Desde tu primera inmersión hasta la certificación internacional. Seguridad, diversión
            y un compromiso real con el océano.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="card-service relative rounded-2xl flex flex-col overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(41,116,121,0.09) 0%, rgba(13,21,32,0.8) 100%)',
              }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    s.badgeColor === 'coral'
                      ? 'bg-coral/20 text-coral border border-coral/30'
                      : 'bg-ocean/20 text-ocean border border-ocean/30'
                  }`}
                >
                  {s.badge}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                {/* Icon */}
                <div className="text-ocean mb-5 p-3 bg-ocean/10 rounded-xl w-fit">
                  {s.icon}
                </div>

                {/* Title */}
                <p className="text-ocean text-xs font-semibold tracking-widest uppercase mb-1">
                  {s.subtitle}
                </p>
                <h3 className="text-xl font-black text-white mb-3">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {s.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-7 flex-1">
                  {s.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/5358048174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-ocean/15 hover:bg-ocean/30 border border-ocean/40 hover:border-ocean text-ocean hover:text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-250"
                >
                  {s.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          ¿Dudas? Escríbenos al{' '}
          <a
            href="https://wa.me/5358048174"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean hover:text-coral transition-colors"
          >
            +53 58048174
          </a>{' '}
          y te respondemos a la brevedad.
        </p>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block" style={{ height: '50px' }}>
          <path d="M0,0 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="#12192B" />
        </svg>
      </div>
    </section>
  )
}
