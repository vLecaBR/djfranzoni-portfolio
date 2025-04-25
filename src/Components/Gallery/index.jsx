import React from 'react';
import { motion } from 'framer-motion';
import {
  GalerySection,
  BackgroundGallery,
  SectionContent,
  Title,
  Grid,
  Image,
  Video
} from './Gallery.styles';

export default function Gallery() {
  return (
    <GalerySection>
      <BackgroundGallery $image="/img/background_3.jpeg" />
      <SectionContent
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Galeria de Fotos e Vídeos</Title>
        <Grid>
          <Image src="/img/show1.jpg" alt="Show 1" />
          <Image src="/img/show2.jpeg" alt="Show 2" />
          <Video src="https://www.youtube.com/embed/ScMzIvxBSi4" allowFullScreen title="YouTube Video" />
          <Video src="https://www.youtube.com/embed/ScMzIvxBSi4" allowFullScreen title="Outro Video" />
        </Grid>
      </SectionContent>
    </GalerySection>
  );
}
