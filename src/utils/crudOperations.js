export const createEvent = async (title, description, location) => {
  try {
    const verificationToken = localStorage.getItem("token");
    if (!verificationToken) return alert("Please sign in to create a event");
    console.log(verificationToken);
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
