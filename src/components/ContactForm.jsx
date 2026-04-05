import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // سحب البيانات من النموذج
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      // إرسال البيانات إلى جدول contacts في Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([data]);

      if (error) throw error;
      
      setStatus('success');
      e.target.reset(); // تفريغ النموذج بعد النجاح
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#070F1A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl w-full max-w-2xl mx-auto" dir="rtl">
      
      {status === 'success' ? (
        <div className="text-center py-12 animate-fade-in">
          <div className="w-20 h-20 bg-[#1ABDA8]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#1ABDA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">تم استلام طلبك بنجاح!</h3>
          <p className="text-gray-400">فريق آورا سيقوم بالتواصل معك قريباً لتبدأ رحلة صناعة هالتك الرقمية.</p>
          <button onClick={() => setStatus(null)} className="mt-8 text-[#1ABDA8] font-bold text-sm hover:underline">إرسال طلب آخر</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* الاسم */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">الاسم الكريم <span className="text-red-500">*</span></label>
              <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1ABDA8] focus:ring-1 focus:ring-[#1ABDA8] transition-all" placeholder="أحمد محمد" />
            </div>
            {/* البريد الإلكتروني */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">البريد الإلكتروني <span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1ABDA8] focus:ring-1 focus:ring-[#1ABDA8] transition-all" placeholder="ahmed@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* رقم الجوال */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-2">رقم الجوال</label>
              <input type="tel" id="phone" name="phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1ABDA8] focus:ring-1 focus:ring-[#1ABDA8] transition-all text-left" dir="ltr" placeholder="+966 5X XXX XXXX" />
            </div>
            {/* الخدمة المطلوبة */}
            <div>
              <label htmlFor="service" className="block text-sm font-bold text-gray-300 mb-2">الخدمة المطلوبة</label>
              <select id="service" name="service" className="w-full bg-[#0d1624] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ABDA8] focus:ring-1 focus:ring-[#1ABDA8] transition-all appearance-none cursor-pointer">
                <option value="غير محدد">اختر الخدمة...</option>
                <option value="تصميم هوية بصرية">تصميم هوية بصرية</option>
                <option value="تطوير موقع إلكتروني">تطوير موقع إلكتروني</option>
                <option value="حملات إعلانية">إدارة حملات إعلانية (Ads)</option>
                <option value="تحسين محركات البحث">تحسين محركات البحث (SEO)</option>
                <option value="استشارة تسويقية">استشارة تسويقية</option>
              </select>
            </div>
          </div>

          {/* تفاصيل المشروع */}
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">حدثنا عن مشروعك <span className="text-red-500">*</span></label>
            <textarea id="message" name="message" required rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1ABDA8] focus:ring-1 focus:ring-[#1ABDA8] transition-all resize-none" placeholder="اكتب تفاصيل فكرتك أو مشروعك هنا..."></textarea>
          </div>

          {status === 'error' && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-bold text-center">
              حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.
            </div>
          )}

          {/* زر الإرسال */}
          <button type="submit" disabled={isSubmitting} className="w-full relative group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#0F6E7E] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(26,189,168,0.3)] disabled:opacity-70 disabled:cursor-not-allowed">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1ABDA8] to-[#0F6E7E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-3">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  جاري الإرسال...
                </>
              ) : 'أرسل الطلب الآن'}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
