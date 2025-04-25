import styled from 'styled-components';
import { Text } from '../../app.styles'; // reutilizando estilo global
import { Section } from '../../app.styles';

export const HeroSection = styled(Section)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
`;

export const BackgroundHeroSec = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.$image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.2;
  z-index: 0;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

export const SectionContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const LogoImage = styled.img`
  height: 5rem;
  margin-bottom: 1rem;
  margin-top: 5rem;

  @media (max-width: 600px) {
    height: 3.5rem;
    margin-top: 3rem;
  }
`;

export const HeroText = styled(Text)`
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;
