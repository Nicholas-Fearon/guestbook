export default function Contact() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-500 via-yellow-400 to-black flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-lg bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-black font-serif mb-6 text-center">
            Contact Me
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
            I’d love to hear from you! Whether it’s feedback, questions, or collaboration opportunities, feel free to reach out.
          </p>
  
          {/* GitHub Section */}
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              View My Projects:
            </p>
            <a
              href="https://github.com/Nicholas-Fearon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              https://github.com/Nicholas-Fearon
            </a>
          </div>
  
          {/* Email Section */}
          <div>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Contact Me via Email:
            </p>
            <a
              href="mailto:nejfearon@gmail.com"
              className="text-blue-500 font-medium hover:underline"
            >
              nejfearon@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }