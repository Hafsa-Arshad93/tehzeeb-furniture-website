import React from 'react'
import logo from "../../assets/About/tehzeeb.logo.jpg";

function About() {
  return (
    <section className="text-yellow-600 body-font bg-yellow-600">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="w-full flex flex-col items-center justify-center text-center">

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="inline-block w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4 object-cover rounded-lg"
      />

      {/* About Text */}
      <p data-aos="flip-up"
       className=" text-base sm:text-lg md:text-xl lg:text-3xl text-white font-dancing leading-relaxed tracking-wider [word-spacing:8px]">
        At Tehzeeb Furniture & Home Decor, we craft elegant and comfortable furniture
        designed to bring warmth and sophistication to your home. We use carefully
        selected premium-quality wood to ensure lasting strength, durability, and
        timeless beauty in every piece. From living room essentials to handcrafted
        bedroom and dining furniture, each product is created with attention to
        detail, combining traditional craftsmanship with modern design. Our mission
        is to help you redefine your space with quality, comfort, and a touch of
        Tehzeeb style, making every home feel welcoming, stylish, and built to last.
      </p>
            {/* Line */}
            <span className="inline-block h-1 w-12 rounded bg-white mt-6 mb-6" />

            {/* Name and Designation */}
            <h2 className=" italic text-white font-medium title-font tracking-wider text-lg sm:text-xl md:text-2xl">
              Mr. Shahzaib Nawaz
            </h2>

            <p className="text-white italic text-sm sm:text-base md:text-lg">
              Senior Executive Manager
            </p>

        </div>
      </div>
    </section>
  );
}

export default About;