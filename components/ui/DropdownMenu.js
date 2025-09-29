// components/ui/DropdownMenu.js
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

/**
 * Reusable Dropdown Menu Component
 * Features:
 * - Accessible keyboard navigation
 * - Click outside to close
 * - Mobile and desktop support
 * - Customizable positioning
 */

export default function DropdownMenu({
  trigger,
  items,
  position = 'left',
  align = 'start',
  className = '',
  onItemClick,
  menuClassName = ''
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          triggerRef.current && !triggerRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(event) {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          triggerRef.current?.focus();
          setFocusedIndex(-1);
          break;

        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => 
            prev < items.length - 1 ? prev + 1 : 0
          );
          break;

        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : items.length - 1
          );
          break;

        case 'Tab':
          setIsOpen(false);
          setFocusedIndex(-1);
          break;

        default:
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, items.length]);

  // Focus management when dropdown opens/closes
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      // Focus first item when opening with keyboard
      if (focusedIndex === -1) {
        setFocusedIndex(0);
      }
    } else {
      setFocusedIndex(-1);
    }
  }, [isOpen, focusedIndex]);

  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 transform -translate-x-1/2'
  };

  const alignClasses = {
    start: 'origin-top-left',
    center: 'origin-top',
    end: 'origin-top-right'
  };

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTriggerKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const handleItemClick = (item, event) => {
    if (item.onClick) {
      item.onClick(event);
    }
    if (onItemClick) {
      onItemClick(item, event);
    }
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleItemKeyDown = (event, item, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleItemClick(item, event);
    }
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      {/* Trigger */}
      <div
        ref={triggerRef}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex w-full"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`
            absolute ${positionClasses[position]} ${alignClasses[align]} mt-2
            w-72 rounded-xl bg-white shadow-2xl border border-gray-200
            ring-1 ring-black ring-opacity-5 focus:outline-none
            animate-in fade-in-0 zoom-in-95
            z-50
            ${menuClassName}
          `}
          role="menu"
          aria-orientation="vertical"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Menu Items */}
          <div className="py-2" role="none">
            {items.map((item, index) => {
              const isFocused = focusedIndex === index;
              const baseClasses = `
                flex items-start w-full px-4 py-3 text-left
                transition-colors duration-200 group
                focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
                ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${isFocused ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}
              `;

              // Custom content item
              if (item.custom) {
                return (
                  <div
                    key={item.key || index}
                    className={baseClasses}
                    role="menuitem"
                    tabIndex={isFocused ? 0 : -1}
                    onKeyDown={(e) => handleItemKeyDown(e, item, index)}
                    ref={el => {
                      if (isFocused && el) {
                        el.focus();
                      }
                    }}
                  >
                    {item.content}
                  </div>
                );
              }

              // Divider item
              if (item.divider) {
                return (
                  <div
                    key={item.key || index}
                    className="border-t border-gray-200 my-2"
                    role="separator"
                  />
                );
              }

              // Header item
              if (item.header) {
                return (
                  <div
                    key={item.key || index}
                    className="px-4 py-2 border-b border-gray-100"
                    role="presentation"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      {item.header}
                    </h3>
                  </div>
                );
              }

              // Link item
              if (item.href && !item.external) {
                return (
                  <Link
                    key={item.key || index}
                    href={item.href}
                    className={baseClasses}
                    role="menuitem"
                    tabIndex={isFocused ? 0 : -1}
                    onKeyDown={(e) => handleItemKeyDown(e, item, index)}
                    ref={el => {
                      if (isFocused && el) {
                        el.focus();
                      }
                    }}
                    onClick={(e) => handleItemClick(item, e)}
                  >
                    {item.icon && (
                      <span className="mr-3 text-gray-400 group-hover:text-blue-600">
                        {item.icon}
                      </span>
                    )}
                    <div className="flex-1">
                      <span className="font-medium text-gray-900 group-hover:text-blue-700 block">
                        {item.label}
                      </span>
                      {item.description && (
                        <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              }

              // External link item
              if (item.href && item.external) {
                return (
                  <a
                    key={item.key || index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClasses}
                    role="menuitem"
                    tabIndex={isFocused ? 0 : -1}
                    onKeyDown={(e) => handleItemKeyDown(e, item, index)}
                    ref={el => {
                      if (isFocused && el) {
                        el.focus();
                      }
                    }}
                    onClick={(e) => handleItemClick(item, e)}
                  >
                    {item.icon && (
                      <span className="mr-3 text-gray-400 group-hover:text-blue-600">
                        {item.icon}
                      </span>
                    )}
                    <div className="flex-1">
                      <span className="font-medium text-gray-900 group-hover:text-blue-700 block">
                        {item.label}
                      </span>
                      {item.description && (
                        <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <svg 
                      className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                );
              }

              // Button item
              return (
                <button
                  key={item.key || index}
                  type="button"
                  className={baseClasses}
                  role="menuitem"
                  tabIndex={isFocused ? 0 : -1}
                  disabled={item.disabled}
                  onKeyDown={(e) => handleItemKeyDown(e, item, index)}
                  onClick={(e) => handleItemClick(item, e)}
                  ref={el => {
                    if (isFocused && el) {
                      el.focus();
                    }
                  }}
                >
                  {item.icon && (
                    <span className="mr-3 text-gray-400 group-hover:text-blue-600">
                      {item.icon}
                    </span>
                  )}
                  <div className="flex-1 text-left">
                    <span className="font-medium text-gray-900 group-hover:text-blue-700 block">
                      {item.label}
                    </span>
                    {item.description && (
                      <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600">
                        {item.description}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// Example usage component for documentation
export function DropdownMenuExample() {
  const menuItems = [
    {
      header: 'Áreas de Atuação'
    },
    {
      label: 'Direito Trabalhista',
      description: 'Defesa dos direitos trabalhistas',
      href: '/areas/trabalhista',
    },
    {
      label: 'Direito Empresarial',
      description: 'Assessoria jurídica para empresas',
      href: '/areas/empresarial',
    },
    {
      divider: true
    },
    {
      label: 'Documentação Externa',
      href: 'https://exemplo.com',
      external: true,
    }
  ];

  const trigger = (
    <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
      <span>Menu Exemplo</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  return (
    <DropdownMenu
      trigger={trigger}
      items={menuItems}
      position="left"
      align="start"
    />
  );
}