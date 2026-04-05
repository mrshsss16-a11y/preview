// @ts-nocheck
import { useState, useRef } from 'react';

export default function PortfolioGrid({ projects }) {
  const [active, setActive] = useState('الكل');
  const refs = useRef(new Map());

  const cats = ['الكل', ...new Set(projects.map(p => p.category).filter(Boolean))];
  const filtered = active === 'الكل' ? projects : projects.filter(p => p.category === active);

  function flip(newActive) {
    const rects = new Map();
    refs.current.forEach((el, id) => { if (el) rects.set(id, el.getBoundingClientRect()); });
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

  const getGradient = (gradString) => {
    if (!gradString) return 'linear-gradient(135deg, #58A8B4 0%, #070F1A 100%)';
    const colorMatch = gradString.match(/to-\[([^\]]+)\]/);
    const color = colorMatch ? colorMatch[1] : '#58A8B4';
    return `linear-gradient(135deg, ${color} 0%, #070F1A 100%)`;
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}>
        {cats.map(c => (
          <button key={c} onClick={() => flip(c)}
            style={{
              padding: '10px 28px', borderRadius: '999px', cursor: 'pointer', transition: 'all 0.2s ease', fontSize: '15px',
              border: active === c ? '1.5px solid #070F1A' : '1.5px solid #cbd5e1',
              background: active === c ? '#070F1A' : '#ffffff',
              color: active === c ? '#ffffff' : '#334155',
              fontWeight: active === c ? 800 : 600,
              boxShadow: active === c ? '0 8px 16px rgba(7,15,26,0.15)' : 'none'
            }}
          >{c}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {filtered.map(p => (
          <a href={`/portfolio/${p.slug}`} key={p.slug} ref={el => { if (el) refs.current.set(p.slug, el); }}
            style={{
              background: '#070F1A', borderRadius: '24px', overflow: 'hidden', textDecoration: 'none',
              border: '1px solid rgba(88,168,180,0.15)', transition: 'transform 0.3s, box-shadow 0.3s',
              display: 'flex', flexDirection: 'column', willChange: 'transform'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(88,168,180,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            <div style={{ height: '220px', background: getGradient(p.gradient), display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
              
              <svg width="60" height="60" viewBox="0 0 44 44" fill="none" stroke="#fff" opacity="0.3">
                <path d="M7 38 A20 20 0 0 1 37 38" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="22" cy="22" r="6" fill="#fff" stroke="none"/>
              </svg>
              
              {/* شارة النتيجة بالأرقام */}
              {p.result && (
                <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(7,15,26,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', color: '#58A8B4', padding: '6px 14px', borderRadius: '12px', fontSize: '12px', fontWeight: 800 }}>
                  النتيجة: {p.result}
                </div>
              )}
            </div>
            
            <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', color: '#58A8B4', fontWeight: 800, letterSpacing: '.05em', marginBottom: '8px' }}>
                {p.category || 'أعمال أورا'}
              </span>
              
              {/* تطبيق السلوجن الجديد "هالة العميل - من الغياب للتصدر" */}
              <h3 style={{ color: '#fff', fontWeight: 900, fontSize: '20px', margin: '0 0 8px 0', lineHeight: 1.4 }}>
                هالة {p.client || 'المشروع'} — من الغياب إلى التصدر
              </h3>
              
              <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
                {p.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
