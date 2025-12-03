import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, className = '', variant = 'primary', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-brand-orange text-white hover:bg-orange-600",
        secondary: "bg-brand-green text-white hover:bg-green-800",
        outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
