import React from 'react';
import { FooterWrapper, FooterColumn, FooterText, SocialLinks } from './Footer.styles';
import { FaInstagram, FaSoundcloud, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterColumn>
        <FooterText>
          © {new Date().getFullYear()} No Filter Creative. Todos os direitos reservados.
        </FooterText>
      </FooterColumn>

      <FooterColumn>
        <SocialLinks>
          <a href="https://www.instagram.com/franzoni.dj/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://soundcloud.com/sofia-franzoni-463224090" target="_blank" rel="noopener noreferrer">
            <FaSoundcloud />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </SocialLinks>
      </FooterColumn>
    </FooterWrapper>
  );
}
