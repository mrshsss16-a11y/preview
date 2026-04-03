import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = ['الكل', 'SEO', 'هوية بصرية', 'تطوير ويب', 'إعلانات'];

export default function CategoryFilter({ onFilterChange }) {
  const [active, setActive] = useState('الكل');

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => { setActive(cat); onFilterChange?.(cat); }}
          className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${
            active === cat 
            ? 'bg-[#58A8B4] text-white border-[#58A8B4] shadow-md' 
            : 'bg-white text-[#B3B7C1] border-[#B3B7C1]/30 hover:border-[#58A8B4]'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
