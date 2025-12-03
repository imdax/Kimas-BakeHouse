import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Croissant, Cookie, GraduationCap } from 'lucide-react';

const Curriculum = () => {
    const categories = [
        {
            title: "Cakes",
            icon: Cake,
            items: [
                "Ganache Cake", "Black Forest Cake", "Vanilla Cup Cake", "Brownies",
                "Marble Tea Cake", "Christmas Cake", "Chocolate Lava Cake",
                "Fresh Fruits Cake", "Chocolate Pastry", "Butter Scotch Doll Cake"
            ]
        },
        {
            title: "Bread",
            icon: Croissant,
            items: [
                "Pizza Base", "Burger Buns", "Garlic Bread", "Cinnamon Roll",
                "Donuts", "Basic Bread", "French Baguette", "Puff", "Cream Roll"
            ]
        },
        {
            title: "Cookies",
            icon: Cookie,
            items: [
                "Tutti Frutti Cookies", "Chocochips Cookies", "Butter Cookies",
                "Cheese Chilli Cookies", "Sandwich Cookies", "Palmier Cookies"
            ]
        },
        {
            title: "Extra Knowledge",
            icon: GraduationCap,
            items: [
                "5 Types of Sponges", "Icing Techniques", "Cream Knowledge", "Butter Cream",
                "Professional Sponges in Low Budget", "Flower Design", "Fondant Knowledge",
                "Fondant Characters", "Cover Cake with Fondant", "3 Types of Ganache",
                "Cake Filling at Home", "Pizza Sauce", "Chocolate Sauce",
                "Burger Patties (Bake & Fry)", "2 Tier Cake Assembly", "Butter Scotch Filling",
                "Chocolate Knowledge & Design", "Cake Pricing Calculation"
            ]
        }
    ];

    return (
        <section id="curriculum" className="py-16 md:py-20 bg-brand-cream relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#E85D04_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-display font-bold text-brand-green mb-3 md:mb-4"
                    >
                        What You Will Learn
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-brown/70 max-w-2xl mx-auto text-sm md:text-base"
                    >
                        A comprehensive curriculum covering 25+ items and essential professional techniques.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-brand-peach/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Background Icon */}
                            <div className="absolute -bottom-6 -right-6 opacity-5 rotate-12 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                                <category.icon size={140} className="text-brand-orange" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-display font-bold text-brand-orange mb-4 md:mb-6 border-b border-brand-peach/20 pb-2 flex items-center gap-2 relative z-10">
                                <span className="text-2xl md:text-3xl">{idx === 0 ? '🎂' : idx === 1 ? '🍞' : idx === 2 ? '🍪' : '🎓'}</span>
                                {category.title}
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 relative z-10">
                                {category.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-brand-brown group/item">
                                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-green rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0 group-hover/item:bg-brand-orange transition-colors"></span>
                                        <span className="text-sm font-medium group-hover/item:text-brand-green transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
