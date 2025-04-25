import styled from 'styled-components';
import { Title, Text, SectionContent } from '../../app.styles';

export const ContactSection = styled.section`
  position: relative;
  padding: 5rem 1rem;
  text-align: center;
`;

export const BackgroundContact = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.$image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.3;
  z-index: 0;

  @media (max-width: 768px) {
    background-attachment: scroll;
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

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    color: #ED5AA5;
    font-size: 1.25rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

export { SectionContent, Title };
