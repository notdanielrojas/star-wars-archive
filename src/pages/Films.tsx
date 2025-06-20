import "../App.css";
import { useEffect, useState } from "react";
import api from "../services/getApi";
import Spinner from "../components/Spinner";

type Film = {
  title: string;
  director: string;
  release_date: string;
  episode_id: number;
};

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data: Film[] = await api.getFilms();
        setFilms(data);
      } catch (error) {
        console.error("Error fetching films:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className='min-h-screen bg-gray-950 text-white px-4 sm:px-6 py-12'>
      <h1 className='text-3xl sm:text-4xl font-extrabold text-center text-indigo-400 drop-shadow-[0_0_12px_rgba(99,102,241,0.8)] mb-10'>
        Star Wars Films
      </h1>
      <div className='hidden sm:block w-full overflow-x-auto'>
        <table className='w-full min-w-[500px] bg-gray-900/70 backdrop-blur-md border border-indigo-500/30 rounded-xl shadow-lg text-sm sm:text-base'>
          <thead>
            <tr className='bg-gray-800 text-indigo-300 uppercase tracking-wider text-xs sm:text-sm'>
              <th className='px-4 sm:px-6 py-3 text-left'>Episode</th>
              <th className='px-4 sm:px-6 py-3 text-left'>Title</th>
              <th className='px-4 sm:px-6 py-3 text-left'>Director</th>
              <th className='px-4 sm:px-6 py-3 text-left'>Release Year</th>
            </tr>
          </thead>
          <tbody>
            {films.map((film) => (
              <tr key={film.title} className='hover:bg-gray-700/40 transition duration-200 border-t border-gray-700'>
                <td className='px-4 sm:px-6 py-3 text-indigo-100 font-medium'>{film.episode_id}</td>
                <td className='px-4 sm:px-6 py-3 text-indigo-100'>{film.title}</td>
                <td className='px-4 sm:px-6 py-3 text-indigo-100'>{film.director}</td>
                <td className='px-4 sm:px-6 py-3 text-indigo-100'>{new Date(film.release_date).getFullYear()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='sm:hidden flex flex-col gap-6'>
        {films.map((film) => (
          <div
            key={film.title}
            className='bg-gray-900/70 backdrop-blur-md rounded-xl shadow-lg p-5 border border-indigo-500/30'
          >
            <p className='text-indigo-300 font-semibold text-sm mb-1'>Episode</p>
            <p className='text-indigo-100 text-lg font-bold mb-3'>{film.episode_id}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Title</p>
            <p className='text-indigo-100 text-lg font-semibold mb-3'>{film.title}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Director</p>
            <p className='text-indigo-100 mb-3'>{film.director}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Release Year</p>
            <p className='text-indigo-100'>{new Date(film.release_date).getFullYear()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
