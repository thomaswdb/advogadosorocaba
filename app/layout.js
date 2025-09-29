// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import { SEO_DEFAULTS, CONTACT_INFO } from '../lib/constants'
// In your app/layout.js, add this before the closing body tag
import WhatsAppButton from '../components/WhatsAppButton';

// Inside your RootLayout component, add:
<WhatsAppButton />
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: {
    default: SEO_DEFAULTS.title,
    template: '%s | Advogados Sorocaba'
  },
  description: SEO_DEFAULTS.description,
  keywords: SEO_DEFAULTS.keywords,
  authors: [{ name: 'Advogados Sorocaba' }],
  creator: 'Advogados Sorocaba',
  publisher: 'Advogados Sorocaba',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SEO_DEFAULTS.siteUrl,
    siteName: 'Advogados Sorocaba',
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Advogados Sorocaba - Escritório de Advocacia',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [SEO_DEFAULTS.ogImage],
    creator: '@advogadosorocaba',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (you can add these later if you have them)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   yahoo: 'your-yahoo-verification-code',
  // },
  
  // Alternates
  alternates: {
    canonical: SEO_DEFAULTS.siteUrl,
    languages: {
      'pt-BR': SEO_DEFAULTS.siteUrl,
    },
  },
  
  // Theme Color for Mobile
  themeColor: '#1e40af',
  
  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

// Structured Data for the entire website
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  'name': 'Advogados Sorocaba',
  'description': SEO_DEFAULTS.description,
  'url': SEO_DEFAULTS.siteUrl,
  'telephone': CONTACT_INFO.phoneRaw,
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Sorocaba',
    'addressRegion': 'SP',
    'addressCountry': 'BR'
  },
  'areaServed': 'Sorocaba e região',
  'serviceType': 'Advocacia',
  'serviceArea': {
    '@type': 'GeoCircle',
    'geoMidpoint': {
      '@type': 'GeoCoordinates',
      'latitude': -23.5015,
      'longitude': -47.4581
    },
    'geoRadius': '50000'
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Áreas de Atuação',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Direito Trabalhista',
          'description': 'Defesa dos direitos trabalhistas e previdenciários'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Direito Empresarial',
          'description': 'Assessoria jurídica para empresas e negócios'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Direito de Família',
          'description': 'Questões familiares, divórcios e inventários'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Direito Civil',
          'description': 'Direitos civis e questões patrimoniais'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Direito Previdenciário',
          'description': 'Aposentadoria e benefícios previdenciários'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Direito Contratual',
          'description': 'Elaboração e análise de contratos'
        }
      }
    ]
  },
  'openingHours': 'Mo-Fr 09:00-18:00',
  'priceRange': '$$',
  'sameAs': [
    'https://www.facebook.com/advogadosorocaba',
    'https://www.instagram.com/advogadosorocaba',
    'https://www.linkedin.com/company/advogadosorocaba'
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/logo.png"
          as="image"
          type="image/png"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Pular para o conteúdo principal
        </a>
        
        {/* Main content */}
        <div id="main-content">
          {children}
        </div>
        
        {/* Schema.org for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'Advogados Sorocaba',
              'url': SEO_DEFAULTS.siteUrl,
              'logo': `${SEO_DEFAULTS.siteUrl}/images/logo.png`,
              'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': CONTACT_INFO.phoneRaw,
                'contactType': 'customer service',
                'areaServed': 'BR',
                'availableLanguage': 'pt-BR'
              },
              'sameAs': [
                'https://www.facebook.com/advogadosorocaba',
                'https://www.instagram.com/advogadosorocaba',
                'https://www.linkedin.com/company/advogadosorocaba'
              ]
            })
          }}
        />
      </body>
    </html>
  )
}