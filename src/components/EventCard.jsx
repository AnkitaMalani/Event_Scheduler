import { Link } from "react-router";

const EventCard = ({id,title, date}) => {
  return (
    <div className="bg-white rounded-xl p-6 justify-items-center shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold  mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <Link to={`/events/${id}`}>
        <button className="ml-auto bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm">
          Details
        </button>
      </Link>
    </div>
  );
};

export default EventCard;
