import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProducts } from '../../services/api';
import { gsap } from '../../animations/gsap';
import useGSAP from '../../hooks/useGSAP';
import './ProductsShowcase.css';

const ProductCard = ({ product, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link to={`/products`} className="product-card__inner">
        {/* Image area */}
        <div className="product-card__img-wrap">
          <motion.div
            className="product-card__img-bg"
            style={{ backgroundImage: `url(${product.image})` }}
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="product-card__img-overlay" />
          <div className="product-card__category label">{product.category}</div>
        </div>

        {/* Info */}
        <div className="product-card__info">
          <div className="product-card__top">
            <h3 className="product-card__name">{product.name}</h3>
            <motion.div
              className="product-card__arrow"
              animate={{ x: hovered ? 6 : 0, opacity: hovered ? 1 : 0.4 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.div>
          </div>
          <p className="product-card__desc">{product.description.slice(0, 120)}…</p>
          {product.applications?.length > 0 && (
            <div className="product-card__apps">
              {product.applications.slice(0, 3).map((app) => (
                <span key={app} className="product-card__app label">{app}</span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

const ProductsShowcase = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const titleRef = useRef(null);

  useEffect(() => {
    getProducts({ featured: true })
      .then((data) => setProducts(data.data?.slice(0, 4) || []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  useGSAP(() => {
    if (!titleRef.current) return;
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
  }, []);

  return (
    <section className="products-showcase" aria-label="Products showcase">
      <div className="container">
        <div className="products-showcase__header">
          <span className="label products-showcase__kicker">Our Products</span>
          <h2 ref={titleRef} className="products-showcase__title">
            Made for what<br /><em>comes next.</em>
          </h2>
        </div>

        {loading ? (
          <div className="products-showcase__loading">
            <div className="products-showcase__spinner" />
          </div>
        ) : (
          <div className="products-showcase__grid">
            {products.map((p, i) => (
              <ProductCard key={p._id} product={p} index={i} />
            ))}
          </div>
        )}

        <div className="products-showcase__footer">
          <Link to="/products" className="btn btn-dark products-showcase__cta">
            Explore All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
