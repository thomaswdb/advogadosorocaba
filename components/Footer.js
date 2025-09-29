// components/Footer.js
import Link from 'next/link';
import { CONTACT_INFO, SOCIAL_LINKS, NAVIGATION_MENU, PRACTICE_AREAS } from '../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Get practice areas from navigation for consistency
  const practiceAreas = NAVIGATION_MENU.find(item => item.name === 'Atuação')?.items || [];

  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Advogados Sorocaba</h3>
                <p className="text-blue-200 text-sm">Escritório de Advocacia</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Escritório de advocacia especializado em diversas áreas do direito, 
              oferecendo atendimento personalizado e soluções jurídicas eficientes 
              para clientes em Sorocaba e região.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-2 -m-2"
                aria-label={`Ligar para ${CONTACT_INFO.phone}`}
              >
                <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">{CONTACT_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-2 -m-2"
                aria-label={`Enviar email para ${CONTACT_INFO.email}`}
              >
                <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-center space-x-3 text-gray-300 group">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-l-4 border-blue-500 pl-3">
              Navegação
            </h3>
            <ul className="space-y-3" role="list">
              {NAVIGATION_MENU.filter(item => item.type === 'link').map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg py-1 px-2 -mx-2 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-l-4 border-blue-500 pl-3">
              Áreas de Atuação
            </h3>
            <ul className="space-y-3" role="list">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg py-1 px-2 -mx-2 block"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp CTA & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-l-4 border-blue-500 pl-3">
              Atendimento
            </h3>
            
            {/* WhatsApp CTA */}
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">WhatsApp</h4>
                  <p className="text-green-400 text-sm">Atendimento Rápido</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Entre em contato diretamente pelo WhatsApp para uma consulta rápida.
              </p>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center space-x-2"
                aria-label="Enviar mensagem no WhatsApp"
              >
                <span>Enviar Mensagem</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.facebook && (
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Siga-nos no Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}

                {SOCIAL_LINKS.instagram && (
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Siga-nos no Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C8.396 0 7.987 0.021 6.756 0.106 5.532 0.19 4.705 0.427 3.984 0.748 3.238 1.08 2.603 1.504 1.968 2.139 1.334 2.773 0.909 3.409 0.578 4.155 0.256 4.875 0.02 5.702 -0.064 6.926 -0.148 8.157 -0.169 8.566 -0.169 12.187c0 3.62 0.021 4.029 0.106 5.26 0.085 1.224 0.322 2.051 0.643 2.772 0.332 0.746 0.756 1.381 1.39 2.015 0.635 0.635 1.271 1.059 2.017 1.391 0.721 0.321 1.548 0.558 2.772 0.643 1.231 0.085 1.64 0.106 5.26 0.106 3.62 0 4.029 -0.021 5.26 -0.106 1.224 -0.085 2.051 -0.322 2.772 -0.643 0.746 -0.332 1.381 -0.756 2.015 -1.39 0.635 -0.636 1.059 -1.272 1.391 -2.018 0.321 -0.72 0.558 -1.547 0.643 -2.771 0.085 -1.231 0.106 -1.64 0.106 -5.26 0 -3.62 -0.021 -4.029 -0.106 -5.26 -0.085 -1.224 -0.322 -2.051 -0.643 -2.772 -0.332 -0.746 -0.756 -1.381 -1.39 -2.016C21.227 1.334 20.591 0.909 19.845 0.578 19.125 0.256 18.298 0.02 17.074 -0.064 15.843 -0.148 15.434 -0.169 11.813 -0.169H12.017zm-0.694 2.179c3.542 0 3.917 0.012 5.131 0.095 1.142 0.078 1.761 0.307 2.174 0.509 0.553 0.27 0.949 0.592 1.365 1.008 0.416 0.416 0.738 0.812 1.008 1.365 0.202 0.413 0.431 1.032 0.509 2.174 0.083 1.214 0.095 1.589 0.095 5.131 0 3.542 -0.012 3.917 -0.095 5.131 -0.078 1.142 -0.307 1.761 -0.509 2.174 -0.27 0.553 -0.592 0.949 -1.008 1.365 -0.416 0.416 -0.812 0.738 -1.365 1.008 -0.413 0.202 -1.032 0.431 -2.174 0.509 -1.214 0.083 -1.589 0.095 -5.131 0.095 -3.542 0 -3.917 -0.012 -5.131 -0.095 -1.142 -0.078 -1.761 -0.307 -2.174 -0.509 -0.553 -0.27 -0.949 -0.592 -1.365 -1.008 -0.416 -0.416 -0.738 -0.812 -1.008 -1.365 -0.202 -0.413 -0.431 -1.032 -0.509 -2.174 -0.083 -1.214 -0.095 -1.589 -0.095 -5.131 0 -3.542 0.012 -3.917 0.095 -5.131 0.078 -1.142 0.307 -1.761 0.509 -2.174 0.27 -0.553 0.592 -0.949 1.008 -1.365 0.416 -0.416 0.812 -0.738 1.365 -1.008 0.413 -0.202 1.032 -0.431 2.174 -0.509 1.214 -0.083 1.589 -0.095 5.131 -0.095zM12 5.838c-3.403 0 -6.162 2.759 -6.162 6.162s2.759 6.163 6.162 6.163 6.162 -2.759 6.162 -6.163c0 -3.403 -2.759 -6.162 -6.162 -6.162zm0 10.162c-2.209 0 -4 -1.79 -4 -4 0 -2.209 1.791 -4 4 -4s4 1.791 4 4c0 2.21 -1.791 4 -4 4zm6.406 -11.845c0 0.795 -0.645 1.44 -1.44 1.44 -0.795 0 -1.44 -0.645 -1.44 -1.44 0 -0.795 0.645 -1.44 1.44 -1.44 0.795 0 1.44 0.645 1.44 1.44z"/>
                    </svg>
                  </a>
                )}

                {SOCIAL_LINKS.linkedin && (
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Siga-nos no LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>
                © {currentYear} Advogados Sorocaba. Todos os direitos reservados.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link
                href="/politica-de-privacidade"
                className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-2 py-1"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-2 py-1"
              >
                Termos de Uso
              </Link>
              <Link
                href="/aviso-legal"
                className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-2 py-1"
              >
                Aviso Legal
              </Link>
            </div>

            {/* Development Credit */}
            <div className="text-gray-500 text-sm">
              <p>
                Desenvolvido com ❤️ para Advogados Sorocaba
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}