import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] flex justify-center px-4 pt-6 transition-all duration-500 pointer-events-none">
      
      {/* الكبسولة الزجاجية العائمة */}
      <nav 
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 w-full max-w-[1000px] rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#070F1A]/85 backdrop-blur-xl border border-[#58A8B4]/30 shadow-2xl shadow-[#070F1A]/50' 
            : 'bg-[#070F1A]/50 backdrop-blur-md border border-white/10 shadow-lg'
        }`}
        dir="rtl"
      >
        {/* اللوجو مع فلاتر تفتيح التباين والإضاءة (Brightness + Drop Shadow) */}
        <a href="/" className="flex items-center no-underline group shrink-0">
          <img 
            src="https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/cropped-%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A3%D9%88%D8%B1%D8%A7-02-2-1.webp" 
            alt="شعار وكالة أورا" 
            className="h-8 md:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 brightness-200 contrast-125 drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
            loading="lazy"
          />
        </a>

        {/* الروابط للشاشات الكبيرة */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white/80 hover:text-[#58A8B4] font-bold text-sm transition-colors">الرئيسية</a>
          <a href="/about" className="text-white/80 hover:text-[#58A8B4] font-bold text-sm transition-colors">من نحن</a>
          <a href="/services" className="text-white/80 hover:text-[#58A8B4] font-bold text-sm transition-colors">خدماتنا</a>
          <a href="/portfolio" className="text-white/80 hover:text-[#58A8B4] font-bold text-sm transition-colors">أعمالنا</a>
          <a href="/blog" className="text-white/80 hover:text-[#58A8B4] font-bold text-sm transition-colors">المدونة</a>
        </div>

        {/* زر اتخاذ القرار */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-gradient-to-l from-[#58A8B4] to-[#438FB3] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_15px_rgba(88,168,180,0.5)] transition-all hover:-translate-y-0.5 inline-block">
            ابدأ مشروعك
          </a>
        </div>

        {/* زر القائمة للجوال */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </nav>

      {/* قائمة الجوال المنسدلة */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-[#070F1A] border border-[#58A8B4]/20 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden pointer-events-auto text-center" dir="rtl">
          <a href="/" className="text-white font-bold text-lg py-2 border-b border-white/5">الرئيسية</a>
          <a href="/about" className="text-white font-bold text-lg py-2 border-b border-white/5">من نحن</a>
          <a href="/services" className="text-white font-bold text-lg py-2 border-b border-white/5">خدماتنا</a>
          <a href="/portfolio" className="text-white font-bold text-lg py-2 border-b border-white/5">أعمالنا</a>
          <a href="/blog" className="text-white font-bold text-lg py-2">المدونة</a>
          <a href="#contact" className="mt-4 bg-[#58A8B4] text-[#070F1A] px-6 py-3 rounded-xl font-black text-lg w-full">
            ابدأ مشروعك الآن
          </a>
        </div>
      )}
    </header>
  );
}
