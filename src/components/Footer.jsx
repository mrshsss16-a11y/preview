// @ts-nocheck
import React, { useState } from 'react';

export default function Footer() {
  const [activePartner, setActivePartner] = useState(0);

  // بيانات تفاعلية لشركاء النجاح
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

  // شبكة تواصل آورا الجديدة المضيئة
  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/aurateam3", icon: <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
    { name: "X", url: "https://x.com/aurateam3", icon: <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg> },
    { name: "TikTok", url: "https://www.tiktok.com/@aurateam3", icon: <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg> },
    { name: "Email", url: "mailto:info@aurateam3.com", icon: <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> }
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

          {/* شبكة أيقونات آورا المضيئة الجديدة */}
          <div className="flex items-center justify-center gap-4 mb-8" dir="ltr">
            {socials.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#070F1A] border border-white/10 text-gray-400 hover:text-[#1ABDA8] hover:border-[#1ABDA8]/50 transition-all duration-300 shadow-lg"
              >
                <span className="relative z-10">{social.icon}</span>
                {/* التوهج الخلفي عند التمرير */}
                <div className="absolute inset-0 rounded-full bg-[#1ABDA8]/0 group-hover:bg-[#1ABDA8]/15 blur-md transition-all duration-300 z-0"></div>
              </a>
            ))}
          </div>

          <p className="text-gray-400 text-xs font-medium">© {new Date().getFullYear()} وكالة آورا للتسويق. صُنع بشغف في مكة المكرمة.</p>
        </div>

      </div>
    </footer>
  );
}
