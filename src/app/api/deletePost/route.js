import { db } from "@/utils/db";

export async function POST(req) {
  const { guest, message, likes, userId } = await req.json();

  try {
    await db.query(
      `DELETE FROM guestbook 
       WHERE guest = $1 AND message = $2 AND likes = $3 AND user_id = $4`,
      [guest, message, likes, userId]
    );

    return new Response("Post deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting the post:", error);
    return new Response("Failed to delete the post", { status: 500 });
  }
}