// import pg from "pg";
// const { Client } = pg;

// Import utility functions
import { processBodyFromRequest, returnErrorWithMessage } from "./utils.js";

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

// export const createProduct = async (req, res) => {
//   try {
//     const body = await processBodyFromRequest(req); // This utility function gets the body for you
//     if (!body) return returnErrorWithMessage(res, 400, "Body is required");
//     const parsedBody = JSON.parse(body);
//     const client = new Client({
//       connectionString: process.env.PG_URI,
//     });
//     await client.connect();
//     const results = await client.query(
//       "INSERT INTO products (name, image, description, category, price, stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;",
//       [
//         parsedBody.name,
//         parsedBody.image,
//         parsedBody.description,
//         parsedBody.category,
//         parsedBody.price,
//         parsedBody.stock,
//       ]
//     );
//     await client.end();
//     res.statusCode = 201;
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(results.rows[0]));
//   } catch (error) {
//     console.error("Error creating product: ", error);
//     returnErrorWithMessage(res);
//   }
// };
