import { useState } from 'react';

export function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-xl border border-slate-800">
      <div className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">
        {count}
      </div>
      <div className="flex gap-4">
        <button 
          onClick={() => setCount(c => c - 1)}
          className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-700"
        >
          Azalt
        </button>
        <button 
          onClick={() => setCount(0)}
          className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-700"
        >
          Sıfırla
        </button>
        <button 
          onClick={() => setCount(c => c + 1)}
          className="px-6 py-2 bg-brand-blue hover:bg-brand-blue/90 text-slate-900 font-bold rounded-lg transition-colors"
        >
          Arttır
        </button>
      </div>
    </div>
  );
}