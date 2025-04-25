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
        Franzoni vem se destacando de forma marcante na cena do funk, conquistando 
        espaço com suas produções autorais e sua habilidade única de criar sets envolventes. <br></br> 
        Sua curadoria musical combina originalidade e sofisticação, resultando em apresentações que surpreendem e contagiam o público.
        </Text>
      </SectionContent>
    </AboutSection>
  );
}
