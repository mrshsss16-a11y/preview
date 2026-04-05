// @ts-nocheck
import { useState, useRef } from 'react';

export default function Portfolio({ projects }) {
  const [active, setActive] = useState('الكل');
  const refs = useRef(new Map());

  // استخراج التصنيفات ديناميكياً من المشاريع القادمة من الـ CMS
  const cats = ['الكل', ...new Set(projects.map(p => p.category).filter(Boolean))];

  const filtered = active === 'الكل' 
    ? projects 
    : projects.filter(p => p.category === active);

  function flip(newActive) {
    const rects = new Map();
    refs.current.forEach((el, id) => {
      if (el) rects.set(id, el.getBoundingClientRect());
    });
    
    setActive(newActive);

    requestAnimationFrame(() => {
      refs.current.forEach((el, id) => {
        const prev = rects.get(id);
        if (!prev || !el) return;
        const next = el.getBoundingClientRect();
        const dx = prev.left - next.left;
        const dy = prev.top  - next.top;
        if (!dx && !dy) return;

        el.style.transform = `translate(${dx}px,${dy}px)`;
        el.style.transition = 'none';
        requestAnimationFrame(() => {
          el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
          el.style.transform  = '';
        });
      });
    });
  }

  return (
    <div>
      {/* أزرار الفلترة */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}>
        {cats.map(c => (
          <button
            key={c}
            onClick={() => flip(c)}
            style={{
              padding: '10px 28px', borderRadius: '999px', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '15px',
              border: active === c ? '1.5px solid #58A8B4' : '1.5px solid rgba(179,183,193,0.3)',
              background: active === c ? 'rgba(88,168,180,0.1)' : '#ffffff',
              color: active === c ? '#438FB3' : '#475569',
              fontWeight: active === c ? 800 : 600,
              boxShadow: active === c ? '0 4px 12px rgba(88,168,180,0.1)' : 'none'
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* شبكة المشاريع */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
        {filtered.map(p => (
          <a href={`/portfolio/${p.slug}`}
            key={p.slug}
            ref={el => { if (el) refs.current.set(p.slug, el); }}
            style={{
              background: '#070F1A', borderRadius: '24px', overflow: 'hidden', textDecoration: 'none',
              border: '1px solid rgba(88,168,180,0.15)', transition: 'transform 0.3s, box-shadow 0.3s',
              display: 'flex', flexDirection: 'column'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(88,168,180,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            {/* غلاف المشروع (صورة أو تدرج لوني) */}
            <div style={{ 
              height: '220px', 
              background: p.gradient ? `linear-gradient(135deg, ${p.gradient.split(' ')[1].replace('to-[', '').replace(']','')} 0%, #070F1A 100%)` : 'linear-gradient(135deg, #438FB3 0%, #070F1A 100%)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' 
            }}>
              <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
              <svg width="60" height="60" viewBox="0 0 44 44" fill="none" stroke="#fff" opacity="0.4">
                <path d="M7 38 A20 20 0 0 1 37 38" stroke-width="4" stroke-linecap="round"/>
                <circle cx="22" cy="22" r="6" fill="#fff"/>
              </svg>
            </div>
            
            {/* تفاصيل المشروع */}
            <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', color: '#58A8B4', fontWeight: 800, letterSpacing: '.05em', marginBottom: '8px' }}>
                {p.category || 'أعمال أورا'}
              </span>
              <h3 style={{ color: '#fff', fontWeight: 900, fontSize: '22px', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                {p.title}
              </h3>
              <p style={{ color: '#B3B7C1', fontSize: '14px', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
                {p.client ? `العميل: ${p.client}` : p.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
