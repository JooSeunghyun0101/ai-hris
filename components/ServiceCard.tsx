'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonUrl: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  features,
  buttonText,
  buttonUrl,
  icon,
  gradient,
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-8 text-white ${gradient} shadow-2xl`}
      initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E3DFDA] rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E3DFDA] rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            {icon}
          </div>
          <h3 className="text-3xl font-medium font-ok">{title}</h3>
        </motion.div>

        <motion.p
          className="text-lg mb-6 text-white/95 leading-relaxed font-ok font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.3 }}
        >
          {description}
        </motion.p>

        <motion.ul
          className="space-y-3 mb-8 font-ok font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.5 + index * 0.1 }}
            >
              <ChevronRight size={20} className="text-white/90" />
              <span className="text-white/95">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          onClick={() => window.open(buttonUrl, '_blank')}
          className="group bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-lg font-ok font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-light">{buttonText}</span>
          <ArrowRight 
            size={20} 
            className="group-hover:translate-x-1 transition-transform" 
          />
        </motion.button>
      </div>
    </motion.div>
  );
}