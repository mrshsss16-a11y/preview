import React from 'react';
import { MapPin, Phone, Mail, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-10 mt-32 border-t border-gray-200/50 bg-gradient-to-b from-transparent to-gray-50/80 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#58A8B4]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h3 className="text-3xl font-extrabold text-[#58A8B4]">أورا للتسويق</h3>
            <p className="text-gray-500 font-medium max-w-sm leading-relaxed">
              وكالة تسويق رقمي سعودية متخصصة في صناعة الهوية والنمو الرقمي من قلب مكة المكرمة إلى العالم.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/60 border border-[#58A8B4]/20 text-[#438FB3] px-4 py-2 rounded-full font-bold text-sm shadow-sm">
              <Award size={18} /> شريك رقمي معتمد - منشآت
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[#1A1D20]">روابط سريعة</h4>
            <ul className="space-y-3 text-gray-500 font-medium">
              {['الرئيسية', 'عن أورا', 'خدماتنا', 'أعمالنا', 'المدونة'].map((link) => (
                <li key={link}><a href="#" className="hover:text-[#58A8B4] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[#1A1D20]">تواصل معنا</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="flex items-center gap-3"><MapPin size={20} className="text-[#58A8B4]"/> مكة المكرمة، الشوقية</li>
              <li className="flex items-center gap-3"><Phone size={20} className="text-[#58A8B4]"/> +966 59 030 7863</li>
              <li className="flex items-center gap-3"><Mail size={20} className="text-[#58A8B4]"/> info@aura-mkt.com</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200/50 text-gray-400 text-sm font-medium">
          <p>© 2026 أورا للتسويق. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#58A8B4]">الشروط والأحكام</a>
            <a href="#" className="hover:text-[#58A8B4]">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
