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
  Form,
  Input,
  Textarea,
  SubmitButton,
  Footer
} from './app.styles';

export default function Home() {
  useEffect(() => {
    document.title = 'DJ Franzoni - Portfolio';
  }, []);

  return (
    <>
      <GlobalStyle />

      {/* Hero Section */}
      <Section style={{ height: '100vh', paddingTop: '40vh' }}>
        <Background image="/dj-photo.jpg" style={{ filter: 'brightness(0.4)' }} />
        <SectionContent as={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 style={{ fontSize: '5rem', marginBottom: '1rem', textShadow: '0 0 25px #ec4899', letterSpacing: '2px' }}>DJ Franzoni</h1>
          <Text style={{ fontSize: '1.5rem', fontWeight: 'lighter', color: '#fff' }}>Energia, ritmo e vibração nos melhores eventos.</Text>
          <SubmitButton style={{ marginTop: '2.5rem' }}>Solicitar Orçamento</SubmitButton>
        </SectionContent>
      </Section>

      {/* Sobre a DJ */}
      <Section>
        <Background image="/bg2.jpg" />
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Title>Sobre a DJ</Title>
          <Text style={{ lineHeight: '2', fontSize: '1.1rem' }}>
              Franzoni tem se destacado de forma impressionante na cena do funk, 
              não apenas por suas músicas autorais, mas também pela habilidade única de montar
              seus sets com uma curadoria refinada e inovadora.
              Com uma pegada ousada e versátil, ela transita com
              maestria por diversas vertentes do funk, criando uma
              verdadeira montanha-russa sonora que transforma
              cada apresentação em uma experiência única e
              inesquecível para o público.
              Seu talento e presença de palco a levaram a se
              apresentar em grandes eventos como o Encontro Das
              Tribos, Noite Paulista, Wild Trap Festival, entre outros,
              consolidando seu nome entre os grandes da cena. Sua
              capacidade de conectar o público e elevar a energia da
              pista a torna uma das artistas mais requisitadas e
              promissoras do cenário. Franzoni está mais do que
              pronta para fazer parte do seu line-up e entregar uma
              performance que vai deixar todos ansiosos por mais.
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
          <Text style={{ fontStyle: 'italic', fontWeight: 'lighter', background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '8px' }}>
            “A DJ Electra fez nossa festa ser inesquecível. Todos dançaram até o último minuto!” – Marina C.
          </Text>
          <Text style={{ fontStyle: 'italic', fontWeight: 'lighter', background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
            “Som de altíssima qualidade e muita presença de palco.” – Eventos Prime
          </Text>
        </SectionContent>
      </Section>

      {/* Contato */}
      <Section>
        <SectionContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
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
        © {new Date().getFullYear()} DJ Franzoni. Todos os direitos reservados. | <a href="#">Política de Privacidade</a>
      </Footer>
    </>
  );
}
