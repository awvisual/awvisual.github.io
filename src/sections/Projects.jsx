import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../i18n/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: t('project_calculator_title'),
            category: t('project_calculator_category'),
            description: t('project_calculator_desc'),
            image: "/screenshots/calculator.png",
            link: "https://calculator.wost666.be"
        },
        {
            title: t('project_calendar_title'),
            category: t('project_calendar_category'),
            description: t('project_calendar_desc'),
            image: "/screenshots/calendar.png",
            link: "https://calendar.wost666.be"
        },
        {
            title: t('project_flight_title'),
            category: t('project_flight_category'),
            description: t('project_flight_desc'),
            image: "/screenshots/flighttracker.png",
            link: "https://flighttracker.wost666.be"
        },
        {
            title: t('project_game_title'),
            category: t('project_game_category'),
            description: t('project_game_desc'),
            image: "/screenshots/gametracker.png",
            link: "https://gametracker.wost666.be"
        },
        {
            title: t('project_time_title'),
            category: t('project_time_category'),
            description: t('project_time_desc'),
            image: "/screenshots/timetracker.png",
            link: "https://timetracker.wost666.be"
        },
        {
            title: t('project_weekgames_title'),
            category: t('project_weekgames_category'),
            description: t('project_weekgames_desc'),
            image: "/screenshots/weekgames.png",
            link: "https://weekgames.wost666.be"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-display font-black mb-4"
                    >
                        {t('projects_title_1')}<span className="text-gradient">{t('projects_title_highlight')}</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-brand-blue rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{
                                duration: 0.6,
                                delay: idx * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
