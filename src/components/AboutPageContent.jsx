// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Search, LineChart, Lightbulb, TrendingUp } from 'lucide-react';

const STATS = [
  { id: 1, number: '+85', label: 'مشروع ناجح' },
  { id: 2, number: '+120', label: 'حملة إعلانية' },
  { id: 3, number: '+50', label: 'عميل سعيد' },
  { id: 4, number: '+400', label: 'فكرة مبتكرة' },
];

const METHODOLOGY = [
  { id: 1, title: 'البحث والاستكشاف', desc: 'دراسة شاملة للسوق والمنافسين لتحديد الفرص الذهبية لنمو علامتك.', icon: Search },
  { id: 2, title: 'التخطيط الاستراتيجي', desc: 'رسم خارطة طريق واضحة المعالم لتحقيق الأهداف الاستراتيجية بدقة.', icon: LineChart },
  { id: 3, title: 'الإبداع والتنفيذ', desc: 'تحويل الاستراتيجيات إلى محتوى بصري ونصي يأسر القلوب والعقول.', icon: Lightbulb },
  { id: 4, title: 'النمو والقياس', desc: 'مراقبة الأداء وتحسين النتائج لضمان استدامة النجاح والريادة.', icon: TrendingUp },
];

export default function AboutPageContent() {
  return (
    <div className="w-full flex flex-col gap-24 pt-32 pb-20">
      
      {/* 1. قسم القصة (الهيرو الداخلي) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="inline-block bg-white/60 backdrop-blur-md border border-[#58A8B4]/30 text-[#438FB3] px-6 py-2 rounded-full font-bold text-sm shadow-sm mb-4"
        >
          قصتنا .. من أطهر بقاع الأرض
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 80 }}
          className="text-4xl md:text-6xl font-extrabold text-[#1A1D20] leading-tight max-w-4xl mx-auto"
        >
          من قلب مكة، ننطلق بإبداعنا الرقمي نحو <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#58A8B4] to-[#438FB3]">العالم</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed"
        >
          بدأت رحلتنا مستلهمين من عراقة مكة المكرمة روح الاستمرار، ومن تطورها شغف الابتكار. في "أورا"، نحن لا نقدم مجرد خدمات تسويقية، بل نصنع قصص نجاح تتجاوز الحدود الجغرافية بمزيج من الخبرة العالمية واللمسة المحلية الأصيلة.
        </motion.p>
      </section>

      {/* 2. شريط الأرقام والإحصائيات */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, delay: idx * 0.1 }}
              className="gpu-accelerated bg-white/40 backdrop-blur-2xl border border-white/60 p-8 rounded-3xl text-center shadow-[0_8px_30px_rgb(179,183,193,0.1)] hover:shadow-[0_8px_40px_rgb(88,168,180,0.15)] transition-shadow"
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#58A8B4] mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. منهجية العمل (خط زمني / شبكة) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1D20]">منهجية العمل في <span className="text-[#58A8B4]">أورا</span></h2>
          <p className="text-gray-500">طريقنا الواضح والمدروس لتحويل أفكارك إلى نجاح ملموس.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* خط وهمي يربط الخطوات في الشاشات الكبيرة */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B3B7C1]/30 to-transparent -translate-y-1/2 z-0" />
          
          {METHODOLOGY.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 70, damping: 15, delay: idx * 0.15 }}
              className="gpu-accelerated relative z-10 group bg-white/50 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(179,183,193,0.1)] hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-[#58A8B4] group-hover:bg-[#58A8B4] group-hover:text-white transition-colors duration-300 mb-6">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1D20] mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
