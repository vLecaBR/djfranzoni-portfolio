import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaSoundcloud, FaYoutube } from 'react-icons/fa';
import {
  ContactSection,
  BackgroundContact,
  SectionContent,
  Title,
  ContactText,
  SocialLinks,
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
          (16)99741-1851 <a href= "https://wa.me/5516997411851" target="_blank" rel="noopener noreferrer">(Duda)</a> <br />
          (16)99167-2353 <a href= "https://wa.me/5516991672353" target="_blank" rel="noopener noreferrer">(Mile)</a> <br /><br />
          Siga nas redes sociais:<br />
                  <SocialLinks>
                    <a href="https://www.instagram.com/franzoni.dj/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                    <a href="https://soundcloud.com/sofia-franzoni-463224090" target="_blank" rel="noopener noreferrer">
                      <FaSoundcloud />
                    </a>
                    <a href="https://www.youtube.com/@DJfranzoni" target="_blank" rel="noopener noreferrer">
                      <FaYoutube />
                    </a>
                  </SocialLinks>
        </ContactText>
      </SectionContent>
    </ContactSection>
  );
}
