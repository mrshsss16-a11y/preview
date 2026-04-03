import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpLeft } from 'lucide-react';

const NAV_LINKS = [
  { name: 'الرئيسية', href: '/' },
  { name: 'عن أورا', href: '/about' },
  { name: 'الخدمات', href: '/services' },
  { name: 'أعمالنا', href: '/portfolio' },
  { name: 'المدونة', href: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 100;
      const top = contactSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sticky + Blur Logic */}
        <div className={`relative flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-xl border border-[#B3B7C1]/30 shadow-sm' : 'bg-transparent'}`}>
          
          <a href="/" className="flex items-center">
            <img 
              src="https://pub-8dda25e2267049d98f8e98a0237e7096.r2.dev/cropped-%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A3%D9%88%D8%B1%D8%A7-02-2-1.webp" 
              alt="أورا للتسويق" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-[#1A1D20] font-bold text-sm hover:text-[#58A8B4] transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#58A8B4] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToContact}
            className="hidden sm:flex items-center gap-2 bg-[#58A8B4] hover:bg-[#438FB3] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md group"
          >
            ابدأ مشروعك <ArrowUpLeft size={16} className="group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#1A1D20] p-1 bg-gray-100 rounded-full">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ type: "spring", stiffness: 100 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-3xl border border-[#B3B7C1]/30 p-6 rounded-3xl shadow-2xl md:hidden flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-bold text-[#1A1D20] hover:text-[#58A8B4] border-b border-gray-100 pb-3" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <button onClick={scrollToContact} className="mt-2 text-center bg-[#58A8B4] text-white py-3 rounded-xl font-bold w-full">ابدأ مشروعك</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
