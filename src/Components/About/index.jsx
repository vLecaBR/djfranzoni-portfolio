import React from 'react';
import { motion } from 'framer-motion';
import {
  AboutSection,
  BackgroundAbout,
  SectionContent,
  Title,
  Text
} from './About.styles';

export default function About() {
  return (
    <AboutSection>
      <BackgroundAbout $image="/img/background_2.jpeg" />
      <SectionContent
        as={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Sobre a DJ</Title>
        <Text>
          <p>
            Franzoni vem se destacando de forma cada vez mais intensa na cena do funk, consolidando seu nome como uma das artistas mais criativas e inovadoras da atualidade.
          </p>
          <p>
            Com produções autorais que carregam sua identidade única e uma habilidade incomparável de criar sets que hipnotizam a pista, ela conquista não apenas espaço, mas também respeito dentro do meio.
          </p>
          <p>
            Sua curadoria musical vai muito além do comum: é uma mistura precisa entre originalidade, sofisticação e feeling, resultando em apresentações que surpreendem, envolvem e fazem o público viver uma verdadeira experiência sonora.
          </p>
          <p>
            Cada performance é pensada para contar uma história, transportar quem ouve para um universo próprio e manter a energia lá em cima do início ao fim. Franzoni não apenas toca, ela cria momentos que ficam na memória.
          </p>
        </Text>
      </SectionContent>
    </AboutSection>
  );
}
