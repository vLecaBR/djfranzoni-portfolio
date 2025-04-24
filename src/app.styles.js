import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #000;
    color: #fff;
    scroll-behavior: smooth;
  }
`;

const responsiveSection = `
  position: relative;
  padding: 5rem 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const Section = styled.section`
  ${responsiveSection}
`;

export const AboutSection = styled.section`
  ${responsiveSection}
  height: auto;
`;

export const GalerySection = styled.section`
  ${responsiveSection}
  height: auto;
`;

export const ServicesSection = styled.section`
  ${responsiveSection}
`;

export const NextEventsSection = styled.section`
  ${responsiveSection}
`;

export const ContactSection = styled.section`
  ${responsiveSection}
`;

const backgroundStyle = `
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  z-index: 0;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

export const BackgroundHeroSec = styled.div`
  ${backgroundStyle}
  background-image: url(${props => props.$image});
  opacity: 0.2;
`;

export const BackgroundAbout = styled.div`
  ${backgroundStyle}
  background-image: url(${props => props.$image});
  opacity: 0.3;
`;

export const BackgroundGallery = styled.div`
  ${backgroundStyle}
  background-image: url(${props => props.$image});
  opacity: 0.25;
`;

export const BackgroundServices = styled.div`
  ${backgroundStyle}
  background-image: url(${props => props.$image});
  opacity: 0.15;
`;

export const BackgroundEvents = styled.div`
  ${backgroundStyle}
  background-image: url(${props => props.$image});
  opacity: 0.2;
`;

export const BackgroundContact = styled.div`
  ${backgroundStyle}
  background-image: url(${props => props.$image});
  opacity: 0.3;
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

  @media (max-width: 600px) {
    right: 1rem;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
`;

export const SectionContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #ddd;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
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

  @media (max-width: 768px) {
    height: auto;
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
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
