import "../App.css";
import { Link } from "react-router-dom";

type CardProps = {
  image: string;
  name: string;
  description?: string;
  link?: string;
};

const Card = ({ image, name, description, link = "#" }: CardProps) => {
  return (
    <Link
      to={link}
      className='group relative block rounded-2xl overflow-hidden w-full max-w-full mx-auto shadow-xl hover:shadow-indigo-500/40 transition-transform duration-300'
      style={{ minHeight: 280 }}
    >
      <img
        alt={name}
        src={image}
        className='absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 blur-[2px] group-hover:blur-none opacity-50 group-hover:opacity-90 transition-all duration-500'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80'></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white text-center tracking-wide drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] z-10'>
          {name}
        </h2>
      </div>
      <div className='relative z-20 p-6 flex flex-col justify-end h-full'>
        <div className='mt-32 sm:mt-40 lg:mt-44'>
          <div className='transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
            <p className='text-sm sm:text-base text-indigo-100 bg-black/70 backdrop-blur-md rounded-lg px-4 py-2 shadow-md border border-indigo-500/20'>
              {description || "No description provided."}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
