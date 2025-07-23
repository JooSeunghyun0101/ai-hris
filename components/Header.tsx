'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    setIsExpanded(false);
    
    // 헤더가 닫힌 후 스크롤 실행
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      console.log('Found element:', element);
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop - 60;
        
        console.log('Scrolling to position:', targetPosition);
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } else {
        console.log('Element not found with ID:', sectionId);
      }
    }, 100);
  };

  const navigateToService = (serviceId: string) => {
    const serviceUrls: Record<string, string> = {
      'airiss': 'https://web-production-4066.up.railway.app/dashboard',
      'contribution': 'https://elevate-growth-system.vercel.app',
      'monthly': 'https://9000-firebase-studio-1751945698184.cluster-xpmcxs2fjnhg6xvn446ubtgpio.cloudworkstations.dev',
      'mobile': 'https://studio--mobile-ehr-20.us-central1.hosted.app',
      'paypulse': '#', // Pay Pulse URL - 추후 업데이트 필요
      'compinsight': '#' // Comp Insight URL - 추후 업데이트 필요
    };
    
    const url = serviceUrls[serviceId];
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
    setIsExpanded(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = {
    'AIRISS': [
      { name: 'AIRISS', id: 'airiss' }
    ],
    '평가': [
      { name: '기여도평가', id: 'contribution' },
      { name: 'PL월성과평가', id: 'monthly' }
    ],
    '근태': [
      { name: 'Mobile eHR', id: 'mobile' }
    ],
    '보상': [
      { name: 'Pay Pulse', id: 'paypulse' },
      { name: 'Comp Insight', id: 'compinsight' }
    ]
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isExpanded
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-[#E3DFDA]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        height: isExpanded ? 'auto' : 'auto'
      }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-5 gap-2 items-center py-4">
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
          
          {Object.keys(categories).map((categoryName) => (
            <motion.div
              key={categoryName}
              className="text-center cursor-pointer hover:text-[#F55000] transition-colors py-2 font-ok font-light"
              whileHover={{ scale: 1.05 }}
            >
              {categoryName}
            </motion.div>
          ))}
        </div>

        {/* Second Row - Expanded Module Menu */}  
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="border-t border-[#E3DFDA]/30 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="grid grid-cols-5 gap-2 font-ok font-light">
                <div></div>
                {Object.entries(categories).map(([categoryName, items]) => (
                  <div key={categoryName} className="text-center">
                    <div className="space-y-2">
                      {items.map((item, index) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="block w-full text-sm hover:text-[#F55000] transition-colors py-1 whitespace-nowrap"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.name}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}