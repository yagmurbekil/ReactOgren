import React, { useState } from 'react';

const InteractiveCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="glass-panel p-8 rounded-2xl my-8 text-center max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-6 text-white">State Mantığı: Sayaç Örneği</h3>
      <div className="text-6xl font-black text-brand-blue mb-8 tracking-tighter">
        {count}
      </div>
      <div className="flex justify-center gap-4">
        <button 
          onClick={() => setCount(prev => prev - 1)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-white font-bold text-xl transition-colors border border-gray-600"
        >
          -
        </button>
        <button 
          onClick={() => setCount(0)}
          className="px-6 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors border border-gray-600"
        >
          Sıfırla
        </button>
        <button 
          onClick={() => setCount(prev => prev + 1)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-blue hover:bg-brand-blue/80 text-brand-darker font-bold text-xl transition-colors shadow-lg shadow-brand-blue/20"
        >
          +
        </button>
      </div>
      <p className="mt-6 text-sm text-gray-400">
        Bu bileşen kendi <code>state</code>'ini yönetir. Düğmelere tıkladığınızda <code>setCount</code> fonksiyonu çağrılır ve React ekranı yeni değerle tekrar çizer (render eder).
      </p>
    </div>
  );
};

export default InteractiveCounter;
