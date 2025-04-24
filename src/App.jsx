import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  GlobalStyle,
  BackgroundHeroSec,
  BackgroundAbout,
  BackgroundGallery,
  BackgroundEvents,
  BackgroundContact,
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
  EventDetails,
  ContactSection,
  AboutSection,
  GalerySection,
  NextEventsSection
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
      <BackgroundHeroSec $image="/img/background_1.jpeg" />
        <SectionContent as={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <LogoImage src="/img/logo1.png" alt="DJ Franzoni" />
          <HeroText>A mais mais de rp city</HeroText>
        </SectionContent>
      </HeroSection>

      {/* Sobre a DJ */}
      <AboutSection>
        <BackgroundAbout $image="/img/background_2.jpeg" />
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
      </AboutSection>

      {/* Galeria */}
      <GalerySection>
        <BackgroundGallery $image="/img/background_3.jpeg" />
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Galeria de Fotos e Vídeos</Title>
          <Grid>
            <Image src="/show1.jpg" alt="Show 1" />
            <Image src="/show2.jpg" alt="Show 2" />
            <Video src="https://www.youtube.com/embed/ScMzIvxBSi4" allowFullScreen title="YouTube Video" />
            <Video src="https://www.youtube.com/embed/ScMzIvxBSi4" allowFullScreen title="Outro Video" />
          </Grid>
        </SectionContent>
      </GalerySection>

      {/* Próximos Eventos */}
      <NextEventsSection>
        <BackgroundEvents $image="/img/background_5.jpeg" />
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Próximos Eventos</Title>
          <EventsList>
            <EventCard>
              <EventDate>10/04</EventDate>
              <EventDetails>
                <strong>Approve</strong><br />
                Ribeirão Preto - SP
              </EventDetails>
            </EventCard>
            <EventCard>
              <EventDate>11/04</EventDate>
              <EventDetails>
                <strong>Baile da ENF</strong><br />
                Ribeirão Preto - SP
              </EventDetails>
            </EventCard>
            <EventCard>
              <EventDate>19/04</EventDate>
              <EventDetails>
                <strong>JUR</strong><br />
                Assis - SP
              </EventDetails>
            </EventCard>
            <EventCard>
              <EventDate>25/04</EventDate>
              <EventDetails>
                <strong>ARQuibancada</strong><br />
                Ribeirão Preto - SP
              </EventDetails>
            </EventCard>
            <EventCard>
              <EventDate>26/04</EventDate>
              <EventDetails>
                <strong>Kzonaberta</strong><br />
                Uberaba - MG
              </EventDetails>
            </EventCard>
          </EventsList>
        </SectionContent>
      </NextEventsSection>

      {/* Contato */}
      <ContactSection>
        <BackgroundContact $image="/img/background_6.jpeg" />
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
      </ContactSection>

      {/* Rodapé */}
      <Footer>
        © {new Date().getFullYear()} No Filter Creative. Todos os direitos reservados.
      </Footer>
    </>
  );
}
