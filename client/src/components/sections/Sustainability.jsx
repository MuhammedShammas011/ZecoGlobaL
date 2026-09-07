import { useRef, useEffect } from 'react';
import { gsap } from '../../animations/gsap';
import useGSAP from '../../hooks/useGSAP';
import './Sustainability.css';

const Sustainability = () => {
  const sectionRef  = useRef(null);
  const canvasRef   = useRef(null);
  const titleRef    = useRef(null);
  const animFrameRef = useRef(null);

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width  = W;
    canvas.height = H;

    const particles = Array.from({ length: 60 }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.15,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,168,130,${p.opacity})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
        if (p.x < 0 || p.x > W) p.vx *= -1;
      });
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  useGSAP(() => {
    gsap.from(titleRef.current?.querySelectorAll('.sustainability__line'), {
      y: 60,
      opacity: 0,
      duration: 1.3,
      stagger: 0.15,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 76%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.sustainability__sub', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.sustainability__sub',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.sustainability__flow', {
      y: 20,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.sustainability__flow',
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="sustainability" aria-label="Sustainability section">
      <canvas ref={canvasRef} className="sustainability__canvas" aria-hidden="true" />

      <div className="container sustainability__inner">
        <div ref={titleRef} className="sustainability__title-wrap">
          <div className="overflow-clip">
            <h2 className="sustainability__line">
              What comes from
            </h2>
          </div>
          <div className="overflow-clip">
            <h2 className="sustainability__line">
              <em>nature</em>
            </h2>
          </div>
          <div className="overflow-clip">
            <h2 className="sustainability__line">
              should return to <em>nature.</em>
            </h2>
          </div>
        </div>

        <p className="sustainability__sub">
          Renewable by nature. Responsible by choice.
        </p>

        <div className="sustainability__flow">
          {['Nature', 'Material', 'Product', 'Renewal'].map((step, i, arr) => (
            <span key={step} className="sustainability__flow-item">
              <span className="sustainability__flow-label label">{step}</span>
              {i < arr.length - 1 && (
                <span className="sustainability__flow-arrow" aria-hidden="true">→</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
