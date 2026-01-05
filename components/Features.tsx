
import React from 'react';
import { 
  Ticket, 
  BarChart3, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { Feature } from '../types';

interface FeaturesProps {
  t: {
    title: string;
    subtitle: string;
    aiPowered: {
      title: string;
      description: string;
    };
    easyToUse: {
      title: string;
      description: string;
    };
    securePayments: {
      title: string;
      description: string;
    };
    analytics: {
      title: string;
      description: string;
    };
    customization: {
      title: string;
      description: string;
    };
    integrations: {
      title: string;
      description: string;
    };
  };
}

const Features: React.FC<FeaturesProps> = ({ t }) => {

  const features: Feature[] = [
    {
      title: t.aiPowered.title,
      description: t.aiPowered.description,
      icon: Zap
    },
    {
      title: t.easyToUse.title,
      description: t.easyToUse.description,
      icon: Smartphone
    },
    {
      title: t.securePayments.title,
      description: t.securePayments.description,
      icon: ShieldCheck
    },
    {
      title: t.analytics.title,
      description: t.analytics.description,
      icon: BarChart3
    },
    {
      title: t.customization.title,
      description: t.customization.description,
      icon: Globe
    },
    {
      title: t.integrations.title,
      description: t.integrations.description,
      icon: Ticket
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Why Choose Venti.id?</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h3>
          <p className="mt-4 text-xl text-slate-600">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-brand-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
