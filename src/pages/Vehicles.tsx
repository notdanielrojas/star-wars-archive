import "../App.css";
import { useEffect, useState } from "react";
import api from "../services/getApi";
import Spinner from "../components/Spinner";

type Vehicle = {
  name: string;
  model: string;
  manufacturer: string;
  vehicle_class: string;
};

const ITEMS_PER_PAGE = 6;

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data: Vehicle[] = await api.getVehicles();
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleVehicles = vehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(vehicles.length / ITEMS_PER_PAGE);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  if (loading) return <Spinner />;

  return (
    <div className='min-h-screen bg-gray-950 text-white px-4 sm:px-6 py-12'>
      <h1 className='text-4xl font-extrabold text-center text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.8)] mb-10'>
        Vehicles
      </h1>
      <div className='hidden sm:block w-full overflow-x-auto rounded-xl shadow-lg border border-indigo-500/30 bg-gray-900/70 backdrop-blur-md'>
        <table className='w-full min-w-[500px] text-left text-gray-100 text-sm sm:text-base rounded-xl'>
          <thead>
            <tr className='bg-gray-800 text-indigo-300 uppercase tracking-wide text-xs sm:text-sm'>
              <th className='px-6 py-4 text-center '>Name</th>
              <th className='px-6 py-4 text-center '>Model</th>
              <th className='px-6 py-4 text-center '>Manufacturer</th>
              <th className='px-6 py-4 text-center '>Class</th>
            </tr>
          </thead>
          <tbody>
            {visibleVehicles.map((vehicle) => (
              <tr
                key={vehicle.name}
                className='hover:bg-gray-700/40 transition duration-200 border-t border-gray-700 cursor-pointer'
              >
                <td className='px-6 py-4 font-medium text-indigo-100 text-center '>{vehicle.name}</td>
                <td className='px-6 py-4 text-indigo-100 text-center '>{vehicle.model}</td>
                <td className='px-6 py-4 text-indigo-100 text-center '>{vehicle.manufacturer}</td>
                <td className='px-6 py-4 text-indigo-100 text-center '>{vehicle.vehicle_class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='sm:hidden flex flex-col gap-6 mt-6'>
        {visibleVehicles.map((vehicle) => (
          <div
            key={vehicle.name}
            className='bg-gray-900/70 backdrop-blur-md rounded-xl shadow-lg p-5 border border-indigo-500/30'
          >
            <p className='text-indigo-300 font-semibold text-sm mb-1'>Name</p>
            <p className='text-indigo-100 text-lg font-bold mb-3'>{vehicle.name}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Model</p>
            <p className='text-indigo-100 mb-3'>{vehicle.model}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Manufacturer</p>
            <p className='text-indigo-100 mb-3'>{vehicle.manufacturer}</p>

            <p className='text-indigo-300 font-semibold text-sm mb-1'>Class</p>
            <p className='text-indigo-100'>{vehicle.vehicle_class}</p>
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

export default Vehicles;
