import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // تتبع حركة الماوس لإنشاء تأثير الهالة والانكسار حول النص
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-center mt-4 mb-24 perspective-1000"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* الشعار اللفظي الحي */}
        <motion.div 
          className="relative inline-block mb-8 group"
          animate={{
            rotateX: mousePosition.y * -10,
            rotateY: mousePosition.x * 10,
          }}
          transition={{ type: "spring", stiffness: 75, damping: 15 }}
        >
          {/* الجرم المضيء خلف النص مباشرة (يتحرك مع الماوس) */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-aura-accent to-aura-primary blur-[40px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-10 rounded-full"
            animate={{
              x: mousePosition.x * 30,
              y: mousePosition.y * 30,
            }}
          />
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-aura-primary via-aura-accent to-aura-primary bg-[length:200%_auto] animate-gradient relative z-10 group-hover:text-glow transition-all duration-500">
            هالتك الفارقة في عالم التسويق
          </h1>
        </motion.div>
        
        <p className="text-xl md:text-2xl text-aura-text/75 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
          هندسة رقمية متقدمة تجمع بين الذكاء الاصطناعي، التصميم الفاخر، وتحسين محركات البحث لبناء حضور يكسر القواعد ويقود الأسواق.
        </p>
        
        {/* أزرار CTA بتأثير الزجاج السائل */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(67, 143, 179, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-2xl bg-aura-primary text-white font-bold text-xl shadow-xl shadow-aura-primary/20 transition-all w-full sm:w-auto border border-aura-primary/50"
          >
            ابدأ مشروعك الاستثنائي
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-2xl bg-aura-glass text-aura-primary font-bold text-xl border border-aura-glassBorder liquid-glass-filter shadow-liquid-glass transition-all w-full sm:w-auto group relative overflow-hidden"
          >
            <span className="relative z-10">استكشف منهجيتنا</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}