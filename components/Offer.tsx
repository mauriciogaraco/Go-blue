export default function Offer() {
  return (
    <section id="oferta" className="relative bg-navy px-4 py-14 sm:py-16">
      <div
        className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(120deg, #b85a24 0%, #D56C30 45%, #1d5558 100%)',
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
          aria-hidden
        />

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 px-6 sm:px-10 py-9 sm:py-10">
          {/* Discount badge */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white/95 shadow-lg">
            <span className="text-3xl sm:text-4xl font-black" style={{ color: '#b85a24' }}>32%</span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-ocean-dark">DESCUENTO</span>
          </div>

          {/* Copy */}
          <div className="flex-1 text-center sm:text-left">
            <span className="inline-block text-white/90 font-semibold tracking-[0.3em] text-xs uppercase mb-2">
              Oferta por tiempo limitado
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
              Curso PSS Open Water Diver
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl">
              Certifícate como buceador autónomo con reconocimiento internacional y un 32% de
              descuento por ser parte de nuestra comunidad. Grupos de 4 a 7 personas —
              no hace falta saber nadar.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5358048174?text=Hola%2C%20quiero%20aprovechar%20la%20oferta%20del%2032%25%20de%20descuento%20en%20el%20curso%20PSS%20Open%20Water%20Diver"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-ocean-dark font-black text-sm sm:text-base px-6 py-3.5 rounded-full transition-all hover:bg-navy hover:text-white duration-250"
          >
            <WaIcon className="w-5 h-5" />
            Quiero mi descuento
          </a>
        </div>
      </div>
    </section>
  )
}

function WaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
