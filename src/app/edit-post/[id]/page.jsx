"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function EditForm({ params }) {
  const { id } = params;
  const router = useRouter();

  const [guest, setGuest] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function fetchPostData() {
    try {
      const res = await fetch(`/api/posts/${id}`);
      if (!res.ok) throw new Error("Failed to fetch post data");

      const data = await res.json();
      setGuest(data.guest);
      setMessage(data.message);
    } catch (err) {
      console.error(err);
      setError("Unable to load the post.");
    }
  }

  useEffect(() => {
    fetchPostData();
  }, [id]);

  async function handleEdit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`/api/editPost/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guest, message }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to update the post.");
      }

      router.push("/posts");
    } catch (err) {
      console.error("Error updating post:", err);
      setError(err.message || "Failed to update the post. Please try again.");
    }
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">{error}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 via-yellow-400 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-black font-serif mb-6 text-center">
          Edit Your Message
        </h1>
        <form onSubmit={handleEdit} className="space-y-6">
          <div>
            <label
              htmlFor="guest"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              id="guest"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              name="guest"
              type="text"
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              rows="4"
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-green-500 font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Update Message
          </button>
        </form>
      </div>
    </div>
  );
}