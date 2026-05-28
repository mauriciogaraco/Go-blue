const PILLARS = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
      </svg>
    ),
    title:       'Explorar',
    description: 'Cada inmersión es un viaje de descubrimiento. Llevamos a nuestros buzos más allá de la superficie, hasta la barrera coralina y sus increíbles habitantes.',
    color:       'ocean',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title:       'Proteger',
    description: 'Comprometidos con el ecosistema marino. Organizamos limpiezas costeras, talleres de conciencia ambiental y buceo ecológico responsable.',
    color:       'ocean',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title:       'Inspirar',
    description: 'Creamos comunidad. Cada buzo que pasa por GoBlue lleva consigo una nueva perspectiva del océano y un compromiso de cuidarlo para las próximas generaciones.',
    color:       'coral',
  },
]

export default function Pillars() {
  return (
    <section className="relative bg-navy py-20 px-4">
      {/* Subtle top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ocean/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-ocean font-semibold tracking-[0.35em] text-xs uppercase mb-3">
            Nuestra Filosofía
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            No es solo buceo.{' '}
            <span className="text-gradient">Es una misión.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="card-service rounded-2xl p-8 flex flex-col items-center text-center"
              style={{
                background: 'linear-gradient(145deg, rgba(41,116,121,0.07) 0%, rgba(18,25,43,0.5) 100%)',
              }}
            >
              {/* Icon */}
              <div
                className={`mb-5 p-4 rounded-xl ${p.color === 'coral' ? 'text-coral bg-coral/10' : 'text-ocean bg-ocean/10'}`}
              >
                {p.icon}
              </div>

              <h3 className="text-xl font-black text-white mb-3 tracking-wide uppercase">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl text-white/70 italic leading-relaxed">
            &ldquo;En GoBlue creemos que el mar no solo se explora, se siente. Cada inmersión
            es una oportunidad para conectar contigo mismo, con la naturaleza y con un mundo
            lleno de vida que muchas veces olvidamos proteger.&rdquo;
          </p>
          <footer className="mt-4 text-ocean font-semibold text-sm tracking-wider uppercase">
            — Equipo GoBlue
          </footer>
        </blockquote>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block" style={{ height: '50px' }}>
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#1a2540"
          />
        </svg>
      </div>
    </section>
  )
}
