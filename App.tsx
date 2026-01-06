
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import HighlightEvents from './components/HighlightEvents';
import Footer from './components/Footer';
import { locales } from './lib/locales';

function App() {
  const [language, setLanguage] = useState('id');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const t = locales[language];

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.open(href, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar t={t.navbar} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero t={t.hero} />
        <Features t={t.features} />
        <Testimonials t={t.testimonials} />
        <HighlightEvents t={t.highlightEvents} />
        {/* CTA Section */}
        <section className="bg-brand-600 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.readyToLaunch}</h2>
            <p className="text-brand-100 text-xl mb-10">{t.joinThousands}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://venti.id/"
                onClick={(e) => handleCTAClick(e, 'https://venti.id/')}
                className="bg-white text-brand-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-transform hover:-translate-y-1 block"
              >
                {t.getStarted}
              </a>
              <a
                href="https://venti.id/"
                onClick={(e) => handleCTAClick(e, 'https://venti.id/')}
                className="bg-brand-700 text-white border border-brand-500 hover:bg-brand-800 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-transform hover:-translate-y-1 block"
              >
                {t.talkToSales}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer t={t.footer} />
    </div>
  );
}

export default App;
