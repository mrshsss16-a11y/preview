// @ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowUpLeft, Sparkles, Filter } from 'lucide-react';

// بيانات مشاريع أورا الحقيقية
const PROJECTS = [
  {
    id: 1,
    title: "كدانة - اليوم الوطني",
    category: "حملات إعلانية",
    client: "كدانة",
    videoUrl: "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D9%83%D8%AF%D8%A7%D9%86%D8%A9%20%D8%A7%D9%84%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A.mp4",
    span: "col-span-12 md:col-span-8", // يأخذ مساحة أكبر للفت الانتباه
  },
  {
    id: 2,
    title: "كلفن (Kelvin)",
    category: "هوية بصرية",
    client: "كلفن",
    videoUrl: "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/ssstwitter.com_1735982275927%20(2).webm",
    span: "col-span-12 md:col-span-4",
  },
  {
    id: 3,
    title: "تطبيق مكانة",
    category: "تحسين محركات البحث",
    client: "مكانة",
    videoUrl: "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/3.webm",
    span: "col-span-12 md:col-span-4",
  },
  {
    id: 4,
    title: "مجمع البدر الطبي",
    category: "حملات إعلانية",
    client: "البدر الطبي",
    // نستخدم فيديو كلفن مؤقتاً كعنصر نائب فخم
    videoUrl: "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/ssstwitter.com_1735982275927%20(2).webm",
    span: "col-span-12 md:col-span-8",
  }
];

const CATEGORIES = ["الكل", "حملات إعلانية", "هوية بصرية", "تحسين محركات البحث"];

export default function PortfolioPageContent() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  // تصفية المشاريع بناءً على الفئة المختارة
  const filteredProjects = PROJECTS.filter(project => 
    activeCategory === "الكل" ? true : project.category === activeCategory
  );

  return (
    <div className="w-full flex flex-col gap-16 pt-32 pb-20 min-h-screen">
      
      {/* 1. هيرو الأعمال */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-gradient-to-b from-[#58A8B4]/10 to-transparent blur-3xl -z-10 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-[#58A8B4]/30 text-[#58A8B4] px-5 py-2 rounded-full font-bold text-sm shadow-sm"
        >
          <Sparkles size={16} /> معرض الإبداع
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 80 }}
          className="text-4xl md:text-6xl font-black text-[#1A1D20] leading-tight"
        >
          أعمال تتحدث عن <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#58A8B4] to-[#438FB3]">نفسها</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto font-medium"
        >
          استكشف أبرز قصص النجاح التي صنعناها لشركائنا. ندمج الفن بالبيانات لنحقق أثراً يتجاوز التوقعات.
        </motion.p>
      </section>

      {/* 2. شريط الفلترة الزجاجي */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 bg-white/40 backdrop-blur-2xl border border-white/60 p-2 rounded-full shadow-[0_8px_30px_rgb(179,183,193,0.1)] w-fit mx-auto"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeCategory === cat ? "text-white" : "text-gray-500 hover:text-[#1A1D20]"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-[#58A8B4] rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
              )}
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* 3. شبكة الأعمال (Bento Grid) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-12 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className={`gpu-accelerated group relative overflow-hidden rounded-[2.5rem] bg-gray-900 shadow-2xl h-[400px] md:h-[500px] ${project.span}`}
              >
                {/* خلفية الفيديو المستمرة */}
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                {/* تدرج لوني للحماية */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D20] via-black/20 to-transparent pointer-events-none" />

                {/* المحتوى الزجاجي (يظهر عند التمرير أو في الأسفل) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-end justify-between">
                    <div>
                      <p className="text-[#58A8B4] font-bold text-sm mb-2">{project.category}</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-gray-300 font-medium text-sm">العميل: {project.client}</p>
                    </div>
                    
                    <button className="w-14 h-14 rounded-full bg-white text-[#1A1D20] flex items-center justify-center hover:bg-[#58A8B4] hover:text-white transition-colors duration-300 shadow-lg">
                      <ArrowUpLeft size={28} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* حالة عدم وجود مشاريع في القسم */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-gray-500 font-bold text-xl">جاري تحديث الأعمال في هذا القسم...</p>
          </motion.div>
        )}
      </section>

    </div>
  );
}
