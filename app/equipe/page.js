// app/equipe/page.js
import { TEAM_MEMBERS } from '../../lib/constants';

export const metadata = {
  title: 'Nossa Equipe - Advogados Sorocaba',
  description: 'Conheça nossa equipe de advogados especializados em diversas áreas do direito em Sorocaba e região.',
  keywords: 'advogados Sorocaba, equipe jurídica, Claudio Dias Batista, Murilo Padilha Zanetti, Fabiana Fiúza, Vittória Cristine Pereira, Bárbara Camargo Murat',
};

export default function Equipe() {
  // Sort team members by the specified order
  const sortedTeamMembers = [...TEAM_MEMBERS].sort((a, b) => a.order - b.order);

  return (
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
                    <div className="aspect-w-3 aspect-h-4 h-80">
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

                    {/* Specializations (extracted from bio) */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
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
                  </div>
                </div>
              ))}
            </div>

            {/* Team Stats */}
            <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-blue-700">
                    {sortedTeamMembers.length}+
                  </div>
                  <div className="text-gray-600 font-medium">Advogados</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-blue-700">
                    50+
                  </div>
                  <div className="text-gray-600 font-medium">Anos de Experiência</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-blue-700">
                    6
                  </div>
                  <div className="text-gray-600 font-medium">Áreas de Atuação</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-blue-700">
                    1000+
                  </div>
                  <div className="text-gray-600 font-medium">Casos Atendidos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Ajuda Jurídica?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Nossa equipe está pronta para oferecer a melhor solução para o seu caso. 
              Entre em contato e agende uma consulta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/+5515991234567?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20equipe%20de%20advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                </svg>
                <span>Falar no WhatsApp</span>
              </a>
              <a 
                href="/contato"
                className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-8 rounded-lg transition-colors duration-200 border-2 border-white text-lg"
              >
                Outras Formas de Contato
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to extract specializations from biography
function extractSpecializations(bio) {
  const specializations = [];
  const keywords = [
    'Direito Trabalhista',
    'Direito Empresarial',
    'Direito de Família',
    'Direito Civil',
    'Direito Previdenciário',
    'Direito Contratual',
    'Processo Civil',
    'Processo do Trabalho',
    'Administração de Empresas',
    'Jornalismo',
    'Política Americana',
    'Franquias',
    'Direito Contratual',
    'Inglês',
    'Espanhol',
    'Francês',
    'Italiano',
    'Alemão'
  ];

  keywords.forEach(keyword => {
    if (bio.toLowerCase().includes(keyword.toLowerCase())) {
      specializations.push(keyword);
    }
  });

  return specializations.slice(0, 4); // Limit to 4 specializations
}