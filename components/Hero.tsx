
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  t: {
    title: string;
    subtitle: string;
    getStarted: string;
    downloadApp: string;
  }
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.open(href, '_blank');
  };
  return (
    <div className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://venti.id/"
                onClick={(e) => handleCTAClick(e, 'https://venti.id/')}
                className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2"
              >
                {t.getStarted} <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.zerone.venti&pcampaignid=web_share"
                onClick={(e) => handleCTAClick(e, 'https://play.google.com/store/apps/details?id=com.zerone.venti&pcampaignid=web_share')}
                className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 hover:border-slate-400 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                {t.downloadApp} <Download className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative lg:block animate-fade-in">
             <img 
                src="./lib/venti mockup modern.png" 
                alt="Dashboard Preview" 
                className="w-full h-auto object-cover"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
