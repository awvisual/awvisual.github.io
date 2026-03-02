import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
            {/* Background Blobs with Parallax */}
            <motion.div
                style={{ y: yBlob1 }}
                className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse"
            />
            <motion.div
                style={{ y: yBlob2 }}
                className="absolute bottom-10 left-10 -z-10 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[80px]"
            />

            <div className="container mx-auto px-6">
                <div className="max-w-12xl">
                    <motion.div
                        style={{ y: yText, opacity: opacityHero }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-display font-black leading-tight mb-6 text-slate-950">
                            {t('hero_title_1')} <span className="text-gradient">{t('hero_title_2')}</span>{t('hero_title_3')}
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-sans max-w-xl">
                            {t('hero_subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-brand-blue hover:bg-brand-accent transition-colors rounded-xl font-bold text-lg text-white shadow-lg shadow-brand-blue/20">
                                {t('hero_btn_projects')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: opacityHero }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">{t('hero_scroll')}</span>
                <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
