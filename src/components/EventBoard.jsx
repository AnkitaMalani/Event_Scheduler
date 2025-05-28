import React from "react";
import EventCard from "./EventCard";

const EventBoard = ({ events = [] }) => {
  
  if (!events || events.length === 0) {
    return <p className="text-center text-gray-500">No events found.</p>;
  }

  return (
    <>
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
    </>
  );
};

export default EventBoard;
