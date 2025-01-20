import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { db } from "@/utils/db";
import DeleteButton from "@/app/components/DeleteButton";

export default async function PostsPage() {
  const results = await db.query(`SELECT * FROM guestbook`);
  const posts = results.rows;
  const { userId } = await auth(); // Get the authenticated user ID

  console.log("This is muy userid:", userId);
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 via-yellow-400 to-black flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-white font-serif mb-6">
        Guest Posts
      </h1>
      {userId === null || userId === undefined ? (
        <Link
          href="/sign-in"
          className="px-6 py-3 text-black bg-yellow-400 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 mb-6"
        >
          Sign in to make a post
        </Link>
      ) : (
        <Link
          href="/form"
          className="px-6 py-3 text-black bg-green-500 font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 mb-6"
        >
          Write a Message
        </Link>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Guest: {post.guest}
            </p>
            <p className="text-gray-600 mb-4">{post.message}</p>
            <p className="text-sm text-gray-500">❤️ {post.likes} likes</p>

            {/* Only show Edit/Delete options if the user is signed in and owns the post */}
            {userId && post.user_id === userId && (
              <div className="flex gap-2 mt-4">
                <Link
                  href={`/edit-post/${post.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Edit
                </Link>
                <DeleteButton
                  guest={post.guest}
                  message={post.message}
                  likes={post.likes}
                  userId={post.user_id}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
