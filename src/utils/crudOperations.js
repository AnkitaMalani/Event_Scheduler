const verificationToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNzQ3NzYzODk0LCJleHAiOjE3NTEzNjM4OTR9.Fo4wRmqRFsU3rwjfFdXUuKalGx1ZEDsPGoi9Vz__-zA";

export const createEvent = async (title, description, location) => {
  try {
    const now = new Date();
    await fetch("http://localhost:3001/api/events", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        date: now,
        location: location,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${verificationToken}`,
      },
    });
  } catch (err) {
    console.error("Error creating product: ", err);
  }
};
