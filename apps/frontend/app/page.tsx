import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-mono flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full flex flex-col items-center justify-center text-center">

          {/* Logo/Brand */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
              OPINIOM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Change starts when you speak.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <button className="px-10 py-4 bg-white text-black text-lg font-medium  transition-all duration-300 hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white cursor-pointer shadow-lg hover:shadow-xl active:scale-95">
              Get Started
            </button>
            <button className="px-10 py-4 bg-black text-white text-lg font-medium    border-2 border-white transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white cursor-pointer shadow-lg hover:shadow-xl active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Opiniom [nc@031]. All rights reserved.</p>
      </footer>
    </div>

  );
}