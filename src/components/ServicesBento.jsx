import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Megaphone, Code, ArrowLeft } from 'lucide-react';

const SERVICES = [
  { icon: Search, title: 'تحسين محركات البحث (SEO)', desc: 'تصدر النتائج الأولى في جوجل واجذب عملاء يبحثون عنك بالفعل. استراتيجيات مبنية على البيانات.', colSpan: 'col-span-12 md:col-span-8' },
  { icon: PenTool, title: 'الهوية البصرية', desc: 'نصنع لك هالة فريدة ترسخ في ذهن عميلك من النظرة الأولى.', colSpan: 'col-span-12 md:col-span-4' },
  { icon: Megaphone, title: 'الحملات الإعلانية', desc: 'إدارة وتوجيه ميزانيتك الإعلانية بدقة قناص لتحقيق أعلى عائد على الاستثمار (ROI).', colSpan: 'col-span-12 md:col-span-4' },
  { icon: Code, title: 'التطوير الرقمي', desc: 'برمجة مواقع ومتاجر إلكترونية سريعة، آمنة، ومصممة لتحويل الزوار إلى مشترين.', colSpan: 'col-span-12 md:col-span-8' },
];

export default function ServicesBento() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full relative">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#438FB3] font-bold tracking-wider uppercase text-sm mb-3 block">ماذا نقدم؟</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black text-[#1A1D20]">خدمات <span className="text-[#58A8B4]">تصنع الفارق</span></motion.h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {SERVICES.map((srv, idx) => (
          <motion.div 
            key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
            className={`${srv.colSpan} bg-white/60 backdrop-blur-xl border border-[#B3B7C1]/30 p-8 rounded-[2rem] hover:border-[#58A8B4]/50 hover:shadow-[0_10px_40px_rgba(88,168,180,0.1)] transition-all duration-300 group cursor-pointer flex flex-col justify-between`}
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#58A8B4]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <srv.icon size={28} className="text-[#438FB3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1D20] mb-4 group-hover:text-[#58A8B4] transition-colors">{srv.title}</h3>
              <p className="text-[#B3B7C1] font-medium leading-relaxed">{srv.desc}</p>
            </div>
            <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
              <div className="w-10 h-10 rounded-full bg-[#58A8B4] flex items-center justify-center text-white"><ArrowLeft size={18} /></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Unified CTA for Services */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
         <button onClick={scrollToContact} className="inline-flex items-center gap-3 bg-[#58A8B4] hover:bg-[#438FB3] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:-translate-y-1 transition-all group">
            صمم باقتك المخصصة <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
         </button>
      </motion.div>
    </div>
  );
}
