import { Link } from 'react-router-dom';
import { gsap } from '../../animations/gsap';
import useGSAP from '../../hooks/useGSAP';
import './FinalCTA.css';

const FinalCTA = () => {
  useGSAP(() => {
    gsap.from('.final-cta__title', {
      y: 60,
      opacity: 0,
      duration: 1.3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.final-cta',
        start: 'top 72%',
        toggleActions: 'play none none none',
      },
    });
    gsap.from('.final-cta__brand', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: '.final-cta',
        start: 'top 72%',
        toggleActions: 'play none none none',
      },
    });
    gsap.from('.final-cta__btn', {
      y: 20,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.4,
      scrollTrigger: {
        trigger: '.final-cta',
        start: 'top 72%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section className="final-cta" aria-label="Call to action">
      {/* Wood texture background (mirroring the hero) */}
      <div className="final-cta__texture" />
      <div className="final-cta__overlay" />

      <div className="final-cta__content container">
        <h2 className="final-cta__title">
          Built from nature.<br />
          <em>Engineered for life.</em>
        </h2>

        <div className="final-cta__brand">ZECOGLOBAL</div>

        <Link to="/contact" className="btn btn-light final-cta__btn">
          Start a Conversation →
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
