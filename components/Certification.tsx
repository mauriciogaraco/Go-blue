const FEATURES = [
  {
    icon: '🏅',
    title: 'Certificación Internacional',
    desc: 'PSS Open Water Diver reconocida a nivel mundial. Bucea de forma autónoma en cualquier lugar del planeta.',
  },
  {
    icon: '👥',
    title: 'Grupos Pequeños',
    desc: 'Máximo 7 personas por curso. Atención personalizada y seguimiento individual durante toda tu formación.',
  },
  {
    icon: '🌊',
    title: 'Sin Requisitos Previos',
    desc: 'Para bucear no hace falta saber nadar. Nuestro equipo te guía desde cero con total seguridad.',
  },
  {
    icon: '💰',
    title: '32% de Descuento',
    desc: 'Precio especial para nuestra comunidad. Una oportunidad única para certificarte a un costo accesible.',
  },
]

export default function Certification() {
  return (
    <section
      id="certificacion"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Ocean-teal background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1d5558 0%, #297479 50%, #1a4a4e 100%)',
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D56C30 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: discount badge + title */}
          <div>
            {/* Discount badge */}
            <div className="inline-flex items-center gap-2 bg-coral text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full mb-6 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L9.568 3z" />
                <path d="M6 6h.008v.008H6V6z" />
              </svg>
              32% Descuento para la comunidad
            </div>

            <span className="block text-white/60 font-semibold tracking-[0.35em] text-xs uppercase mb-3">
              Certificación oficial
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
              PSS Open Water<br />
              <span style={{ color: '#ffd080' }}>Diver</span>
            </h2>

            <p className="text-white/75 text-base leading-relaxed mb-8">
              Conviértete en buceador autónomo con certificación internacional PSS. Aprende
              teoría, técnica y práctica en agua con el respaldo de profesionales. Un curso
              pensado para que disfrutes cada segundo del proceso.
            </p>

            {/* Key callouts */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Grupos máx. 7', 'Certificado internacional', 'Sin requisitos previos'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 text-white border border-white/20"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>

            <a
              href="https://wa.me/5358048174"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-ocean-dark font-black text-base px-7 py-4 rounded-full transition-all hover:bg-coral hover:text-white duration-250"
              style={{ color: '#1d5558' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Inscribirme al curso
            </a>
          </div>

          {/* Right: features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 flex flex-col gap-2"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <span className="text-3xl">{f.icon}</span>
                <h3 className="text-white font-bold text-sm">{f.title}</h3>
                <p className="text-white/65 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave top */}
      <div className="absolute top-0 inset-x-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block rotate-180" style={{ height: '50px' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#1a2540" />
        </svg>
      </div>
      {/* Wave bottom */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block" style={{ height: '50px' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#12192B" />
        </svg>
      </div>
    </section>
  )
}
