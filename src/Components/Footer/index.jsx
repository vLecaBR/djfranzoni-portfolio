import React from 'react';
import { FooterWrapper, FooterColumn, FooterText, SocialLinks } from './Footer.styles';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterColumn>
        <FooterText>
          © {new Date().getFullYear()} Desenvolvido por <a 
          href="https://victorleca.vercel.app/" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
          >Victor Leça</a> | No Filter Creative. Todos os direitos reservados.
        </FooterText>
      </FooterColumn>

      <FooterColumn>
        <SocialLinks>
          <a
            href="https://www.instagram.com/nofilter_creative/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram No Filter Creative"
          >
            <FaInstagram />
            <span className="sr-only"></span>
          </a>
        </SocialLinks>
      </FooterColumn>
    </FooterWrapper>
  );
}
