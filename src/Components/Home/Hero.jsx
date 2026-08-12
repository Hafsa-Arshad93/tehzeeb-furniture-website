import React from "react";
import backgroundImage from "../../assets/Hero/bgimage.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-gray-400 bg-white body-font">
      <div
        className="
          container
          mx-auto
          flex
          flex-col
          lg:flex-row
          items-center
          px-3
          sm:px-5
          lg:px-8
          py-10
          gap-0
          2xl:max-w-[1600px]
        "
      >
        {/* Hero Image */}
      <div className="lg:max-w-lg 2xl:max-w-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 overflow-hidden">
          <img
            src={backgroundImage}
            alt="Tehzeeb Furniture & Home Decor"
            className="
              object-cover
              object-center
              rounded-3xl
              w-full
              h-56
              sm:h-80
              md:h-96
              lg:h-[400px]
              2xl:h-[700px]
              transition-all
              duration-800
              hover:scale-105
              
            "
          />
        </div>

        {/* Hero Text */}
        <div
          className="
            w-full
            lg:flex-1
            lg:pl-8
            flex
            flex-col
            items-center
            text-center
            lg:items-start
            lg:text-left
            justify-center
            2xl:justify-center
            2xl:items-center
            2xl:text-center
          
          "
        >
          {/* Heading */}
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="
              leading-relaxed
              text-yellow-600
              text-center
              lg:text-left
              text-4xl
              2xl:text-center
              sm:text-5xl
               md:text-5xl
              xl:text-6xl
             2xl:text-8xl
               font-medium
              font-dancing
              tracking-wide
              sm:tracking-wider
              [word-spacing:10px]
              text-4xl
              mt-3 
              lg:mt-1
              lg:mb-1
            "
          >
            Tehzeeb Furniture & Home Decor
          </h1>

          {/* Paragraph */}
          <p
            data-aos="fade-left"
            className="
              mb-5
              mt-5
              lg:mt-3
              lg:mb-5
              leading-relaxed
              text-amber-600
              max-w-2xl
              text-base
               sm:text-xl 
               2xl:text-4xl
               2xl:mx-auto  
            "
          >
            Discover elegant and comfortable furniture crafted to bring warmth
            and sophistication to your home. From living room essentials to
            timeless decor ~ redefine your space with Tehzeeb’s touch of style.
          </p>

          {/* Buttons */}
    <div
  data-aos="fade-up"
  className="grid grid-cols-2 gap-4 w-full max-w-2xl justify-center"
>
      <Link
  to="/collection"
  className="w-full"
>
  <button
    className="w-full bg-yellow-600 text-white py-3 rounded-lg"
  >
    Explore Collection
  </button>
</Link>

           <Link
  to="/contact"
  className="w-full"
>
  <button
    className="w-full bg-yellow-600 text-white py-3 rounded-lg"
  >
    Contact Us
  </button>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;