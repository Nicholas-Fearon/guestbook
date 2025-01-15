import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 via-yellow-400 to-black flex items-center justify-center">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white bg-opacity-90 max-w-lg">
        <h1 className="text-4xl font-extrabold text-black font-serif mb-4">
          Welcome to Nick & MJ's Guestbook
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Thank you for celebrating this special day with us. Share your wishes
          and explore messages from other guests!
        </p>
        <Link
          href="/posts"
          className="px-6 py-3 text-black bg-yellow-400 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 inline-block"
        >
          See What Other Guests Have Wrote
        </Link>
      </div>
    </div>
  );
}
