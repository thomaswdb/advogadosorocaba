// components/SEO.js
import Head from 'next/head';
import { SEO_DEFAULTS, CONTACT_INFO } from '../lib/constants';

/**
 * Comprehensive SEO component for all pages
 * Features:
 * - Meta tags optimization
 * - Open Graph tags
 * - Twitter Cards
 * - Structured Data (JSON-LD)
 * - Canonical URLs
 * - Robots directives
 */
export default function SEO({
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  keywords = SEO_DEFAULTS.keywords,
  canonicalUrl = SEO_DEFAULTS.siteUrl,
  ogImage = SEO_DEFAULTS.ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData = null,
  noindex = false,
  nofollow = false,
  author = 'Advogados Sorocaba',
  publishedTime = null,
  modifiedTime = null,
  articleSection = null,
  tags = []
}) {
  // Ensure absolute URLs for images and canonical
  const fullCanonicalUrl = canonicalUrl.startsWith('http') 
    ? canonicalUrl 
    : `${SEO_DEFAULTS.siteUrl}${canonicalUrl}`;
  
  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${SEO_DEFAULTS.siteUrl}${ogImage}`;

  // Default structured data for the website
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'Advogados Sorocaba',
    'description': description,
    'url': fullCanonicalUrl,
    'telephone': CONTACT_INFO.phoneRaw,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Sorocaba',
      'addressRegion': 'SP',
      'addressCountry': 'BR'
    },
    'areaServed': 'Sorocaba e região',
    'serviceType': 'Advocacia',
    'openingHours': 'Mo-Fr 09:00-18:00',
    'priceRange': '$$'
  };

  // Article structured data for blog posts
  const articleStructuredData = ogType === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'description': description,
    'image': fullOgImage,
    'author': {
      '@type': 'Organization',
      'name': author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Advogados Sorocaba',
      'logo': {
        '@type': 'ImageObject',
        'url': `${SEO_DEFAULTS.siteUrl}/images/logo.png`
      }
    },
    'datePublished': publishedTime,
    'dateModified': modifiedTime,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': fullCanonicalUrl
    },
    'articleSection': articleSection,
    'keywords': tags.join(', ')
  } : null;

  const finalStructuredData = structuredData || 
    (ogType === 'article' ? articleStructuredData : defaultStructuredData);

  // Robots meta tag
  const robotsContent = [];
  if (noindex) robotsContent.push('noindex');
  if (nofollow) robotsContent.push('nofollow');
  if (robotsContent.length === 0) robotsContent.push('index, follow');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Advogados Sorocaba" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Open Graph Additional */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === 'article' && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@advogadosorocaba" />
      <meta name="twitter:creator" content="@advogadosorocaba" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      {finalStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(finalStructuredData)
          }}
        />
      )}

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
            'description': SEO_DEFAULTS.description,
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Sorocaba',
              'addressRegion': 'SP',
              'addressCountry': 'BR'
            },
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
    </Head>
  );
}

/**
 * Specialized SEO component for practice area pages
 */
export function AreaSEO({ 
  area, 
  description, 
  canonicalUrl,
  ...props 
}) {
  const areaTitles = {
    'trabalhista': 'Direito Trabalhista - Advogados Sorocaba',
    'empresarial': 'Direito Empresarial - Advogados Sorocaba',
    'familia': 'Direito de Família - Advogados Sorocaba',
    'civil': 'Direito Civil - Advogados Sorocaba',
    'previdenciario': 'Direito Previdenciário - Advogados Sorocaba',
    'contratual': 'Direito Contratual - Advogados Sorocaba'
  };

  const areaDescriptions = {
    'trabalhista': 'Advogado trabalhista em Sorocaba. Atuamos em rescisões, horas extras, acidentes de trabalho, assédio moral e demais questões trabalhistas.',
    'empresarial': 'Advogado empresarial em Sorocaba. Assessoria jurídica para empresas, contratos, societário, compliance e recuperação judicial.',
    'familia': 'Advogado de família em Sorocaba. Atuamos em divórcios, guarda de filhos, pensão alimentícia, inventários e adoções.',
    'civil': 'Advogado civil em Sorocaba. Direitos civis, contratos, responsabilidade civil, indenizações e questões patrimoniais.',
    'previdenciario': 'Advogado previdenciário em Sorocaba. Aposentadoria, benefícios do INSS, revisões e auxílios previdenciários.',
    'contratual': 'Advogado contratual em Sorocaba. Elaboração, análise e revisão de contratos com máxima segurança jurídica.'
  };

  const areaKeywords = {
    'trabalhista': 'advogado trabalhista Sorocaba, direito trabalhista, rescisão, horas extras, acidente trabalho',
    'empresarial': 'advogado empresarial Sorocaba, direito empresarial, contratos, societário, compliance',
    'familia': 'advogado família Sorocaba, direito família, divórcio, guarda filhos, pensão alimentícia',
    'civil': 'advogado civil Sorocaba, direito civil, contratos, responsabilidade civil, indenizações',
    'previdenciario': 'advogado previdenciário Sorocaba, direito previdenciário, aposentadoria, INSS, benefícios',
    'contratual': 'advogado contratual Sorocaba, direito contratual, contratos, revisão contratual, elaboração contratos'
  };

  const areaStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `Direito ${area.charAt(0).toUpperCase() + area.slice(1)}`,
    'description': description || areaDescriptions[area],
    'provider': {
      '@type': 'LegalService',
      'name': 'Advogados Sorocaba'
    },
    'areaServed': 'Sorocaba e região',
    'serviceType': `Direito ${area.charAt(0).toUpperCase() + area.slice(1)}`
  };

  return (
    <SEO
      title={areaTitles[area] || `Direito ${area} - Advogados Sorocaba`}
      description={description || areaDescriptions[area]}
      keywords={areaKeywords[area]}
      canonicalUrl={canonicalUrl || `/areas/${area}`}
      structuredData={areaStructuredData}
      {...props}
    />
  );
}

/**
 * Specialized SEO component for team pages
 */
export function TeamSEO({ 
  teamMember,
  ...props 
}) {
  if (teamMember) {
    // Individual team member SEO
    return (
      <SEO
        title={`${teamMember.name} - Advogados Sorocaba`}
        description={`${teamMember.name} - ${teamMember.oab}. ${teamMember.bio.substring(0, 160)}...`}
        keywords={`${teamMember.name}, ${teamMember.oab}, advogado Sorocaba`}
        canonicalUrl={`/equipe/${teamMember.slug}`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': teamMember.name,
          'description': teamMember.bio,
          'memberOf': {
            '@type': 'Organization',
            'name': 'Advogados Sorocaba'
          },
          'hasCredential': teamMember.oab,
          'knowsAbout': extractSpecializations(teamMember.bio)
        }}
        {...props}
      />
    );
  }

  // Main team page SEO
  return (
    <SEO
      title="Nossa Equipe - Advogados Sorocaba"
      description="Conheça nossa equipe de advogados especializados em diversas áreas do direito em Sorocaba e região."
      keywords="advogados Sorocaba, equipe jurídica, profissionais direito, escritório advocacia Sorocaba"
      canonicalUrl="/equipe"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Nossa Equipe',
        'description': 'Equipe de advogados especializados do escritório Advogados Sorocaba',
        'numberOfItems': 5,
        'itemListElement': []
      }}
      {...props}
    />
  );
}

/**
 * Specialized SEO component for blog articles
 */
export function ArticleSEO({
  title,
  description,
  image,
  author = 'Advogados Sorocaba',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonicalUrl,
  ...props
}) {
  return (
    <SEO
      title={title}
      description={description}
      ogImage={image}
      ogType="article"
      canonicalUrl={canonicalUrl}
      author={author}
      publishedTime={publishedTime}
      modifiedTime={modifiedTime}
      articleSection={section}
      tags={tags}
      structuredData={null} // Let the main component handle article structured data
      {...props}
    />
  );
}

// Helper function to extract specializations from bio
function extractSpecializations(bio) {
  const specializations = [];
  const keywords = [
    'Direito Trabalhista', 'Direito Empresarial', 'Direito de Família',
    'Direito Civil', 'Direito Previdenciário', 'Direito Contratual',
    'Processo Civil', 'Processo do Trabalho', 'Administração de Empresas',
    'Franquias', 'Compliance', 'LGPD'
  ];

  keywords.forEach(keyword => {
    if (bio.toLowerCase().includes(keyword.toLowerCase())) {
      specializations.push(keyword);
    }
  });

  return specializations;
}