// @ts-nocheck
import React, { useState } from 'react';

export default function Footer() {
  const [activePartner, setActivePartner] = useState(0);

  // بيانات تفاعلية لشركاء النجاح تحاكي لوحة الهيرو
  const partners = [
    { name: 'وزارة الثقافة', type: 'حملات إعلانية وهوية', roi: '+340%', duration: 'مستمر', impact: '95%', growth: '88%' },
    { name: 'جامعة أم القرى', type: 'تطوير المنصات الرقمية', roi: '+210%', duration: '١٢ شهر', impact: '85%', growth: '92%' },
    { name: 'إعمار مكة', type: 'إدارة السمعة الرقمية', roi: '+450%', duration: '٢٤ شهر', impact: '98%', growth: '94%' },
    { name: 'درب', type: 'تحسين محركات البحث SEO', roi: '+180%', duration: '٦ أشهر', impact: '75%', growth: '80%' },
    { name: 'فوتوبريك', type: 'صناعة المحتوى الرقمي', roi: '+150%', duration: '٣ أشهر', impact: '88%', growth: '70%' },
    { name: 'Mursh', type: 'تسويق الأداء والمبيعات', roi: '+520%', duration: 'مستمر', impact: '99%', growth: '95%' }
  ];

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'أعمالنا', path: '/portfolio' },
    { name: 'المدونة', path: '/blog' }
  ];

  return (
    <footer className="bg-[#070F1A] rounded-t-[3rem] md:rounded-t-[4rem] border-t border-[#1ABDA8]/20 pt-24 pb-12 relative overflow-hidden mt-12 shadow-[0_-20px_50px_rgba(7,15,26,0.5)] z-20" dir="rtl">
      
      {/* توهج خلفي (Radial Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1ABDA8]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">وثقوا <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#1ABDA8] to-[#0F6E7E]">بـ آورا</span></h2>
          <p className="text-[#94A3B8] text-lg font-medium">أرقامنا الحقيقية تترجم ثقة شركائنا في النجاح.</p>
        </div>

        {/* لوحة التحكم التفاعلية (Dashboard) */}
        <div className="bg-[#0D1F2D]/80 backdrop-blur-xl border border-[#1ABDA8]/20 rounded-[2rem] p-6 md:p-10 shadow-2xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* شبكة الشعارات (الجانب الأيمن) */}
            <div className="lg:col-span-8">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1ABDA8]"></span>
                شركاء النجاح
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {partners.map((partner, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePartner(index)}
                    className={`px-4 py-6 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 border ${
                      activePartner === index 
                        ? 'bg-[#1ABDA8]/10 border-[#1ABDA8] text-[#1ABDA8] shadow-[0_0_20px_rgba(26,189,168,0.2)]' 
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {partner.name}
                  </button>
                ))}
              </div>
            </div>

            {/* لوحة التفاصيل والأرقام (الجانب الأيسر) */}
            <div className="lg:col-span-4 bg-[#070F1A] rounded-2xl p-6 border border-white/5 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#1ABDA8]/20 blur-[50px] rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="text-[#1ABDA8] text-xs font-black uppercase tracking-widest mb-1">نظرة عامة</h4>
                    <h3 className="text-white font-bold text-xl">{partners[activePartner].name}</h3>
                  </div>
                  <span className="bg-[#1ABDA8]/10 text-[#1ABDA8] text-[10px] font-black px-2 py-1 rounded border border-[#1ABDA8]/30">مكتمل</span>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-gray-400 mb-2">
                      <span>نوع المشروع</span>
                      <span className="text-white">{partners[activePartner].type}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-medium text-gray-400 mb-2">
                      <span>الأثر الرقمي</span>
                      <span className="text-[#1ABDA8]">{partners[activePartner].impact}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1ABDA8] transition-all duration-700 ease-out" style={{ width: partners[activePartner].impact }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-medium text-gray-400 mb-2">
                      <span>نمو المبيعات / التفاعل</span>
                      <span className="text-[#0F6E7E]">{partners[activePartner].growth}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0F6E7E] transition-all duration-700 ease-out delay-100" style={{ width: partners[activePartner].growth }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-gray-700/50 pt-4">
                  <div className="flex-1 text-center">
                    <div className="text-[#1ABDA8] font-black text-2xl">{partners[activePartner].roi}</div>
                    <div className="text-gray-300 text-xs">العائد الاستثماري</div>
                  </div>
                  <div className="w-px bg-gray-700/50"></div>
                  <div className="flex-1 text-center">
                    <div className="text-white font-black text-xl mt-1">{partners[activePartner].duration}</div>
                    <div className="text-gray-300 text-xs">مدة الشراكة</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* كبسولة الروابط العائمة في أسفل الفوتر */}
        <div className="flex flex-col items-center">
          <a href="/" className="mb-8 relative group inline-block">
            <img src="https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/cropped-%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A3%D9%88%D8%B1%D8%A7-02-2-1.webp" alt="Aura Logo" className="h-10 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300" />
          </a>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 bg-[#0D1F2D]/60 backdrop-blur-xl border border-[#1ABDA8]/20 rounded-full px-6 md:px-12 py-3 shadow-[0_0_30px_rgba(26,189,168,0.1)] mb-8">
            {navLinks.map((link, index) => (
              <a key={index} href={link.path} className="text-white/80 hover:text-[#1ABDA8] font-bold text-sm transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-6 mb-8">
            <a href="mailto:info@aura-mkt.com" aria-label="أرسل بريد إلكتروني لآورا" className="text-gray-300 hover:text-[#1ABDA8] transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></a>
            <a href="tel:+966500000000" aria-label="اتصل بنا عبر الهاتف" className="text-gray-300 hover:text-[#1ABDA8] transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></a>
          </div>

          <p className="text-gray-400 text-xs font-medium">© {new Date().getFullYear()} وكالة آورا للتسويق. صُنع بشغف في مكة المكرمة.</p>
        </div>

      </div>
    </footer>
  );
}
