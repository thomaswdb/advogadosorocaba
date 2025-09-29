// app/areas/trabalhista/page.js
export const metadata = {
  title: 'Direito Trabalhista - Advogados Sorocaba',
  description: 'Advogado trabalhista em Sorocaba. Atuamos em rescisões, horas extras, acidentes de trabalho, assédio moral e demais questões trabalhistas.',
};

export default function Trabalhista() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Direito Trabalhista
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Defesa dos direitos trabalhistas e previdenciários com expertise 
              e comprometimento em Sorocaba e região.
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Advocacia Trabalhista Especializada
                  </h2>
                  
                  <div className="prose prose-lg prose-blue max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Atuamos na defesa dos direitos trabalhistas de empregados e empregadores, 
                      oferecendo assessoria jurídica completa e personalizada para cada caso.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                      Principais Atuações
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-900 mb-3">Para Empregados</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Rescisão indireta e contrato de trabalho</li>
                          <li>• Horas extras e adicional noturno</li>
                          <li>• Equiparação salarial</li>
                          <li>• Acidente de trabalho</li>
                          <li>• Assédio moral e sexual</li>
                          <li>• Verbas rescisórias</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="font-semibold text-green-900 mb-3">Para Empresas</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Assessoria preventiva</li>
                          <li>• Defesa em ações trabalhistas</li>
                          <li>• Compliance trabalhista</li>
                          <li>• Acordos e mediações</li>
                          <li>• Terceirização</li>
                          <li>• Due diligence trabalhista</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Por que Escolher Nossos Serviços?
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        Com vasta experiência em direito trabalhista, nossa equipe oferece 
                        soluções jurídicas eficientes, sempre priorizando os interesses 
                        de nossos clientes com transparência e profissionalismo.
                      </p>
                      
                      <p className="text-gray-600 leading-relaxed">
                        Atuamos em todas as fases do processo trabalhista, desde a 
                        assessoria preventiva até a execução de sentenças, garantindo 
                        a melhor estratégia para cada caso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* CTA Card */}
                <div className="bg-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Precisa de Ajuda Trabalhista?
                  </h3>
                  <p className="mb-6 text-blue-100">
                    Entre em contato para uma consulta gratuita sobre seu caso.
                  </p>
                  <a
                    href="https://wa.me/+5515991234567?text=Olá,%20gostaria%20de%20uma%20consulta%20sobre%20Direito%20Trabalhista"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                    </svg>
                    <span>Consultoria Gratuita</span>
                  </a>
                </div>

                {/* Related Areas */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Outras Áreas de Atuação
                  </h3>
                  <div className="space-y-3">
                    <a href="/areas/empresarial" className="block text-blue-600 hover:text-blue-700 font-medium py-2 border-b border-gray-100">
                      Direito Empresarial
                    </a>
                    <a href="/areas/previdenciario" className="block text-blue-600 hover:text-blue-700 font-medium py-2 border-b border-gray-100">
                      Direito Previdenciário
                    </a>
                    <a href="/areas/civil" className="block text-blue-600 hover:text-blue-700 font-medium py-2 border-b border-gray-100">
                      Direito Civil
                    </a>
                    <a href="/areas/familia" className="block text-blue-600 hover:text-blue-700 font-medium py-2">
                      Direito de Família
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}