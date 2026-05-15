import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export function EffectDemo() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    setLoading(true);
    // Simüle edilmiş API isteği
    const timer = setTimeout(() => {
      setData({
        id: userId,
        name: `Kullanıcı ${userId}`,
        email: `user${userId}@example.com`,
        role: userId % 2 === 0 ? 'Admin' : 'User'
      });
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer); // Cleanup
  }, [userId]);

  return (
    <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map(id => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              userId === id 
                ? 'bg-brand-blue text-slate-900' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Fetch User {id}
          </button>
        ))}
      </div>

      <div className="min-h-[150px] flex items-center justify-center bg-slate-950 rounded-lg border border-slate-800 p-6">
        {loading ? (
          <div className="flex flex-col items-center gap-3 text-slate-400">
            <Loader2 className="animate-spin text-brand-blue" size={32} />
            <p className="text-sm">Veri yükleniyor...</p>
          </div>
        ) : data ? (
          <div className="w-full">
            <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        ) : null}
      </div>
    </div>
  );
}