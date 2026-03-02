import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav_home'), href: '#' },
        { name: t('nav_projects'), href: '#projects' },
        { name: t('nav_contact'), href: '#contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-lg border-b border-black/5 py-3' : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-display font-bold bg-gradient-to-r from-brand-blue via-slate-900 to-brand-blue bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent"
                    >
                        AW <span className="text-slate-400 text-sm font-normal">Reclamebureau</span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-5 py-2 glass glass-hover rounded-full text-sm font-medium text-slate-700 transition-all border-black/5"
                        >
                            {t('nav_cta')}
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-slate-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 md:hidden bg-brand-darker pt-24 px-6"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    className="text-2xl font-display font-semibold text-white/80"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
