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

const features: Feature[] = [
  {
    title: "Seamless Ticketing",
    description: "Create multiple ticket tiers, early bird specials, and VIP packages in seconds with our intuitive builder.",
    icon: Ticket
  },
  {
    title: "Real-time Analytics",
    description: "Track sales, page views, and conversion rates instantly. Know your audience before the event starts.",
    icon: BarChart3
  },
  {
    title: "Global Reach",
    description: "Accept payments from anywhere in the world. We handle currency conversion and local tax compliance.",
    icon: Globe
  },
  {
    title: "Mobile First Experience",
    description: "Attendees can buy tickets and check in using our sleek mobile app. No paper, no hassle.",
    icon: Smartphone
  },
  {
    title: "Secure Payments",
    description: "Bank-grade security for all transactions. Payouts are automated and land in your account fast.",
    icon: ShieldCheck
  },
  {
    title: "AI Marketing Tools",
    description: "Generate social media posts, email campaigns, and event descriptions automatically with Gemini AI.",
    icon: Zap
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Why Choose Venti.id?</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything you need to host <br/> world-class events
          </h3>
          <p className="mt-4 text-xl text-slate-600">
            Focus on creating an amazing experience. We'll handle the logistics, payments, and promotion technology.
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