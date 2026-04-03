import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "وزارة الصحة", "مجمع البدر الطبي", "رؤية 2030", "أمازون", "STC", "أرامكو", "سابك"
];

export default function LogosMarquee() {
  // نقوم بمضاعفة القائمة لضمان استمرارية حركة الشريط بلا انقطاع
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-12 bg-transparent">
      {/* تدرج لوني على الأطراف ليتلاشى النص بسلاسة */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-full overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-8 sm:gap-16 items-center w-max"
          // الحركة من صفر إلى سالب 50% تضمن استمرار الدوران بشكل مثالي مع العناصر المكررة
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 
          }}
        >
          {repeatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center text-2xl sm:text-4xl font-black text-gray-400/40 grayscale hover:grayscale-0 hover:text-aura-primary transition-all duration-500 cursor-pointer drop-shadow-sm"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}