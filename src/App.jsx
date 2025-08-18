import React, { Suspense, lazy } from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import FloatingButton from './Components/Button';
import { GlobalStyle } from './app.styles';
import { Analytics } from "@vercel/analytics/react";
import Footer from './Components/Footer';

// Lazy load pros componentes mais pesados
const Gallery = lazy(() => import('./Components/Gallery'));
const Events = lazy(() => import('./Components/Events'));
const Contact = lazy(() => import('./Components/Contact'));

export default function Home() {
  return (
    <>
      <Analytics />
      <GlobalStyle />
      <Hero />
      <About />

      <Suspense fallback={<div style={{ textAlign: "center", padding: "2rem" }}>Carregando...</div>}>
        <Gallery />
        <Events />
        <Contact />
      </Suspense>

      <Footer />
      <FloatingButton />
    </>
  );
}
