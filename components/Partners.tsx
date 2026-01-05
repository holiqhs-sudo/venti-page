
import React from 'react';

interface PartnersProps {
  t: {
    title: string;
    subtitle: string;
  };
}

const partners = [
  { name: 'Partner 1', logo: 'https://via.placeholder.com/150x60?text=Partner+1' },
  { name: 'Partner 2', logo: 'https://via.placeholder.com/150x60?text=Partner+2' },
  { name: 'Partner 3', logo: 'https://via.placeholder.com/150x60?text=Partner+3' },
  { name: 'Partner 4', logo: 'https://via.placeholder.com/150x60?text=Partner+4' },
  { name: 'Partner 5', logo: 'https://via.placeholder.com/150x60?text=Partner+5' },
];

const Partners: React.FC<PartnersProps> = ({t}) => {
  return (
    <section id="partners" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img src={partner.logo} alt={partner.name} className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
