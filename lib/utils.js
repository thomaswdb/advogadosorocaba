// lib/utils.js

/**
 * Utility functions for the Advogados Sorocaba website
 */

// CSS class name utility (similar to clsx/classnames)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Format phone number for display
export function formatPhoneNumber(phone) {
  // Format: (15) 99123-4567
  const cleaned = phone.replace(/\D/g, '');
  
  // Brazilian phone number format
  if (cleaned.length === 11) {
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
  }
  
  // Fallback: return original if doesn't match expected format
  return phone;
}

// Generate WhatsApp link with pre-filled message
export function generateWhatsAppLink(phone, message = '') {
  const cleanedPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
}

// Validate email format
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Format currency (BRL)
export function formatCurrency(amount) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount);
}

// Format date in Brazilian format
export function formatDate(date, options = {}) {
  const defaultOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };
  
  return new Intl.DateTimeFormat('pt-BR', { ...defaultOptions, ...options }).format(date);
}

// Generate slug from string
export function generateSlug(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Debounce function for search inputs
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
export function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Get practice area icon
export function getPracticeAreaIcon(area) {
  const icons = {
    'Trabalhista': '⚖️',
    'Empresarial': '🏢',
    'Família': '👨‍👩‍👧‍👦',
    'Civil': '📝',
    'Previdenciário': '👵',
    'Contratual': '📄'
  };
  
  return icons[area] || '⚖️';
}

// Extract specializations from team member bio
export function extractSpecializations(bio) {
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
    'Compliance',
    'LGPD',
    'Contratos Internacionais',
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

// Calculate reading time for content
export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
}

// Sanitize HTML for safe rendering
export function sanitizeHTML(html) {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}

// Generate random ID
export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Scroll to element with smooth behavior
export function scrollToElement(elementId, offset = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// Check if element is in viewport
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Format file size
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Get current year for copyright
export function getCurrentYear() {
  return new Date().getFullYear();
}

// Truncate text with ellipsis
export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
}

// Capitalize first letter of each word
export function capitalizeWords(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Get query parameters from URL
export function getQueryParams() {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  const result = {};
  
  for (const [key, value] of params) {
    result[key] = value;
  }
  
  return result;
}

// Set query parameters in URL
export function setQueryParams(params) {
  if (typeof window === 'undefined') return;
  
  const url = new URL(window.location);
  Object.keys(params).forEach(key => {
    if (params[key] === null || params[key] === undefined) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, params[key]);
    }
  });
  
  window.history.replaceState({}, '', url.toString());
}

// Copy text to clipboard
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  }
}

// Generate gradient background
export function generateGradient(angle = 135, colors = ['#1e40af', '#1e3a8a']) {
  return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
}

// Delay function for async operations
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Validate CPF (Brazilian ID)
export function validateCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }
  
  let sum = 0;
  let remainder;
  
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;
  
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;
  
  return true;
}

// Export all utilities as a single object
export default {
  cn,
  formatPhoneNumber,
  generateWhatsAppLink,
  validateEmail,
  formatCurrency,
  formatDate,
  generateSlug,
  debounce,
  throttle,
  getPracticeAreaIcon,
  extractSpecializations,
  calculateReadingTime,
  sanitizeHTML,
  generateId,
  scrollToElement,
  isInViewport,
  formatFileSize,
  getCurrentYear,
  truncateText,
  capitalizeWords,
  getQueryParams,
  setQueryParams,
  copyToClipboard,
  generateGradient,
  delay,
  validateCPF
};