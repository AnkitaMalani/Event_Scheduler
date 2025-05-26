import { Link } from "react-router";

const EventCard = () => {
  return (
    <div class="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
      <h2 class="text-lg font-semibold mb-2">Event Crile</h2>
      <p class="text-sm text-gray-500 mb-4">28-2aty 20 pm</p>
      <link to={`/events/${_id}`}>
        <button class="ml-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm">
          Details
        </button>
      </link>
    </div>
  );
};

export default EventCard;
