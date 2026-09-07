import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '../animations/gsap';
import useGSAP from '../hooks/useGSAP';
import './About.css';

import roundedWoodImg from '../assets/RoundedWood.png';

const About = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About — ZecoGlobal';
  }, []);

  useGSAP(() => {
    const heroEls = pageRef.current?.querySelectorAll('.hero-fade');
    if (heroEls?.length) {
      gsap.from(heroEls, {
        y: 40, opacity: 0, duration: 1.1, stagger: 0.1,
        ease: 'power4.out', delay: 0.2,
      });
    }
  }, []);

  return (
    <main className="about-page" ref={pageRef}>

      {/* ════════════════════════════════════════════
          TOP SECTION — Hero + Story + Wood Image
      ════════════════════════════════════════════ */}
      <section className="about-top">
        <div className="container about-top__inner">

          {/* ── Left Column: All text ── */}
          <div className="about-top__left">

            {/* Hero */}
            <span className="label about-top__kicker hero-fade">About ZecoGlobal</span>
            <div className="overflow-clip">
              <h1 className="about-top__title hero-fade">A legacy built</h1>
            </div>
            <div className="overflow-clip">
              <h1 className="about-top__title hero-fade"><em>on wood.</em></h1>
            </div>

            <div className="about-top__tagline hero-fade">
              <span>Engineered from wood</span>
              <span className="about-top__tagline-dot">·</span>
              <span>Built for life</span>
            </div>

            {/* Story */}
            <motion.div
              className="about-story"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="label about-story__kicker">Our Story</span>
              <h2 className="about-story__heading">
                14+ years<br />of precision.
              </h2>
              <div className="about-story__body">
                <p>
                  ZecoGlobal was founded with a singular conviction: that wood —
                  one of nature's most extraordinary materials — deserved to be
                  engineered with the same precision and care applied to the world's
                  finest industrial materials.
                </p>
                <p>
                  Over more than a decade, we have built one of India's most respected
                  plywood manufacturing operations. Our 50,000+ sq.ft facility combines
                  advanced pressing technology with the deep craft knowledge of our
                  people — the result is wood products that perform consistently, last
                  longer, and carry the confidence of rigorous quality control.
                </p>
                <p>
                  From PAN INDIA distribution to growing global market reach,
                  ZecoGlobal is trusted by architects, contractors, interior designers,
                  and builders who demand materials that meet international standards.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Side label + Wood image ── */}
          <div className="about-top__right">
            <div className="about-top__side-label hero-fade">
              <div className="about-top__side-line" />
            </div>

            <motion.div
              className="about-top__wood-wrap"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={roundedWoodImg}
                alt="Wood cross-section"
                className="about-top__wood-img"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          VALUES
      ════════════════════════════════════════════ */}
      <section className="about-values">
        <div className="container">

          {/* Values Header */}
          <div className="about-values__header">
            <div className="about-values__header-left">
              <motion.span
                className="label about-values__kicker"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                What Drives Us
              </motion.span>
              <motion.h2
                className="about-values__heading"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Built on<br /><em>stronger values.</em>
              </motion.h2>
            </div>

            <motion.div
              className="about-values__header-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span>People</span>
              <span>Process</span>
              <span>A Better Tomorrow</span>
            </motion.div>
          </div>

          {/* Values Grid — 4 columns */}
          <div className="about-values__grid">
            {[
              { title: 'Precision', desc: 'Every board is manufactured to exact specifications. Thickness tolerance, moisture content, and bonding strength are non-negotiable.' },
              { title: 'Consistency', desc: 'Architects and builders count on the same quality in every delivery. We deliver consistency at scale across every product in our range.' },
              { title: 'Responsibility', desc: 'Wood is a natural resource. We take our environmental responsibility seriously — in sourcing, in processing, and in waste reduction.' },
              { title: 'Partnership', desc: 'We work alongside our clients rather than just supplying them. Their project requirements shape our product development.' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                className="about-values__item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="about-values__item-top">
                  <span className="about-values__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="about-values__num-line" />
                </div>
                <h3 className="about-values__title">{v.title}</h3>
                <p className="about-values__desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer separator line */}
      <div className="container">
        <div className="products-footer-line" />
      </div>

    </main>
  );
};

export default About;
