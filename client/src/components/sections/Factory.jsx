import { useRef } from 'react';
import { gsap } from '../../animations/gsap';
import useGSAP from '../../hooks/useGSAP';
import './Factory.css';

const Factory = () => {
  const sectionRef = useRef(null);
  const bgRef      = useRef(null);
  const textRef    = useRef(null);

  useGSAP(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      y: '-15%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });

    // Text reveal
    gsap.from(textRef.current.querySelectorAll('.factory__text-line'), {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="factory" aria-label="Factory section">
      <div ref={bgRef} className="factory__bg" />
      <div className="factory__overlay" />

      <div className="factory__content container">
        <span className="label factory__kicker">Precision happens here.</span>

        <div ref={textRef} className="factory__text">
          <div className="overflow-clip">
            <p className="factory__text-line">Advanced machinery.</p>
          </div>
          <div className="overflow-clip">
            <p className="factory__text-line">Trained people.</p>
          </div>
          <div className="overflow-clip">
            <p className="factory__text-line">Controlled processes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factory;
