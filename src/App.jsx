import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Events from './Components/Events';
import Contact from './Components/Contact';
import FloatingButton from './Components/Button';
import { GlobalStyle } from './app.styles';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <FloatingButton />
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Contact />
    </>
  );
}
