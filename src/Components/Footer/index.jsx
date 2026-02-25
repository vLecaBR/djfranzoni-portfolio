import React from 'react';
import { FooterWrapper, FooterColumn, FooterText, SocialLinks } from './Footer.styles';

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
          >Victor Leça</a>. Todos os direitos reservados.
        </FooterText>
      </FooterColumn>

      <FooterColumn>
        <SocialLinks>
        </SocialLinks>
      </FooterColumn>
    </FooterWrapper>
  );
}
