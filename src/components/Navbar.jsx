import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#070F1A]/80 backdrop-blur-lg py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-[#1ABDA8]/10' 
          : 'bg-transparent py-6'
      }`} 
      dir="rtl"
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        
        {/* الشعار مع فلاتر التحويل للأبيض */}
        <a href="/" className="relative z-10 block group">
          <img
            src="https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/cropped-%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A3%D9%88%D8%B1%D8%A7-02-2-1.webp"
            alt="Aura Logo"
            /* السحر هنا: brightness-0 يجعله أسود، و invert يقلبه للأبيض */
            className="h-10 md:h-12 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300"
          />
        </a>

        {/* الروابط (تختفي في الجوال مؤقتاً) */}
        <div className="hidden md:flex gap-8 items-center">
          {['الرئيسية', 'من نحن', 'خدماتنا', 'أعمالنا', 'المدونة'].map((item, index) => (
            <a 
              key={index} 
              href={item === 'الرئيسية' ? '/' : `/${item === 'من نحن' ? 'about' : '#'}`} 
              className="text-white/80 hover:text-[#1ABDA8] font-bold text-sm tracking-wide transition-colors relative after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#1ABDA8] hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* زر الإجراء (CTA) */}
        <a 
          href="#contact" 
          className="bg-white/10 hover:bg-[#1ABDA8] border border-white/20 hover:border-[#1ABDA8] text-white hover:text-[#070F1A] px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(26,189,168,0)] hover:shadow-[0_0_20px_rgba(26,189,168,0.4)]"
        >
          ابدأ مشروعك
        </a>
        
      </div>
    </nav>
  );
}
