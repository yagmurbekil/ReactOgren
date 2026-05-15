import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-darker font-sans text-gray-100 selection:bg-brand-blue/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default App;
