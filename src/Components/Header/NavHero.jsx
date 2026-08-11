import React, { useState } from 'react';
import tehzeebLogo from '../../assets/Header/NavBar/tehzeeb.logo.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function NavHero() {
  const [selectedCategory, setSelectedCategory] = useState('');
 const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Navbar */}
      <header className="w-full bg-yellow-600 body-font">
        <div className="flex flex-wrap p-1 flex-row items-center">

          <Link
            to="/"
            className="font-medium text-white pl-2 sm:pl-10 mb-1 mt-1 pr-5"
          >
            <img
              data-aos="fade-right"
              src={tehzeebLogo}
              alt="Tehzeeb Logo"
              className="w-10 h-10 sm:w-20 sm:h-20 md:w-18 md:h-18 transition-all duration-300 hover:scale-110 rounded-lg"
            />
          </Link>


          <span
            data-aos="fade-right"
            data-aos-delay="200"
            className="
              font-dancing
              text-yellow-950
              text-2xl sm:text-3xl md:text-5xl
              font-bold
              tracking-normal
              sm:tracking-wide
              md:tracking-wide
              transition-all
              duration-300
              hover:text-white
              cursor-pointer
            "
          >
            Tehzeeb Furniture & Home Decor
          </span>


          {/* Nav links */}
          <nav
            data-aos="fade-down"
            className="grid grid-cols-3 sm:grid-cols-5 w-full mt-1 text-center font-bold py-1 bg-white font-dancing"
          >

            <NavLink
              to="/"
              onClick={() => setSelectedCategory('')}
              className={({ isActive }) =>
                `text-yellow-900 text-lg sm:text-xl md:text-2xl tracking-wider hover:text-yellow-500 ml-1 transition-colors duration-300  ${
                  isActive ? 'bg-yellow-600' : ''
                }`
              }
            >
              Home
            </NavLink>


            <NavLink
              to="/about"
              onClick={() => setSelectedCategory('')}
              className={({ isActive }) =>
                `text-yellow-900 text-lg sm:text-xl md:text-2xl tracking-wider hover:text-yellow-500 transition-colors duration-300  ${
                  isActive ? 'bg-yellow-600' : ''
                }`
              }
            >
              About Us
            </NavLink>


         <div
  className={`relative inline-block  ${
    selectedCategory ? 'bg-yellow-600' : 'bg-white'
  }`}
>

  <select
    value={selectedCategory}
 onChange={(e) => {
  const category = e.target.value;
  setSelectedCategory(category);
  navigate(`/collection?category=${category}`);
}}
    className="
      appearance-none
      text-yellow-900
      text-lg sm:text-xl md:text-2xl
      tracking-wider
      hover:text-yellow-500
      transition-colors duration-300
      bg-transparent
      outline-none
      cursor-pointer
      pr-0
      m-0
      text-center
    "
  >
    <option value="">Collection</option>
    <option value="wood">Wood Furniture</option>
    <option value="chairs">Chairs</option>
    <option value="sofas">Sofas</option>
    <option value="decor">Home Decor</option>
  </select>

  <span
    className="
      absolute
      right-1
      md:right-1
      lg:right-3
      top-1/2
      -translate-y-1/2
      pointer-events-none
      text-yellow-950
      text-xs
    "
  >
    ▼
  </span>
</div>


            <NavLink
              to="/viewdetails"
              onClick={() => setSelectedCategory('')}
              className={({ isActive }) =>
                `text-yellow-900 text-lg sm:text-xl md:text-2xl ml-1 tracking-wider hover:text-yellow-500 transition-colors duration-300  ${
                  isActive ? 'bg-yellow-600' : ''
                }`
              }
            >
              View Details
            </NavLink>


            <NavLink
              to="/contact"
              onClick={() => setSelectedCategory('')}
              className={({ isActive }) =>
                `text-yellow-900 text-lg sm:text-xl md:text-2xl tracking-wider hover:text-yellow-500 transition-colors duration-300  ${
                  isActive ? 'bg-yellow-600' : ''
                }`
              }
            >
              Contact Us
            </NavLink>

          </nav>


        </div>
      </header>
    </div>
  );
}


export default NavHero;