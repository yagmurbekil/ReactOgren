import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-brand-blue/20 transition-all">
              <BookOpen size={20} />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              React<span className="text-brand-blue">Mastery</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-brand-blue ${location.pathname === '/' ? 'text-brand-blue' : 'text-slate-300'}`}>Ana Sayfa</Link>
            <Link to="/topics" className={`text-sm font-medium transition-colors hover:text-brand-blue ${location.pathname.startsWith('/topics') ? 'text-brand-blue' : 'text-slate-300'}`}>Konular</Link>
            <Link to="/sandbox" className={`text-sm font-medium transition-colors hover:text-brand-blue ${location.pathname === '/sandbox' ? 'text-brand-blue' : 'text-slate-300'}`}>Sandbox</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <span>GitHub</span>
            </a>
            <Link to="/topics" className="bg-brand-blue text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-blue/90 transition-colors shadow-[0_0_15px_rgba(97,218,251,0.3)]">
              Öğrenmeye Başla
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium p-2 rounded-lg hover:bg-slate-800">Ana Sayfa</Link>
              <Link to="/topics" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium p-2 rounded-lg hover:bg-slate-800">Konular</Link>
              <Link to="/sandbox" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium p-2 rounded-lg hover:bg-slate-800">Sandbox</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}