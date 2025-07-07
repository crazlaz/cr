import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer className='bg-gray-900 text-white py-6 relative'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                {/* Brand */}
                <h1 className='text-xl md:text-2xl font-bold'>
                Atlas<span className='text-yellow-500 italic'>Construction</span>
                </h1>
                
              
                {/* Copyright */}
                <p className='text-sm mt-4 md:mt-0'>
                    &copy; {new Date().getFullYear()} Atlas Construction. All rights reserved.
                </p>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className='fixed bottom-8 right-8 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors duration-300'
                aria-label='Scroll to top'
            >
                <FaArrowUp size={20} />
            </button>
        </footer>
    );
};

export default Footer;
