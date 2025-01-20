import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Nav() {
  return (
    <nav className="w-full bg-gradient-to-r from-green-500 via-yellow-400 to-black p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link
            href="/"
            className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300"
          >
            Posts
          </Link>
          <Link
            href="/about"
            className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* User Authentication */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  rootBox:
                    "bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 px-4 py-2",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}