import { useState, useEffect } from "react";

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
  return <div></div>;
};

export default Home;
