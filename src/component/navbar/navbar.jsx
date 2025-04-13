import React, { useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20 relative'>
      <span className='text-2xl font-bold tracking-wide'>Portfolio</span>
      <ul
        className={`
          ${menu ? 'block' : 'hidden'}
          mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black rounded-xl bg-opacity-30 
          md:border-none text-center md:bg-transparent md:static md:flex md:gap-6
        `}
      >
        <a href="#About">
          <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
        </a>
        <a href="#Experience">
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li>
        </a>
        <a href="#Projects">
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
        </a>
        <a href="#Contact">
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenuLine
          size={30}
          className="md:hidden right-2 top-6 transition-all duration-300 cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden right-2 top-6 transition-all duration-300 cursor-pointer"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navbar;
