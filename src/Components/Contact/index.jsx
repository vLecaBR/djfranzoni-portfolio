import React from 'react';
import { motion } from 'framer-motion';
import {
  ContactSection,
  BackgroundContact,
  SectionContent,
  Title,
  ContactText
} from './Contact.styles';

export default function Contact() {
  return (
    <ContactSection>
      <BackgroundContact $image="/img/background_6.jpeg" />
      <SectionContent
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Contato / Redes Sociais</Title>
        <ContactText>
          Orçamentos: <br />
          (16)99741-1851 (Duda)<br />
          (16)99167-2353 (Mile)<br /><br />
          Siga nas redes sociais:<br />
          <a href="https://www.instagram.com/franzoni.dj/" target="_blank" rel="noopener noreferrer"> Instagram </a> |
          <a href="https://www.instagram.com/nofilter_creative" target="_blank" rel="noopener noreferrer"> No Filter Creative</a>
        </ContactText>
      </SectionContent>
    </ContactSection>
  );
}
