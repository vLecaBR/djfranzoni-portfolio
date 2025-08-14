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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Sobre a DJ</Title>
        <Text>
        Franzoni vem se destacando de forma cada vez mais intensa na cena do funk, consolidando seu nome como uma das artistas mais criativas e inovadoras da atualidade. <br></br>
        Com produções autorais que carregam sua identidade única e uma habilidade incomparável de criar sets que hipnotizam a pista, ele conquista não apenas espaço, mas também respeito dentro do meio. <br></br>
        Sua curadoria musical vai muito além do comum: é uma mistura precisa entre originalidade, sofisticação e feeling, resultando em apresentações que surpreendem, envolvem e fazem o público viver uma verdadeira experiência sonora. 
        Cada performance é pensada para contar uma história, transportar quem ouve para um universo próprio e manter a energia lá em cima do início ao fim. <br></br>
        Franzoni não apenas toca ele cria momentos que ficam na memória.
        </Text>
      </SectionContent>
    </AboutSection>
  );
}
