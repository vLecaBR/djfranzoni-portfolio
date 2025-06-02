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

// Função para converter string "dd/mm" em objeto Date
const parseDate = (dateStr) => {
  const [day, month] = dateStr.split('/');
  const year = new Date().getFullYear();
  return new Date(year, month - 1, day); // cria Date com hora 00:00
};

// Verifica se a data já passou (compara só a parte de dia, mês e ano)
const isPastEvent = (eventDate) => {
  const today = new Date();
  const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return eventDate < todayDateOnly;
};

export default function Events() {
  const events = [
    { date: "07/06", name: "IntegraBio", local: "Alfenas - MG" },
    { date: "13/06", name: "El Bailon", local: "Ribeirão Preto - SP" },
    { date: "21/06", name: "Ritmo Delas", local: "São Paulo - SP" },
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
            const isPast = isPastEvent(eventDate);
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
