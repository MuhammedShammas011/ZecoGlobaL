import { useRef } from 'react';
import { gsap } from '../../animations/gsap';
import useGSAP from '../../hooks/useGSAP';
import './Zeepa.css';
import pandaHI from '../../assets/Branding/PandaHI.png';
import bamboo from '../../assets/Branding/Tree.png';

const Zeepa = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const pandaRef = useRef(null);
  const bambooRightRef = useRef(null);

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

    gsap.from(pandaRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.4,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: pandaRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // Bamboo entrance animations
    gsap.from(bambooRightRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.8,
      ease: 'power3.out',
      stagger: 0.2, // Slightly offset their entrance
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="zeepa" aria-label="Zeepa — ZecoGlobal Mascot">
      {/* Bamboo — right side */}
      <img ref={bambooRightRef} src={bamboo} alt="" className="zeepa__bamboo zeepa__bamboo--right" aria-hidden="true" />

      <div className="container zeepa__container">
        <div className="zeepa__layout">

          {/* Left: Text content */}
          <div className="zeepa__content" ref={titleRef}>
            <span className="label zeepa__kicker">...Psst… over here!</span>
            <h2 className="zeepa__title">
              Zeepa Here...!<br /><em>Zeco's Guide.</em>
            </h2>
            <p className="zeepa__body">
              I'm here to guide you through the world of wood, doors, and quality craftsmanship-one space at a time. Whether you're planning a new project, choosing the right materials, or exploring better building solutions, I'm here to make every step easier to understand.
            </p>
            <p className="zeepa__body zeepa__body--secondary">
              Wherever you see Zeepa, you know ZecoGlobal is close by.
            </p>
          </div>

          {/* Right: Panda illustration anchored to bottom */}
          <div className="zeepa__panda-wrap" ref={pandaRef}>
            <img
              src={pandaHI}
              alt="Zeepa, the ZecoGlobal mascot, waving hello"
              className="zeepa__panda"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Zeepa;
