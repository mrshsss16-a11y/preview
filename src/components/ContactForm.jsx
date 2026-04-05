import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [debugMsg, setDebugMsg] = useState("⏳ الفورم ميت (الجافاسكريبت لا يعمل)...");

  useEffect(() => {
    try {
      const url = import.meta.env.PUBLIC_SUPABASE_URL;
      if (url) {
        setDebugMsg("✅ الجافاسكريبت حي يرزق! ومفاتيح قاعدة البيانات متصلة.");
      } else {
        setDebugMsg("⚠️ الجافاسكريبت يعمل، لكن مفاتيح Supabase مفقودة من ملف .env!");
      }
    } catch (err) {
      setDebugMsg("❌ خطأ في النظام: " + err.message);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setDebugMsg("🚀 جاري محاولة الإرسال لقاعدة البيانات...");

    try {
      const formData = new FormData(e.target);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone') || 'لم يدخل',
        service: formData.get('service') || 'غير محدد',
        message: formData.get('message') || 'لا توجد رسالة',
      };

      const { error } = await supabase.from('contacts').insert([data]);

      if (error) {
        throw error;
      }
      
      setStatus('success');
      setDebugMsg("🎉 تم الإرسال بنجاح! راجع التيليجرام الآن.");
      e.target.reset();
    } catch (error) {
      console.error(error);
      setDebugMsg("❌ قاعدة البيانات ترفض الطلب: " + (error.message || "تأكد من الأمان (RLS)"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#070F1A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl w-full max-w-2xl mx-auto" dir="rtl">
      
      {/* شاشة الفحص الذكية */}
      <div className="mb-6 p-4 rounded-xl border border-blue-500/50 bg-blue-900/30 text-white font-bold text-center text-sm md:text-base">
        شاشة الفحص: {debugMsg}
      </div>

      {status === 'success' ? (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-[#1ABDA8] mb-4">تم الإرسال بنجاح!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">الاسم</label>
              <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">الإيميل</label>
              <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white" />
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#1ABDA8] to-[#0F6E7E] p-4 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-all">
            {isSubmitting ? 'جاري الإرسال...' : 'إرسال تجريبي'}
          </button>
        </form>
      )}
    </div>
  );
}
