import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, image, link, category }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass rounded-2xl overflow-hidden group border-white/5 hover:border-brand-blue/30 transition-all duration-500"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image || "/assets/AWAdvertisingLogo.png"}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900 group-hover:text-brand-blue transition-colors">
                    {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:gap-3 transition-all"
                >
                    Explore Project <ExternalLink size={14} />
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
