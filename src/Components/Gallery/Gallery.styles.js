import styled from 'styled-components';
import { SectionContent, Title } from '../../app.styles';

export const GalerySection = styled.section`
  position: relative;
  padding: 5rem 1rem;
  text-align: center;
`;

export const BackgroundGallery = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.$image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.25;
  z-index: 0;

  @media (max-width: 768px) {
    background-attachment: scroll;
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

export { SectionContent, Title };
