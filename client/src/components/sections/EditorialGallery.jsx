import { useRef } from 'react';
import { gsap } from '../../animations/gsap';
import useGSAP from '../../hooks/useGSAP';
import './EditorialGallery.css';

// Import new images
import frame0 from '../../assets/Gallery/frame0.jpg';
import frame1 from '../../assets/Gallery/frame1.jpg';
import frame2 from '../../assets/Gallery/frame2.jpg';
import frame3 from '../../assets/Gallery/frame3.jpg';
import frame4 from '../../assets/Gallery/frame4.jpg';
import frame5 from '../../assets/Gallery/frame5.jpg';
import frame6 from '../../assets/Gallery/frame6.jpg';

const galleryImages = [
  { id: 1, src: frame0, caption: 'The Zeco Land' },
  { id: 2, src: frame1, caption: 'BEFORE THE CRAFT' },
  { id: 3, src: frame2, caption: 'READY TO SHAPE' },
  { id: 4, src: frame3, caption: 'Humidification engine' },
  { id: 5, src: frame4, caption: 'precision at work' },
  { id: 6, src: frame5, caption: 'every detail matters.' },
  { id: 7, src: frame6, caption: 'output be like' },
];

const EditorialGallery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(() => {
    // Title reveal
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // Parallax & Fade for images
    imagesRef.current.forEach((img, i) => {
      if (!img) return;

      const yOffset = i % 2 === 0 ? 60 : 100;

      gsap.fromTo(
        img,
        { y: yOffset, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: 1.5,
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="editorial-gallery" aria-label="Visual Gallery">
      <div className="editorial-gallery__bg-overlay editorial-gallery__bg-overlay--1"></div>
      <div className="editorial-gallery__bg-overlay editorial-gallery__bg-overlay--2"></div>
      <div className="editorial-gallery__bg-overlay editorial-gallery__bg-overlay--3"></div>
      <div className="container">
        <div className="editorial-gallery__header">
          <h2 ref={titleRef} className="editorial-gallery__title">
            The Art of <em>Wood.</em>
          </h2>
        </div>

        <div className="editorial-gallery__grid">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className="editorial-gallery__item editorial-gallery__item--standard"
              ref={el => imagesRef.current[i] = el}
            >
              <div className="editorial-gallery__img-wrap">
                <img src={img.src} alt={img.caption} />
              </div>
              <div className="editorial-gallery__meta">
                <span className="editorial-gallery__num">0{i + 1}</span>
                <span className="editorial-gallery__caption">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialGallery;
