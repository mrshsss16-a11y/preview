import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function لدمج كلاسات Tailwind بذكاء
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ----------------------------------------------------------------------
// 🗄️ CMS INTEGRATION READY:
// هذه المصفوفة يمكن جلبها كـ Props من Astro Content Collections.
// ----------------------------------------------------------------------
const DEFAULT_CATEGORIES = [
  { id: 'all', label: 'الكل' },
  { id: 'branding', label: 'هوية بصرية' },
  { id: 'marketing', label: 'تسويق رقمي' },
  { id: 'web', label: 'تطوير المنصات' },
  { id: 'content', label: 'صناعة المحتوى' },
];

export default function GlassFilter({ categories = DEFAULT_CATEGORIES, onChange }) {
  // تحديد حالة الفلتر النشط (الافتراضي هو أول عنصر في المصفوفة)
  const [activeTab, setActiveTab] = useState(categories[0]?.id || 'all');

  const handleTabClick = (id) => {
    setActiveTab(id);
    // استدعاء دالة خارجية في حال تم تمريرها (لربطها بفلترة المشاريع مثلاً)
    if (onChange) {
      onChange(id);
    }
  };

  return (
    <div className="relative flex justify-center w-full py-6 px-4 z-40 font-din" dir="rtl">
      {/* 
        الحاوية الزجاجية (Glassmorphism Container)
        - overflow-x-auto لدعم التمرير الأفقي في شاشات الجوال
        - إخفاء شريط التمرير باستخدام كلاسات مخصصة (scrollbar-hide)
      */}
      <div 
        className={cn(
          "relative flex items-center p-1.5 md:p-2",
          "bg-white/30 backdrop-blur-3xl border border-white/50 shadow-[0_8px_32px_rgba(179,183,193,0.2)] rounded-full",
          "overflow-x-auto overflow-y-hidden max-w-full",
          // يمكنك إضافة كلاس إخفاء السكرول في ملف CSS العام أو استخدام هذا النمط:
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        )}
      >
        {categories.map((category) => {
          const isActive = activeTab === category.id;

          return (
            <button
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              style={{ WebkitTapHighlightColor: "transparent" }} // لمنع وميض النقر الافتراضي في الجوال
              className={cn(
                "relative px-5 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-bold transition-colors duration-300 outline-none whitespace-nowrap rounded-full shrink-0 group",
                isActive ? "text-[#58A8B4]" : "text-[#1A1D20]/60 hover:text-[#1A1D20]/90"
              )}
            >
              {/* النص فوق الخلفية */}
              <span className="relative z-10">{category.label}</span>

              {/* 
                خلفية الزر النشط المنزلقة (Sliding Pill Animation)
                يتم استخدام layoutId لربط الحركة بين الأزرار المختلفة بفيزياء ارتداد فائقة النعومة
              */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-[#58A8B4]/15 border border-[#58A8B4]/10 shadow-[inset_0_1px_4px_rgba(88,168,180,0.1)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 35,
                    mass: 0.8
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}