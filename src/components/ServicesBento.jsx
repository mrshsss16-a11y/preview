import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Palette, Users, Search, PenTool, ShoppingBag, ArrowUpLeft } from 'lucide-react';

const SERVICES = [
  { id: 1, title: 'الحملات الإعلانية', desc: 'إدارة حملات (Google, Meta, Snap) لرفع مبيعاتك بذكاء.', icon: Megaphone, span: 'col-span-12 md:col-span-8', color: '#58A8B4' },
  { id: 2, title: 'تصميم الهوية البصرية', desc: 'بناء هوية متكاملة تعكس قيمك وتترك انطباعاً لا ينسى.', icon: Palette, span: 'col-span-12 md:col-span-4', color: '#438FB3' },
  { id: 3, title: 'تحسين محركات البحث (SEO)', desc: 'تصدر نتائج البحث الأولى لزيادة الزيارات العضوية لموقعك.', icon: Search, span: 'col-span-12 md:col-span-4', color: '#B3B7C1' },
  { id: 4, title: 'إدارة المتاجر الإلكترونية', desc: 'تحسين تجربة المستخدم وزيادة معدلات التحويل لمتجرك.', icon: ShoppingBag, span: 'col-span-12 md:col-span-4', color: '#58A8B4' },
  { id: 5, title: 'صناعة المحتوى', desc: 'كتابة وإنتاج مرئي يبرز هوية علامتك التجارية.', icon: PenTool, span: 'col-span-12 md:col-span-4', color: '#438FB3' },
  { id: 6, title: 'إدارة التواصل الاجتماعي', desc: 'تفاعل مستمر وجدولة احترافية لبناء مجتمع حول علامتك.', icon: Users, span: 'col-span-12', color: '#58A8B4' },
];

export default function ServicesBento() {
  return (
    <div className="w-full space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1D20]">حلولنا التسويقية <span className="text-[#58A8B4]">المتكاملة</span></h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">كل ما تحتاجه لتعزيز تواجدك الرقمي تحت سقف واحد، بأيدي خبراء متخصصين.</p>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {SERVICES.map((srv, idx) => (
          <motion.div 
            key={srv.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            /* استخدام Spring Physics لارتداد فخم جداً */
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: idx * 0.1 }}
            className={`gpu-accelerated group relative bg-white/40 backdrop-blur-2xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(179,183,193,0.15)] hover:shadow-[0_8px_40px_rgb(88,168,180,0.2)] transition-shadow overflow-hidden ${srv.span}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#58A8B4]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="p-4 rounded-2xl bg-white/60 shadow-sm text-[#58A8B4] group-hover:scale-110 transition-transform duration-500 ease-out">
                <srv.icon size={32} strokeWidth={1.5} />
              </div>
              <ArrowUpLeft className="text-gray-300 group-hover:text-[#58A8B4] transition-colors duration-300" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1D20] mb-3 relative z-10">{srv.title}</h3>
            <p className="text-gray-600 font-medium relative z-10">{srv.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
