
import React from 'react';
import { ArrowRight, Calendar, Users, TrendingUp } from 'lucide-react';

interface HeroProps {
  t: {
    title: string;
    subtitle: string;
    getStarted: string;
  }
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <div className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/50 border border-brand-700/50 text-brand-300 text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              The #1 Platform for Creators
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2"
              >
                {t.getStarted} <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#ai-demo"
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 rounded-xl font-semibold text-lg transition-all flex items-center justify-center"
              >
                Try AI Tools
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-brand-500" />
                <span>10k+ Organizers</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-brand-500" />
                <span>50k+ Events</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-brand-500" />
                <span>$2M+ Processed</span>
              </div>
            </div>
          </div>

          <div className="relative lg:block animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
              <img 
                src="https://picsum.photos/800/600" 
                alt="Dashboard Preview" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 w-full max-w-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-10 w-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">
                      JS
                    </div>
                    <div>
                      <div className="text-white font-semibold">Jane's Tech Summit</div>
                      <div className="text-brand-300 text-xs">Live Now • 1,240 Attendees</div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
                    <div className="bg-brand-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Ticket Sales</span>
                    <span>85% Sold</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
