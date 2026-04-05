// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Palette, Search, ShoppingBag, PenTool, Users, CheckCircle2, ArrowLeft } from 'lucide-react';
import ServicesHero from './ServicesHero'; // استدعاء الهيرو الجديد

const DETAILED_SERVICES = [
  {
    id: 1,
    title: 'الحملات الإعلانية الموجهة',
    desc: 'نحن لا نطلق إعلانات فقط، نحن نهندس مسارات بيع متكاملة.',
    icon: Megaphone,
    features: ['إدارة منصات Google و Meta و Snapchat', 'إعادة استهداف ذكية (Retargeting)', 'تحليل المنافسين اليومي'],
    color: '#58A8B4'
  },
  {
    id: 2,
    title: 'تصميم الهوية البصرية الفاخرة',
    desc: 'نبني هوية بصرية تحكي قصة علامتك التجارية وتترك أثراً ذهنياً لا ينسى.',
    icon: Palette,
    features: ['تصميم الشعارات الاحترافية', 'أدلة العلامة التجارية (Brand Guidelines)', 'تصاميم السوشيال ميديا الإبداعية'],
    color: '#438FB3'
  },
  {
    id: 3,
    title: 'تحسين محركات البحث (SEO)',
    desc: 'اجعل عملاءك يجدونك في الصفحات الأولى عندما يبحثون عن حلولك.',
    icon: Search,
    features: ['تحليل الكلمات المفتاحية', 'تحسين الأداء التقني للموقع', 'بناء الروابط الخلفية (Backlinks)'],
    color: '#B3B7C1'
  },
  {
    id: 4,
    title: 'إدارة المتاجر الإلكترونية',
    desc: 'نحول متجرك من مجرد عرض للمنتجات إلى آلة بيع مستمرة.',
    icon: ShoppingBag,
    features: ['تحسين تجربة المستخدم (UX)', 'زيادة معدلات التحويل (CRO)', 'ربط أدوات التتبع المتقدمة'],
    color: '#58A8B4'
  }
];

export default function ServicesPageContent() {
  return (
    <div className="w-full flex flex-col gap-24 pb-20">
      
      {/* استدعاء الهيرو الفخم المستقل */}
      <ServicesHero />

      {/* 2. عرض الخدمات التفصيلي */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 -mt-10 relative z-30">
        {DETAILED_SERVICES.map((srv, idx) => (
          <motion.div
            key={srv.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, delay: idx * 0.1 }}
            className="gpu-accelerated group relative bg-white/60 backdrop-blur-2xl border border-white/60 p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(179,183,193,0.1)] hover:shadow-[0_20px_50px_rgba(88,168,180,0.15)] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="p-5 rounded-3xl bg-[#FDFDFD] shadow-sm text-[#58A8B4] group-hover:bg-[#58A8B4] group-hover:text-white transition-all duration-500">
                <srv.icon size={36} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1D20] leading-normal">{srv.title}</h2>
            </div>
            <p className="text-gray-500 font-medium mb-8 text-lg leading-relaxed">{srv.desc}</p>
            <ul className="space-y-4">
              {srv.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-[#58A8B4]" />
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* 3. قسم صمم باقتك - دعوة للعمل */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#1A1D20] to-[#2D3339] p-12 md:p-20 rounded-[3rem] overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#58A8B4]/20 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">هل لديك مشروع فريد؟</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
            لا نؤمن بالقوالب الجاهزة. دعنا نصمم لك باقة تسويقية تناسب ميزانيتك وأهدافك بدقة متناهية.
          </p>
          <button className="relative z-10 bg-[#58A8B4] hover:bg-[#438FB3] text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(88,168,180,0.4)] hover:shadow-[0_10px_40px_rgba(88,168,180,0.6)] hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto group">
            صمم باقتك الآن <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}
