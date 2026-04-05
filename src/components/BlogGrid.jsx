// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

export default function BlogGrid({ posts = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, idx) => (
        <motion.a 
          href={`/blog/${post.slug}`}
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group bg-white/60 backdrop-blur-xl border border-[#B3B7C1]/30 rounded-[2.5rem] p-8 hover:border-[#58A8B4]/50 hover:shadow-xl transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-4 mb-6 text-xs font-bold text-[#B3B7C1]">
              <span className="flex items-center gap-1"><Calendar size={14}/> {new Date(post.publishDate).toLocaleDateString('ar-SA')}</span>
              <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
            </div>
            <h3 className="text-2xl font-black text-[#1A1D20] mb-4 group-hover:text-[#58A8B4] transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-[#B3B7C1] text-sm leading-relaxed mb-6 line-clamp-3">
              {post.summary}
            </p>
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#B3B7C1]/10">
            <div className="flex gap-2">
              {post.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[10px] bg-[#58A8B4]/10 text-[#438FB3] px-2 py-1 rounded-md font-bold">#{tag}</span>
              ))}
            </div>
            <div className="w-10 h-10 rounded-full bg-[#FDFDFD] border border-[#B3B7C1]/20 flex items-center justify-center group-hover:bg-[#58A8B4] group-hover:text-white transition-all">
              <ArrowLeft size={18} />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
