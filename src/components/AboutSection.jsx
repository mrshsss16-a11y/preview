// @ts-nocheck
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  
  // تأثير Parallax (محاكاة GSAP ScrollTrigger)
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scaleGlobe = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const rotateGlobe = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={targetRef} className="relative py-32 px-6 overflow-hidden min-h-screen flex items-center bg-aura-bg font-din">
      {/* طبقات الزجاج السائل العائمة في الخلفية */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-aura-glass rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-aura-primary/20 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* المحتوى النصي (تطفو فوق الزجاج السائل) */}
        <motion.div style={{ y: yText }} className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aura-primary/30 bg-white/40 backdrop-blur-md w-fit">
            <span className="text-aura-accent font-bold text-sm">القصة والقيم</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-aura-text leading-tight">
            في قلب مكة، حيث تلتقي <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-primary to-aura-accent">الروحانية بالطموح</span>
          </h2>
          
          <p className="text-lg text-aura-text/70 leading-relaxed font-medium bg-aura-glass liquid-glass-filter p-6 rounded-3xl border border-white/40 shadow-liquid-glass">
            وُلدت فكرة 'أورا'. لم تكن مجرد خطة عمل، بل كانت شرارة شغف لإعادة تعريف الصورة النمطية للتسويق. نحن نؤمن أن نرسم ملامح المستقبل الرقمي انطلاقًا من أطهر البقاع، لنكون المساهم الأول في تحقيق طموحات رؤية 2030.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {['الإبداع: نتجاوز المألوف', 'الرقي: في أدق التفاصيل', 'الأصالة: نستلهم من مكة'].map((val, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/60 border border-white/50 shadow-sm backdrop-blur-sm text-center">
                <span className="block text-aura-primary text-2xl mb-2">✨</span>
                <span className="text-aura-accent font-bold text-xs md:text-sm">{val}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* الكرة الأرضية ثلاثية الأبعاد (3D Globe Aceternity Placeholder) */}
        <div className="relative h-[500px] w-full flex justify-center items-center isolate">
          <motion.div 
            style={{ scale: scaleGlobe, rotate: rotateGlobe }}
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-[0.5px] border-aura-primary/30 bg-gradient-to-br from-aura-accent/10 to-aura-primary/5 shadow-[inset_0_0_50px_rgba(88,168,180,0.2)] flex items-center justify-center overflow-hidden liquid-glass-filter"
          >
            {/* خطوط الطول والعرض للكرة */}
            <div className="absolute w-[200%] h-[200%] bg-[linear-gradient(rgba(88,168,180,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(88,168,180,0.1)_1px,transparent_1px)] bg-[size:40px_40px] rounded-full [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
            <div className="absolute w-4 h-4 bg-aura-primary rounded-full shadow-[0_0_20px_10px_rgba(88,168,180,0.6)]">
              <div className="absolute -top-6 -left-8 text-xs font-bold text-aura-accent bg-white/80 px-2 py-1 rounded-full">مكة المكرمة</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}