import styled from 'styled-components';
import { Text, Title, SectionContent } from '../../app.styles';

export const AboutSection = styled.section`
  position: relative;
  padding: 5rem 1rem;
  text-align: center;
`;

export const BackgroundAbout = styled.div`
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

export { Title, Text, SectionContent };
