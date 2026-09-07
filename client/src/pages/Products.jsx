import { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsap';
import useGSAP from '../hooks/useGSAP';
import './Products.css';

import plywoodImg from '../assets/plywood.png';
import doorImg from '../assets/door.png';

const Products = () => {
  const heroRef = useRef(null);
  const doorRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Products — ZecoGlobal';
  }, []);

  useGSAP(() => {
    // Hero text lines
    const heroLines = heroRef.current?.querySelectorAll(
      '.ph__kicker, .ph__line, .ph__divider, .ph__sub, .ph__corner-tag'
    );
    if (heroLines?.length) {
      gsap.from(heroLines, {
        y: 30, opacity: 0, duration: 1.1, stagger: 0.09,
        ease: 'power4.out', delay: 0.2,
      });
    }

    // Plywood image floats in
    const plywoodImg = heroRef.current?.querySelector('.pp1__img');
    if (plywoodImg) {
      gsap.from(plywoodImg, {
        x: 60, opacity: 0, duration: 1.4,
        ease: 'power3.out', delay: 0.4,
      });
    }

    // Product 01 text
    const p1Text = heroRef.current?.querySelector('.pp1__text');
    if (p1Text) {
      gsap.from(p1Text, {
        y: 40, opacity: 0, duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: p1Text,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Door section
    if (doorRef.current) {
      gsap.from(doorRef.current.querySelector('.pp2__img-wrap'), {
        x: -60, opacity: 0, duration: 1.3, ease: 'power3.out',
        scrollTrigger: {
          trigger: doorRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from(doorRef.current.querySelector('.pp2__text'), {
        x: 50, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: doorRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <main className="products-page">

      {/* ════════════════════════════════════════════
          COMBINED HERO + PRODUCT 01 (two-column)
      ════════════════════════════════════════════ */}
      <section ref={heroRef} className="pp1-section">
        <div className="pp1-section__inner container">

          {/* LEFT COLUMN */}
          <div className="pp1__left">

            {/* ── Hero text ── */}
            <div className="pp1__hero">
              <span className="label ph__kicker">Our Products</span>
              <h1 className="ph__line">Engineered wood,</h1>
              <h1 className="ph__line ph__line--italic"><em>built to perform.</em></h1>
              {/* <div className="ph__divider" />
              <p className="ph__sub">
                Two flagship product lines.<br />One standard of quality.
              </p> */}
            </div>

            {/* ── Product 01 text ── */}
            <div className="pp1__text">
              <div className="pc__num-row">
                <span className="pc__num">01</span>
                <div className="pc__num-line" />
                <span className="label pc__cat">Core Product</span>
              </div>
              <h2 className="pp1__name">ZecoWood</h2>
              <p className="pp1__tagline">The backbone of modern plywood.</p>
              <p className="pp1__desc">
                ZecoWood is our flagship engineered veneer core —
                precision‑crafted for consistent strength, clean
                bonding and lasting performance. Made from
                sustainably sourced timber, every sheet is calibrated
                for uniform thickness and moisture control, giving
                your plywood an edge that lasts.
              </p>
              <a href="/contact" className="pc__cta">
                <span className="pc__cta-circle">→</span>
                <span className="pc__cta-text">Know More</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — plywood image + corner tag */}
          <div className="pp1__right">
            <div className="ph__corner-tag">
              <span>Stronger</span>
              <span>Cleaner</span>
              <span>Consistent</span>
              <span>Sustainable</span>
            </div>
            <img
              src={plywoodImg}
              alt="ZecoWood engineered plywood"
              className="pp1__img"
            />
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          PRODUCT 02 — ZECO DOOR
      ════════════════════════════════════════════ */}
      <section ref={doorRef} className="pp2-section">
        <div className="pp2-section__inner container">

          {/* LEFT — door image + side tag */}
          <div className="pp2__img-wrap">
            <div className="pp2__side-tag">
            </div>
            <img
              src={doorImg}
              alt="Zeco Door engineered wood door"
              className="pp2__img"
            />
          </div>

          {/* RIGHT — text */}
          <div className="pp2__text">
            <div className="pc__num-row">
              <span className="pc__num">02</span>
              <div className="pc__num-line" />
              <span className="label pc__cat">Door Solutions</span>
            </div>
            <h2 className="pp2__name">ZecoDoor</h2>
            <p className="pp2__tagline">Where craft meets engineered precision.</p>
            <p className="pp2__desc">
              Zeco Door is our premium door‑grade engineered
              wood line — tailored for modern spaces. Stable, flat
              and warp‑resistant panels, available in flush and
              moulded configurations. Factory‑ready, reducing
              workshop prep time and delivering a surface that
              takes finishes beautifully.
            </p>
            <a href="/contact" className="pc__cta">
              <span className="pc__cta-circle">→</span>
              <span className="pc__cta-text">Know More</span>
            </a>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          FOOTER SEPARATOR
      ════════════════════════════════════════════ */}
      <div className="container">
        <div className="products-footer-line" />
      </div>

    </main>
  );
};

export default Products;
