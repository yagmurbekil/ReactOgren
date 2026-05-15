import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { motion } from 'framer-motion';

export function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-darker selection:bg-brand-blue/30 selection:text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <Navbar />
      
      <main className="flex-grow pt-20 z-10">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>
      
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm z-10 bg-slate-900/50">
        <p>© 2026 ReactMastery. Tüm hakları saklıdır. Modern ve Premium Eğitim Platformu.</p>
      </footer>
    </div>
  );
}