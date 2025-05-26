import { useState, useEffect } from "react";
import EventForm from "../components/EventForm";

const Home = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    let ignor = false;
    async () => {
      try {
        const allEvents = await getEvents();
        if (!ignor) {
          setEvent(allEvents);
        }
      } catch (error) {
        console.error("Error Found", error);
      }
    };
  });
  return (
    <div>
      <EventForm setEvents={setEvent} />
    </div>
  );
};

export default Home;
