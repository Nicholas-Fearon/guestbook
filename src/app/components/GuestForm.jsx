import { db } from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function GuestForm() {
  const { userId } = await auth();
  const user = await currentUser();
  const user_id = user.id;
  console.log("this is the user id that will go with the post:", user_id);
  console.log("This is my userId:", userId);
  console.log("This is my currentUser:", user);

  async function handleSubmit(formData) {
    "use server";
    const guest = formData.get("guest");
    const message = formData.get("message");

    await db.query(
      `INSERT INTO guestbook (guest, message, user_id ) VALUES ($1, $2, $3)`,
      [guest, message, user_id]
    );

    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 via-yellow-400 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-black font-serif mb-6 text-center">
          Write a Message
        </h1>
        <form action={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="guest"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              id="guest"
              type="text"
              name="guest"
              placeholder="Enter your name here"
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              rows="4"
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            ></textarea>
          </div>
          <input type="hidden" name="id" value={user_id} />
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-green-500 font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Post Message
          </button>
        </form>
      </div>
    </div>
  );
}
