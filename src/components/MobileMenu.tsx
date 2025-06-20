import { Link } from "react-router-dom";

type MobileMenuProps = {
  navLinks: { to: string; label: string }[];
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
};

const MobileMenu = ({ navLinks, isOpen, onClose, currentPath }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <ul className='lg:hidden mt-4 space-y-3 text-base font-medium rounded-xl p-5 backdrop-blur-md bg-black/80 border border-indigo-500/10 shadow-2xl animate-fade-in-down'>
      {navLinks.map(({ to, label }) => {
        const isActive = currentPath === to;
        return (
          <li key={to}>
            <Link
              to={to}
              aria-current={isActive ? "page" : undefined}
              className={`block px-4 py-2 rounded-md transition-all duration-300 text-center ${
                isActive
                  ? "text-indigo-400 bg-indigo-600/10 shadow-inner shadow-indigo-500/20 font-semibold"
                  : "text-gray-300 hover:text-indigo-300 hover:bg-indigo-600/10"
              }`}
              onClick={onClose}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
