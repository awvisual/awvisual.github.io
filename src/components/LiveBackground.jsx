import React from 'react';
import { motion } from 'framer-motion';

const LiveBackground = () => {
    // Stable organic-looking topographic paths
    const layers = [
        {
            initial: "M0,100 C150,150 350,50 500,100 C650,150 850,50 1000,100 L1000,1000 L0,1000 Z",
            variation: "M0,120 C180,180 320,80 500,120 C680,180 820,80 1000,120 L1000,1000 L0,1000 Z",
            color: "rgba(220, 230, 255, 0.3)"
        },
        {
            initial: "M0,250 C200,350 400,150 600,250 C800,350 1000,150 1200,250 L1200,1000 L0,1000 Z",
            variation: "M0,280 C230,380 370,180 600,280 C830,380 970,180 1200,280 L1200,1000 L0,1000 Z",
            color: "rgba(200, 210, 240, 0.25)"
        },
        {
            initial: "M-200,400 C100,550 400,300 700,450 C1000,600 1300,350 1600,500 L1600,1000 L0,1000 Z",
            variation: "M-200,430 C130,580 370,330 700,480 C1030,630 1270,380 1600,530 L1600,1000 L0,1000 Z",
            color: "rgba(180, 190, 230, 0.2)"
        },
    ];

    return (
        <div className="fixed inset-0 -z-20 w-full h-full bg-[#fcfdff] overflow-hidden">
            {/* Animated SVG Layers */}
            <svg
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full opacity-60"
            >
                {layers.map((layer, i) => (
                    <motion.path
                        key={i}
                        d={layer.initial}
                        fill={layer.color}
                        stroke="rgba(0,0,0,0.03)"
                        strokeWidth="1"
                        animate={{
                            d: [layer.initial, layer.variation, layer.initial],
                        }}
                        transition={{
                            duration: 10 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>

            {/* Subtle Gradient Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-brand-darker/5" />

            {/* Moving Light Source */}
            <motion.div
                animate={{
                    x: ["-10%", "110%"],
                    y: ["-10%", "50%"],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] mix-blend-soft-light"
            />
        </div>
    );
};

export default LiveBackground;
