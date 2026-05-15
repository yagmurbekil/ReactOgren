import React from 'react';
import { Atom } from 'lucide-react';
import type { NavLinkProps } from '../types';

const navLinks: NavLinkProps[] = [
  { href: '#hero', label: 'Ana Sayfa' },
  { href: '#components', label: 'Bileşenler' },
  { href: '#props', label: 'Props' },
  { href: '#state', label: 'State' },
  { href: '#hooks', label: 'Hooks' },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-blue">
          <Atom size={32} className="animate-spin-slow" style={{ animationDuration: '4s' }} />
          <span className="text-xl font-bold text-white tracking-wide">ReactÖğren</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-brand-blue transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu could go here */}
          <button className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
