// @ts-nocheck
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ChevronRight, ChevronLeft } from 'lucide-react';

// ==========================================
// بيانات أعمال أورا الحقيقية (CMS Ready)
// ==========================================
const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "كدانة - اليوم الوطني",
    category: "حملة إعلانية وتصوير سينمائي",
    videoUrl: "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/%D9%83%D8%AF%D8%A7%D9%86%D8%A9%20%D8%A7%D9%84%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A.mp4"
  },
  {
    id: 2,
    title: "كلفن (Kelvin)",
    category: "إدارة المحتوى والهوية البصرية",
    videoUrl: "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/ssstwitter.com_1735982275927%20(2).webm"
  },
  {
    id: 3,
    title: "تطبيق مكانة",
    category: "تحسين ظهور محركات البحث SEO",
    videoUrl: "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/3.webm"
  },
  {
    id: 4,
    title: "مجمع البدر الطبي",
    category: "حملات تسويقية وإدارة تواصل",
    // فيديو افتراضي فخم في حال لم يتوفر فيديو للمشروع
    videoUrl: "https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/ssstwitter.com_1735982275927%20(2).webm" 
  }
];

export default function CinematicShowreel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const activeProject = PORTFOLIO_DATA[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PORTFOLIO_DATA.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PORTFOLIO_DATA.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="w-full flex flex-col gap-8">
      {/* عنوان القسم */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1D20]">
          أعمال <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#58A8B4] to-[#438FB3]">تصنع الفارق</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          مشاريع نفخر بها، حيث دمجنا الإبداع بالبيانات لنحقق نتائج استثنائية.
        </p>
      </div>

      {/* حاوية العرض السينمائي (Bento Box) */}
      <div className="relative w-full h-[60vh] md:h-[75vh] rounded-[2rem] overflow-hidden shadow-2xl group bg-gray-900">
        
        {/* 1. طبقة الفيديو (z-0) */}
        <AnimatePresence mode="wait">
          <motion.video
            key={activeProject.id} // مفتاح مهم لإجبار الرياكت على تحديث الفيديو عند التغيير
            ref={videoRef}
            src={activeProject.videoUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </AnimatePresence>

        {/* 2. طبقة التدرج اللوني لحماية النصوص (z-10) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* 3. طبقة الجزيرة الزجاجية التفاعلية (z-20) */}
        <div className="absolute bottom-6 md:bottom-10 left-6 right-6 md:left-10 z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          
          {/* معلومات المشروع */}
          <div className="flex-1">
            <motion.div
              key={`text-${activeProject.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] inline-block"
            >
              <h3 className="text-3xl font-bold text-white mb-2">{activeProject.title}</h3>
              <p className="text-[#58A8B4] font-medium text-lg">{activeProject.category}</p>
            </motion.div>
          </div>

          {/* أزرار التحكم الزجاجية */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-full shadow-lg">
            <button 
              onClick={toggleMute}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            
            <div className="w-px h-8 bg-white/20 mx-1" /> {/* خط فاصل */}

            <button 
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
            
            <button 
              onClick={togglePlay}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#58A8B4] hover:bg-[#438FB3] text-white shadow-[0_0_20px_rgba(88,168,180,0.4)] transition-all"
            >
              {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
            </button>

            <button 
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
