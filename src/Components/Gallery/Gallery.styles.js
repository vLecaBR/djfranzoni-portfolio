import styled from 'styled-components';
import { SectionContent, Title } from '../../app.styles';

export const GalerySection = styled.section`
  position: relative;
  padding: 5rem 1rem;
  text-align: center;
  overflow: hidden;
`;

export const BackgroundGallery = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.25;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const VideoThumbnail = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export { SectionContent, Title };
