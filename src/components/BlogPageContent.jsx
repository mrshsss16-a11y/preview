import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';

const POSTS = [
  { id: 1, title: 'استراتيجيات SEO المتصدرة في 2026', desc: 'كيف تسيطر على نتائج البحث الأولى باستخدام الذكاء الاصطناعي وتجربة المستخدم.', date: '20 مارس 2026', cat: 'سيو', author: 'فريق أورا', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800' },
  { id: 2, title: 'أثر الهوية البصرية على قرارات الشراء', desc: 'لماذا تستثمر الشركات الكبرى ملايين الدولارات في تصميم شعاراتها وهويتها؟', date: '15 مارس 2026', cat: 'هوية بصرية', author: 'أحمد المكاوي', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800' },
  { id: 3, title: 'التسويق بالمحتوى في عصر السرعة', desc: 'كيف تجذب انتباه عميلك في أقل من 3 ثوانٍ وسط زحام المنشورات.', date: '10 مارس 2026', cat: 'صناعة محتوى', author: 'سارة خالد', img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800' }
];

export default function BlogPageContent() {
  return (
    <div className="w-full flex flex-col gap-16 pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-[#1A1D20]">مدونة <span className="text-[#58A8B4]">أورا</span></h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">أفكار، تحليلات، ورؤى من قلب مكة حول مستقبل التسويق الرقمي.</p>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {POSTS.map((post, idx) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, delay: idx * 0.1 }}
            className="group cursor-pointer bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-[#58A8B4] shadow-sm">
                {post.cat}
              </div>
            </div>
            
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1A1D20] leading-snug group-hover:text-[#58A8B4] transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                {post.desc}
              </p>
              <div className="pt-4 flex items-center text-[#58A8B4] font-bold text-sm gap-2 group-hover:gap-4 transition-all">
                اقرأ المزيد <ArrowLeft size={18} />
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
