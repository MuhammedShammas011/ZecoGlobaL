import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from '../../animations/gsap';
import useGSAP from '../../hooks/useGSAP';
import './ProcessPreview.css';

const stages = [
  { num: '01', label: 'Raw Material', desc: 'Carefully selected timber. Moisture-tested. Responsibly sourced logs begin their journey here.' },
  { num: '02', label: 'Processing',   desc: 'Logs are rotary-peeled into thin veneers. Precision calibration ensures uniform thickness across every sheet.' },
  { num: '03', label: 'Layering',     desc: 'Veneers are dried, sorted by grade, and assembled with alternating cross-grain orientation for structural strength.' },
  { num: '04', label: 'Pressing',     desc: 'Phenol formaldehyde adhesive is applied. Sheets enter multi-daylight hot presses at 140°C and 200 PSI.' },
  { num: '05', label: 'Finishing',    desc: 'Panels are cooled, calibrated, trimmed to size, and sanded to a consistent surface quality standard.' },
  { num: '06', label: 'Quality',      desc: 'Every batch is tested for moisture, bonding strength, and dimensional tolerance before dispatch.' },
];

const ProcessPreview = () => {
  const sectionRef  = useRef(null);
  const titleRef    = useRef(null);
  const stagesRef   = useRef([]);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    stagesRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: i * 0.07,
        scrollTrigger: {
          trigger: el,
          start: 'top 84%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="process-preview" aria-label="Manufacturing process overview">
      <div className="container">
        <div className="process-preview__header">
          <span className="label process-preview__kicker">The Process</span>
          <h2 ref={titleRef} className="process-preview__title">
            From wood<br /><em>to plywood.</em>
          </h2>
        </div>

        <div className="process-preview__stages">
          {stages.map((stage, i) => (
            <div
              key={stage.num}
              ref={(el) => (stagesRef.current[i] = el)}
              className="process-preview__stage"
            >
              <div className="process-preview__stage-top">
                <span className="label process-preview__stage-num">{stage.num}</span>
                <div className="process-preview__stage-line" />
              </div>
              <h4 className="process-preview__stage-label">{stage.label}</h4>
              <p className="process-preview__stage-desc">{stage.desc}</p>
            </div>
          ))}
        </div>

        <div className="process-preview__cta">
          <Link to="/process" className="btn btn-dark">
            See Full Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;
