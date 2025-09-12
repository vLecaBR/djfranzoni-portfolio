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
  PassedEventDetails,
  BgImage
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
    { date: "12/09", name: "Arq", local: "Ribeirão Preto - SP"  },
    { date: "13/09", name: "Resort da LawLaw", local: "Ribeirão Preto - SP" },
  ];

  return (
    <NextEventsSection>
      <BackgroundEvents>
        <BgImage
          src="/img/background_5.webp"
          alt="Background de eventos"
          loading="lazy"
        />
      </BackgroundEvents>

      <SectionContent
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title>Próximos Eventos</Title>
        <EventsList>
          {events.map((event, idx) => {
            const eventDate = parseDate(event.date);
            const isPast = isPastEvent(eventDate);
            const DetailsComponent = isPast ? PassedEventDetails : EventDetails;

            return (
              <EventCard key={idx} aria-label={`Evento ${event.name} em ${event.local} dia ${event.date}`}>
                <EventDate>{event.date}</EventDate>
                <DetailsComponent>
                  <strong>{event.name}</strong><br/>
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
