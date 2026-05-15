import { useState } from 'react';

// Demo amaçlı simüle edilmiş router
export function RouterDemo() {
  const [currentPath, setCurrentPath] = useState('/');

  const renderContent = () => {
    switch(currentPath) {
      case '/': return <div className="p-8 bg-brand-blue/10 rounded-lg border border-brand-blue/20 text-center text-brand-blue"><h3 className="text-xl font-bold mb-2">🏠 Ana Sayfa</h3><p>Uygulamanın ana sayfası. Buradasınız.</p></div>;
      case '/hakkimizda': return <div className="p-8 bg-purple-500/10 rounded-lg border border-purple-500/20 text-center text-purple-400"><h3 className="text-xl font-bold mb-2">ℹ️ Hakkımızda</h3><p>Biz kimiz? Bu sayfa hakkımızda bilgileri içerir.</p></div>;
      case '/iletisim': return <div className="p-8 bg-green-500/10 rounded-lg border border-green-500/20 text-center text-green-400"><h3 className="text-xl font-bold mb-2">📞 İletişim</h3><p>Bize ulaşın: contact@reactmastery.com</p></div>;
      default: return <div className="p-8 bg-red-500/10 rounded-lg border border-red-500/20 text-center text-red-400"><h3 className="text-xl font-bold mb-2">404 Hatası</h3><p>Sayfa bulunamadı!</p></div>;
    }
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex gap-4">
          <button onClick={() => setCurrentPath('/')} className={`text-sm font-medium transition-colors ${currentPath === '/' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>Ana Sayfa</button>
          <button onClick={() => setCurrentPath('/hakkimizda')} className={`text-sm font-medium transition-colors ${currentPath === '/hakkimizda' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>Hakkımızda</button>
          <button onClick={() => setCurrentPath('/iletisim')} className={`text-sm font-medium transition-colors ${currentPath === '/iletisim' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>İletişim</button>
        </div>
        <div className="bg-slate-800 rounded px-3 py-1 text-xs font-mono text-slate-300 w-48 truncate">
          URL: localhost:3000{currentPath}
        </div>
      </div>
      <div className="p-6 h-48 flex flex-col justify-center">
        {renderContent()}
      </div>
    </div>
  );
}