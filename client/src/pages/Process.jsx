import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '../animations/gsap';
import useGSAP from '../hooks/useGSAP';
import './Process.css';

import roundedWoodImg from '../assets/RoundedWood.png';

// Stage Hover Images
import rawMaterialImg from '../assets/process/RawMaterial.jpg';
import processingImg from '../assets/process/Processing.jpg';
import layeringImg from '../assets/process/layering.jpg';
import pressingImg from '../assets/process/pressing.jpg';
import finishingImg from '../assets/process/finishing.jpg';
import qualityImg from '../assets/process/quality.jpg';

const stages = [
  {
    num: '01',
    title: 'Raw Material',
    desc: 'Carefully selected logs from responsibly managed forests, inspected for moisture content, density, and grain quality.',
    img: rawMaterialImg,
  },
  {
    num: '02',
    title: 'Processing',
    desc: 'Logs are soaked and peeled using precision equipment to obtain uniform wood veneers.',
    img: processingImg,
  },
  {
    num: '03',
    title: 'Layering',
    desc: 'Veneers are dried, sorted, and assembled in cross-grain orientation for dimensional stability.',
    img: layeringImg,
  },
  {
    num: '04',
    title: 'Pressing',
    desc: 'Layers are bonded under controlled heat and pressure to achieve strength and durability.',
    img: pressingImg,
  },
  {
    num: '05',
    title: 'Finishing',
    desc: 'Panels are trimmed, calibrated, and sanded for a smooth and consistent surface.',
    img: finishingImg,
  },
  {
    num: '06',
    title: 'Quality',
    desc: 'Every panel undergoes multi-stage testing to meet international standards.',
    img: qualityImg,
  },
];

const Process = () => {
  const pageRef = useRef(null);
  const [hoveredStage, setHoveredStage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Manufacturing Process — ZecoGlobal';
  }, []);

  useGSAP(() => {
    const heroLines = pageRef.current?.querySelectorAll('.hero-fade');
    if (heroLines?.length) {
      gsap.from(heroLines, {
        y: 30, opacity: 0, duration: 1.1, stagger: 0.09,
        ease: 'power4.out', delay: 0.2,
      });
    }
  }, []);

  return (
    <main className="process-page" ref={pageRef}>
      
      {/* ════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════ */}
      <section className="proc-hero">
        <div className="proc-hero__inner container">
          
          <div className="proc-hero__content">
            <span className="label proc__kicker hero-fade">Manufacturing Process</span>
            <h1 className="proc__title hero-fade">From raw wood</h1>
            <h1 className="proc__title proc__title--italic hero-fade"><em>to perfect plywood.</em></h1>
            
            <p className="proc__desc hero-fade">
              Every sheet of ZecoGlobal plywood passes through six
              precisely controlled stages. From raw log to finished panel —
              each step is engineered for consistency, quality, and
              structural performance.
            </p>
            
            <span className="label proc__kicker hero-fade" style={{ marginTop: '3rem' }}>
              Precision From Nature
            </span>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          TIMELINE SECTION
      ════════════════════════════════════════════ */}
      <section className="proc-timeline">
        <div className="proc-timeline__inner container">
          
          {/* LEFT COLUMN: Floating text & rounded wood */}
          <div className="proc-tl__left">
            <div className="proc-tl__sticky">
              <div className="proc-tl__side-text">
                <span>Nature</span>
                <span>Processed</span>
                <span>For</span>
                <span>A Stronger</span>
                <span>Tomorrow</span>
              </div>
              


              <div className="proc-tl__wood-wrap">
                <img src={roundedWoodImg} alt="Wood cross section" className="proc-tl__wood-img" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The actual timeline */}
          <div className="proc-tl__right">
            <div className="proc-timeline__line" />
            
            <div className="proc-stages" onMouseLeave={() => setHoveredStage(null)}>
              {stages.map((stage, idx) => (
                <div 
                  key={stage.num} 
                  className="proc-stage"
                  onMouseEnter={() => setHoveredStage(idx)}
                >
                  <div className={`proc-stage__hover-img-wrap ${hoveredStage === idx ? 'active' : ''}`}>
                    <img src={stage.img} alt={stage.title} className="proc-stage__hover-img" />
                  </div>
                  <div className="proc-stage__num">{stage.num}</div>
                  <div className="proc-stage__dot" />
                  <div className="proc-stage__content">
                    <h2 className="proc-stage__title">{stage.title}</h2>
                    <p className="proc-stage__desc">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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

export default Process;
