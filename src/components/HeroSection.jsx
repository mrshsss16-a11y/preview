import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  // دالة التمرير السلس الذكية (نفس المستخدمة في النافبار)
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      const offset = 100; // مساحة أمان للنافبار
      const top = contactSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12">
      
      {/* السحر البصري: خلفية "الأورا" المتنفسة */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#FDFDFD]">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 bg-gradient-to-tr from-[#58A8B4] to-[#e0f2f4]"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 bg-gradient-to-bl from-[#438FB3] to-transparent"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg4OCwgMTY4LCAxODAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50 z-0" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center mt-4 md:mt-6">
        
        <motion.div 
          variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl border border-white/80 text-[#58A8B4] px-5 py-2.5 rounded-full font-bold text-sm shadow-[0_4px_20px_rgba(88,168,180,0.15)] mb-8"
        >
          <Sparkles size={16} className="animate-pulse" /> 
          <span>الوكالة الرقمية الأسرع نمواً في مكة المكرمة</span>
        </motion.div>

        <motion.h1 
          variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A1D20] leading-[1.1] tracking-tight mb-6"
        >
          وكالة أورا <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#58A8B4] to-[#438FB3]">للتسويق</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-gray-700 mt-4 block font-extrabold">هالتك الفارقة في عالم التسويق</span>
        </motion.h1>

        <motion.h2 
          variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed mb-10"
        >
          شريكك الاستراتيجي بالسعودية. نهندس تجارب رقمية استثنائية ونطبق استراتيجيات SEO متقدمة لتتصدر علامتك محلياً وعالمياً.
        </motion.h2>

        <motion.div 
          variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center"
        >
          {/* تم ربط الزر الأول بدالة التمرير */}
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-[#58A8B4] hover:bg-[#438FB3] text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(88,168,180,0.3)] hover:shadow-[0_15px_40px_rgba(88,168,180,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
          >
            اطلب استشارة مجانية 
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          </button>
          
          {/* تم ربط الزر الثاني بدالة التمرير */}
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-white/40 hover:bg-white/80 backdrop-blur-md border border-[#58A8B4]/20 text-[#1A1D20] px-10 py-4 rounded-full font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3"
          >
            <TrendingUp size={20} className="text-[#58A8B4]" />
            تصدر نتائج البحث الآن
          </button>
        </motion.div>

        <motion.div 
          variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400 font-medium text-sm"
        >
          <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#58A8B4]"/> شريك معتمد من منشآت</div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block" />
          <div className="flex items-center gap-2"><Sparkles size={18} className="text-[#58A8B4]"/> +85 مشروع رقمي ناجح</div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block" />
          <div className="flex items-center gap-2"><TrendingUp size={18} className="text-[#58A8B4]"/> حلول مبنية على البيانات</div>
        </motion.div>
        
      </div>
    </section>
  );
}
