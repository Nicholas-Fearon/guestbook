import { db } from "@/utils/db";

export async function PUT(req, { params }) {
  try {
    const { id } = params; // Extract id from params
    const { guest, message } = await req.json(); // Parse incoming data

    // Validate the input
    if (!guest || !message || !id) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Update the database entry
    const result = await db.query(
      "UPDATE guestbook SET guest = $1, message = $2 WHERE id = $3 RETURNING *",
      [guest, message, id]
    );

    if (result.rowCount === 0) {
      return new Response(
        JSON.stringify({ error: "Post not found or could not be updated" }),
        { status: 404 }
      );
    }

    // Return the updated post
    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (error) {
    console.error("Error updating post:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}