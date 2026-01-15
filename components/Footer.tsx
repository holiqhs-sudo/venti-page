
import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  t: {
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
  };
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="lib/logo venti id.png" alt="Venti.id Logo" className="h-8" />
            </a>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              The all-in-one platform for modern event creators. Plan, promote, and sell out your next experience with ease.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">AI Tools</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Showcase</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Developers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-600 transition-colors">{t.about}</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">{t.contact}</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">{t.privacy}</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">{t.terms}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
