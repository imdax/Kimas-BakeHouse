import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', ...props }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`bg-white rounded-2xl shadow-lg p-6 border border-brand-peach/30 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
