import { Link } from 'react-router-dom';
import heroVideo from '../../assets/HeroVideoZeco2.mp4';
import './Hero.css';

const Hero = () => {
  return (
    <section
      className="hero relative"
      aria-label="Hero section"
      style={{ minHeight: '100vh', backgroundColor: '#E9D8AF' }}
    >
      <div className="hero__bg">
        <video
          className="hero__video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero__overlay" />
      </div>

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="hero__content">
        <h1 className="hero__title">Engineering  <br /> to endure.</h1>
        <p className="hero__subtext">
          we create wood solutions that bring nature’s strength and beauty into the spaces of tomorrow.
        </p>
        <Link to="/about" className="hero__btn">
          Know More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
