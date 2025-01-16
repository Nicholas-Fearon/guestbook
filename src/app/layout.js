import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MJ & Nick GB",
  description: "MJ & Nick wedding guestbook",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-green-500 via-yellow-400 to-black text-gray-900`}
        >
          {/* Navigation Bar */}
          <Nav />

          {/* Main Content */}
          <main className="container mx-auto p-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
