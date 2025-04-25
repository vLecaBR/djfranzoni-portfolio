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
          <Image src="/img/show1.JPG" alt="Show 1" />
          <Image src="/img/show2.jpeg" alt="Show 2" />
          <Video
            src="https://www.youtube.com/embed/5i9zoi5NCwY"
            allowFullScreen
            title="YouTube Video"
          />
          <Video
            src="https://www.youtube.com/embed/CJ_gBLI1V7c"
            allowFullScreen
            title="YouTube Video2"
          />
        </Grid>
      </SectionContent>
    </GalerySection>
  );
}
