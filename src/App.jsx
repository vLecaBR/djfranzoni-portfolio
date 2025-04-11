import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #000;
    color: #fff;
    scroll-behavior: smooth;
  }
`;

const Section = styled.section`
  position: relative;
  padding: 5rem 1rem;
  text-align: center;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background: url(${props => props.image}) no-repeat center center/cover;
  opacity: 0.2;
  z-index: 0;
`;

const SectionContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #ddd;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

const Video = styled.iframe`
  width: 100%;
  height: 200px;
  border: none;
  border-radius: 12px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  resize: vertical;
`;

const SubmitButton = styled.button`
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

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #111;
  font-size: 0.875rem;
  color: #aaa;
`;

export default function Home() {
  useEffect(() => {
    document.title = 'DJ Franzoni - Portfolio';
  }, []);

  return (
    <>
      <GlobalStyle />

      {/* Hero Section */}
      <Section style={{ height: '100vh', paddingTop: 0 }}>
        <Background image="/dj-photo.jpg" />
        <SectionContent as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>DJ Electra</h1>
          <Text>Energia, ritmo e vibração nos melhores eventos.</Text>
          <SubmitButton style={{ marginTop: '2rem' }}>Solicitar Orçamento</SubmitButton>
        </SectionContent>
      </Section>

      {/* Sobre a DJ */}
      <Section>
        <Background image="/bg2.jpg" />
        <SectionContent>
          <Title>Sobre a DJ</Title>
          <Text>
            DJ Electra é uma artista apaixonada pela música eletrônica, com uma presença marcante nas pistas. Sua vibe contagiante e sets criativos garantem noites inesquecíveis.
          </Text>
          <Text>
            Já tocou em festas privadas, festivais, clubes renomados e eventos corporativos por todo o Brasil.
          </Text>
          <Text>
            Influências: house, techno, disco e synthwave — uma mistura sofisticada que agrada todos os públicos.
          </Text>
        </SectionContent>
      </Section>

      {/* Galeria */}
      <Section>
        <Background image="/bg3.jpg" />
        <SectionContent>
          <Title>Galeria de Fotos e Vídeos</Title>
          <Grid>
            <Image src="/show1.jpg" alt="Show 1" />
            <Image src="/show2.jpg" alt="Show 2" />
            <Video src="https://www.youtube.com/embed/ScMzIvxBSi4" allowFullScreen />
            <Video src="https://player.vimeo.com/video/76979871" allowFullScreen />
          </Grid>
        </SectionContent>
      </Section>

      {/* Serviços */}
      <Section>
        <Background image="/bg4.jpg" />
        <SectionContent>
          <Title>Serviços</Title>
          <Text>Disponível para: festas, casamentos, eventos corporativos, festivais e clubes.</Text>
          <Text>Equipamentos profissionais de som e iluminação sob demanda.</Text>
        </SectionContent>
      </Section>

      {/* Depoimentos */}
      <Section>
        <Background image="/bg5.jpg" />
        <SectionContent>
          <Title>Depoimentos</Title>
          <Text>“A DJ Electra fez nossa festa ser inesquecível. Todos dançaram até o último minuto!” – Marina C.</Text>
          <Text>“Som de altíssima qualidade e muita presença de palco.” – Eventos Prime</Text>
        </SectionContent>
      </Section>

      {/* Contato */}
      <Section>
        <SectionContent>
          <Title>Contato / Solicitar Orçamento</Title>
          <Form>
            <Input type="text" placeholder="Nome" required />
            <Input type="email" placeholder="Email" required />
            <Input type="text" placeholder="Tipo de Evento" />
            <Textarea rows="5" placeholder="Mensagem" />
            <SubmitButton type="submit">Solicitar Orçamento</SubmitButton>
          </Form>
          <Text style={{ marginTop: '2rem' }}>
            Siga nas redes sociais: 
            <br />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
            <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer"> SoundCloud</a>
          </Text>
        </SectionContent>
      </Section>

      {/* Rodapé */}
      <Footer>
        © {new Date().getFullYear()} DJ Electra. Todos os direitos reservados. | <a href="#">Política de Privacidade</a>
      </Footer>
    </>
  );
}