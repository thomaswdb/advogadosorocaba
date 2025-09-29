// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import { SEO_DEFAULTS, CONTACT_INFO } from '../lib/constants'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
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
    creator: SEO_DEFAULTS.twitterHandle,
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
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Manifest
  manifest: '/site.webmanifest',
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
  'openingHours': 'Mo-Fr 09:00-18:00, Sa 09:00-12:00',
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
        
        {/* Additional Organization Structured Data */}
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
      </head>
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Pular para o conteúdo principal
        </a>
        
        {/* Main content wrapper */}
        <div id="main-content" className="min-h-screen flex flex-col">
          {children}
        </div>
        
        {/* Schema.org for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              'name': 'Advogados Sorocaba',
              'image': `${SEO_DEFAULTS.siteUrl}/images/logo.png`,
              '@id': SEO_DEFAULTS.siteUrl,
              'url': SEO_DEFAULTS.siteUrl,
              'telephone': CONTACT_INFO.phoneRaw,
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Sorocaba',
                'addressLocality': 'Sorocaba',
                'addressRegion': 'SP',
                'postalCode': '18000-000',
                'addressCountry': 'BR'
              },
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': -23.5015,
                'longitude': -47.4581
              },
              'openingHoursSpecification': [
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday'
                  ],
                  'opens': '09:00',
                  'closes': '18:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': 'Saturday',
                  'opens': '09:00',
                  'closes': '12:00'
                }
              ],
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