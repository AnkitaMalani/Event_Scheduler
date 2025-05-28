import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { getEventByID } from "../data/event";

const EventPage = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();
  const navigate = useNavigate();
  console.log(eventId);
 
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const eventData = await getEventByID(eventId);
        if (!ignore) {
          setEvent(eventData);
        }
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [eventId]);
  
  if (!event) {
    return <p className="text-center mt-10">Loading...</p>;
  }

   const { title, date, location, latitude, discription } = event;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="relative max-w-2xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fuchsia-500 to-purple-800 rounded-bl-full z-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-fuchsia-500 to-purple-800 rounded-tr-full z-0"></div>

        <div className="relative z-10 p-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-9">{title}</h1>

          <div className="flex justify-center space-x-10 text-sm text-gray-600 mb-4">
            <div>
              <p className="font-semibold text-black">{date}</p>
              <p>Date</p>
            </div>
            <div>
              <p className="font-semibold text-black">{location}</p>
              <p>Location</p>
            </div>
            <div>
              <p className="font-semibold text-black">{latitude}</p>
              <p>Latitude</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-6">{discription}</p>

          <button
            onClick={handleGoBack}
            className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-2 rounded-full shadow hover:from-purple-700 hover:to-indigo-700"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
