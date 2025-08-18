import styled from 'styled-components';
import { Title, SectionContent } from '../../app.styles';

export const NextEventsSection = styled.section`
  position: relative;
  padding: 5rem 1rem;
  text-align: center;
  overflow: hidden;
`;

export const BackgroundEvents = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
`;

export const EventCard = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-left: 10px solid #ED5AA5;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
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
  text-align: left;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;

export const PassedEventDetails = styled(EventDetails)`
  text-decoration: line-through;
  opacity: 0.6;
`;

export { SectionContent, Title };
