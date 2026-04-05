import React from 'react';

export default function Footer() {
  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'أعمالنا', path: '/portfolio' },
    { name: 'المدونة', path: '/blog' }
  ];

  return (
    <footer className="bg-[#070F1A] border-t border-[#1ABDA8]/20 pt-16 pb-8 relative z-20" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* نبذة عن آورا */}
          <div className="md:col-span-5">
            <img src="https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/cropped-%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A3%D9%88%D8%B1%D8%A7-02-2-1.webp" alt="Aura Logo" className="h-12 w-auto brightness-0 invert opacity-90 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md font-medium">
              آورا للتسويق الرقمي. ننطلق من مكة المكرمة لنصنع هالات رقمية فارقة للعلامات التجارية الطموحة من خلال حلول تسويقية متكاملة ومبتكرة تعتمد على البيانات والنتائج.
            </p>
          </div>

          {/* روابط سريعة (الآن مربوطة ديناميكياً) */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1ABDA8]"></span>
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="text-gray-400 hover:text-[#1ABDA8] transition-colors text-sm font-medium flex items-center gap-2">
                    <svg className="w-3 h-3 text-[#1ABDA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1ABDA8]"></span>
              تواصل معنا
            </h3>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="flex items-center gap-3 hover:text-[#1ABDA8] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#1ABDA8]/10 flex items-center justify-center text-[#1ABDA8]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <a href="mailto:info@aura-mkt.com">info@aura-mkt.com</a>
              </li>
              <li className="flex items-center gap-3 hover:text-[#1ABDA8] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#1ABDA8]/10 flex items-center justify-center text-[#1ABDA8]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <a href="tel:+966500000000" dir="ltr">+966 50 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1ABDA8]/10 flex items-center justify-center text-[#1ABDA8]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span>مكة المكرمة، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

        </div>

        {/* حقوق النشر */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>© {new Date().getFullYear()} وكالة آورا للتسويق. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#1ABDA8] transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-[#1ABDA8] transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
