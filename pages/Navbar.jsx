import React, { useState } from "react";

const Navbar = ({ Fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap item-center justify-between px-2 py-2 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#Home"
            >
              Maninder_
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3  py-1 border border-solid bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
