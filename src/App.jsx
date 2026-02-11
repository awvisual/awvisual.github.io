import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* About Section - Brief transition */}
        <section id="about" className="py-24 border-y border-white/5 bg-brand-darker/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Passion for <span className="text-brand-blue">Web Design</span>, Music, and Photography
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 leading-relaxed">
              We evolved to provide cutting-edge solutions for businesses and individuals alike.
              Our mission is to create digital products that stand out and deliver results.
            </p>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/10 bg-brand-darker relative overflow-hidden">
        {/* Ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-xl font-display font-black text-gradient mb-2">AW VISUAL</div>
              <p className="text-white/40 text-sm">© 2026 alle rechten voorbehouden - Vandamme Wouter</p>
            </div>

            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/awadvertisingwebdesign" target="_blank" className="text-white/40 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://twitter.com/aw_adv_web" target="_blank" className="text-white/40 hover:text-white transition-colors">Twitter</a>
              <a href="https://github.com/awvisual" target="_blank" className="text-white/40 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
