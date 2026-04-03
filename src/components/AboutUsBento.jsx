import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Users } from 'lucide-react';

const CLIENT_LOGOS = [
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D9%88%D8%A7%D8%B1%D9%82%D8%A9%20(1).webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%AD%D8%AF%D8%A7%D8%A6%D9%82%20%D8%A7%D9%84%D9%81%D8%B1%D8%A7%D8%AA.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D9%86%D8%A7%D8%AF%D9%8A%20%D9%85%D9%83%D8%A9%20%D8%A7%D9%84%D8%AB%D9%82%D8%A7%D9%82%D9%8A.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%B7%D9%87%20%D8%A7%D9%84%D8%B3%D9%82%D8%A7%D9%81.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D8%B9%D9%85%D8%B1%D8%A7%D9%86.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D8%B3%D9%82%D9%86%D8%AA%D8%B4%D8%B1.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D9%89.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%88%D8%B1%D8%A7%20%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9%20%D8%A7%D9%84%D9%85%D9%84%D9%83%D9%8A%D8%A9.webp",
  "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D8%A7%D9%84%D9%87%D9%84%D8%A7%D9%84-%D8%A7%D9%84%D8%A7%D8%AD%D9%85%D8%B1%20(1).webp"
];

const SCROLLING_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function AboutUsBento() {
  return (
    <div className="grid grid-cols-12 gap-6 relative z-10">
      
      {/* 1. بلوك القصة (8 أعمدة) - زجاجي شفاف (تم إزالة الأرقام المكررة) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="col-span-12 md:col-span-8 bg-white/60 backdrop-blur-xl border border-[#B3B7C1]/30 p-10 md:p-14 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative overflow-hidden group flex flex-col justify-center"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#58A8B4]/5 rounded-bl-[100px] pointer-events-none" />
        <h2 className="text-3xl md:text-5xl font-black text-[#1A1D20] mb-6 leading-tight">نحن أورا.. <br/><span className="text-transparent bg-clip-text bg-gradient-to-l from-[#58A8B4] to-[#438FB3]">حيث تلتقي العبقرية بالإنسانية</span></h2>
        <p className="text-[#B3B7C1] font-medium leading-relaxed text-lg md:text-xl max-w-2xl m-0">
          بدأت رحلتنا في مكة المكرمة، مستلهمين من عراقتها روح الاستمرار ومن تطورها شغف الابتكار. في "أورا"، لا نقدم مجرد خدمات تسويقية، بل نصنع قصص نجاح تتجاوز الحدود الجغرافية وترسخ في وجدان جمهورك.
        </p>
      </motion.div>

      {/* 2. بلوك الرؤية (4 أعمدة) - التباين الداكن الفخم */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="col-span-12 md:col-span-4 bg-[#1A1D20] p-10 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden"
      >
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#438FB3]/20 rounded-full blur-3xl pointer-events-none" />
        <div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl w-fit mb-8"><Target className="text-[#58A8B4]" size={32}/></div>
          <h3 className="text-2xl font-bold mb-4">الرؤية والجوهر</h3>
          <p className="text-[#B3B7C1] font-medium text-base leading-relaxed mb-6">نؤمن أن الأرقام مهمة، لكن المشاعر هي ما يصنع الولاء. ندمج البيانات الدقيقة مع الفهم العميق للسلوك الإنساني لبناء هالة لا تُنسى.</p>
        </div>
        <div className="flex items-center gap-2 text-[#58A8B4] font-bold text-sm">
           <Compass size={18} /> منهجية دقيقة ومستدامة
        </div>
      </motion.div>

      {/* 3. شريط الشعارات (عرض كامل) - زجاجي وناعم */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="col-span-12 bg-white/50 backdrop-blur-md border border-[#B3B7C1]/20 py-10 rounded-[2.5rem] overflow-hidden"
      >
        <div className="px-10 mb-8 flex items-center justify-between">
            <h4 className="text-xl font-bold text-[#1A1D20] flex items-center gap-2"><Users className="text-[#58A8B4]"/> نعتز بثقة شركائنا</h4>
            <div className="h-px bg-[#B3B7C1]/30 flex-1 mx-6" />
        </div>
        
        <div className="relative w-full overflow-hidden flex items-center" dir="ltr">
           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FDFDFD] to-transparent z-10" />
           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FDFDFD] to-transparent z-10" />
           
           <motion.div animate={{ x: [0, -1500] }} transition={{ repeat: Infinity, ease: "linear", duration: 30 }} className="flex items-center gap-16 min-w-max px-8">
             {SCROLLING_LOGOS.map((logo, index) => (
                <img key={index} src={logo} alt="Client Logo" className="h-14 md:h-16 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
             ))}
           </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
