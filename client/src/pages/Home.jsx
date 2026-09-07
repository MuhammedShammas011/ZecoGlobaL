import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Material from '../components/sections/Material';
import Partner from '../components/sections/Partner';
import LogoBelt from '../components/sections/LogoBelt';
import Zeepa from '../components/sections/Zeepa';
import CompanyStats from '../components/sections/CompanyStats';
import EditorialGallery from '../components/sections/EditorialGallery';
import Sustainability from '../components/sections/Sustainability';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'ZecoGlobal — Engineered from Wood. Built for Life.';
  }, []);

  return (
    <main>
      <Hero />
      <Material />
      <LogoBelt />
      <Partner />
      <Zeepa />
      <CompanyStats />
      <EditorialGallery />
      <Sustainability />

    </main>
  );
};

export default Home;
