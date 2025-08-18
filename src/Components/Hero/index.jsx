import React from 'react';
import { motion } from 'framer-motion';
import {
  HeroSection,
  BackgroundHeroSec,
  SectionContent,
  LogoImage,
  HeroText,
  BgImage
} from './Hero.styles';

export default function Hero() {
  return (
    <HeroSection>
      {/* Background otimizado com imagem webp e lazy */}
      <BackgroundHeroSec>
        <BgImage
          src="/img/background_1.webp"
          alt="DJ Franzoni background"
          loading="lazy"
        />
      </BackgroundHeroSec>

      <SectionContent
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo com lazy loading */}
        <LogoImage
          src="/img/logo1.webp"
          alt="DJ Franzoni"
          loading="lazy"
        />
        <HeroText>Eai Franzoni, solta aquela, porra!</HeroText>
      </SectionContent>
    </HeroSection>
  );
}
