import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: "AW Reclamebureau",
        category: "Branding & Web",
        description: "Since 2008, AW has been a steady value in online and offline advertising. We combine communication, creation, and web development to build distinctive concepts.",
        image: "/assets/AWAdvertisingLogo.png",
        link: "https://aw-reclamebureau-vlaanderen.be"
    },
    {
        title: "Mobile App Development",
        category: "Development",
        description: "Developing custom apps for iOS, Windows, and Android. From marketing campaigns to customer management, we use the latest technologies tailored to your brand.",
        image: "/assets/AWAppsLogo.png",
        link: "https://aw-adv-web-apps.com/"
    },
    {
        title: "MFH Coverband",
        category: "Music & Entertainment",
        description: "Foundations in Foo Fighters, Metallica, and Muse. Delivering a high-energy setlist full of quality rock and ball-sy covers to ensure an unforgettable night.",
        image: "https://mfh-coverband.be/img/mfh-front.png",
        link: "https://mfh-coverband.be"
    },
    {
        title: "Endnote Metal",
        category: "Music",
        description: "Metal from the heart of Flanders. Risen from the ashes of different punk and metal bands, bringing influence from Gojira, Death, and In Flames.",
        image: "https://endnote-metal.be/assets/img/EndNote-traces-ep-front.jpg",
        link: "https://endnote-metal.be"
    },
    {
        title: "MoshRoom Vzw",
        category: "Community",
        description: "A music-minded community initiative providing facilities and guidance for creative bands. From recordings to event promotion and merchandise.",
        image: "/assets/PimpampoentjeLogo.jpg",
        link: "https://moshroom-vzw.be"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-display font-black mb-4"
                    >
                        Featured <span className="text-gradient">Work</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-brand-blue rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
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
