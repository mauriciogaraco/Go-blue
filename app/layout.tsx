import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GoBlue Diving Project | Buceo en La Habana, Cuba',
  description:
    'Proyecto de buceo recreativo y ecológico en Santa Fe, La Habana, Cuba. Experiencias de buceo, cursos PSS Open Water Diver con certificación internacional y actividades de conservación marina.',
  keywords: [
    'buceo Cuba',
    'buceo habana',
    'buceo La Habana',
    'diving Cuba',
    'scuba Cuba',
    'buceo ecológico Cuba',
    'curso buceo habana',
    'Open Water Diver Cuba',
    'PSS Open Water Cuba',
    'buceo Santa Fe La Habana',
    'GoBlue Diving',
    'experiencia buceo Cuba',
    'conservación marina Cuba',
    'certificación buceo Cuba',
    'inmersiones La Habana',
    'buceo recreativo cuba',
  ],
  authors: [{ name: 'GoBlue Diving Project' }],
  creator: 'GoBlue Diving Project',
  openGraph: {
    type: 'website',
    locale: 'es_CU',
    title: 'GoBlue Diving Project | Buceo en La Habana, Cuba',
    description:
      'Descubre el mundo bajo el mar con GoBlue. Experiencias de buceo seguras, certificaciones internacionales y conservación marina en La Habana, Cuba.',
    siteName: 'GoBlue Diving Project',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoBlue Diving Project | Buceo en La Habana, Cuba',
    description:
      'Descubre el mundo bajo el mar con GoBlue. Buceo recreativo y ecológico en La Habana, Cuba.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="font-sans antialiased bg-navy text-white">
        {children}
      </body>
    </html>
  )
}
