import React from 'react';
import { motion } from 'framer-motion';
import {
  HeroSection,
  BackgroundHeroSec,
  SectionContent,
  LogoImage,
  HeroText
} from './Hero.styles';

export default function Hero() {
  return (
    <HeroSection>
      <BackgroundHeroSec $image="/img/background_1.jpeg" />
      <SectionContent
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <LogoImage src="/img/logo1.png" alt="DJ Franzoni" />
        <HeroText>A mais mais de rp city</HeroText>
      </SectionContent>
    </HeroSection>
  );
}
