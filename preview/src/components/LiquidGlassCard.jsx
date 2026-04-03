import React from 'react';
import { motion } from 'framer-motion';

export default function LiquidGlassCard({ title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative overflow-hidden rounded-[2rem] p-10 border border-aura-glassBorder bg-glass-gradient shadow-liquid-glass liquid-glass-filter group"
    >
      {/* لمعان الانعكاس الزجاجي */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/40 border border-white/50 flex items-center justify-center mb-8 shadow-sm backdrop-blur-md transition-transform duration-500 group-hover:rotate-6">
          <div className="w-6 h-6 bg-gradient-to-tr from-aura-primary to-aura-accent rounded-full animate-pulse opacity-90 shadow-[0_0_15px_rgba(88,168,180,0.6)]" />
        </div>
        
        <h3 className="text-2xl font-bold text-aura-text mb-4 group-hover:text-aura-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-aura-text/70 leading-relaxed font-medium text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}