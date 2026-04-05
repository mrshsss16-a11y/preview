// @ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative z-10 font-din min-h-[80vh] flex flex-col justify-center">
      <div className="text-center mb-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-aura-accent mb-4">
          حيث يبدأ بريق علامتك..
        </motion.h2>
        <p className="text-lg text-aura-text/60">تواصل معنا الآن لنرسم خطة نجاحك القادمة.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* معلومات التواصل */}
        <div className="md:col-span-2 flex flex-col gap-6 p-8 rounded-[2.5rem] bg-aura-accent text-white shadow-xl overflow-hidden relative isolate">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
          <h3 className="text-2xl font-bold mb-4">بيانات الاتصال</h3>
          <div className="flex flex-col gap-4 text-white/80">
            <div className="flex items-center gap-3"><span className="text-xl">✉️</span> info@aurateam3.com</div>
            <div className="flex items-center gap-3"><span className="text-xl">📍</span> مكة المكرمة، المملكة العربية السعودية</div>
            <div className="flex items-center gap-3"><span className="text-xl">𝕏</span> @AuraTeam</div>
          </div>
        </div>

        {/* نموذج التواصل (Shadcn UI style + Magic UI micro-interactions) */}
        <div className="md:col-span-3 p-8 rounded-[2.5rem] bg-aura-glass border border-aura-glassBorder backdrop-blur-2xl liquid-glass-filter shadow-liquid-glass">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-aura-text/80 px-2">الاسم الكريم</label>
                    <input type="text" required className="w-full bg-white/40 border border-white/50 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-aura-primary/50 focus:border-aura-primary transition-all shadow-sm backdrop-blur-md" placeholder="محمد عبدالله" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-aura-text/80 px-2">الشركة / المشروع</label>
                    <input type="text" className="w-full bg-white/40 border border-white/50 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-aura-primary/50 focus:border-aura-primary transition-all shadow-sm backdrop-blur-md" placeholder="اسم شركتك" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-aura-text/80 px-2">نوع الخدمة المطلوبة</label>
                  <select className="w-full bg-white/40 border border-white/50 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-aura-primary/50 focus:border-aura-primary transition-all shadow-sm backdrop-blur-md appearance-none text-aura-text/80">
                    <option>التسويق الرقمي (SEO & Ads)</option>
                    <option>الهوية البصرية</option>
                    <option>إدارة المنصات</option>
                    <option>التجارة الإلكترونية</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-aura-text/80 px-2">الرسالة</label>
                  <textarea rows="4" required className="w-full bg-white/40 border border-white/50 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-aura-primary/50 focus:border-aura-primary transition-all shadow-sm backdrop-blur-md resize-none" placeholder="كيف يمكننا مساعدتك؟"></textarea>
                </div>

                <MagneticButton className="mt-2 w-full py-4 rounded-2xl bg-aura-primary text-white font-bold text-lg shadow-[0_10px_20px_-10px_rgba(88,168,180,0.5)]">
                  إرسال الطلب ✨
                </MagneticButton>
              </motion.form>
            ) : (
              <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-4xl mb-4 shadow-inner">✓</div>
                <h3 className="text-2xl font-bold text-aura-accent mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-aura-text/60">سيتواصل معك فريق أورا في أقرب وقت.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}