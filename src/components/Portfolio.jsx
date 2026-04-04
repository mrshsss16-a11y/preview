import { useState, useRef } from 'react';

const cats = ['الكل', 'تطوير ويب', 'هوية بصرية', 'SEO', 'حملات إعلانية'];

export default function Portfolio({ projects }) {
  const [active, setActive] = useState('الكل');
  const refs = useRef(new Map());

  // تصفية المشاريع القادمة من الـ CMS بناء على الفئة
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
          el.style.transition = 'transform 0.45s cubic-bezier(0.16,1,0.3,1)';
          el.style.transform  = '';
        });
      });
    });
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
        {cats.map(c => (
          <button
            key={c}
            onClick={() => flip(c)}
            style={{
              padding: '10px 24px', borderRadius: '999px', cursor: 'pointer', transition: 'all 0.2s', fontSize: '14px',
              border: active === c ? '1.5px solid #1ABDA8' : '1px solid #e2e8f0',
              background: active === c ? 'rgba(26,189,168,0.1)' : 'white',
              color: active === c ? '#0F6E7E' : '#64748b',
              fontWeight: active === c ? 700 : 500,
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
        {filtered.map(p => (
          <a href={`/portfolio/${p.slug}`}
            key={p.slug}
            ref={el => { if (el) refs.current.set(p.slug, el); }}
            style={{
              background: '#0D1B2A', borderRadius: '20px', overflow: 'hidden', textDecoration: 'none',
              border: '1px solid rgba(26,189,168,0.15)', transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(26,189,168,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div style={{ height: '180px', background: `linear-gradient(135deg, #070F1A, #1ABDA8)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="48" height="48" viewBox="0 0 48 48">
                <path d="M8 40 A24 24 0 0 1 40 40" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.3"/>
                <path d="M14 40 A20 20 0 0 1 40 40" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" opacity="0.7"/>
                <line x1="40" y1="18" x2="40" y2="40" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" opacity="0.7"/>
              </svg>
            </div>
            <div style={{ padding: '24px' }}>
              <span style={{ fontSize: '11px', color: '#1ABDA8', fontWeight: 800, letterSpacing: '.05em' }}>{p.category}</span>
              <p style={{ color: '#fff', fontWeight: 800, fontSize: '18px', margin: '8px 0 0' }}>{p.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
