import "../App.css";
import { useEffect, useState } from "react";
import api from "../services/getApi";
import Spinner from "../components/Spinner";

type Planet = {
  name: string;
  climate: string;
  terrain: string;
  population: string;
};

const ITEMS_PER_PAGE = 6;

const Planets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const data: Planet[] = await api.getPlanets();
        setPlanets(data);
      } catch (error) {
        console.error("Error fetching planets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visiblePlanets = planets.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(planets.length / ITEMS_PER_PAGE);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  if (loading) return <Spinner />;

  return (
    <div className='min-h-screen bg-gray-950 text-white px-4 sm:px-6 py-12'>
      <h1 className='text-4xl font-extrabold text-center text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.8)] mb-10'>
        Planets
      </h1>
      <div className='hidden sm:block w-full overflow-x-auto rounded-xl shadow-lg border border-indigo-500/30 bg-gray-900/70 backdrop-blur-md'>
        <table className='w-full min-w-[500px] text-left text-gray-100 text-sm sm:text-base rounded-xl'>
          <thead>
            <tr className='bg-gray-800 text-indigo-300 uppercase tracking-wide text-xs sm:text-sm'>
              <th className='px-6 py-4'>Name</th>
              <th className='px-6 py-4'>Climate</th>
              <th className='px-6 py-4'>Terrain</th>
              <th className='px-6 py-4'>Population</th>
            </tr>
          </thead>
          <tbody>
            {visiblePlanets.map((planet) => (
              <tr
                key={planet.name}
                className='hover:bg-gray-700/40 transition duration-200 border-t border-gray-700 cursor-pointer'
              >
                <td className='px-6 py-4 font-medium text-indigo-100'>{planet.name}</td>
                <td className='px-6 py-4 text-indigo-100'>{planet.climate}</td>
                <td className='px-6 py-4 text-indigo-100'>{planet.terrain}</td>
                <td className='px-6 py-4 text-indigo-100'>{planet.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='sm:hidden flex flex-col gap-6 mt-6'>
        {visiblePlanets.map((planet) => (
          <div
            key={planet.name}
            className='bg-gray-900/70 backdrop-blur-md rounded-xl shadow-lg p-5 border border-indigo-500/30'
          >
            <p className='text-indigo-300 font-semibold text-sm mb-1'>Name</p>
            <p className='text-indigo-100 text-lg font-bold mb-3'>{planet.name}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Climate</p>
            <p className='text-indigo-100 mb-3'>{planet.climate}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Terrain</p>
            <p className='text-indigo-100 mb-3'>{planet.terrain}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Population</p>
            <p className='text-indigo-100'>{planet.population}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-10 space-x-6'>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className='px-6 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition'
          aria-label='Previous Page'
        >
          Previous
        </button>

        <span className='text-white self-center font-semibold select-none' aria-live='polite' aria-atomic='true'>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='px-6 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition'
          aria-label='Next Page'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Planets;
