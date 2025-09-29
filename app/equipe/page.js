// app/equipe/page.js
import { TEAM_MEMBERS, CONTACT_INFO, STATS } from '../../lib/constants';
import { extractSpecializations } from '../../lib/utils';
import { TeamSEO } from '../../components/SEO';
import ContactCTA from '../../components/ContactCTA';

export default function Equipe() {
  // Sort team members by the specified order
  const sortedTeamMembers = [...TEAM_MEMBERS].sort((a, b) => a.order - b.order);

  const teamStats = [
    { number: `${TEAM_MEMBERS.length}+`, label: 'Advogados Especializados' },
    { number: `${STATS.yearsExperience}+`, label: 'Anos de Experiência Combinada' },
    { number: `${STATS.casesResolved}+`, label: 'Casos Atendidos' },
    { number: '6', label: 'Áreas de Especialização' }
  ];

  return (
    <>
      <TeamSEO />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Nossa Equipe
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Conheça nossos advogados especializados, comprometidos em oferecer 
                a melhor assessoria jurídica com excelência e dedicação.
              </p>
              <div className="w-24 h-1 bg-blue-400 mx-auto mt-8 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {teamStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Team Introduction */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Profissionais Qualificados
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Nossa equipe é composta por advogados altamente capacitados e 
                  especializados em diversas áreas do direito, garantindo um 
                  atendimento completo e personalizado para cada caso.
                </p>
              </div>

              {/* Team Members Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
                {sortedTeamMembers.map((member, index) => (
                  <div 
                    key={member.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 animate-fade-in-up"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Member Photo */}
                    <div className="relative overflow-hidden bg-gray-200">
                      <div className="h-80 w-full">
                        <img 
                          src={member.photo} 
                          alt={`Foto de ${member.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <span className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
                            Ver Perfil
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="p-6 md:p-8">
                      {/* Name and OAB */}
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                          {member.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {member.oab}
                          </span>
                        </div>
                      </div>

                      {/* Biography */}
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-600 leading-relaxed text-justify line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                          {member.bio}
                        </p>
                      </div>

                      {/* Specializations */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                          Especializações:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {extractSpecializations(member.bio).map((specialization, idx) => (
                            <span 
                              key={idx}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {specialization}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact Button */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <a
                          href={`https://wa.me/${CONTACT_INFO.whatsapp.number}?text=Olá, gostaria de agendar uma consulta com ${member.name.split(' ')[0]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                          </svg>
                          <span>Agendar Consulta</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Team Values */}
              <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Nossa Filosofia de Trabalho
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Comprometidos com a excelência, ética e resultados que fazem a diferença 
                    na vida de nossos clientes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Excelência</h3>
                    <p className="text-gray-600">
                      Buscamos a melhor solução jurídica com qualidade e precisão.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Confidencialidade</h3>
                    <p className="text-gray-600">
                      Total sigilo e discrição em todos os casos atendidos.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Personalização</h3>
                    <p className="text-gray-600">
                      Atendimento individualizado para cada cliente e situação.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Agilidade</h3>
                    <p className="text-gray-600">
                      Respostas rápidas e soluções eficientes para seu caso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ContactCTA 
          title="Precisa Falar com Nossa Equipe?"
          description="Entre em contato agora e agende uma consulta com o especialista mais adequado para o seu caso."
          className="my-16"
        />
      </div>
    </>
  );
}