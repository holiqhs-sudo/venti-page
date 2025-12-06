import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Event Director",
    company: "TechNexus",
    avatar: "https://picsum.photos/id/64/100/100",
    content: "Venti.id completely transformed how we handle registration. The analytics dashboard is a game changer for understanding our audience behavior."
  },
  {
    name: "Marcus Chen",
    role: "Community Manager",
    company: "DesignCollective",
    avatar: "https://picsum.photos/id/91/100/100",
    content: "The AI tools saved me hours of copywriting. I generated my entire landing page copy in minutes and sold out 20% faster than last year."
  },
  {
    name: "Elena Rodriguez",
    role: "Founder",
    company: "YogaFlow Series",
    avatar: "https://picsum.photos/id/129/100/100",
    content: "Simple, beautiful, and effective. My attendees love how easy it is to buy tickets on their phones. The QR check-in is lightning fast."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Top Organizers</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of event creators who trust Venti.id to deliver seamless experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-8 flex-1 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;