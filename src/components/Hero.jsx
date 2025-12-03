import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './ui/Button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 200]);
    const yImage = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [3, isMobile ? 3 : -3]);

    return (
        <section id="home" ref={ref} className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden bg-brand-cream">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-peach/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl -z-10" />

            {/* Floating Elements - Desktop Only */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-20 left-10 text-4xl opacity-20 hidden md:block will-change-transform"
            >
                🥖
            </motion.div>
            <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 right-10 text-4xl opacity-20 hidden md:block will-change-transform"
            >
                🧁
            </motion.div>

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    style={{ y: yText }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-bold mb-6"
                    >
                        Bakery Course 2025
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-brand-green leading-tight mb-6">
                        Dream of starting a <span className="text-brand-orange relative inline-block">
                            Bakery?
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-peach -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-xl text-brand-brown/80 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Join my one-month baking course and make your dream real. Learn professional techniques for cakes, breads, and cookies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button variant="primary" onClick={() => document.getElementById('course').scrollIntoView({ behavior: 'smooth' })}>
                            View Course Details
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Contact Us
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    style={{ y: yImage, rotate }}
                    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 3 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring" }}
                    className="relative perspective-1000"
                >
                    <div className="relative z-10 rounded-3xl p-3 bg-white shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                        <div className="aspect-[4/5] md:aspect-[4/3] rounded-2xl overflow-hidden relative group">
                            <img
                                src="/hero-image.png"
                                alt="Delicious Bakery Spread"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-brand-peach/20 max-w-[200px] will-change-transform"
                        >
                            <div className="bg-brand-orange/10 p-3 rounded-full">
                                <ChevronRight className="text-brand-orange w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs text-brand-brown/60 font-bold uppercase tracking-wider">Next Batch</p>
                                <p className="text-xl font-display font-bold text-brand-green">18 Dec</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute -top-10 -right-10 w-full h-full border-2 border-brand-orange/20 rounded-3xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
