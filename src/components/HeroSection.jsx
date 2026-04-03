import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const AnimatedCounter = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1800;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-black text-[#438FB3]">{count}</span>
        <span className="text-3xl font-bold text-[#58A8B4]">{suffix}</span>
      </div>
      <span className="text-sm font-bold text-[#B3B7C1] mt-1">{label}</span>
    </div>
  );
};

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 bg-[#FDFDFD]">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <svg className="w-full h-full object-cover" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#B3B7C1" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="80%" cy="10%" r="220" fill="#58A8B4" opacity="0.05" />
          <circle cx="90%" cy="20%" r="140" fill="#438FB3" opacity="0.06" />
          <circle cx="20%" cy="80%" r="300" fill="#58A8B4" opacity="0.04" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center mt-4 md:mt-6 max-w-4xl">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="inline-flex items-center gap-2 bg-[#58A8B4]/10 backdrop-blur-md border border-[#58A8B4]/20 text-[#438FB3] px-5 py-2.5 rounded-full font-bold text-sm shadow-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-[#58A8B4] animate-pulse" />
          <span>الوكالة الرقمية الأسرع نموًا في مكة المكرمة</span>
        </motion.div>

        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A1D20] leading-[1.1] tracking-tight mb-6">
          وكالة <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#58A8B4] to-[#438FB3]">أورا</span> للتسويق
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-[#B3B7C1] mt-4 block font-extrabold">هالتك الفارقة في عالم التسويق</span>
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
          شريكك الاستراتيجي بالسعودية. نهندس تجارب رقمية استثنائية ونطبق استراتيجيات SEO متقدمة لتتصدر علامتك محلياً وعالمياً.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
          <button onClick={scrollToContact} className="w-full sm:w-auto bg-[#58A8B4] hover:bg-[#438FB3] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_20px_rgba(88,168,180,0.3)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
            طلب استشارة مجانية <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          </button>
          <a href="#services" className="w-full sm:w-auto bg-transparent border-2 border-[#58A8B4] text-[#438FB3] hover:bg-[#58A8B4]/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3">
            تصفح خدماتنا
          </a>
        </motion.div>

        {/* العدادات الديناميكية - تم التحديث إلى 5 سنوات */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="flex flex-wrap items-center justify-center gap-8 md:gap-16 bg-white/60 backdrop-blur-xl border border-[#B3B7C1]/20 p-6 md:p-8 rounded-[2rem] shadow-sm w-full">
          <AnimatedCounter target={50} suffix="+" label="عميل سعيد" />
          <div className="w-px h-12 bg-[#B3B7C1]/40 hidden md:block" />
          <AnimatedCounter target={85} suffix="+" label="مشروع ناجح" />
          <div className="w-px h-12 bg-[#B3B7C1]/40 hidden md:block" />
          <AnimatedCounter target={5} suffix="+" label="سنوات خبرة" />
        </motion.div>
      </div>
    </section>
  );
}
