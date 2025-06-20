const Spinner = () => (
  <div className='min-h-screen flex justify-center items-center bg-gray-950 text-indigo-400'>
    <svg
      className='animate-spin h-20 w-20 text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      aria-label='Loading'
    >
      <circle className='opacity-20' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
      <path className='opacity-80' fill='currentColor' d='M4 12a8 8 0 018-8v8z'></path>
    </svg>
  </div>
);

export default Spinner;
