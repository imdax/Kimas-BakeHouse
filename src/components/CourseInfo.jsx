import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';
import { Calendar, DollarSign, ShoppingBag, CheckCircle } from 'lucide-react';

const CourseInfo = () => {
    const features = [
        { icon: <Calendar className="w-6 h-6 text-brand-orange" />, title: "Duration", value: "1 Month" },
        { icon: <CheckCircle className="w-6 h-6 text-brand-orange" />, title: "Type", value: "Veg & Non-Veg" },
        { icon: <DollarSign className="w-6 h-6 text-brand-orange" />, title: "Course Fees", value: "₹18,000" },
        { icon: <ShoppingBag className="w-6 h-6 text-brand-orange" />, title: "Ingredients", value: "₹5,000" },
    ];

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            rotateX: -90,
            scale: 0.8
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                type: "spring",
                bounce: 0.4
            }
        })
    };

    return (
        <section id="course" className="py-20 bg-white relative overflow-hidden perspective-1000">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-brand-orange blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-brand-green blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-display font-bold text-brand-green mb-4"
                    >
                        Course Details
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-brown/70 max-w-2xl mx-auto"
                    >
                        Everything you need to know about our upcoming professional bakery course.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 perspective-1000">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="h-full"
                        >
                            <Card className="flex flex-col items-center text-center hover:border-brand-orange/50 transition-colors h-full justify-center group transform-style-3d">
                                <div className="bg-brand-cream p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-brand-brown mb-1">{feature.title}</h3>
                                <p className="text-xl font-bold text-brand-green">{feature.value}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-brand-green text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl mx-4 md:mx-0"
                >
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Next Batch Starts: 18 December</h3>
                        <p className="text-brand-lightGreen text-lg mb-0">Limited seats available! Secure your spot today.</p>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    {/* Animated shine effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 animate-shine"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default CourseInfo;
