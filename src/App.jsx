import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  GlobalStyle,
  Section,
  Background,
  SectionContent,
  Title,
  Text,
  Grid,
  Image,
  Video,
  FloatingButton,
  Footer,
  HeroSection,
  LogoImage,
  HeroText,
  ContactText,
  EventsList,
  EventCard,
  EventDate,
  EventDetails
} from './app.styles';

export default function Home() {
  useEffect(() => {
    document.title = 'DJ Franzoni - Portfolio';
  }, []);

  return (
    <>
      <GlobalStyle />

      <FloatingButton onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
        Solicitar Orçamento
      </FloatingButton>

      {/* Hero Section */}
      <HeroSection>
        <Background image="/dj-photo.jpg" />
        <SectionContent as={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <LogoImage src="/img/logo1.png" alt="DJ Franzoni" />
          <HeroText>A mais mais de rp city</HeroText>
        </SectionContent>
      </HeroSection>

      {/* Sobre a DJ */}
      <Section>
        <Background image="/bg2.jpg" />
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Sobre a DJ</Title>
          <Text>
            Franzoni tem se destacado de forma impressionante na cena do funk,
            não apenas por suas músicas autorais, mas também pela habilidade única de montar
            seus sets com uma curadoria refinada e inovadora. Com uma pegada ousada e versátil,
            ela transita com maestria por diversas vertentes do funk, criando uma verdadeira
            montanha-russa sonora que transforma cada apresentação em uma experiência única
            e inesquecível para o público. Seu talento e presença de palco a levaram a se
            apresentar em grandes eventos como o Encontro Das Tribos, Noite Paulista, Wild Trap Festival,
            entre outros, consolidando seu nome entre os grandes da cena.
          </Text>
        </SectionContent>
      </Section>

      {/* Galeria */}
      <Section>
        <Background image="/bg3.jpg" />
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Galeria de Fotos e Vídeos</Title>
          <Grid>
            <Image src="/show1.jpg" alt="Show 1" />
            <Image src="/show2.jpg" alt="Show 2" />
            <Video src="https://www.youtube.com/embed/ScMzIvxBSi4" allowFullScreen title="YouTube Video" />
            <Video src="https://www.youtube.com/embed/ScMzIvxBSi4" allowFullScreen title="Outro Video" />
          </Grid>
        </SectionContent>
      </Section>

      {/* Serviços */}
      <Section>
        <Background image="/bg4.jpg" />
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Serviços</Title>
          <Text>Disponível para: festas, aniversários, casamentos, eventos corporativos, festivais e clubes.</Text>
        </SectionContent>
      </Section>

      {/* Próximos Eventos */}
      <Section>
        <Background image="/bg5.jpg" />
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Próximos Eventos</Title>
          <EventsList>
            <EventCard>
              <EventDate>20/04</EventDate>
              <EventDetails>
                <strong>Wild Trap Festival</strong><br />
                São Paulo - SP
              </EventDetails>
            </EventCard>
            <EventCard>
              <EventDate>27/04</EventDate>
              <EventDetails>
                <strong>Baile da Tribo</strong><br />
                Campinas - SP
              </EventDetails>
            </EventCard>
            <EventCard>
              <EventDate>04/05</EventDate>
              <EventDetails>
                <strong>Noite Funkada</strong><br />
                Ribeirão Preto - SP
              </EventDetails>
            </EventCard>
            <EventCard>
              <EventDate>11/05</EventDate>
              <EventDetails>
                <strong>Evento Privado</strong><br />
                Franca - SP
              </EventDetails>
            </EventCard>
          </EventsList>
        </SectionContent>
      </Section>

      {/* Contato */}
      <Section>
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Contato / Redes Sociais</Title>
          <ContactText>
            Orçamentos: <br />
            (16)99741-1851 (Duda)<br />
            (16)99167-2353 (Mile)<br />
            <br />
            Siga nas redes sociais:
            <br />
            <a href="https://www.instagram.com/franzoni.dj/" target="_blank" rel="noopener noreferrer"> Instagram </a> |
            <a href="https://www.instagram.com/nofilter_creative" target="_blank" rel="noopener noreferrer"> No Filter Creative</a>
          </ContactText>
        </SectionContent>
      </Section>

      {/* Rodapé */}
      <Footer>
        © {new Date().getFullYear()} No Filter Creative. Todos os direitos reservados.
      </Footer>
    </>
  );
}
