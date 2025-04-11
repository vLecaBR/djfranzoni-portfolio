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
  Footer
} from './app.styles';

export default function Home() {
  useEffect(() => {
    document.title = 'DJ Franzoni - Portfolio';
  }, []);

  return (
    <>
      <GlobalStyle />

      {/* Botão flutuante */}
      <FloatingButton onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
        Solicitar Orçamento
      </FloatingButton>

      {/* Hero Section */}
      <Section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Background image="/dj-photo.jpg" />
        <SectionContent as={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 style={{ fontSize: '5rem', marginBottom: '1rem', textShadow: '0 0 25px #ec4899' }}>DJ Franzoni</h1>
          <Text style={{ fontSize: '1.5rem' }}>Energia, ritmo e vibração nos melhores eventos.</Text>
        </SectionContent>
      </Section>

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
            <Video src="https://player.vimeo.com/video/76979871" allowFullScreen title="Vimeo Video" />
          </Grid>
        </SectionContent>
      </Section>

      {/* Serviços */}
      <Section>
        <Background image="/bg4.jpg" />
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Serviços</Title>
          <Text>Disponível para: festas, casamentos, eventos corporativos, festivais e clubes.</Text>
          <Text>Equipamentos profissionais de som e iluminação sob demanda.</Text>
        </SectionContent>
      </Section>

      {/* Depoimentos */}
      <Section>
        <Background image="/bg5.jpg" />
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Depoimentos</Title>
          <Text style={{ fontStyle: 'italic', fontWeight: 'lighter', background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '12px' }}>
            “A DJ Electra fez nossa festa ser inesquecível. Todos dançaram até o último minuto!” – Marina C.
          </Text>
          <Text style={{ fontStyle: 'italic', fontWeight: 'lighter', background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '12px', marginTop: '1rem' }}>
            “Som de altíssima qualidade e muita presença de palco.” – Eventos Prime
          </Text>
        </SectionContent>
      </Section>

      {/* Contato */}
      <Section>
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Contato / Redes Sociais</Title>
          <Text style={{ marginTop: '2rem' }}>
            Orçamentos: <br></br>
            (16)99741-1851 (Duda)<br></br>
            (16)99167-2353 (Mile)<br></br>
            <br></br>
            Siga nas redes sociais:
            <br />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |
            <a href="https://www.instagram.com/nofilter_creative" target="_blank" rel="noopener noreferrer"> SoundCloud</a>
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
