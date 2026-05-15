import { createContext, useContext, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'dark' | 'light';
const ThemeContext = createContext<{theme: Theme; toggle: () => void}>({ theme: 'dark', toggle: () => {} });

function ThemedCard() {
  const { theme } = useContext(ThemeContext);
  
  const isDark = theme === 'dark';
  
  return (
    <div className={`p-8 rounded-xl transition-all duration-500 flex flex-col items-center gap-4 ${
      isDark ? 'bg-slate-800 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'bg-slate-100 text-slate-900 shadow-[0_0_20px_rgba(0,0,0,0.1)]'
    }`}>
      <h3 className="text-xl font-bold">Mevcut Tema: {theme.toUpperCase()}</h3>
      <p className={`text-sm text-center max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        Bu kartın renkleri doğrudan Context üzerinden okunmaktadır. Ara bileşenlere (props drilling) ihtiyaç duyulmadı.
      </p>
    </div>
  );
}

function ThemeToggler() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <button 
      onClick={toggle}
      className="flex items-center gap-2 px-6 py-3 bg-brand-blue text-slate-900 font-bold rounded-full hover:bg-brand-blue/90 transition-transform active:scale-95 mb-8"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      Temayı Değiştir
    </button>
  );
}

export function ContextDemo() {
  const [theme, setTheme] = useState<Theme>('dark');
  const toggle = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className="flex flex-col items-center p-8 bg-slate-900/30 rounded-xl border border-slate-800">
        <ThemeToggler />
        <ThemedCard />
      </div>
    </ThemeContext.Provider>
  );
}