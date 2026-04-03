import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1D20] text-white pt-20 pb-10 border-t border-[#B3B7C1]/10 rounded-t-[3rem] mt-20 relative overflow-hidden">
      {/* Subtle brand glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#58A8B4]/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/cropped-%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A3%D9%88%D8%B1%D8%A7-02-2-1.webp" 
              alt="أورا للتسويق" 
              className="h-14 mb-6 brightness-0 invert opacity-90"
            />
            <h3 className="text-2xl font-extrabold text-white mb-2">هالتك الفارقة في عالم التسويق.</h3>
            <p className="text-[#B3B7C1] max-w-sm leading-relaxed mt-4">
              وكالة رقمية متكاملة تنطلق من مكة المكرمة لتهندس حضوراً رقمياً يليق بطموح علامتك التجارية.
            </p>
          </div>

          <div>
            <h4 className="text-[#58A8B4] font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-4 text-[#B3B7C1]">
              <li><a href="/" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">الخدمات</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">عن أورا</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">أعمالنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#58A8B4] font-bold mb-6 text-lg">التواصل الاجتماعي</h4>
            <ul className="space-y-4 text-[#B3B7C1]">
              <li><a href="#" className="hover:text-[#58A8B4] transition-colors font-sans">Twitter / X</a></li>
              <li><a href="#" className="hover:text-[#58A8B4] transition-colors font-sans">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#58A8B4] transition-colors font-sans">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#B3B7C1]/20">
          <p className="text-[#B3B7C1] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} وكالة أورا للتسويق. جميع الحقوق محفوظة.
          </p>
          <button onClick={scrollToTop} className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#58A8B4] border border-[#B3B7C1]/20 hover:border-transparent flex items-center justify-center transition-all group">
            <ArrowUp className="text-white group-hover:-translate-y-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
