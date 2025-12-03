import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-peach/20">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-display font-bold text-brand-green">
                    Kima<span className="text-brand-orange">BakeHouse</span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-brand-brown hover:text-brand-orange font-semibold transition-colors">Home</a>
                    <a href="#course" className="text-brand-brown hover:text-brand-orange font-semibold transition-colors">Course</a>
                    <a href="#curriculum" className="text-brand-brown hover:text-brand-orange font-semibold transition-colors">Curriculum</a>
                    <a href="#contact" className="text-brand-brown hover:text-brand-orange font-semibold transition-colors">Contact</a>
                    <Button variant="primary" className="px-6 py-2 text-sm" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Register Now</Button>
                </div>

                <button className="md:hidden text-brand-green" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-brand-cream border-b border-brand-peach/20 overflow-hidden shadow-lg"
                    >
                        <div className="p-4 flex flex-col space-y-4">
                            <a href="#home" className="text-brand-brown font-semibold" onClick={() => setIsOpen(false)}>Home</a>
                            <a href="#course" className="text-brand-brown font-semibold" onClick={() => setIsOpen(false)}>Course</a>
                            <a href="#curriculum" className="text-brand-brown font-semibold" onClick={() => setIsOpen(false)}>Curriculum</a>
                            <a href="#contact" className="text-brand-brown font-semibold" onClick={() => setIsOpen(false)}>Contact</a>
                            <Button variant="primary" className="w-full" onClick={() => { setIsOpen(false); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Register Now</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
