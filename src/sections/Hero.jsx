import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6">
                            Crafting Digital <br />
                            <span className="text-gradient">Experiences</span> that Inspire
                        </h1>
                        <p className="text-xl text-white/60 mb-10 leading-relaxed font-sans max-w-xl">
                            Since 2008, AW has been a steady value in the world of online advertising,
                            combining communication, creation, and high-end web development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-brand-blue hover:bg-brand-accent transition-colors rounded-xl font-bold text-lg shadow-lg shadow-brand-blue/20">
                                View Projects
                            </button>
                            <button className="px-8 py-4 glass glass-hover rounded-xl font-bold text-lg">
                                Our Services
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
