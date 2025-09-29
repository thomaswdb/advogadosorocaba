// components/ContactCTA.js
'use client';

import { useState } from 'react';
import { CONTACT_INFO } from '../lib/constants';

export default function ContactCTA({ 
  title = "Precisa de Ajuda Jurídica?",
  description = "Entre em contato agora para uma consulta gratuita e descubra como podemos ajudar no seu caso.",
  variant = "primary",
  className = "",
  showPhone = true,
  showWhatsApp = true,
  showEmail = true,
  compact = false
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const variants = {
    primary: {
      background: "bg-blue-700",
      text: "text-white",
      button: "bg-white text-blue-700 hover:bg-gray-100",
      border: "border-white"
    },
    secondary: {
      background: "bg-gray-900",
      text: "text-white",
      button: "bg-blue-600 text-white hover:bg-blue-700",
      border: "border-blue-600"
    },
    light: {
      background: "bg-gray-50",
      text: "text-gray-900",
      button: "bg-blue-600 text-white hover:bg-blue-700",
      border: "border-blue-600"
    }
  };

  const currentVariant = variants[variant] || variants.primary;

  const contactMethods = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
        </svg>
      ),
      url: `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.message)}`,
      color: "bg-green-500 hover:bg-green-600",
      show: showWhatsApp
    },
    {
      name: 'Telefone',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      url: `tel:${CONTACT_INFO.phoneRaw}`,
      color: "bg-blue-500 hover:bg-blue-600",
      show: showPhone
    },
    {
      name: 'E-mail',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: `mailto:${CONTACT_INFO.email}`,
      color: "bg-purple-500 hover:bg-purple-600",
      show: showEmail
    }
  ].filter(method => method.show);

  if (compact) {
    return (
      <div className={`${currentVariant.background} ${currentVariant.text} rounded-2xl p-6 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </div>
          <div className="flex space-x-2 ml-4">
            {contactMethods.map((method, index) => (
              <a
                key={method.name}
                href={method.url}
                target={method.url.startsWith('http') ? '_blank' : '_self'}
                rel={method.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`${method.color} text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center`}
                aria-label={`Contato por ${method.name}`}
                title={`Contato por ${method.name}`}
              >
                {method.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={`${currentVariant.background} ${currentVariant.text} rounded-2xl p-8 md:p-12 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3 text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
            </svg>
            <span>Falar no WhatsApp</span>
          </a>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${currentVariant.button} font-bold py-4 px-8 rounded-lg transition-colors duration-200 border-2 ${currentVariant.border} flex items-center justify-center space-x-3 text-lg`}
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span>Outras Formas de Contato</span>
          </button>
        </div>

        {/* Expanded Contact Options */}
        {isExpanded && (
          <div className="animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-6 text-center">
                Escolha sua Forma Preferida de Contato
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.name}
                    href={method.url}
                    target={method.url.startsWith('http') ? '_blank' : '_self'}
                    rel={method.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`${method.color} text-white p-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-3`}
                  >
                    {method.icon}
                    <span className="font-semibold">{method.name}</span>
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">{CONTACT_INFO.phone}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{CONTACT_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm opacity-80">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Consulta Gratuita</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Resposta Rápida</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Atendimento Personalizado</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Additional specialized CTA components
export function AreaSpecificCTA({ area, className = "" }) {
  const areaMessages = {
    'Trabalhista': {
      title: 'Problemas Trabalhistas?',
      description: 'Defendemos seus direitos trabalhistas com expertise e agilidade. Consultoria gratuita.',
      whatsappMessage: 'Olá, gostaria de uma consulta sobre Direito Trabalhista.'
    },
    'Empresarial': {
      title: 'Assessoria Empresarial',
      description: 'Proteja seu negócio com nossa consultoria jurídica especializada em direito empresarial.',
      whatsappMessage: 'Olá, gostaria de uma consulta sobre Direito Empresarial.'
    },
    'Família': {
      title: 'Questões de Família?',
      description: 'Atendimento sensível e especializado em direito de família, divórcios e inventários.',
      whatsappMessage: 'Olá, gostaria de uma consulta sobre Direito de Família.'
    },
    'Civil': {
      title: 'Assuntos Civis',
      description: 'Soluções para questões civis, contratos, responsabilidade civil e direitos patrimoniais.',
      whatsappMessage: 'Olá, gostaria de uma consulta sobre Direito Civil.'
    },
    'Previdenciário': {
      title: 'Direito Previdenciário',
      description: 'Aposentadoria, benefícios e revisões. Garanta seus direitos previdenciários.',
      whatsappMessage: 'Olá, gostaria de uma consulta sobre Direito Previdenciário.'
    },
    'Contratual': {
      title: 'Contratos e Acordos',
      description: 'Elaboração, análise e revisão de contratos com máxima segurança jurídica.',
      whatsappMessage: 'Olá, gostaria de uma consulta sobre Direito Contratual.'
    }
  };

  const areaConfig = areaMessages[area] || areaMessages['Trabalhista'];

  return (
    <ContactCTA
      title={areaConfig.title}
      description={areaConfig.description}
      className={className}
      variant="primary"
    />
  );
}

export function CompactContactCTA({ className = "" }) {
  return (
    <ContactCTA
      title="Fale com um Especialista"
      description="Resposta rápida via WhatsApp, telefone ou e-mail"
      variant="secondary"
      compact={true}
      className={className}
    />
  );
}