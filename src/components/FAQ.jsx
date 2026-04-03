import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: "كيف تبدأ عملية التعاون مع أورا؟", a: "نبدأ بجلسة استشارية مجانية لفهم أهدافك، تليها دراسة للسوق ثم تقديم عرض متكامل واستراتيجية مخصصة." },
  { q: "هل تقدمون خدمات متكاملة للمشاريع الناشئة؟", a: "نعم بالتأكيد! لدينا باقات مخصصة تبدأ من بناء الهوية البصرية وحتى إطلاق الحملات الإعلانية وصناعة المحتوى." },
  { q: "ما الذي يميز أورا عن غيرها من الوكالات؟", a: "فريقنا يجمع بين الخبرة التقنية العالية والفهم العميق للثقافة والاحتياجات المحلية المكية، لنصنع أثراً عالمياً بلمسة محلية." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1D20]">الأسئلة <span className="text-[#58A8B4]">الشائعة</span></h2>
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <motion.div 
            key={idx} 
            layout /* يسمح للمكون بالتمدد بفيزياء بدلاً من التقطيع */
            className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-sm overflow-hidden"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
              className="w-full flex items-center justify-between p-6 text-right cursor-pointer hover:bg-white/50 transition-colors"
            >
              <motion.span layout="position" className="text-lg font-bold text-[#1A1D20]">{faq.q}</motion.span>
              <motion.div layout="position" className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-[#58A8B4] text-white' : 'bg-gray-100 text-gray-500'}`}>
                {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }} 
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="gpu-accelerated"
                >
                  <div className="p-6 pt-0 text-gray-600 font-medium border-t border-gray-100/50 mt-2">{faq.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
