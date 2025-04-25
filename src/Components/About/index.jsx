import React from 'react';
import { motion } from 'framer-motion';
import {
  AboutSection,
  BackgroundAbout,
  SectionContent,
  Title,
  Text
} from './About.styles';

export default function About() {
  return (
    <AboutSection>
      <BackgroundAbout $image="/img/background_2.jpeg" />
      <SectionContent
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Sobre a DJ</Title>
        <Text>
          Franzoni tem se destacado de forma impressionante na cena do funk,
          não apenas por suas músicas autorais, mas também pela habilidade única de montar
          seus sets com uma curadoria refinada e inovadora...
        </Text>
      </SectionContent>
    </AboutSection>
  );
}
