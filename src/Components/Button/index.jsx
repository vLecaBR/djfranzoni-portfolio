import React from 'react';
import { FloatingButtonWrapper } from './Button.styles';

export default function Button() {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <FloatingButtonWrapper
      onClick={handleClick}
      aria-label="Ir para orçamento"
    >
      Solicitar Orçamento
    </FloatingButtonWrapper>
  );
}
