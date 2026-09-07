import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { gsap } from '../animations/gsap';
import useGSAP from '../hooks/useGSAP';
import './Contact.css';

import woodenPieceImg from '../assets/woodenPieaceContact.png';

const initialForm = { name: '', company: '', phone: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errMsg, setErrMsg] = useState('');
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact — ZecoGlobal';
  }, []);

  useGSAP(() => {
    const els = pageRef.current?.querySelectorAll('.hero-fade');
    if (els?.length) {
      gsap.from(els, {
        y: 50, opacity: 0, duration: 1.2, stagger: 0.1,
        ease: 'power4.out', delay: 0.2,
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');
    // Simulate submission (no backend connected)
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 1200);
  };

  return (
    <main className="contact-page" ref={pageRef}>

      {/* ════════════════════════════════════════════
          HERO + FORM SECTION
      ════════════════════════════════════════════ */}
      <section className="contact-top">
        <div className="contact-top__inner container">

          {/* ── Left side: heading + wood image ── */}
          <div className="contact-top__left">
            <span className="label contact-top__kicker hero-fade">Contact</span>

            <div className="overflow-clip">
              <h1 className="contact-top__title hero-fade">Let's build</h1>
            </div>
            <div className="overflow-clip">
              <h1 className="contact-top__title hero-fade">something</h1>
            </div>
            <div className="overflow-clip">
              <h1 className="contact-top__title hero-fade">together.</h1>
            </div>

            <p className="contact-top__sub hero-fade">
              Have a question, a project in mind or a partnership
              opportunity? We'd love to hear from you.
            </p>

            {/* Wooden piece image */}
            <motion.div
              className="contact-wood-wrap"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="contact-wood__side-label">
                <div className="contact-wood__side-line" />
                <div className="contact-wood__side-text">
                  <span>Stronger</span>
                  <span>Ideas For A</span>
                  <span>Brighter</span>
                  <span>Tomorrow</span>
                </div>
              </div>
              <img
                src={woodenPieceImg}
                alt="Wooden piece"
                className="contact-wood-img"
              />
            </motion.div>
          </div>

          {/* ── Right side: Form card ── */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="contact-form-card__heading">Send us a message</h2>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  className="contact-success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="contact-success__icon" aria-hidden="true">✓</div>
                  <h3 className="contact-success__heading">Thank you.</h3>
                  <p className="contact-success__text">We'll get back to you soon.</p>
                  <button
                    className="contact-form__submit"
                    onClick={() => setStatus('idle')}
                    style={{ marginTop: '2rem' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Row 1: Name + Company */}
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="contact-form__input"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder=" "
                      />
                      <label htmlFor="contact-name" className="contact-form__label">Your full name *</label>
                    </div>
                    <div className="contact-form__field">
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        className="contact-form__input"
                        value={form.company}
                        onChange={handleChange}
                        placeholder=" "
                      />
                      <label htmlFor="contact-company" className="contact-form__label">Your company name</label>
                    </div>
                  </div>

                  {/* Row 2: Phone + Email */}
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        className="contact-form__input"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder=" "
                      />
                      <label htmlFor="contact-phone" className="contact-form__label">Phone number</label>
                    </div>
                    <div className="contact-form__field">
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="contact-form__input"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder=" "
                      />
                      <label htmlFor="contact-email" className="contact-form__label">Email address *</label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="contact-form__field">
                    <textarea
                      id="contact-message"
                      name="message"
                      className="contact-form__input contact-form__textarea"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder=" "
                    />
                    <label htmlFor="contact-message" className="contact-form__label">Tell us about your requirements *</label>
                  </div>

                  {status === 'error' && (
                    <motion.p
                      className="contact-form__error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errMsg}
                    </motion.p>
                  )}

                  <div className="contact-form__footer">
                    <button
                      id="contact-submit"
                      type="submit"
                      className="contact-form__submit"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'Sending...' : 'Send enquiry →'}
                    </button>
                    <span className="contact-form__footer-note">We'll get back to you soon.</span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          INFO FOOTER STRIP
      ════════════════════════════════════════════ */}
      <section className="contact-info-strip">
        <div className="container contact-info-strip__inner">
          <div className="contact-info-block">
            <p className="contact-info-block__label">Office</p>
            <p className="contact-info-block__text">
              ZecoGlobal Manufacturing Pvt. Ltd.<br />
              Industrial Area, Bhiwandi,<br />
              Maharashtra, India.
            </p>
          </div>
          <div className="contact-info-block">
            <p className="contact-info-block__label">Phone</p>
            <a href="tel:+919876543210" className="contact-info-block__link">+91 98765 43210</a>
          </div>
          <div className="contact-info-block">
            <p className="contact-info-block__label">Email</p>
            <a href="mailto:info@zecoglobal.com" className="contact-info-block__link">info@zecoglobal.com</a>
          </div>
          <div className="contact-info-block">
            <p className="contact-info-block__label">Operations</p>
            <p className="contact-info-block__text">
              Manufacturing · PAN INDIA Distribution<br />
              Global Export · B2B Enquiries Welcome
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
