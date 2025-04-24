import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #000;
    color: #fff;
    scroll-behavior: smooth;
  }
`;

export const Section = styled.section`
  position: relative;
  padding: 5rem 1rem;
  text-align: center;
`;

// Background para Hero Section
export const BackgroundHeroSec = styled.div`
  position: absolute;
  inset: 0;
  background: url(${props => props.$image}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.2;
  z-index: 0;
  border: 2px solid red;
`;


// Background para a seção Sobre a DJ
export const BackgroundAbout = styled.div`
  position: absolute;
  inset: 0;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.3;
  z-index: 0;
`;

// Background para a Galeria
export const BackgroundGallery = styled.div`
  position: absolute;
  inset: 0;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.25;
  z-index: 0;
`;

// Background para a seção de Serviços
export const BackgroundServices = styled.div`
  position: absolute;
  inset: 0;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.15;
  z-index: 0;
`;

// Background para os Eventos
export const BackgroundEvents = styled.div`
  position: absolute;
  inset: 0;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.2;
  z-index: 0;
`;

// Background para a seção de Contato
export const BackgroundContact = styled.div`
  position: absolute;
  inset: 0;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.3;
  z-index: 0;
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

export const FloatingButton = styled.a`
  position: fixed;
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

  &:hover {
    background: #db2777;
    transform: scale(1.05);
  }
`;

export const SectionContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #ddd;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

export const Video = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  border-radius: 12px;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #111;
  font-size: 0.875rem;
  color: #aaa;
`;

export const HeroSection = styled(Section)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10vh;
`;

export const LogoImage = styled.img`
  height: 5rem;
  margin-bottom: 1rem;
  margin-top: 5rem;
`;

export const HeroText = styled(Text)`
  font-size: 1.5rem;
`;

export const ContactText = styled(Text)`
  margin-top: 2rem;

  a {
    color: #ED5AA5;
    text-decoration: none;
    margin: 0 0.25rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const EventCard = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-left: 4px solid #ED5AA5;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const EventDate = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ED5AA5;
  min-width: 80px;
`;

export const EventDetails = styled.div`
  font-size: 1.125rem;
  color: #ddd;
  margin-left: 1rem;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;

