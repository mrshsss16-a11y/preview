import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpLeft } from 'lucide-react';

const CATEGORIES = ['الكل', 'هوية بصرية', 'SEO', 'تطوير ويب', 'حملات إعلانية'];

export default function PortfolioGrid({ projects = [] }) {
  const [filter, setFilter] = useState('الكل');

  const filteredProjects = projects.filter(p => filter === 'الكل' || p.category === filter);

  return (
    <div className="w-full relative z-10">
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {CATEGORIES.map((cat, idx) => (
          <button 
            key={idx} onClick={() => setFilter(cat)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border ${
              filter === cat 
                ? 'bg-[#58A8B4] text-white border-[#58A8B4] shadow-[0_4px_15px_rgba(88,168,180,0.3)]' 
                : 'bg-white/50 text-[#B3B7C1] border-[#B3B7C1]/30 hover:border-[#58A8B4] hover:text-[#438FB3]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-12 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.a 
              href={`/portfolio/${project.slug}`}
              layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}
              key={project.slug} 
              className={`${project.colSpan} h-[400px] rounded-[2.5rem] relative overflow-hidden group block`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 mix-blend-overlay" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                    {project.category}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpLeft className="text-white" size={20} />
                  </div>
                </div>

                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-[#58A8B4] font-bold mb-2">{project.client}</h4>
                  <h3 className="text-3xl font-black text-white mb-3 leading-tight">{project.title}</h3>
                  <p className="text-white/70 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
