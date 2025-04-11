// src/styles.js
import styled, { createGlobalStyle } from 'styled-components';

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
  background: url(${props => props.image}) no-repeat center center/cover;
  opacity: 0.2;
  z-index: 0;
`;

export const FloatingButton = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #ec4899;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 999px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  text-decoration: none;
  z-index: 1000;
  transition: all 0.3s ease;
  font-size: 1rem;

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
  height: 200px;
  border: none;
  border-radius: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: #ec4899;
  color: white;
  font-size: 1.125rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
  transition: background 0.3s ease;

  &:hover {
    background-color: #f472b6;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #111;
  font-size: 0.875rem;
  color: #aaa;
`;
