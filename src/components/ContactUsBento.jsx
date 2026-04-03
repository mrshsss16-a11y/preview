import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';

import { Mail, Phone, MapPin, Send, Copy } from 'lucide-react';

// أيقونات مخصصة لوسائل التواصل الاجتماعي (استبدالاً لأيقونات lucide المحذوفة)
const TwitterIcon = ({ size, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const InstagramIcon = ({ size, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const LinkedinIcon = ({ size, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const FacebookIcon = ({ size, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;

// ----------------------------------------------------------------------
// 🗄️ CMS INTEGRATION READY:
// هذه البيانات قابلة للاستبدال عبر الـ Props لجلبها من Astro Content Collections.
// ----------------------------------------------------------------------
const DEFAULT_CONTACT_INFO = {
  email: "hello@aura.com",
  phone: "+966 50 000 0000",
  locationTitle: "الرياض، المملكة العربية السعودية",
  locationDesc: "مساحة عمل إبداعية - حيث تولد العبقرية"
};

const DEFAULT_SOCIAL_LINKS = [
  { id: 'twitter', name: 'Twitter', url: '#', icon: TwitterIcon },
  { id: 'instagram', name: 'Instagram', url: '#', icon: InstagramIcon },
  { id: 'linkedin', name: 'LinkedIn', url: '#', icon: LinkedinIcon },
  { id: 'facebook', name: 'Facebook', url: '#', icon: FacebookIcon },
];

export default function ContactUsBento({ 
  contactInfo = DEFAULT_CONTACT_INFO, 
  socialLinks = DEFAULT_SOCIAL_LINKS 
}) {
  // إعدادات react-hook-form
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  // دالة الإرسال (مكان ربط الـ API)
  const onSubmit = async (data) => {
    try {
      // 🔌 أضف كود ربط الـ API هنا (مثل fetch لـ Formspree أو أي Backend)
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      // محاكاة تحميل بسيط لإظهار الفخامة في التفاعل
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', {
        style: { background: '#FDFDFD', color: '#58A8B4', border: '1px solid #B3B7C1' }
      });
      reset();
    } catch (error) {
      toast.error('حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.');
    }
  };

  // دالة النسخ السريع (Click to Copy)
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`تم نسخ ${label} إلى الحافظة!`);
  };

  // وصفة تأثير الزجاج المطلوبة (Apple iPhone Update Style)
  const glassRecipe = "bg-gray-50/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(179,183,193,0.15)] rounded-3xl";
  
  // وصفة حقول الإدخال
  const inputRecipe = "w-full bg-transparent border-b-2 border-[#B3B7C1]/50 focus:border-[#58A8B4] outline-none py-3 text-[#1A1D20] placeholder-[#1A1D20]/40 transition-all duration-300 font-medium";

  // إعدادات الحركة (Framer Motion)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-din text-[#1A1D20] selection:bg-[#58A8B4] selection:text-white" dir="rtl">
      {/* إشعارات النظام (Toaster) */}
      <Toaster position="top-center" dir="rtl" />

      {/* الكتل اللونية المموّهة في الخلفية لدعم شفافية الزجاج */}
      <div className="absolute top-0 right-1/3 w-[30rem] h-[30rem] bg-[#58A8B4]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-10 w-[25rem] h-[25rem] bg-[#438FB3]/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* رأس القسم */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            لنبني معاً <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#58A8B4] to-[#438FB3]">قصتك القادمة</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1A1D20]/70 leading-relaxed font-medium">
            سواء كانت فكرة مجنونة أو خطة استراتيجية، نحن هنا لنستمع. تواصل مع أورا ودعنا نحول الرؤية إلى واقع ملموس.
          </p>
        </motion.div>

        {/* شبكة البنتو */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-12 gap-6"
        >
          
          {/* 1. نموذج التواصل (Interactive Conversational Form) */}
          <motion.div variants={itemVariants} className={`col-span-12 lg:col-span-8 p-8 md:p-12 relative overflow-hidden group ${glassRecipe}`}>
            <h3 className="text-3xl font-bold mb-8 text-[#1A1D20]">أخبرنا عن مشروعك..</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* حقل الاسم */}
                <div className="relative group/input">
                  <input 
                    type="text" 
                    placeholder="الاسم الكريم *" 
                    className={inputRecipe}
                    {...register("name", { required: "الاسم مطلوب لنتعرف عليك" })}
                  />
                  {errors.name && <span className="text-red-400 text-sm absolute -bottom-6 right-0">{errors.name.message}</span>}
                </div>

                {/* حقل البريد */}
                <div className="relative group/input">
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني *" 
                    className={inputRecipe}
                    {...register("email", { 
                      required: "نحتاج بريدك لنرد عليك",
                      pattern: { value: /^\S+@\S+$/i, message: "صيغة البريد غير صحيحة" }
                    })}
                  />
                  {errors.email && <span className="text-red-400 text-sm absolute -bottom-6 right-0">{errors.email.message}</span>}
                </div>
              </div>

              {/* حقل الرسالة */}
              <div className="relative group/input mt-2">
                <textarea 
                  rows="4" 
                  placeholder="كيف يمكننا مساعدتك؟ شاركنا تفاصيل مشروعك أو فكرتك *" 
                  className={`${inputRecipe} resize-none leading-relaxed`}
                  {...register("message", { required: "لا تنسَ كتابة رسالتك!" })}
                ></textarea>
                {errors.message && <span className="text-red-400 text-sm absolute -bottom-6 right-0">{errors.message.message}</span>}
              </div>

              {/* زر الإرسال المغناطيسي/النابض */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="mt-4 self-end flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#58A8B4] to-[#438FB3] text-white font-bold text-lg shadow-[0_10px_30px_-10px_rgba(88,168,180,0.6)] hover:shadow-[0_15px_35px_-10px_rgba(67,143,179,0.7)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                {!isSubmitting && <Send size={20} className="mr-1 rotate-180" />}
              </motion.button>
            </form>
          </motion.div>

          {/* 2. معلومات التواصل المباشر (Direct Contact Cards Stack) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            
            {/* بطاقة الهاتف والبريد */}
            <motion.div variants={itemVariants} className={`flex-1 p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer ${glassRecipe}`} onClick={() => handleCopy(contactInfo.email, 'البريد الإلكتروني')}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#58A8B4]/10 rounded-full blur-3xl -z-10 group-hover:bg-[#58A8B4]/20 transition-colors duration-500"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/50 border border-white/60 flex items-center justify-center text-[#58A8B4] shadow-sm">
                  <Mail size={22} />
                </div>
                <h4 className="text-xl font-bold text-[#1A1D20]">تواصل مباشر</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[#1A1D20]/75 hover:text-[#58A8B4] transition-colors">
                  <span className="font-medium text-lg dir-ltr">{contactInfo.email}</span>
                  <Copy size={16} className="opacity-50" />
                </div>
                <div className="w-full h-px bg-[#B3B7C1]/30"></div>
                <div 
                  className="flex items-center justify-between text-[#1A1D20]/75 hover:text-[#58A8B4] transition-colors"
                  onClick={(e) => { e.stopPropagation(); handleCopy(contactInfo.phone, 'رقم الهاتف'); }}
                >
                  <span className="font-medium text-lg dir-ltr">{contactInfo.phone}</span>
                  <Phone size={16} className="opacity-50" />
                </div>
              </div>
            </motion.div>

            {/* بطاقة الموقع */}
            <motion.div variants={itemVariants} className={`flex-1 p-8 flex flex-col justify-center relative overflow-hidden ${glassRecipe}`}>
              {/* خريطة تجريدية في الخلفية */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1D20 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/50 border border-white/60 flex items-center justify-center text-[#438FB3] shadow-sm">
                  <MapPin size={22} />
                </div>
                <h4 className="text-xl font-bold text-[#1A1D20]">مقر العبقرية</h4>
              </div>
              <p className="text-[#1A1D20]/70 font-medium leading-relaxed relative z-10">
                <strong className="block text-[#1A1D20] mb-1">{contactInfo.locationTitle}</strong>
                {contactInfo.locationDesc}
              </p>
            </motion.div>

          </div>

          {/* 3. الروابط الاجتماعية (Social Bubbles) */}
          <motion.div variants={itemVariants} className={`col-span-12 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 ${glassRecipe}`}>
            <h4 className="text-xl font-bold text-[#1A1D20]">كن جزءاً من مجتمعنا</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -6, scale: 1.1, color: '#438FB3', backgroundColor: 'rgba(255,255,255,0.8)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-white/40 border border-white/60 flex items-center justify-center text-[#1A1D20]/70 shadow-sm backdrop-blur-md transition-colors"
                  >
                    <Icon size={22} strokeWidth={2} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}