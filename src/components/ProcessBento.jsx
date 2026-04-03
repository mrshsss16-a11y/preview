import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Route, Rocket, BarChart3 } from 'lucide-react';

const PROCESS_STEPS = [
  { icon: Lightbulb, title: 'الاستكشاف والتحليل', desc: 'ندرس علامتك، نحلل منافسيك، ونفهم جمهورك المستهدف بدقة.', delay: 0.1 },
  { icon: Route, title: 'الاستراتيجية', desc: 'نرسم خريطة طريق واضحة ومخصصة لتحقيق أهدافك بأسرع وقت.', delay: 0.2 },
  { icon: Rocket, title: 'التنفيذ والإطلاق', desc: 'نحول الخطط إلى واقع ملموس بتصاميم وحملات احترافية.', delay: 0.3 },
  { icon: BarChart3, title: 'القياس والتحسين', desc: 'نراقب الأداء يومياً ونحسن النتائج لضمان أعلى عائد استثماري.', delay: 0.4 },
];

export default function ProcessBento() {
  return (
    <div className="relative w-full py-10">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#438FB3] font-bold tracking-wider uppercase text-sm mb-3 block">كيف نعمل؟</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-black text-[#1A1D20]">منهجية <span className="text-[#58A8B4]">هندسية</span> دقيقة</motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* خط الربط بين الخطوات (يظهر فقط في الشاشات الكبيرة) */}
        <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#B3B7C1]/30 to-transparent -translate-y-1/2 z-0" />

        {PROCESS_STEPS.map((step, idx) => (
          <motion.div 
            key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: step.delay }}
            className="bg-white/60 backdrop-blur-xl border border-[#B3B7C1]/30 p-8 rounded-[2rem] text-center relative z-10 hover:border-[#58A8B4]/50 hover:shadow-[0_10px_30px_rgba(88,168,180,0.15)] transition-all duration-300 group"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FDFDFD] border-2 border-[#58A8B4]/20 flex items-center justify-center mb-6 group-hover:bg-[#58A8B4] transition-colors duration-300">
              <step.icon size={28} className="text-[#438FB3] group-hover:text-white transition-colors" />
            </div>
            <div className="absolute top-8 right-8 text-6xl font-black text-[#B3B7C1]/10 pointer-events-none group-hover:text-[#58A8B4]/5 transition-colors">0{idx + 1}</div>
            <h3 className="text-xl font-bold text-[#1A1D20] mb-3 group-hover:text-[#438FB3] transition-colors">{step.title}</h3>
            <p className="text-[#B3B7C1] font-medium text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
