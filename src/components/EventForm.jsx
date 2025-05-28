import { useState } from "react";
import { createEvent } from "../utils/crudOperations";

const EventForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent(form.title, form.description, form.location);
    setForm({
      title: "",
      description: "",
      location: "",
    });
  };

  return (
    <section className="flex flex-col items-center gap-4 w-1/2 border-2 rounded-lg p-4 mx-8">
      <h2 className="text-4xl">Add a new event!</h2>
      <form
        onSubmit={handleSubmit}
        id="add-form"
        className="flex flex-col gap-4 w-3/4">
        <label className="w-full flex gap-2 items-baseline">
          <span className="text-xl">Name:</span>
          <input
            value={form.title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Name of the Event"
            className="bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
          />
        </label>
        <label className="w-full flex gap-2 items-baseline">
          <span className="text-xl">Description for the event</span>
          <input
            value={form.description}
            onChange={handleChange}
            name="description"
            type="text"
            placeholder="Short description about the event"
            className="bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 w-full"
          />
        </label>
        <label className="w-full flex gap-2 items-baseline">
          <span className="text-xl">Where is the location?</span>
          <input
            value={form.location}
            onChange={handleChange}
            name="location"
            type="text"
            placeholder="Where does the Event take place?"
            className="bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 w-full"
          />
        </label>
        <button
          id="submit-btn"
          type="submit"
          className="bg-green-600 p-2 rounded-lg font-bold">
          Add event
        </button>
      </form>
    </section>
  );
};
export default EventForm;
