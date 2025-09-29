// lib/constants.js

// Team members data - in exact sequence specified
export const TEAM_MEMBERS = [
  {
    id: 1,
    photo: '/images/claudio-dias-batista.avif',
    name: 'Dr. Claudio Dias Batista',
    oab: 'OAB SP 133.153',
    bio: 'Formado pela Faculdade de Direito de Sorocaba. Cursou Administração de Empresas e Jornalismo. Pós Graduado em Política Americana pela BYU (Universidade Brigham Young), EUA. Graduação e atuação como Assistente Graduado junto ao Dale Carnegie Course. Idiomas: Inglês e espanhol. Fala em nível intermediário francês, italiano e alemão. Autor do livro "Como os médicos me ensinaram a advogar". Medalha de gratidão, no grau prata, concedida pela União dos Escoteiros do Brasil, por seu trabalho voluntário.',
    order: 1,
    slug: 'claudio-dias-batista',
    specialties: ['Direito Empresarial', 'Direito Civil', 'Contratos Internacionais']
  },
  {
    id: 2,
    photo: '/images/murilo-padilha-zanetti.avif',
    name: 'Dr. Murilo Padilha Zanetti',
    oab: 'OAB SP 317.568',
    bio: 'Formado pela Faculdade de Direito de Sorocaba. Pós graduado em Direito e Processo do Trabalho. Graduação e atuação como assistente graduado junto ao Dale Carnegie Institute no curso de Competências Pessoais e Liderança. Técnico em Administração de Empresas pelo Centro Paula Souza.',
    order: 2,
    slug: 'murilo-padilha-zanetti',
    specialties: ['Direito Trabalhista', 'Processo do Trabalho']
  },
  {
    id: 3,
    photo: '/images/fabiana-fiuza.avif',
    name: 'Dra. Fabiana Fiúza',
    oab: 'OAB SP 180.851',
    bio: 'Formada pela Faculdade de Direito de São Bernardo do Campo. Pós Graduada em Direito Civil e Processo Civil. Especialista em franquias pela ABF (Associação Brasileira de Franquias). Especialista em Direito Contratual. Idioma inglês.',
    order: 3,
    slug: 'fabiana-fiuza',
    specialties: ['Direito Civil', 'Processo Civil', 'Direito Contratual', 'Franquias']
  },
  {
    id: 4,
    photo: '/images/vittoria-cristine-pereira.avif',
    name: 'Dra. Vittória Cristine Pereira',
    oab: 'OAB SP 483.858',
    bio: 'Formada pela Faculdade de Direito de Sorocaba. Pós graduada em Processo Civil pela Legal e Educacional.',
    order: 4,
    slug: 'vittoria-cristine-pereira',
    specialties: ['Processo Civil', 'Direito Civil']
  },
  {
    id: 5,
    photo: '/images/barbara-camargo-murat.avif',
    name: 'Dra. Bárbara Camargo Murat',
    oab: 'OAB SP 480.367',
    bio: 'Formada pela Faculdade ESAMC. Pós graduada em Direito Previdenciário pela Legal e Educacional.',
    order: 5,
    slug: 'barbara-camargo-murat',
    specialties: ['Direito Previdenciário']
  }
];

// Navigation menu items
export const NAVIGATION_MENU = [
  {
    name: 'Início',
    href: '/',
    type: 'link',
    order: 1
  },
  {
    name: 'Atuação',
    href: '#',
    type: 'dropdown',
    order: 2,
    items: [
      {
        name: 'Direito Trabalhista',
        href: '/areas/trabalhista',
        description: 'Defesa dos direitos trabalhistas e previdenciários',
        icon: '⚖️'
      },
      {
        name: 'Direito Empresarial',
        href: '/areas/empresarial',
        description: 'Assessoria jurídica para empresas e negócios',
        icon: '🏢'
      },
      {
        name: 'Direito de Família',
        href: '/areas/familia',
        description: 'Questões familiares, divórcios e inventários',
        icon: '👨‍👩‍👧‍👦'
      },
      {
        name: 'Direito Civil',
        href: '/areas/civil',
        description: 'Direitos civis e questões patrimoniais',
        icon: '📝'
      },
      {
        name: 'Direito Previdenciário',
        href: '/areas/previdenciario',
        description: 'Aposentadoria e benefícios previdenciários',
        icon: '👵'
      },
      {
        name: 'Direito Contratual',
        href: '/areas/contratual',
        description: 'Elaboração e análise de contratos',
        icon: '📄'
      }
    ]
  },
  {
    name: 'Equipe',
    href: '/equipe',
    type: 'link',
    order: 3
  },
  {
    name: 'Contato',
    href: '/contato',
    type: 'link',
    order: 4
  }
];

// Contact information
export const CONTACT_INFO = {
  phone: '+55 (15) 99123-4567',
  phoneRaw: '+5515991234567',
  email: 'contato@advogadosorocaba.com.br',
  address: 'Sorocaba, SP, Brasil',
  whatsapp: {
    number: '+5515991234567',
    message: 'Olá, gostaria de agendar uma consulta com os Advogados Sorocaba.'
  },
  officeHours: {
    weekdays: '09:00 - 18:00',
    saturday: '09:00 - 12:00',
    sunday: 'Fechado'
  }
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/advogadosorocaba',
  instagram: 'https://instagram.com/advogadosorocaba',
  linkedin: 'https://linkedin.com/company/advogadosorocaba',
  youtube: null, // Can be added later
  twitter: null  // Can be added later
};

