import { Link } from 'react-router-dom';
import './Footer.css';
import roundedWood from '../assets/RoundedWood.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        
        {/* ── Top Section ── */}
        <div className="footer__top">
          
          {/* Column 1: Brand Info */}
          <div className="footer__col footer__brand-col">
            <span className="label footer__kicker">ZECOGLOBAL</span>
            
            <h2 className="footer__title">
              Engineered from wood.<br />Built for life.
            </h2>
            
            <p className="footer__subtitle">
              Sustainable wood solutions for<br />a stronger tomorrow.
            </p>
            
            <div className="footer__socials">
              <a href="#" aria-label="Instagram" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>

            <div className="footer__precision">
              <div className="footer__precision-line" />
              <span className="label footer__precision-text">PRECISION FROM NATURE</span>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="footer__col footer__nav-col">
            <span className="label footer__col-title">
              PRODUCTS
              <div className="footer__title-line" />
            </span>
            <ul className="footer__list">
              <li><Link to="/products">Commercial Plywood</Link></li>
              <li><Link to="/products">Marine Plywood</Link></li>
              <li><Link to="/products">Blockboard</Link></li>
              <li><Link to="/products">Film Faced Plywood</Link></li>
              <li><Link to="/products">Decorative Veneer</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer__col footer__nav-col">
            <span className="label footer__col-title">
              COMPANY
              <div className="footer__title-line" />
            </span>
            <ul className="footer__list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/process">Manufacturing</Link></li>
              <li><Link to="/">Sustainability</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer__col footer__contact-col">
            <span className="label footer__col-title">
              GET IN TOUCH
              <div className="footer__title-line" />
            </span>
            <ul className="footer__contact-list">
              <li>
                <svg className="footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Kerala, India</span>
              </li>
              <li>
                <svg className="footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@zecoglobal.com">info@zecoglobal.com</a>
              </li>
              <li>
                <svg className="footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Section ── */}
        <div className="footer__bottom">
          <p className="footer__copy">© 2024 ZecoGlobal. All rights reserved.</p>
          <div className="footer__links">
            <a href="#">Terms & Conditions</a>
            <span className="footer__divider">|</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

      </div>

      {/* Decorative Wood Piece */}
      <img src={roundedWood} alt="" className="footer__wood-accent" aria-hidden="true" />
      
    </footer>
  );
};

export default Footer;
