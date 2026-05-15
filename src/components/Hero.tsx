import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Sıfırdan <span className="text-gradient">React</span> ve <span className="text-gradient">TSX</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Modern web geliştirmenin endüstri standardı olan React'i, TypeScript güvencesiyle en temelden, sağlam adımlarla öğrenin.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#components" className="px-8 py-4 bg-brand-blue text-brand-darker font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(97,218,251,0.3)] hover:shadow-[0_0_30px_rgba(97,218,251,0.5)]">
            Öğrenmeye Başla
          </a>
          <a href="#hooks" className="px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-bold rounded-full hover:border-gray-400 hover:text-white transition-all duration-300">
            Neden React?
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
