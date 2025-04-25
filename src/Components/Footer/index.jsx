import React from 'react';
import { FooterWrapper, FooterColumn, FooterText, SocialLinks } from './Footer.styles';
import { FaInstagram } from 'react-icons/fa';

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
          <a href="https://www.instagram.com/nofilter_creative/#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </SocialLinks>
      </FooterColumn>
    </FooterWrapper>
  );
}
