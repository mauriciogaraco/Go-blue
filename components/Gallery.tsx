/*
 * ▶ Coloca tus imágenes en /public/assets/ con estos nombres:
 *   gallery-1.jpg  gallery-2.jpg  gallery-3.jpg
 *   gallery-4.jpg  gallery-5.jpg  gallery-6.jpg
 *
 * Formato recomendado: .jpg o .webp  |  Tamaño máx sugerido: 800KB cada una
 */

const GALLERY = [
  { src: "/assets/gallery-1.jpg", alt: "Inmersión en la barrera coralina" },
  { src: "/assets/gallery-2.jpg", alt: "Fauna marina de Cuba" },
  { src: "/assets/gallery-3.jpg", alt: "Equipo GoBlue en acción" },
  { src: "/assets/gallery-4.jpg", alt: "Certificación PSS Open Water" },
  { src: "/assets/gallery-5.jpg", alt: "Limpieza costera Santa Fe" },
  { src: "/assets/gallery-6.jpg", alt: "Buceo recreativo La Habana" },
];

function GallerySlot({
  src,
  alt,
  wide = false,
}: {
  src: string;
  alt: string;
  wide?: boolean;
}) {
  return (
    <div
      className="relative rounded-xl overflow-hidden group"
      style={{
        aspectRatio: wide ? "16/7" : "1/1",
        /* CSS background-image: shows image if file exists, placeholder border if not */
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        /* Placeholder gradient visible when image missing */
        background: `url(${src}) center/cover no-repeat,
                     linear-gradient(135deg, rgba(41,116,121,0.12) 0%, rgba(18,25,43,0.75) 100%)`,
        border: "1.5px dashed rgba(41,116,121,0.35)",
        transition: "border-color 0.3s ease",
      }}
      role="img"
      aria-label={alt}
    >
      {/* Placeholder icon — hidden via CSS once background-image loads */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-ocean/35 pointer-events-none select-none">
        <svg
          className="w-10 h-10 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <span className="text-xs text-ocean/50">{src.split("/").pop()}</span>
      </div>

      {/* Caption overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-white text-xs font-medium">{alt}</p>
      </div>

      {/* Zoom hint */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"
        style={{
          backgroundImage: `inherit`,
          backgroundSize: "inherit",
          backgroundPosition: "inherit",
        }}
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative py-24 px-4"
      style={{
        background: "linear-gradient(180deg, #12192B 0%, #1a2540 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-ocean font-semibold tracking-[0.35em] text-xs uppercase mb-3">
            Experiencias
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            El océano en <span className="text-gradient">imágenes</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            Cada foto cuenta una historia. Así se vive el buceo con GoBlue.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Row 1 */}
          <div className="col-span-2">
            <GallerySlot {...GALLERY[0]} />
          </div>
          <div className="col-span-1">
            <GallerySlot {...GALLERY[1]} />
          </div>
          <div className="col-span-1">
            <GallerySlot {...GALLERY[2]} />
          </div>

          {/* Row 2 */}
          <div className="col-span-1">
            <GallerySlot {...GALLERY[3]} />
          </div>
          <div className="col-span-1">
            <GallerySlot {...GALLERY[4]} />
          </div>
          <div className="col-span-2">
            <GallerySlot {...GALLERY[5]} wide />
          </div>
        </div>
      </div>
    </section>
  );
}
