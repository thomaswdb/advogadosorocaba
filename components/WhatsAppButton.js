// components/WhatsAppButton.js
'use client';

import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../lib/constants';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [pulse, setPulse] = useState(true);

  // Show button after page load with slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Pulse animation every 10 seconds
  useEffect(() => {
    if (!pulse) return;

    const interval = setInterval(() => {
      setPulse(false);
      setTimeout(() => setPulse(true), 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [pulse]);

  const handleClick = () => {
    // Optional: Add analytics tracking here
    console.log('WhatsApp button clicked');
    
    // Open WhatsApp in new tab
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  // Generate WhatsApp URL
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.message)}`;

  return (
    <>
      {/* Desktop Floating Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        role="region"
        aria-label="Botão do WhatsApp"
      >
        {/* Tooltip */}
        {isHovered && (
          <div 
            className="absolute right-16 bottom-2 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-2xl mb-2 animate-in fade-in-0 zoom-in-95 duration-200"
            role="tooltip"
          >
            <div className="text-sm font-semibold whitespace-nowrap">
              Fale conosco no WhatsApp
            </div>
            <div className="text-xs text-gray-300 mt-1">
              Resposta rápida em até 5 minutos
            </div>
            {/* Tooltip arrow */}
            <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2">
              <div className="w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          className={`
            group relative
            w-16 h-16
            bg-green-500 hover:bg-green-600
            text-white
            rounded-full
            shadow-2xl
            transition-all duration-300 ease-in-out
            transform hover:scale-110
            focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2
            flex items-center justify-center
            ${pulse ? 'animate-pulse' : ''}
          `}
          aria-label="Enviar mensagem no WhatsApp. Abre em nova janela."
          title="Fale conosco no WhatsApp"
        >
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75 group-hover:opacity-100"></div>
          
          {/* WhatsApp Icon */}
          <svg 
            className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
          </svg>

          {/* Online Status Indicator */}
          <div 
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"
            aria-label="Online agora"
          >
            <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </button>
      </div>

      {/* Mobile Bottom Bar - Only shows on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 p-3 shadow-2xl">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 flex items-center justify-center space-x-3"
          aria-label="Enviar mensagem no WhatsApp. Abre em nova janela."
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
          </svg>
          <span className="text-lg font-bold">Falar no WhatsApp</span>
          <div className="w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
        </a>
      </div>

      {/* Screen Reader Announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Botão do WhatsApp disponível. Pressione Enter para enviar uma mensagem.
      </div>
    </>
  );
}

// Optional: WhatsApp Chat Widget Component
export function WhatsAppChatWidget({ isOpen = false, onClose }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const url = `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      setMessage('');
      onClose?.();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 border border-gray-200 animate-in fade-in-0 zoom-in-95 duration-200">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="text-green-100 text-sm">Online • Resposta rápida</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-green-100 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 rounded-lg p-1"
            aria-label="Fechar chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Message Input */}
      <form onSubmit={handleSubmit} className="p-4">
        <div className="space-y-3">
          <label htmlFor="whatsapp-message" className="block text-sm font-medium text-gray-700">
            Sua mensagem
          </label>
          <textarea
            id="whatsapp-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem aqui..."
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            aria-required="true"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            <span>Enviar Mensagem</span>
          </button>
        </div>
      </form>
    </div>
  );
}