import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUsBento() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 relative">
      
      {/* Contact Info (Dark Elegant Pane) */}
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1A1D20] rounded-[2.5rem] p-10 md:p-14 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#58A8B4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#438FB3]/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <h2 className="text-4xl font-black mb-4">لنبدأ <span className="text-[#58A8B4]">هالتك</span>.</h2>
          <p className="text-[#B3B7C1] mb-12 text-lg">دعنا نناقش كيف يمكننا تحويل أهدافك إلى أرقام ونتائج ملموسة على أرض الواقع.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#58A8B4]/20 transition-colors"><Phone className="text-[#58A8B4]" size={24} /></div>
              <div><p className="text-sm text-[#B3B7C1] mb-1">اتصل بنا</p><p className="text-xl font-bold font-sans" dir="ltr">+966 59 030 7863</p></div>
            </div>
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#58A8B4]/20 transition-colors"><Mail className="text-[#58A8B4]" size={24} /></div>
              <div><p className="text-sm text-[#B3B7C1] mb-1">راسلنا</p><p className="text-xl font-bold font-sans">hello@aura-mkt.com</p></div>
            </div>
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#58A8B4]/20 transition-colors"><MapPin className="text-[#58A8B4]" size={24} /></div>
              <div><p className="text-sm text-[#B3B7C1] mb-1">مقرنا</p><p className="text-xl font-bold">مكة المكرمة، الشوقية</p></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form (Glassmorphism) */}
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/60 backdrop-blur-2xl border border-[#B3B7C1]/30 rounded-[2.5rem] p-10 md:p-14 shadow-sm">
        <h3 className="text-2xl font-bold text-[#1A1D20] mb-8">سجل اهتمامك</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#438FB3] mb-2">الاسم بالكامل</label>
              <input type="text" className="w-full bg-white border border-[#B3B7C1]/40 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#58A8B4] focus:border-transparent transition-all" placeholder="محمد عبدالله" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#438FB3] mb-2">رقم الجوال</label>
              <input type="tel" className="w-full bg-white border border-[#B3B7C1]/40 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#58A8B4] focus:border-transparent transition-all" placeholder="05X XXX XXXX" dir="ltr" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#438FB3] mb-2">تفاصيل المشروع</label>
            <textarea rows="4" className="w-full bg-white border border-[#B3B7C1]/40 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#58A8B4] focus:border-transparent transition-all resize-none" placeholder="حدثنا عن أهدافك وما تتطلع لتحقيقه..."></textarea>
          </div>
          <button type="button" className="w-full bg-[#58A8B4] hover:bg-[#438FB3] text-white font-bold text-lg py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2 group">
            إرسال الطلب <Send size={20} className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </motion.div>

    </div>
  );
}
