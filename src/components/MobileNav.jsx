import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MobileNav() {
  const [active, setActive] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: 'work', label: 'أعمالنا', icon: '✨' },
    { id: 'services', label: 'خدماتنا', icon: '⚡' },
    { id: 'contact', label: 'تواصل', icon: '💬' },
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:hidden">
      {/* الحاوية الرئيسية الزجاجية */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-2 rounded-[2rem] shadow-2xl flex justify-between items-center relative overflow-hidden">
        {/* تأثير لمحة ضوء في الخلفية */}
        <div className="absolute inset-0 bg-gradient-to-r from-aura-primary/10 via-purple-500/10 to-aura-primary/10 z-0 pointer-events-none"></div>
        
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative z-10 flex flex-col items-center justify-center w-16 h-14 sm:h-16 rounded-2xl transition-all duration-300"
          >
            {/* الإضاءة الخلفية للزر النشط */}
            {active === item.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/10 shadow-inner border border-white/10 rounded-2xl"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            
            <span className={`text-xl sm:text-2xl mb-1 transition-transform duration-300 ${active === item.id ? 'scale-110' : 'scale-100 opacity-60'}`}>
              {item.icon}
            </span>
            
            {/* يظهر النص للزر النشط فقط بحركة انسيابية */}
            <span 
              className={`text-[10px] font-bold transition-all duration-300 ${
                active === item.id 
                  ? 'text-white opacity-100 translate-y-0' 
                  : 'text-gray-400 opacity-0 h-0 translate-y-2'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}