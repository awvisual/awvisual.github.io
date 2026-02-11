import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
                            Let's build something <br />
                            <span className="text-gradient">extraordinary</span> together.
                        </h2>

                        <div className="space-y-8 mt-12">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-blue">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Email us</h4>
                                    <p className="text-white/50">info@aw-advertising.be</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-blue">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Visit us</h4>
                                    <p className="text-white/50">Gullegemsestraat 111, 8880 Sint-Eloois-Winkel</p>
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
                                    <label className="text-sm font-bold text-white/40 ml-1">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder="Vandamme Wouter" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white/40 ml-1">Phone</label>
                                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder="+32 ..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/40 ml-1">Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder="hello@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/40 ml-1">Message</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <button className="w-full py-4 bg-brand-blue hover:bg-brand-accent transition-all rounded-xl font-bold flex items-center justify-center gap-2 group">
                                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
