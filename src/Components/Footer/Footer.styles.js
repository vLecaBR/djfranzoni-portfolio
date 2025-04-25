import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #111;
  color: #ccc;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 3rem 4rem;
  }
`;

export const FooterColumn = styled.div`
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: #ED5AA5;
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
