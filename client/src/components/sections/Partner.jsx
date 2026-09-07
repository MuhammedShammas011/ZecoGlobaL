import { useState, useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsap';
import useGSAP from '../../hooks/useGSAP';
import './Partner.css';

import client1 from '../../assets/Gallery/frame0.jpg';
import client2 from '../../assets/Gallery/frame1.jpg';
import client3 from '../../assets/Gallery/frame2.jpg';
import client4 from '../../assets/Gallery/frame3.jpg';
import client5 from '../../assets/Gallery/frame4.jpg';
import client6 from '../../assets/Gallery/frame5.jpg';
import client7 from '../../assets/Gallery/frame6.jpg';

const clients = [
  { id: 1, src: client1, name: 'Sylvan Woods HQ', location: 'London, UK' },
  { id: 2, src: client2, name: 'Atelier Woodworks', location: 'Berlin, DE' },
  { id: 3, src: client3, name: 'Lumina Architects', location: 'Milan, IT' },
  { id: 4, src: client4, name: 'Oak & Ember Studio', location: 'New York, US' },
  { id: 5, src: client5, name: 'Verdant Build', location: 'Toronto, CA' },
  { id: 6, src: client6, name: 'Meridian Arch', location: 'Sydney, AU' },
  { id: 7, src: client7, name: 'Crestwood Co', location: 'Tokyo, JP' }
];

const Partner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current, {
      y: 60,
      scale: 0.97,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prev = () => setCurrentSlide((p) => (p - 1 + clients.length) % clients.length);
  const next = () => setCurrentSlide((p) => (p + 1) % clients.length);

  return (
    <section ref={sectionRef} className="partner-section" aria-label="Partner and Distributor Section">
      <div className="container">

        {/* ── TOP ROW: Eyebrow + Corner Tag ── */}
        <div className="partner-section__toprow">
          <span className="partner-section__eyebrow label">Join the network.</span>
        </div>

        {/* ── HEADER ── */}
        <div className="partner-section__header">
          <h2 className="partner-section__title">Grow With <em>ZecoGlobal.</em></h2>
          <p className="partner-section__desc">
            Bring engineered wood solutions to your market and build a stronger business with the support of a growing brand.
          </p>
        </div>

        {/* ── TWO COLUMN BODY ── */}
        <div className="partner-section__inner">

          {/* ── LEFT: Slideshow ── */}
          <div
            className="partner-section__left"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="partner-slider">
              {clients.map((client, index) => (
                <div
                  key={client.id}
                  className={`partner-slide ${index === currentSlide ? 'is-active' : ''}`}
                  aria-hidden={index !== currentSlide}
                >
                  <img src={client.src} alt={`Partner ${client.name}`} className="partner-slide__img" />
                </div>
              ))}

              {/* Top-left overlay text */}
              <div className="partner-slide__topleft">
                <p>Natural</p>
                <p>Solutions</p>
                <p>Bigger</p>
                <p>Markets</p>
                <div className="partner-slide__topleft-line" />
              </div>

              {/* Bottom bar */}
              <div className="partner-slide__bottombar">
                <div className="partner-slide__counter">
                  <span className="partner-slide__count-num">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(clients.length).padStart(2, '0')}
                  </span>
                  <div className="partner-slide__progress">
                    {clients.map((_, i) => (
                      <div
                        key={i}
                        className={`partner-slide__progress-bar ${i === currentSlide ? 'is-active' : ''}`}
                        onClick={() => setCurrentSlide(i)}
                      />
                    ))}
                  </div>
                </div>

                <div className="partner-slide__arrows">
                  <button className="partner-slide__arrow" onClick={prev} aria-label="Previous slide">←</button>
                  <button className="partner-slide__arrow" onClick={next} aria-label="Next slide">→</button>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="partner-section__right">
            <p className="partner-form__label">Join the network.</p>

            <form className="partner-form" onSubmit={(e) => e.preventDefault()}>
              <div className="partner-form__group">
                <input type="text" className="partner-form__input" placeholder="Your Name" required />
              </div>
              <div className="partner-form__group">
                <input type="text" className="partner-form__input" placeholder="Company Name" required />
              </div>
              <div className="partner-form__group">
                <input type="tel" className="partner-form__input" placeholder="Phone / WhatsApp" required />
              </div>
              <div className="partner-form__group">
                <input type="text" className="partner-form__input" placeholder="City / Location" required />
              </div>

              <button type="submit" className="partner-form__btn">
                Join the Network →
              </button>
            </form>

            <div className="partner-section__bottom-tag">
              <div className="partner-section__bottom-line" />
              <div>
                <span>Engineering</span>
                <span>To Endure</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partner;
