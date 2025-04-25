import React from 'react';
import { FooterWrapper } from './Footer.styles';

export default function Footer() {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()} No Filter Creative. Todos os direitos reservados.
    </FooterWrapper>
  );
}
