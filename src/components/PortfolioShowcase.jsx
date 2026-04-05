// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpLeft } from 'lucide-react';

export default function PortfolioShowcase({ projects = [] }) {
  // استخدام نمط البنتو (Bento) للمشاريع الأربعة الأولى
  const bentoLayouts = [
    "col-span-12 lg:col-span-8", // مشروع كبير (يسار/يمين)
    "col-span-12 lg:col-span-4", // مشروع صغير
    "col-span-12 lg:col-span-4", // مشروع صغير
    "col-span-12 lg:col-span-8", // مشروع كبير
  ];

  return (
    <div className="w-full relative z-10">
      
      {/* Header */}
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
          className="inline-block bg-[#58A8B4]/10 border border-[#58A8B4]/20 text-[#438FB3] px-5 py-2 rounded-full font-bold text-sm mb-4"
        >
          أعمالنا
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} 
          className="text-4xl md:text-5xl font-black text-[#1A1D20]"
        >
          هالات <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#58A8B4] to-[#438FB3]">صنعناها</span>
        </motion.h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {projects.slice(0, 4).map((project, idx) => (
          <motion.a 
            href={`/portfolio/${project.slug}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            key={project.slug || idx} 
            className={`${bentoLayouts[idx] || "col-span-12"} h-[380px] md:h-[450px] rounded-[2.5rem] relative overflow-hidden group block shadow-sm hover:shadow-xl transition-shadow duration-500`}
          >
            {/* 1. Background Gradient (Dynamic from CMS) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient || 'from-[#1A1D20] to-[#438FB3]'} transition-transform duration-700 group-hover:scale-105`} />
            
            {/* 2. Geometric Noise Overlay for Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-40 mix-blend-overlay pointer-events-none" />

            {/* 3. Dark Vignette on Hover (لزيادة وضوح النص) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D20]/90 via-[#1A1D20]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* 4. Glassmorphism Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              
              {/* Top Bar: Category Badge & Icon */}
              <div className="flex justify-between items-start">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-sm">
                  {project.category}
                </span>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                  <ArrowUpLeft className="text-white" size={20} />
                </div>
              </div>

              {/* Bottom Bar: Title & Reveal Description */}
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <h4 className="text-[#58A8B4] font-bold mb-2 tracking-wide uppercase text-sm">
                  {project.client}
                </h4>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                  {project.title}
                </h3>
                
                {/* Description - Hidden until hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                  <p className="text-white/80 text-sm max-w-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
                    {project.desc || project.description}
                  </p>
                </div>
              </div>

            </div>
          </motion.a>
        ))}
      </div>

      {/* Global CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
        className="mt-16 text-center"
      >
        <a href="/portfolio" className="inline-flex items-center gap-2 bg-transparent border-2 border-[#58A8B4] text-[#438FB3] hover:bg-[#58A8B4] hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 group shadow-[0_0_0_rgba(88,168,180,0)] hover:shadow-[0_8px_20px_rgba(88,168,180,0.3)]">
          تصفح كافة أعمالنا
          <ArrowUpLeft size={20} className="group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
        </a>
      </motion.div>

    </div>
  );
}
