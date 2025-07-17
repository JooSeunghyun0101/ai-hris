'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-[#E3DFDA]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
          >
            <Image
              src="/ok-logo.png"
              alt="OK Logo"
              width={80}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </motion.div>
          
          <nav className="hidden md:flex space-x-8 font-ok font-light">
            {[
              { name: 'AIRISS', id: 'airiss' },
              { name: '기여도평가', id: 'contribution' },
              { name: '월성과평가', id: 'monthly' },
              { name: '모바일 근태관리', id: 'mobile' },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#F55000] transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}