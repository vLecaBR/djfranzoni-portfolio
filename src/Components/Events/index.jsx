import React from 'react';
import { motion } from 'framer-motion';
import {
  NextEventsSection,
  BackgroundEvents,
  SectionContent,
  Title,
  EventsList,
  EventCard,
  EventDate,
  EventDetails
} from './Events.styles';

export default function Events() {
  return (
    <NextEventsSection>
      <BackgroundEvents $image="/img/background_5.jpeg" />
      <SectionContent
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Próximos Eventos</Title>
        <EventsList>
          {[
            { date: "10/04", name: "Approve", local: "Ribeirão Preto - SP" },
            { date: "11/04", name: "Baile da ENF", local: "Ribeirão Preto - SP" },
            { date: "19/04", name: "JUR", local: "Assis - SP" },
            { date: "25/04", name: "ARQuibancada", local: "Ribeirão Preto - SP" },
            { date: "26/04", name: "Kzonaberta", local: "Uberaba - MG" },
          ].map((event, idx) => (
            <EventCard key={idx}>
              <EventDate>{event.date}</EventDate>
              <EventDetails>
                <strong>{event.name}</strong><br />
                {event.local}
              </EventDetails>
            </EventCard>
          ))}
        </EventsList>
      </SectionContent>
    </NextEventsSection>
  );
}
