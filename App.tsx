import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AiTeaser from './components/AiTeaser';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AiTeaser />
        <Testimonials />
        <Pricing />
        {/* CTA Section */}
        <section className="bg-brand-600 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to launch your next big event?</h2>
            <p className="text-brand-100 text-xl mb-10">Join thousands of organizers who use Venti.id to sell out fast.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-brand-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-transform hover:-translate-y-1">
                Get Started for Free
              </button>
              <button className="bg-brand-700 text-white border border-brand-500 hover:bg-brand-800 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-transform hover:-translate-y-1">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;