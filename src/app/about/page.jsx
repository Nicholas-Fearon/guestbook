export default function About() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-500 via-yellow-400 to-black flex flex-col items-center p-6">
        <div className="w-full max-w-4xl bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-black font-serif mb-6 text-center">
            About Guestbook
          </h1>
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
            Welcome to Guestbook, a polished and enhanced version of the “wedding guestbook” app I originally built during my Software Development Bootcamp. This app was designed to provide newlyweds with a special place where their guests can leave heartfelt messages to commemorate their big day.
            </p>
            <p>
            Revisiting and refining this project after my bootcamp gave me a deeper understanding of critical concepts, including server-side rendering and client-side rendering. It also marks an exciting milestone as my first fully functioning CRUD app, showcasing my growth and progression in software development.

            </p>
            <p>
            Looking ahead, I plan to enhance the app by adding the ability for users to reply to posts, fostering more interaction. Additionally, new posts will soon appear at the top of the posts page, keeping the content dynamic and fresh.
            </p>
            <p>Thank you for exploring this project with me—it’s a reflection of my learning journey and dedication to continuous improvement.</p>
          </div>
        </div>
      </div>
    );
  }