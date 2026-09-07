import { useRef } from 'react';
import { gsap } from '../../animations/gsap';
import useGSAP from '../../hooks/useGSAP';
import './Material.css';
import pandaImage from '../../assets/PandaSitting.png';
import zecoWoodVideo from '../../assets/Zecoglobal Trailer.mp4';
import zecoDoorVideo from '../../assets/ZecoFactoryEstablishingStory04 (1) (1).mp4';

const Material = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const productsContainerRef = useRef(null);

  useGSAP(() => {
    // Title reveal
    gsap.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Products reveal animation
    if (productsContainerRef.current) {
      gsap.from(productsContainerRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: productsContainerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="material" aria-label="Material section">
      <div className="container">
        <div className="material__header">
          <span className="label material__kicker">Our Products</span>
          <h2 ref={titleRef} className="material__title">
            Wood, with <em>purpose</em>.<br />
          </h2>
        </div>
        <div className="material__products" ref={productsContainerRef}>
          {/* Product 1 - ZecoWood */}
          <div className="material__product">
            <div className="material__product-video-wrap">
              <video className="material__product-video" autoPlay muted loop playsInline>
                <source src={zecoWoodVideo} type="video/mp4" />
              </video>
              <div className="material__product-video-placeholder">
                <span>ZecoWood Video</span>
              </div>
            </div>
            <div className="material__product-tag">01</div>
            <h3 className="material__product-name">ZecoWood</h3>
            <p className="material__product-tagline">The foundation of better spaces.</p>
            <p className="material__product-desc">
              Premium wood solutions crafted with precision, bringing natural
              strength, stability and refined finish to every application.
            </p>
            <a href="#" className="material__product-link">Explore ZecoWood →</a>
          </div>

          {/* Divider */}
          <div className="material__product-divider" />

          {/* Product 2 - ZecoDoor */}
          <div className="material__product">
            <div className="material__product-video-wrap">
              <video className="material__product-video" autoPlay muted loop playsInline>
                <source src={zecoDoorVideo} type="video/mp4" />
              </video>
              <div className="material__product-video-placeholder">
                <span>ZecoDoor Video</span>
              </div>
            </div>
            <div className="material__product-tag">02</div>
            <h3 className="material__product-name">ZecoDoor</h3>
            <p className="material__product-tagline">Where wood meets the entrance.</p>
            <p className="material__product-desc">
              Thoughtfully engineered doors that combine natural character,
              durability and contemporary design.
            </p>
            <a href="#" className="material__product-link">Explore ZecoDoor →</a>
          </div>
        </div>
      </div>

      <div className="material__panda-wrapper">
        <img src={pandaImage} alt="Sitting Panda" className="material__panda" />
        <div className="material__panda-bubble">
          Hey there.. I am Zeepa.<br />Do you wanna know more about me?...
        </div>
      </div>

    </section>
  );
};
export default Material;