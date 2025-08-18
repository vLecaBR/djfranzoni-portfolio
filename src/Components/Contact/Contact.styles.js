import styled from 'styled-components';
import { Title, Text, SectionContent } from '../../app.styles';

export const ContactSection = styled.section`
  position: relative;
  padding: 5rem 1rem;
  text-align: center;
  overflow: hidden;
`;

export const BackgroundContact = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
`;

export const ContactText = styled(Text)`
  margin-top: 2rem;

  a {
    color: #ED5AA5;
    text-decoration: none;
    margin: 0.25rem 0;
    display: inline-block;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;

  a {
    color: #ED5AA5;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s ease;
    will-change: color;

    &:hover {
      color: #fff;
    }
  }
`;

export { SectionContent, Title };
