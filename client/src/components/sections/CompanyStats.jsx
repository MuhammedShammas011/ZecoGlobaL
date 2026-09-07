import { useRef } from 'react';
import { gsap } from '../../animations/gsap';
import useGSAP from '../../hooks/useGSAP';
import './CompanyStats.css';

const stats = [
  { value: 14,      suffix: '+',      label: 'Years of Wood Industry Experience', sub: '' },
  { value: 50000,   suffix: '+ sq.ft',label: 'Manufacturing Facility',            sub: '' },
  { value: null,    suffix: '',        label: 'Distribution',                      text: 'PAN INDIA' },
  { value: null,    suffix: '',        label: 'Market Reach',                      text: 'GLOBAL' },
];

const CompanyStats = () => {
  const sectionRef = useRef(null);
  const numRefs    = useRef([]);

  useGSAP(() => {
    // Animate number counters
    stats.forEach((stat, i) => {
      const el = numRefs.current[i];
      if (!el || stat.value === null) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: stat.value,
        duration: 2.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        onUpdate() {
          el.textContent =
            stat.value >= 1000
              ? Math.round(obj.val).toLocaleString() + stat.suffix
              : Math.round(obj.val) + stat.suffix;
        },
      });
    });

    // Number counters only
    gsap.from('.company-stats__item', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.company-stats__grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="company-stats" aria-label="Company statistics">
      <div className="container">
        <div className="company-stats__grid">
          {stats.map((stat, i) => (
            <div key={i} className="company-stats__item">
              <div className="company-stats__divider" />
              <div
                ref={(el) => (numRefs.current[i] = el)}
                className="company-stats__num"
              >
                {stat.text || (stat.value ? '0' + stat.suffix : '')}
              </div>
              <p className="company-stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
