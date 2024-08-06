import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/bam/logo.png";
import secondaryLogo from "../../assets/bam/logo-text.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-neutral-200 flex items-center justify-between p-4 z-10 relative border-b border-black">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="GenConnect Logo" className="h-16" />
          </Link>
          <Link to="/">
            <img
              src={secondaryLogo}
              alt="GenConnect Secondary Logo"
              className="h-16"
            />
          </Link>
        </div>
        <div className="flex space-x-8">
          <button
            onClick={() => navigate("/gen")}
            className="text-gray-800 text-2xl font-bold py-2 px-4 hover:text-gray-600 transition duration-300"
          >
            Generational Profiling
          </button>
          <button
            onClick={() => navigate("/analytics")}
            className="text-gray-800 text-2xl font-bold py-2 px-4 hover:text-gray-600 transition duration-300"
          >
            Analytics Hub
          </button>
          <button
            onClick={() => navigate("/gen-calci")}
            className="text-gray-800 text-2xl font-bold py-2 px-4 hover:text-gray-600 transition duration-300"
          >
            GenCalci
          </button>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
            className="bg-amber-500 text-white py-2 px-4 rounded-full hover:bg-amber-400 transition duration-300 mr-3"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
            className="bg-neutral-800 text-white py-2 px-4 rounded-full hover:bg-neutral-700 transition duration-300"
          >
            Signup
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
