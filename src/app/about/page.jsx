export default function About() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-500 via-yellow-400 to-black flex flex-col items-center p-6">
        <div className="w-full max-w-4xl bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-black font-serif mb-6 text-center">
            About Guestbook
          </h1>
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              Welcome to Guestbook, a polished version of my original "wedding
              guestbook" app that I created during my Software Development
              Bootcamp. The idea behind this app is to allow happy newlyweds to
              have a place for their guests to post a special message for them.
            </p>
            <p>
              Redoing this app after my bootcamp helped me better understand key
              concepts of server-side rendering and client-side rendering. This is
              also my first fully functioning CRUD app. This polished app
              represents my growth and improvement of my technical knowledge.
            </p>
            <p>
              Looking ahead, I plan to improve the app by implementing replies to
              posts by other users. Also, new posts will appear at the top of the
              posts page.
            </p>
          </div>
        </div>
      </div>
    );
  }