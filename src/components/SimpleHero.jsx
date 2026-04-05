// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

export default function SimpleHero() {
  return (
    <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 Q 400 0 800 100" stroke="#58A8B4" strokeWidth="0.5" />
          <circle cx="80%" cy="20%" r="150" fill="#438FB3" opacity="0.05" />
        </svg>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-black text-[#1A1D20] mb-6 leading-tight">
          وكالة <span className="text-[#58A8B4]">أورا</span> الرقمية
        </h1>
        <p className="text-xl text-[#B3B7C1] font-bold mb-8">
          هندسة الحضور الرقمي الفاخر | هالتك الفارقة في عالم التسويق
        </p>
      </motion.div>
    </section>
  );
}
