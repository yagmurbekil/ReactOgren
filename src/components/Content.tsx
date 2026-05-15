import React from 'react';
import CodeSnippet from './CodeSnippet';
import InteractiveCounter from './InteractiveCounter';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="py-20 border-b border-white/5 scroll-mt-20">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight flex items-center gap-4">
        <span className="text-brand-blue opacity-50 text-2xl">#</span>
        {title}
      </h2>
      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
        {children}
      </div>
    </div>
  </section>
);

const Content: React.FC = () => {
  return (
    <div className="bg-brand-darker relative z-10">
      <Section id="components" title="Bileşenler (Components)">
        <p className="mb-6">
          Bileşenler (Components), React uygulamalarının yapı taşlarıdır. Sayfanızdaki her bir parçayı (buton, başlık, menü) bağımsız ve tekrar kullanılabilir birer yapboz parçası gibi düşünebilirsiniz.
        </p>
        <p className="mb-6">
          React'te bileşenler aslında sadece HTML döndüren JavaScript fonksiyonlarıdır. TypeScript kullandığımız için bu dosyalara <code>.tsx</code> uzantısı veririz.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-start my-8">
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Neden Bileşen Kullanırız?</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Tekrar Kullanılabilirlik:</strong> Bir butonu bir kez yazıp her yerde kullanabilirsiniz.</li>
              <li><strong>Okunabilirlik:</strong> Karmaşık arayüzleri küçük, anlaşılır parçalara bölersiniz.</li>
              <li><strong>Bakım Kolaylığı:</strong> Bir hata olduğunda sadece ilgili bileşeni düzeltirsiniz.</li>
            </ul>
          </div>
          <CodeSnippet code={`// Basit bir React Bileşeni
function Merhaba() {
  return (
    <div className="kutulama">
      <h1>Merhaba Dünya!</h1>
      <p>İlk bileşenimi oluşturdum.</p>
    </div>
  );
}

export default Merhaba;`} />
        </div>
      </Section>

      <Section id="props" title="Props (Özellikler)">
        <p className="mb-6">
          Bileşenlerin birbirleriyle konuşmasını sağlayan yapıya <strong>Props</strong> (Properties - Özellikler) denir. Tıpkı bir fonksiyona parametre göndermek gibi, bileşenlere de veri gönderebiliriz.
        </p>
        <p className="mb-6">
          TypeScript kullanmanın en büyük avantajı burada ortaya çıkar. Props'ların hangi türde veriler alacağını önceden belirterek hataların önüne geçeriz.
        </p>

        <CodeSnippet code={`// Props için TypeScript Arayüzü (Interface) tanımlıyoruz
interface KullaniciKartProps {
  isim: string;
  yas: number;
  meslek?: string; // ? işareti bu özelliğin zorunlu olmadığını belirtir
}

// Bileşenimiz bu özellikleri alarak ekrana basar
const KullaniciKart: React.FC<KullaniciKartProps> = (props) => {
  return (
    <div className="kart">
      <h3>{props.isim} ({props.yas})</h3>
      {props.meslek && <p>Meslek: {props.meslek}</p>}
    </div>
  );
};

// Kullanımı:
// <KullaniciKart isim="Ahmet" yas={25} meslek="Tasarımcı" />`} />
      </Section>

      <Section id="state" title="State (Durum Yönetimi)">
        <p className="mb-6">
          Eğer bir bileşenin içindeki veri zamanla değişecekse (örneğin bir sayacın artması, bir menünün açılıp kapanması), bunu <strong>State</strong> ile yönetiriz.
        </p>
        <p className="mb-6">
          State değiştiğinde, React bileşeni otomatik olarak yeniden çalıştırır ve ekrandaki görüntüyü günceller.
        </p>

        <InteractiveCounter />
      </Section>

      <Section id="hooks" title="Hooks (Kancalar)">
        <p className="mb-6">
          Hooks, React 16.8 ile hayatımıza giren ve fonksiyonel bileşenlerde State ve yaşam döngüsü özelliklerini kullanmamızı sağlayan özel fonksiyonlardır. Tüm hook'lar "use" kelimesi ile başlar.
        </p>
        
        <div className="space-y-6 mt-8">
          <div className="glass-panel p-6 rounded-xl border-l-4 border-l-brand-blue">
            <h4 className="text-xl font-bold text-white mb-2">useState</h4>
            <p>Bileşen içinde değişebilen verileri tutmak için kullanılır. Yukarıdaki sayaç örneğinde kullanılmıştır.</p>
          </div>
          
          <div className="glass-panel p-6 rounded-xl border-l-4 border-l-purple-500">
            <h4 className="text-xl font-bold text-white mb-2">useEffect</h4>
            <p>Bileşen ekrana basıldığında, güncellendiğinde veya ekrandan kalktığında çalışmasını istediğimiz yan etkileri (veri çekme, abonelikler vb.) yönetiriz.</p>
            <div className="mt-4">
              <CodeSnippet code={`import { useState, useEffect } from 'react';

function Saat() {
  const [zaman, setZaman] = useState(new Date());

  useEffect(() => {
    // Her saniyede bir zamanı güncelle
    const timer = setInterval(() => setZaman(new Date()), 1000);
    
    // Bileşen ekrandan kalktığında sayacı temizle
    return () => clearInterval(timer);
  }, []); // Boş dizi: sadece ilk yüklendiğinde çalıştır

  return <div>Şu anki saat: {zaman.toLocaleTimeString()}</div>;
}`} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Content;
