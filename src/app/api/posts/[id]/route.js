import { db } from "@/utils/db";

export async function GET(req, { params }) {
  try {
    const { id } = params; // Extract id from params

    const result = await db.query("SELECT * FROM guestbook WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return new Response(
        JSON.stringify({ error: "Post not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}