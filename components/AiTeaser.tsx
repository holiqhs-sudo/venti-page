import React, { useState } from 'react';
import { Sparkles, Copy, Check, Loader2 } from 'lucide-react';
import { generateEventDescription } from '../services/geminiService';
import { GeneratedContent, EventType } from '../types';

const AiTeaser: React.FC = () => {
  const [eventName, setEventName] = useState('');
  const [eventType, setEventType] = useState<string>(EventType.CONFERENCE);
  const [vibe, setVibe] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GeneratedContent | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventName || !vibe) return;
    
    setIsLoading(true);
    setResult(null);
    
    try {
      const data = await generateEventDescription(eventName, eventType, vibe);
      setResult(data);
    } catch (error) {
      console.error("Failed to generate", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(`${result.tagline}\n\n${result.description}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="ai-demo" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-600/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wide mb-6">
              <Sparkles className="w-3 h-3" />
              Powered by Gemini AI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Writer's Block? <br/>
              <span className="text-brand-400">Let AI Describe Your Event.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Don't let a blank page stop you from launching. Venti.id integrates advanced AI to help you write compelling titles, descriptions, and promotional emails in seconds. Try a quick demo here.
            </p>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="bg-brand-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                Input Details
              </h3>
              <form onSubmit={handleGenerate} className="space-y-4">
                <div>
                  <label className="block text-slate-400 text-sm mb-1">Event Name</label>
                  <input 
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="e.g. Summer Code Fest"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-1">Type</label>
                    <select 
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500"
                    >
                      {Object.values(EventType).map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1">Vibe</label>
                    <input 
                      type="text"
                      value={vibe}
                      onChange={(e) => setVibe(e.target.value)}
                      placeholder="e.g. Energetic, Formal"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500"
                      required
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-brand-900/50 flex items-center justify-center gap-2"
                >
                  {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                  {isLoading ? 'Generating Magic...' : 'Generate Description'}
                </button>
              </form>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-accent-500/20 blur-2xl rounded-3xl" />
            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 min-h-[400px] flex flex-col">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="bg-brand-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                AI Output
              </h3>

              {!result && !isLoading && (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-700 rounded-xl p-8">
                  <Sparkles className="h-10 w-10 mb-4 opacity-50" />
                  <p className="text-center">Your generated content will appear here.</p>
                </div>
              )}

              {isLoading && (
                 <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                  <Loader2 className="h-8 w-8 animate-spin text-brand-500 mb-4" />
                  <p>Consulting the creative spirits...</p>
                 </div>
              )}

              {result && (
                <div className="animate-fade-in flex flex-col h-full">
                  <div className="mb-6">
                    <span className="text-xs font-bold text-accent-400 uppercase tracking-wider">Tagline</span>
                    <h4 className="text-xl md:text-2xl font-bold text-white mt-1 italic">"{result.tagline}"</h4>
                  </div>
                  <div className="mb-6 flex-1">
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">Description</span>
                    <p className="text-slate-300 mt-2 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-700 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={copyToClipboard}
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? 'Copied!' : 'Copy Text'}
                    </button>
                    <a href="#pricing" className="flex-1 bg-brand-600 hover:bg-brand-500 text-white py-2 rounded-lg text-sm font-medium transition-colors text-center">
                      Use for New Event
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTeaser;