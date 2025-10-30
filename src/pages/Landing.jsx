import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Showcase from '../components/Showcase';
import Stats from '../components/Stats';
import FeaturedProject from '../components/FeaturedProject';
import CTA from '../components/CTA';
import Partners from '../components/Partners';
import SiteFooter from '../components/SiteFooter';

const Landing = () => {
  return (
    <div id="top">
      <Header />
      <Hero />
      <HowItWorks />
      <Showcase />
      <Stats />
      <FeaturedProject />
      <CTA />
      <Partners />
      <SiteFooter />
    </div>
  );
};

export default Landing;