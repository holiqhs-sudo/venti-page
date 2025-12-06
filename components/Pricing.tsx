import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "per event",
    features: [
      "Unlimited Free Events",
      "Basic Analytics",
      "Standard Checkout",
      "Email Support",
      "1 Organizer Seat"
    ]
  },
  {
    name: "Growth",
    price: "$29",
    period: "per month",
    recommended: true,
    features: [
      "Everything in Starter",
      "Lower Ticket Fees",
      "AI Copywriting Tools",
      "Custom Branding",
      "Priority Support",
      "5 Organizer Seats"
    ]
  },
  {
    name: "Business",
    price: "$99",
    period: "per month",
    features: [
      "Everything in Growth",
      "Lowest Ticket Fees",
      "Advanced Analytics & API",
      "Reserved Seating",
      "Dedicated Account Manager",
      "Unlimited Seats"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Pricing</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Simple, Transparent Pricing
          </h3>
          <p className="mt-4 text-xl text-slate-600">
            Start for free and scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.recommended 
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 border-none z-10' 
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:border-brand-200 transition-colors'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-accent-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-lg font-semibold mb-2 ${plan.recommended ? 'text-brand-300' : 'text-slate-500'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className={`text-sm ${plan.recommended ? 'text-slate-400' : 'text-slate-500'}`}>
                  / {plan.period}
                </span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-5 w-5 shrink-0 ${plan.recommended ? 'text-brand-400' : 'text-brand-600'}`} />
                    <span className={`text-sm ${plan.recommended ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.recommended
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;