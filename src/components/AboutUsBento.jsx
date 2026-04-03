import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const CLIENT_LOGOS = [
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D9%88%D8%A7%D8%B1%D9%82%D8%A9%20(1).webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%AD%D8%AF%D8%A7%D8%A6%D9%82%20%D8%A7%D9%84%D9%81%D8%B1%D8%A7%D8%AA.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D9%86%D8%A7%D8%AF%D9%8A%20%D9%85%D9%83%D8%A9%20%D8%A7%D9%84%D8%AB%D9%82%D8%A7%D9%82%D9%8A.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%B7%D9%87%20%D8%A7%D9%84%D8%B3%D9%82%D8%A7%D9%81.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D8%B9%D9%85%D8%B1%D8%A7%D9%86.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D8%B3%D9%82%D9%86%D8%AA%D8%B4%D8%B1.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D9%89.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9%20%D8%A7%D9%84%D9%85%D9%84%D9%83%D9%8A%D8%A9.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%84%D9%87%D9%84%D8%A7%D9%84-%D8%A7%D9%84%D8%A7%D8%AD%D9%85%D8%B1%20(1).webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D8%B9%D9%85%D8%A7%D8%B1%20(1).webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A3%D9%88%D8%B1%D8%A7-%20%D9%88%D8%B2%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%D8%A7%D8%AA.webp"
];

// تكرار المصفوفة 3 مرات لضمان حركة متواصلة (Infinite Loop)
const SCROLLING_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function AboutUsBento() {
  return (
    <div className="grid grid-cols-12 gap-6">
      
      {/* 1. بلوك القصة */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="col-span-12 md:col-span-8 bg-white/40 backdrop-blur-2xl border border-white/60 p-10 rounded-[2.5rem] shadow-sm relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#58A8B4]/5 rounded-bl-full pointer-events-none" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1D20] mb-6">نحن أورا.. <br/><span className="text-[#58A8B4]">حيث تلتقي العبقرية بالإنسانية</span></h2>
        <p className="text-gray-500 font-medium leading-relaxed text-lg max-w-2xl mb-8">بدأت رحلتنا في مكة المكرمة، مستلهمين من عراقتها روح الاستمرار ومن تطورها شغف الابتكار. في "أورا"، لا نقدم مجرد خدمات تسويقية، بل نصنع قصص نجاح تتجاوز الحدود الجغرافية.</p>
        <div className="flex gap-4">
           <div className="bg-white/60 px-5 py-3 rounded-2xl border border-[#58A8B4]/10">
              <h4 className="text-[#58A8B4] font-black text-2xl">+85</h4>
              <p className="text-gray-400 text-sm font-bold">مشروع ناجح</p>
           </div>
           <div className="bg-white/60 px-5 py-3 rounded-2xl border border-[#58A8B4]/10">
              <h4 className="text-[#58A8B4] font-black text-2xl">+50</h4>
              <p className="text-gray-400 text-sm font-bold">عميل سعيد</p>
           </div>
        </div>
      </motion.div>

      {/* 2. بلوك الرؤية */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="col-span-12 md:col-span-4 bg-gradient-to-br from-[#1A1D20] to-[#2D3339] p-10 rounded-[2.5rem] text-white flex flex-col justify-between"
      >
        <div className="p-4 bg-white/10 rounded-2xl w-fit mb-6"><Target className="text-[#58A8B4]" size={32}/></div>
        <div>
          <h3 className="text-2xl font-bold mb-4">الرؤية والجوهر</h3>
          <p className="text-gray-400 font-medium text-sm leading-relaxed">نؤمن أن الأرقام مهمة، لكن المشاعر هي ما يصنع الولاء. ندمج البيانات الدقيقة مع الفهم العميق للسلوك الإنساني.</p>
        </div>
      </motion.div>

      {/* 3. شريط الشعارات المبرمج يدوياً (بدون مكتبات) */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="col-span-12 bg-white/20 backdrop-blur-md border border-white/40 py-10 rounded-[2.5rem] overflow-hidden"
      >
        <div className="px-10 mb-8 flex items-center justify-between">
            <h4 className="text-xl font-bold text-[#1A1D20]">نعتز بثقة شركائنا</h4>
            <div className="h-px bg-gray-200 flex-1 mx-6 opacity-50" />
        </div>
        
        {/* الحاوية التي تخفي ما يخرج عن الشاشة وتجبر الاتجاه على اليسار للحركة */}
        <div className="relative w-full overflow-hidden flex items-center" dir="ltr">
           <motion.div 
             animate={{ x: [0, -1500] }} 
             transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
             className="flex items-center gap-16 min-w-max px-8"
           >
             {SCROLLING_LOGOS.map((logo, index) => (
                <img 
                  key={index} 
                  src={logo} 
                  alt="Client Logo" 
                  className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" 
                />
             ))}
           </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
