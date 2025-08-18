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
  BgImage,
} from './Contact.styles';

export default function Contact() {
  return (
    <ContactSection>
      {/* Background otimizado */}
      <BackgroundContact>
        <BgImage
          src="/img/background_6.webp"
          alt="Background de contato"
          loading="lazy"
        />
      </BackgroundContact>

      <SectionContent
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title>Contato / Redes Sociais</Title>
        <ContactText>
          Orçamentos: <br />
          <a
            href="https://wa.me/5516997411851"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Duda"
          >
            (16) 99741-1851 (Duda)
          </a>
          <br />
          <a
            href="https://wa.me/5516991672353"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Mile"
          >
            (16) 99167-2353 (Mile)
          </a>
          <br /><br />
          Siga nas redes sociais:
          <SocialLinks>
            <a
              href="https://www.instagram.com/franzoni.dj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram DJ Franzoni"
            >
              <FaInstagram />
            </a>
            <a
              href="https://soundcloud.com/sofia-franzoni-463224090"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Soundcloud DJ Franzoni"
            >
              <FaSoundcloud />
            </a>
            <a
              href="https://www.youtube.com/@DJfranzoni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube DJ Franzoni"
            >
              <FaYoutube />
            </a>
          </SocialLinks>
        </ContactText>
      </SectionContent>
    </ContactSection>
  );
}
