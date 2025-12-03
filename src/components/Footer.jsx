import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-brown text-brand-cream py-8">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-display font-bold mb-4">Kima<span className="text-brand-orange">BakeHouse</span></h2>
                <p className="opacity-70 text-sm">
                    © {new Date().getFullYear()} Kima-BakeHouse. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
