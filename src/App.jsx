import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import LiveBackground from './components/LiveBackground';
import { useLanguage } from './i18n/LanguageContext';

function App() {
  const { language, toggleLanguage, t } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative text-slate-900">
      <LiveBackground />

      {/* Global Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-32 h-32 bg-brand-blue/10 blur-xl rounded-full opacity-20"
        />
      </div>

      <Navbar />
      <main>
        <Hero />

        {/* About Section - Brief transition */}
        <section id="about" className="py-24 border-y border-white/5 bg-brand-darker/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              {t('about_title_1')}<span className="text-brand-blue">{t('about_title_highlight')}</span>{t('about_title_2')}
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 leading-relaxed">
              {t('about_text')}
            </p>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-200 bg-white relative overflow-hidden">
        {/* Ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-xl font-display font-black text-gradient mb-2">AW Reclamebureau Vlaanderen</div>
              <p className="text-slate-400 text-sm">{t('footer_rights')}</p>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/awadvertisingwebdesign" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">LinkedIn</a>
              <a href="https://twitter.com/aw_adv_web" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">Twitter</a>
              <a href="https://github.com/awvisual" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">GitHub</a>

              {/* Language Switch */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-600"
                aria-label="Switch language"
              >
                <Globe size={14} />
                {language === 'nl' ? 'EN' : 'NL'}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand-blue hover:bg-brand-accent text-white rounded-full shadow-lg shadow-brand-blue/30 flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
