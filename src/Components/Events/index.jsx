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
  EventDetails,
  PassedEventDetails
} from './Events.styles';

const parseDate = (dateStr) => {
  const [day, month] = dateStr.split('/');
  const year = new Date().getFullYear();
  return new Date(`${year}-${month}-${day}`);
};

export default function Events() {
  const today = new Date();

  const events = [
    { date: "10/04", name: "Approve", local: "Ribeirão Preto - SP" },
    { date: "11/04", name: "Baile da ENF", local: "Ribeirão Preto - SP" },
    { date: "19/04", name: "JUR", local: "Assis - SP" },
    { date: "25/04", name: "ARQuibancada", local: "Ribeirão Preto - SP" },
    { date: "26/04", name: "Kzonaberta", local: "Uberaba - MG" },
  ];

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
          {events.map((event, idx) => {
            const eventDate = parseDate(event.date);
            const isPast = eventDate < today;
            const DetailsComponent = isPast ? PassedEventDetails : EventDetails;

            return (
              <EventCard key={idx}>
                <EventDate>{event.date}</EventDate>
                <DetailsComponent>
                  <strong>{event.name}</strong><br />
                  {event.local}
                </DetailsComponent>
              </EventCard>
            );
          })}
        </EventsList>
      </SectionContent>
    </NextEventsSection>
  );
}
