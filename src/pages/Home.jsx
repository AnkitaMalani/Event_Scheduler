import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";

const Home = (events) => {
  const [event, setEvent] = useState([]);

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
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {/* {events.map((event)=>(
          <EventCard key={event._id}{...event}/>
        ))} */}
      </div>
    </section>
  );
};

export default Home;
