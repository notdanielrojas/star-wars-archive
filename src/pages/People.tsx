import "../app.css";
import { useEffect, useState } from "react";
import api from "../services/getApi";
import Spinner from "../components/Spinner";

type Person = {
  name: string;
  gender: string;
  birth_year: string;
  homeworld: string | null;
};

const ITEMS_PER_PAGE = 6;

const People = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = await api.getPeople();
        const peopleWithPlanetNames = await Promise.all(
          data.map(async (person: Person) => {
            if (person.homeworld) {
              const planetName = await api.getPlanetName(person.homeworld);
              return { ...person, homeworld: planetName };
            }
            return { ...person, homeworld: "Unknown" };
          })
        );
        setPeople(peopleWithPlanetNames);
      } catch (error) {
        console.error("Error fetching people:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visiblePeople = people.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(people.length / ITEMS_PER_PAGE);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  if (loading) return <Spinner />;

  return (
    <div className='min-h-screen bg-gray-950 text-white px-4 sm:px-6 py-12'>
      <h1 className='text-4xl font-extrabold text-center text-indigo-400 drop-shadow-[0_0_12px_rgba(99,102,241,0.8)] mb-10'>
        People
      </h1>

      {/* Tabla Desktop */}
      <div className='hidden sm:block w-full overflow-x-auto rounded-xl shadow-lg border border-indigo-500/30 bg-gray-900/70 backdrop-blur-md'>
        <table className='w-full min-w-[500px] text-left text-gray-100 text-sm sm:text-base rounded-xl'>
          <thead>
            <tr className='bg-gray-800 text-indigo-300 uppercase tracking-wider text-xs sm:text-sm'>
              <th className='px-6 py-4'>Name</th>
              <th className='px-6 py-4'>Gender</th>
              <th className='px-6 py-4'>Birth Year</th>
              <th className='px-6 py-4'>Homeworld</th>
            </tr>
          </thead>
          <tbody>
            {visiblePeople.map((person) => (
              <tr
                key={person.name}
                className='hover:bg-gray-700/40 transition duration-200 border-t border-gray-700 cursor-pointer'
              >
                <td className='px-6 py-4 font-medium text-indigo-100'>{person.name}</td>
                <td className='px-6 py-4 text-indigo-100 capitalize'>{person.gender}</td>
                <td className='px-6 py-4 text-indigo-100'>{person.birth_year}</td>
                <td className='px-6 py-4 text-indigo-100'>{person.homeworld}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tarjetas Mobile */}
      <div className='sm:hidden flex flex-col gap-6 mt-6'>
        {visiblePeople.map((person) => (
          <div
            key={person.name}
            className='bg-gray-900/70 backdrop-blur-md rounded-xl shadow-lg p-5 border border-indigo-500/30'
          >
            <p className='text-indigo-300 font-semibold text-sm mb-1'>Name</p>
            <p className='text-indigo-100 text-lg font-bold mb-3'>{person.name}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Gender</p>
            <p className='text-indigo-100 capitalize mb-3'>{person.gender}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Birth Year</p>
            <p className='text-indigo-100 mb-3'>{person.birth_year}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Homeworld</p>
            <p className='text-indigo-100'>{person.homeworld}</p>
          </div>
        ))}
      </div>

      {/* Paginación */}
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

export default People;
