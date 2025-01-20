"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ guest, message, likes, userId }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      const res = await fetch("/api/deletePost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guest, message, likes, userId }),
      });

      if (res.ok) {
        router.refresh(); // Refresh the page to show updated data
      } else {
        console.error("Failed to delete the post.");
        alert("Failed to delete the post.");
      }
    } catch (error) {
      console.error("Error deleting the post:", error);
      alert("An error occurred while deleting the post.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
}