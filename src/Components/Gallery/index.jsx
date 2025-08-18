import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GalerySection,
  BackgroundGallery,
  SectionContent,
  Title,
  Grid,
  Image,
  VideoWrapper,
  VideoThumbnail
} from './Gallery.styles';

export default function Gallery() {
  const [video1, setVideo1] = useState(false);
  const [video2, setVideo2] = useState(false);

  return (
    <GalerySection>
      {/* Background otimizado */}
      <BackgroundGallery>
        <img
          src="/img/background_3.webp"
          alt="Galeria Background"
          loading="lazy"
        />
      </BackgroundGallery>

      <SectionContent
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Galeria de Fotos e Vídeos</Title>
        <Grid>
          {/* Imagens otimizadas */}
          <Image src="/img/show1.webp" alt="Show 1" loading="lazy" />
          <Image src="/img/show2.webp" alt="Show 2" loading="lazy" />

          {/* Vídeo 1 - thumbnail + clique */}
          <VideoWrapper>
            {video1 ? (
              <iframe
                src="https://www.youtube.com/embed/5i9zoi5NCwY"
                allowFullScreen
                title="YouTube Video 1"
              />
            ) : (
              <VideoThumbnail
                onClick={() => setVideo1(true)}
                style={{
                  backgroundImage: 'url(https://img.youtube.com/vi/5i9zoi5NCwY/hqdefault.jpg)',
                }}
              >
                ▶
              </VideoThumbnail>
            )}
          </VideoWrapper>

          {/* Vídeo 2 - thumbnail + clique */}
          <VideoWrapper>
            {video2 ? (
              <iframe
                src="https://www.youtube.com/embed/CJ_gBLI1V7c"
                allowFullScreen
                title="YouTube Video 2"
              />
            ) : (
              <VideoThumbnail
                onClick={() => setVideo2(true)}
                style={{
                  backgroundImage: 'url(https://img.youtube.com/vi/CJ_gBLI1V7c/hqdefault.jpg)',
                }}
              >
                ▶
              </VideoThumbnail>
            )}
          </VideoWrapper>
        </Grid>
      </SectionContent>
    </GalerySection>
  );
}
