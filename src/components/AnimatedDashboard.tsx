import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedDashboard() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    // إزالة overflow-hidden من هنا لكي تظهر الشارة السفلية بالكامل
    <div ref={ref} className="relative bg-[#0D1F2D] border border-[#1ABDA8]/20 rounded-2xl p-6 shadow-2xl max-w-sm mx-auto mt-12 reveal in" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-bold text-lg">أداء الحملات</h3>
        <span className="bg-[#1ABDA8]/10 text-[#1ABDA8] text-xs font-black px-2 py-1 rounded-md border border-[#1ABDA8]/30">مباشر</span>
      </div>
      
      <div className="space-y-4">
        {[ { label: 'زيارات عضوية', w: '88%', c: 'bg-[#1ABDA8]' }, { label: 'تفاعل منصات', w: '73%', c: 'bg-[#0F6E7E]' }, { label: 'معدل التحويل', w: '94%', c: 'bg-[#58A8B4]' } ].map((item, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex justify-between text-xs font-medium text-gray-400"><span>{item.label}</span></div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className={`h-full ${item.c} transition-all duration-1000 ease-out`} style={{ width: inView ? item.w : '0%' }} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6 border-t border-gray-700/50 pt-4">
        <div className="flex-1 text-center">
          <div className="text-[#1ABDA8] font-black text-xl">+240%</div>
          <div className="text-gray-500 text-xs">نمو الزيارات</div>
        </div>
        <div className="w-px bg-gray-700/50"></div>
        <div className="flex-1 text-center">
          <div className="text-[#1ABDA8] font-black text-xl">3.2×</div>
          <div className="text-gray-500 text-xs">عائد الاستثمار</div>
        </div>
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#070F1A] border border-[#1ABDA8]/40 text-[#1ABDA8] text-[11px] md:text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(26,189,168,0.3)] z-10">
        نتائج حقيقية لعملاء حقيقيين
      </div>
    </div>
  );
}
