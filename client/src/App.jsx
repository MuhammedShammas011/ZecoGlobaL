import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home    from './pages/Home';
import Products from './pages/Products';
import About   from './pages/About';
import Process  from './pages/Process';
import Contact  from './pages/Contact';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.3 } },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/"        element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about"    element={<About />} />
          <Route path="/process"  element={<Process />} />
          <Route path="/contact"  element={<Contact />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', color: 'var(--color-brown)' }}>
                  404
                </h1>
                <p style={{ color: 'var(--color-charcoal-3)', marginTop: '1rem' }}>
                  Page not found.
                </p>
              </div>
            </main>
          } />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
