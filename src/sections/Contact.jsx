import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight text-slate-900">
                            {t('contact_title_1')} <br />
                            <span className="text-gradient">{t('contact_title_highlight')}</span>{t('contact_title_2')}
                        </h2>

                        <div className="space-y-8 mt-12">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-blue">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-slate-800">{t('contact_email_label')}</h4>
                                    <p className="text-slate-500"><a href="mailto:killerart666@gmail.com">killerart666@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-blue">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-slate-800">{t('contact_visit_label')}</h4>
                                    <p className="text-slate-500">Gullegemsestraat 111, 8880 Sint-Eloois-Winkel</p>
                                    <p className="text-slate-500">BE0898.149.823</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass p-8 md:p-10 rounded-3xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 ml-1">{t('contact_form_name')}</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-slate-900" placeholder="Vandamme Wouter" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 ml-1">{t('contact_form_phone')}</label>
                                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-slate-900" placeholder="+32 ..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400 ml-1">{t('contact_form_email')}</label>
                                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-slate-900" placeholder="hello@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400 ml-1">{t('contact_form_message')}</label>
                                <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors resize-none text-slate-900" placeholder={t('contact_form_placeholder_message')}></textarea>
                            </div>

                            <button className="w-full py-4 bg-brand-blue hover:bg-brand-accent transition-all rounded-xl font-bold flex items-center justify-center gap-2 group text-white">
                                {t('contact_form_submit')} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
