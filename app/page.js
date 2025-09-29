// app/page.js
import Link from 'next/link';
import { PRACTICE_AREAS, CONTACT_INFO, TEAM_MEMBERS, STATS, COMPANY_INFO } from '../lib/constants';
import { getPracticeAreaIcon, extractSpecializations } from '../lib/utils';
import ContactCTA from '../components/ContactCTA';
import SEO from '../components/SEO';

export default function Home() {
  const featuredAreas = PRACTICE_AREAS.slice(0, 6);
  const featuredTeam = TEAM_MEMBERS.slice(0, 3);

  const stats = [
    { number: `${STATS.yearsExperience}+`, label: 'Anos de Experiência' },
    { number: `${STATS.casesResolved}+`, label: 'Casos Resolvidos' },
    { number: `${STATS.clientSatisfaction}%`, label: 'Clientes Satisfeitos' },
    { number: `${STATS.practiceAreas}`, label: 'Áreas de Especialização' }
  ];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Segurança Jurídica',
      description: 'Atuação preventiva para evitar litígios e garantir a proteção de seus direitos.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Agilidade Processual',
      description: 'Resolução eficiente de processos com acompanhamento personalizado.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção exclusiva e soluções sob medida.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Confidencialidade',
      description: 'Total discrição e sigilo absoluto em todos os casos atendidos.'
    }
  ];

  return (
    <>
      <SEO />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Hero Content */}
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Advocacia Especializada em{' '}
                    <span className="text-blue-300">Sorocaba</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                    {COMPANY_INFO.slogan}
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 text-lg"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                      </svg>
                      <span>Consulta Gratuita</span>
                    </a>
                    <a
                      href="/contato"
                      className="bg-transparent hover:bg-white hover:text-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-white transform hover:scale-105 text-lg"
                    >
                      Outros Contatos
                    </a>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-blue-200">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Atendimento Personalizado</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Especialistas Qualificados</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Resultados Comprovados</span>
                    </div>
                  </div>
                </div>

                {/* Hero Image/Graphic */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-48 h-48 bg-white bg-opacity-10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20">
                          <div className="text-white text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl font-bold">AS</span>
                            </div>
                            <p className="text-sm font-semibold">Advogados</p>
                            <p className="text-sm">Sorocaba</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Nossas Áreas de Atuação
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Especialistas em diversas áreas do direito, oferecendo soluções 
                  jurídicas completas e personalizadas para cada caso.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredAreas.map((area, index) => (
                  <Link
                    key={area}
                    href={`/areas/${area.toLowerCase()}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <span className="text-xl">{getPracticeAreaIcon(area)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      Direito {area}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {getAreaDescription(area)}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      <span>Saiba mais</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/areas"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Ver Todas as Áreas
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Por que Escolher Nossos Serviços?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Comprometimento, expertise e resultados que fazem a diferença 
                  na solução dos seus problemas jurídicos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Nossa Equipe
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Advogados especializados e comprometidos com a excelência 
                  na prestação de serviços jurídicos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {featuredTeam.map((member) => (
                  <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name.split(' ').slice(0, 2).join(' ')}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {member.oab}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/equipe"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                  Conheça Toda a Equipe
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <ContactCTA 
          title="Pronto para Resolver seu Caso?"
          description="Entre em contato agora mesmo e dê o primeiro passo para a solução dos seus problemas jurídicos com profissionais especializados."
          className="my-16"
        />
      </div>
    </>
  );
}

// Helper function to get area descriptions
function getAreaDescription(area) {
  const descriptions = {
    'Trabalhista': 'Defesa dos direitos trabalhistas e previdenciários com expertise comprovada.',
    'Empresarial': 'Assessoria jurídica completa para empresas e negócios de todos os portes.',
    'Família': 'Questões familiares, divórcios, guarda, pensão e inventários com sensibilidade.',
    'Civil': 'Direitos civis, contratos, responsabilidade civil e questões patrimoniais.',
    'Previdenciário': 'Aposentadoria, benefícios e revisões. Garanta seus direitos previdenciários.',
    'Contratual': 'Elaboração, análise e revisão de contratos com máxima segurança jurídica.'
  };
  
  return descriptions[area] || 'Soluções jurídicas especializadas e personalizadas.';
}