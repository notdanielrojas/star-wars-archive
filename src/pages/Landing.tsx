import { Link } from "react-router-dom";
import "../app.css";

function Landing() {
  return (
    <section className='flex items-center justify-center min-h-screen bg-gray-950 text-white px-6 sm:px-10 lg:px-16'>
      <div className='max-w-screen-xl mx-auto w-full'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center'>
          <div>
            <h1 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-indigo-400 leading-tight'>
              Welcome to the <span className='text-white'>Star Wars Archive</span>
            </h1>

            <p className='mt-6 text-lg text-gray-300 max-w-xl leading-relaxed'>
              Explore the vast universe of Star Wars — from iconic characters to legendary battles. Dive deep into the
              stories that shaped a galaxy far, far away.
            </p>

            <Link
              to='/home'
              className='inline-block mt-8 rounded-lg border-2 border-indigo-500 bg-indigo-600 px-12 py-3 text-base font-semibold text-white transition hover:bg-transparent hover:text-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 shadow-lg'
            >
              Enter the Archive
            </Link>
          </div>

          <div className='flex justify-center md:justify-end'>
            <img
              src='/estrella.png'
              alt='Death Star'
              className='w-full max-w-xs sm:max-w-sm object-contain'
              loading='lazy'
              decoding='async'
              style={{ background: "transparent" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
