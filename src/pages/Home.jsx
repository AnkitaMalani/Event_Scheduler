import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import EventBoard from "../components/EventBoard";
import { getEvents } from "../data/event";
import EventForm from "../components/EventForm";

const Home = () => {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const allEvents = await getEvents();
        if (!ignore) {
          setEvent(allEvents);
        }
      } catch (error) {
        console.error("Error Found", error);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <>
      <EventBoard events={events} />
      <EventForm setEvent={setEvent} />
    </>
  );
};

export default Home;
