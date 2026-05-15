import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Zap, Layout, Shield, ArrowRight } from 'lucide-react';

const features = [
  { icon: <Zap className="text-yellow-400" />, title: "İnteraktif Öğrenme", desc: "Sadece okumayın, her konuyu anında çalışan demolarla deneyimleyin." },
  { icon: <Code2 className="text-brand-blue" />, title: "Modern TSX", desc: "En güncel React 19 ve TypeScript pratikleriyle kod yazmayı öğrenin." },
  { icon: <Layout className="text-purple-400" />, title: "Gerçek Proje Deneyimi", desc: "Bileşen mimarisi, state yönetimi ve router gibi gelişmiş konular." },
  { icon: <Shield className="text-green-400" />, title: "Best Practices", desc: "Sektör standartlarında temiz kod (clean code) prensiplerini kavrayın." },
];

export function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-20 pb-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-sm text-brand-blue font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            React 19 & TypeScript Destekli
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Sıfırdan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">React</span> ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">TSX</span> Öğren
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Modern web geliştirmenin temel taşı olan React'i, interaktif örnekler, temiz kod blokları ve en iyi pratiklerle keşfedin. Gerçek bir projede ihtiyaç duyacağınız tüm konular burada.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link to="/topics" className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-blue/90 hover:-translate-y-1 transition-all shadow-[0_0_30px_rgba(97,218,251,0.4)]">
              Eğitime Başla <ArrowRight size={20} />
            </Link>
            <Link to="/topics/react-nedir" className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-medium rounded-xl border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
              Müfredatı İncele
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-purple-500/20 blur-3xl rounded-full"></div>
          <div className="relative glass-panel rounded-2xl p-2 border border-slate-700/50 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-800">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-black/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-slate-400 font-mono">App.tsx</span>
              </div>
              <div className="p-5 text-sm font-mono leading-relaxed overflow-x-auto text-slate-300">
                <span className="text-purple-400">import</span> {'{ useState }'} <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;<br/><br/>
                <span className="text-purple-400">export default function</span> <span className="text-yellow-200">App</span>() {'{'}<br/>
                {'  '}<span className="text-purple-400">const</span> [count, setCount] = <span className="text-blue-300">useState</span>(<span className="text-orange-300">0</span>);<br/><br/>
                {'  '}<span className="text-purple-400">return</span> (<br/>
                {'    '}&lt;<span className="text-blue-400">div</span> <span className="text-cyan-300">className</span>=<span className="text-green-300">"p-4 flex gap-4"</span>&gt;<br/>
                {'      '}&lt;<span className="text-blue-400">h1</span>&gt;Count: {'{count}'}&lt;/<span className="text-blue-400">h1</span>&gt;<br/>
                {'      '}&lt;<span className="text-blue-400">button</span> <span className="text-cyan-300">onClick</span>={'{() => '} <span className="text-blue-300">setCount</span>(c =&gt; c + <span className="text-orange-300">1</span>){'}'}&gt;<br/>
                {'        '}Arttır<br/>
                {'      '}&lt;/<span className="text-blue-400">button</span>&gt;<br/>
                {'    '}&lt;/<span className="text-blue-400">div</span>&gt;<br/>
                {'  '});<br/>
                {'}'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full border-y border-slate-800 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Neden Bu Platform?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Teorik bilgileri sıkıcı metinlerle değil, modern tasarıma sahip interaktif ve anlaşılır modüllerle öğrenin.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}