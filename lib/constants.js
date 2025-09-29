// lib/constants.js

// Team members data
export const TEAM_MEMBERS = [
  {
    id: 1,
    photo: '/images/claudio-dias-batista.avif',
    name: 'Dr. Claudio Dias Batista',
    oab: 'OAB SP 133.153',
    bio: 'Formado pela Faculdade de Direito de Sorocaba. Cursou Administração de Empresas e Jornalismo. Pós Graduado em Política Americana pela BYU (Universidade Brigham Young), EUA. Graduação e atuação como Assistente Graduado junto ao Dale Carnegie Course. Idiomas: Inglês e espanhol. Fala em nível intermediário francês, italiano e alemão. Autor do livro "Como os médicos me ensinaram a advogar". Medalha de gratidão, no grau prata, concedida pela União dos Escoteiros do Brasil, por seu trabalho voluntário.',
    order: 1
  },
  {
    id: 2,
    photo: '/images/murilo-padilha-zanetti.avif',
    name: 'Dr. Murilo Padilha Zanetti',
    oab: 'OAB SP 317.568',
    bio: 'Formado pela Faculdade de Direito de Sorocaba. Pós graduado em Direito e Processo do Trabalho. Graduação e atuação como assistente graduado junto ao Dale Carnegie Institute no curso de Competências Pessoais e Liderança. Técnico em Administração de Empresas pelo Centro Paula Souza.',
    order: 2
  },
  {
    id: 3,
    photo: '/images/fabiana-fiuza.avif',
    name: 'Dra. Fabiana Fiúza',
    oab: 'OAB SP 180.851',
    bio: 'Formada pela Faculdade de Direito de São Bernardo do Campo. Pós Graduada em Direito Civil e Processo Civil. Especialista em franquias pela ABF (Associação Brasileira de Franquias). Especialista em Direito Contratual. Idioma inglês.',
    order: 3
  },
  {
    id: 4,
    photo: '/images/vittoria-cristine-pereira.avif',
    name: 'Dra. Vittória Cristine Pereira',
    oab: 'OAB SP 483.858',
    bio: 'Formada pela Faculdade de Direito de Sorocaba. Pós graduada em Processo Civil pela Legal e Educacional.',
    order: 4
  },
  {
    id: 5,
    photo: '/images/barbara-camargo-murat.avif',
    name: 'Dra. Bárbara Camargo Murat',
    oab: 'OAB SP 480.367',
    bio: 'Formada pela Faculdade ESAMC. Pós graduada em Direito Previdenciário pela Legal e Educacional.',
    order: 5
  }
];

// Navigation menu items
export const NAVIGATION_MENU = [
  {
    name: 'Início',
    href: '/',
    type: 'link'
  },
  {
    name: 'Atuação',
    href: '#',
    type: 'dropdown',
    items: [
      {
        name: 'Direito Trabalhista',
        href: '/areas/trabalhista',
        description: 'Defesa dos direitos trabalhistas e previdenciários'
      },
      {
        name: 'Direito Empresarial',
        href: '/areas/empresarial',
        description: 'Assessoria jurídica para empresas e negócios'
      },
      {
        name: 'Direito de Família',
        href: '/areas/familia',
        description: 'Questões familiares, divórcios e inventários'
      },
      {
        name: 'Direito Civil',
        href: '/areas/civil',
        description: 'Direitos civis e questões patrimoniais'
      },
      {
        name: 'Direito Previdenciário',
        href: '/areas/previdenciario',
        description: 'Aposentadoria e benefícios previdenciários'
      },
      {
        name: 'Direito Contratual',
        href: '/areas/contratual',
        description: 'Elaboração e análise de contratos'
      }
    ]
  },
  {
    name: 'Equipe',
    href: '/equipe',
    type: 'link'
  },
  {
    name: 'Contato',
    href: '/contato',
    type: 'link'
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
  }
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/advogadosorocaba',
  instagram: 'https://instagram.com/advogadosorocaba',
  linkedin: 'https://linkedin.com/company/advogadosorocaba'
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

// SEO metadata defaults
export const SEO_DEFAULTS = {
  title: 'Advogados Sorocaba - Escritório de Advocacia Especializado',
  description: 'Escritório de advocacia em Sorocaba especializado em direito trabalhista, empresarial, família, civil e previdenciário. Atendimento personalizado e eficiente.',
  keywords: 'advogado Sorocaba, escritório advocacia, direito trabalhista, direito empresarial, direito família, direito civil, direito previdenciário',
  siteUrl: 'https://advogadosorocaba.vercel.app',
  ogImage: '/images/og-image.jpg'
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