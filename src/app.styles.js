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

export const Background = styled.div`
  position: absolute;
  inset: 0;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.2;
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

export const TestimonialText = styled(Text)`
  font-style: italic;
  font-weight: lighter;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 12px;
  margin-top: ${props => props.first ? '0' : '1rem'};
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
