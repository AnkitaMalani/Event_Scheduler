import pg from "pg";
const { Client } = pg;

// Import utility functions
import { processBodyFromRequest, returnErrorWithMessage } from "./utils.js";

export const createProduct = async (req, res) => {
  try {
    const body = await processBodyFromRequest(req); // This utility function gets the body for you
    if (!body) return returnErrorWithMessage(res, 400, "Body is required");
    const parsedBody = JSON.parse(body);
    const client = new Client({
      connectionString: process.env.PG_URI,
    });
    await client.connect();
    const results = await client.query(
      "INSERT INTO products (name, image, description, category, price, stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;",
      [
        parsedBody.name,
        parsedBody.image,
        parsedBody.description,
        parsedBody.category,
        parsedBody.price,
        parsedBody.stock,
      ]
    );
    await client.end();
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(results.rows[0]));
  } catch (error) {
    console.error("Error creating product: ", error);
    returnErrorWithMessage(res);
  }
};