// Practice areas for quick reference
export const PRACTICE_AREAS = [
  'Trabalhista',
  'Empresarial',
  'Família',
  'Civil',
  'Previdenciário',
  'Contratual'
];

// Practice area details
export const PRACTICE_AREA_DETAILS = {
  'Trabalhista': {
    title: 'Direito Trabalhista',
    description: 'Defesa dos direitos trabalhistas e previdenciários com expertise comprovada.',
    icon: '⚖️',
    services: [
      'Rescisão indireta e contrato de trabalho',
      'Horas extras e adicional noturno',
      'Equiparação salarial',
      'Acidente de trabalho',
      'Assédio moral e sexual',
      'Verbas rescisórias'
    ]
  },
  'Empresarial': {
    title: 'Direito Empresarial',
    description: 'Assessoria jurídica completa para empresas e negócios de todos os portes.',
    icon: '🏢',
    services: [
      'Constituição de empresas',
      'Contratos empresariais',
      'Direito societário',
      'Fusões e aquisições',
      'Recuperação judicial',
      'Compliance e LGPD'
    ]
  },
  'Família': {
    title: 'Direito de Família',
    description: 'Questões familiares, divórcios, guarda, pensão e inventários com sensibilidade.',
    icon: '👨‍👩‍👧‍👦',
    services: [
      'Divórcio e separação',
      'Guarda de filhos',
      'Pensão alimentícia',
      'Inventário e partilha',
      'Adoção',
      'Regime de bens'
    ]
  },
  'Civil': {
    title: 'Direito Civil',
    description: 'Direitos civis, contratos, responsabilidade civil e questões patrimoniais.',
    icon: '📝',
    services: [
      'Contratos em geral',
      'Responsabilidade civil',
      'Direitos do consumidor',
      'Indenizações',
      'Usucapião',
      'Posse e propriedade'
    ]
  },
  'Previdenciário': {
    title: 'Direito Previdenciário',
    description: 'Aposentadoria, benefícios e revisões. Garanta seus direitos previdenciários.',
    icon: '👵',
    services: [
      'Aposentadoria por tempo de contribuição',
      'Aposentadoria por idade',
      'Auxílio-doença e acidente',
      'Pensão por morte',
      'LOAS/BPC',
      'Revisão de benefícios'
    ]
  },
  'Contratual': {
    title: 'Direito Contratual',
    description: 'Elaboração, análise e revisão de contratos com máxima segurança jurídica.',
    icon: '📄',
    services: [
      'Elaboração de contratos',
      'Análise contratual',
      'Revisão de cláusulas',
      'Rescisão contratual',
      'Contratos internacionais',
      'Contratos digitais'
    ]
  }
};

// SEO metadata defaults
export const SEO_DEFAULTS = {
  title: 'Advogados Sorocaba - Escritório de Advocacia Especializado',
  description: 'Escritório de advocacia em Sorocaba especializado em direito trabalhista, empresarial, família, civil e previdenciário. Atendimento personalizado e eficiente.',
  keywords: 'advogado Sorocaba, escritório advocacia, direito trabalhista, direito empresarial, direito família, direito civil, direito previdenciário, advogado trabalhista Sorocaba, advogado empresarial Sorocaba',
  siteUrl: 'https://advogadosorocaba.vercel.app',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@advogadosorocaba'
};

// Accessibility constants
export const ACCESSIBILITY = {
  colors: {
    primary: '#1e40af', // blue-800
    primaryLight: '#3b82f6', // blue-500
    textDark: '#1f2937', // gray-800
    textLight: '#6b7280', // gray-500
    background: '#ffffff',
    contrastThreshold: 4.5 // WCAG AA standard
  },
  fontSizes: {
    mobile: {
      base: '16px',
      large: '18px',
      small: '14px'
    },
    desktop: {
      base: '16px',
      large: '18px',
      small: '14px'
    }
  }
};

// Company information
export const COMPANY_INFO = {
  name: 'Advogados Sorocaba',
  legalName: 'Escritório de Advocacia Advogados Sorocaba',
  slogan: 'Soluções Jurídicas com Excelência e Comprometimento',
  founded: 2010,
  mission: 'Oferecer assessoria jurídica de excelência, com transparência e comprometimento, garantindo a melhor solução para cada caso.',
  values: [
    'Excelência Profissional',
    'Transparência',
    'Comprometimento',
    'Confidencialidade',
    'Inovação Jurídica'
  ]
};

// Service statistics
export const STATS = {
  yearsExperience: 15,
  casesResolved: 1000,
  clientSatisfaction: 98,
  practiceAreas: 6,
  teamMembers: 5
};

// Legal documents and policies
export const LEGAL_DOCUMENTS = {
  privacyPolicy: '/politica-de-privacidade',
  termsOfUse: '/termos-de-uso',
  legalNotice: '/aviso-legal',
  cookiePolicy: '/politica-de-cookies'
};

// Export all constants as a single object for easy importing
export default {
  TEAM_MEMBERS,
  NAVIGATION_MENU,
  CONTACT_INFO,
  SOCIAL_LINKS,
  PRACTICE_AREAS,
  PRACTICE_AREA_DETAILS,
  SEO_DEFAULTS,
  ACCESSIBILITY,
  COMPANY_INFO,
  STATS,
  LEGAL_DOCUMENTS
};