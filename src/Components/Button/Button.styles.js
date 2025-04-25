import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

export const FloatingButtonWrapper = styled.a`
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  background: #ED5AA5;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 999px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  text-decoration: none;
  z-index: 1000;
  transition: all 0.3s ease;
  font-size: 1rem;
  animation: ${pulse} 2.5s infinite;
  cursor: pointer;

  &:hover {
    background: #db2777;
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
   display: none;
  }
`;
