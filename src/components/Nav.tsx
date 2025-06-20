import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { to: "/films", label: "Films" },
  { to: "/species", label: "Species" },
  { to: "/people", label: "People" },
  { to: "/planets", label: "Planets" },
  { to: "/starships", label: "Starships" },
  { to: "/vehicles", label: "Vehicles" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='bg-black bg-opacity-90 shadow-md sticky top-0 z-50 backdrop-blur-md border-b border-indigo-500/30'>
      <div className='mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12'>
        <nav className='flex h-20 items-center justify-between' aria-label='Primary navigation'>
          <Link
            to='/home'
            className='flex items-center gap-4 transition-transform hover:scale-105'
            aria-label='Go to home'
            onClick={closeMenu}
          >
            <img
              src='/star-wars.png'
              alt='Star Wars Archive Logo'
              className='w-12'
            />                     </Link>
          <ul className='hidden lg:flex items-center gap-8 text-md font-medium tracking-wide'>
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-3 py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-indigo-400 font-semibold after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:rounded-full after:bg-indigo-400"
                        : "text-gray-400 hover:text-indigo-300"
                    }`}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            className='lg:hidden p-2 rounded-md text-indigo-400 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400'
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label='Toggle menu'
          >
            {menuOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </nav>
        <MobileMenu navLinks={navLinks} isOpen={menuOpen} onClose={closeMenu} currentPath={location.pathname} />
      </div>
    </header>
  );
};

export default Nav;
