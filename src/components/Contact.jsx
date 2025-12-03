import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Button from './ui/Button';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto bg-brand-lightGreen rounded-3xl p-10 md:p-16 border border-brand-green/10">
                    <h2 className="text-4xl font-display font-bold text-brand-green mb-6">Ready to Start Baking?</h2>
                    <p className="text-xl text-brand-brown/80 mb-10">
                        Book your slot for the upcoming batch. Call or WhatsApp us for more details.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a href="tel:07501209303">
                            <Button variant="primary" className="w-full md:w-auto text-lg py-4">
                                <Phone className="w-5 h-5" />
                                Call 075012 09303
                            </Button>
                        </a>
                        <a href="https://wa.me/917501209303" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" className="w-full md:w-auto text-lg py-4">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Me
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
