import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Palette, Search, Sparkles, Code, TrendingUp } from 'lucide-react';

export default function ServicesHero() {
  // إعدادات حركة الطفو للأيقونات (Breathing Animation)
  const floatingVariants = {
    float: (custom) => ({
      y: [0, -20, 0],
      rotate: [0, custom.rot, 0],
      transition: {
        duration: custom.dur,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom.delay
      }
    })
  };

  return (
    <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      
      {/* 1. الخلفية المضيئة المتنفسة */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[600px] h-[600px] bg-[#58A8B4]/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[400px] h-[400px] bg-[#438FB3]/20 rounded-full blur-[100px] translate-x-1/2"
        />
      </div>

      {/* 2. الأيقونات الزجاجية الطافية في الخلفية */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block max-w-7xl mx-auto">
        <motion.div custom={{ dur: 6, rot: 10, delay: 0 }} variants={floatingVariants} animate="float" className="absolute top-1/4 left-[10%] bg-white/40 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 text-[#58A8B4]">
          <Megaphone size={32} />
        </motion.div>
        <motion.div custom={{ dur: 7, rot: -15, delay: 1 }} variants={floatingVariants} animate="float" className="absolute bottom-1/4 left-[20%] bg-white/40 backdrop-blur-md p-5 rounded-full shadow-xl border border-white/50 text-[#438FB3]">
          <Code size={28} />
        </motion.div>
        <motion.div custom={{ dur: 5, rot: 20, delay: 0.5 }} variants={floatingVariants} animate="float" className="absolute top-1/3 right-[15%] bg-white/40 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/50 text-[#B3B7C1]">
          <Search size={40} />
        </motion.div>
        <motion.div custom={{ dur: 8, rot: -10, delay: 2 }} variants={floatingVariants} animate="float" className="absolute bottom-1/3 right-[10%] bg-white/40 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 text-[#58A8B4]">
          <Palette size={32} />
        </motion.div>
        <motion.div custom={{ dur: 6, rot: 15, delay: 1.5 }} variants={floatingVariants} animate="float" className="absolute top-1/2 left-[5%] bg-white/40 backdrop-blur-md p-3 rounded-full shadow-xl border border-white/50 text-[#438FB3]">
          <TrendingUp size={24} />
        </motion.div>
      </div>

      {/* 3. المحتوى النصي المركزي */}
      <div className="container mx-auto px-4 relative z-20 text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-[#58A8B4]/30 text-[#438FB3] px-6 py-2 rounded-full font-bold text-sm shadow-sm"
        >
          <Sparkles size={16} /> هندسة الحلول المتكاملة
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 80 }}
          className="text-5xl md:text-7xl font-extrabold text-[#1A1D20] leading-tight max-w-4xl mx-auto"
        >
          نصنع لعلامتك <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#58A8B4] to-[#438FB3]">تأثيراً لا يُنسى</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          نحن لا نقدم مجرد خدمات، بل نبني منظومة متكاملة تعمل بتناغم تام لتحويل أهدافك إلى نتائج حقيقية وأرقام تتحدث عن نفسها.
        </motion.p>
      </div>

    </div>
  );
}
