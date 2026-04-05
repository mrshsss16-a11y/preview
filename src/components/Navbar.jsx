import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // مصفوفة الروابط - يسهل التعديل عليها وإضافة صفحات جديدة مستقبلاً
  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'أعمالنا', path: '/portfolio' },
    { name: 'المدونة', path: '/blog' }
  ];

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 pointer-events-none" dir="rtl">
      
      <nav 
        className={`pointer-events-auto transition-all duration-500 flex items-center justify-between rounded-full px-6 md:px-8 border ${
          isScrolled 
            ? 'bg-[#070F1A]/85 backdrop-blur-xl py-3 border-[#1ABDA8]/30 shadow-[0_10px_40px_-10px_rgba(26,189,168,0.3)]' 
            : 'bg-[#070F1A]/20 backdrop-blur-md py-4 md:py-5 border-white/10 shadow-lg'
        }`}
      >
        {/* الشعار */}
        <a href="/" className="relative z-10 block group">
          <img
            src="https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/cropped-%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A3%D9%88%D8%B1%D8%A7-02-2-1.webp"
            alt="Aura Logo"
            className="h-8 md:h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300"
          />
        </a>

        {/* الروابط الديناميكية */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.path} 
              className="text-white/90 hover:text-[#1ABDA8] font-bold text-sm tracking-wide transition-colors relative after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#1ABDA8] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* زر الإجراء */}
        <a 
          href="#contact" 
          className="bg-[#1ABDA8]/10 hover:bg-[#1ABDA8] border border-[#1ABDA8]/50 hover:border-[#1ABDA8] text-white hover:text-[#070F1A] px-5 md:px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(26,189,168,0)] hover:shadow-[0_0_20px_rgba(26,189,168,0.4)]"
        >
          ابدأ مشروعك
        </a>
      </nav>
      
    </div>
  );
}
