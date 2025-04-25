import React from 'react';
import { FloatingButtonWrapper } from './floating-button.styles';

export default function FloatingButton() {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <FloatingButtonWrapper onClick={handleClick}>
      Solicitar Orçamento
    </FloatingButtonWrapper>
  );
}
