import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-6 py-1 flex items-center justify-between bg-black/80 border-b border-green-500 shadow-md">

      {/* Logo Section */}
      <div
        className="flex items-center cursor-pointer group"
        onClick={() => navigate('/')}
      >
      <div
  className="p-2 border-4 border-green-500 rounded-full shadow-xl hover:shadow-green-500/50 transition-shadow duration-300"
>

        <img
  src="/Logo2.jpg"
  alt="Pixora Logo"
  className="h-14 w-14 object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
/>

        </div>
        <h1 className="ml-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 group-hover:scale-110 transition-transform duration-300">
          PIXORA
        </h1>
      </div>

      {/* User Button */}
      <div className="flex items-center space-x-6">
        <UserButton
          afterSignOutUrl="/"
          className="text-lg py-2 px-4 rounded-lg shadow-md hover:bg-green-500 hover:text-black transition-colors duration-300"
        />

   
      </div>
    </header>
  );
};

export default Header;
