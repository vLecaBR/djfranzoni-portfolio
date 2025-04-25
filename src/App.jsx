import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Events from './Components/Events';
import Contact from './Components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Contact />
    </>
  );
}
