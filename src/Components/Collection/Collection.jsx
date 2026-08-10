import React from "react";
import { useSearchParams } from "react-router-dom";

// ================= WOOD FURNITURE ===========

import wood1 from "../../assets/Collection/WoodFurniture/wood furniture (1).jpg";
import wood2 from "../../assets/Collection/WoodFurniture/wood furniture (2).jpg";
import wood3 from "../../assets/Collection/WoodFurniture/wood furniture (3).jpg";
import wood4 from "../../assets/Collection/WoodFurniture/wood furniture (4).jpg";
import wood5 from "../../assets/Collection/WoodFurniture/wood furniture (5).jpg";
import wood6 from "../../assets/Collection/WoodFurniture/wood furniture (6).jpg";

// ================= CHAIRS =================

import chair1 from "../../assets/Collection/Chairs/chair1.jpg";
import chair2 from "../../assets/Collection/Chairs/chair2.jpg";
import chair3 from "../../assets/Collection/Chairs/chair3.jpg";
import chair4 from "../../assets/Collection/Chairs/chair4.jpg";
import chair5 from "../../assets/Collection/Chairs/chair5.jpg";
import chair6 from "../../assets/Collection/Chairs/chair6.jpg";
import chair7 from "../../assets/Collection/Chairs/chair7.jpg";
import chair8 from "../../assets/Collection/Chairs/chair8.jpg";
import chair9 from "../../assets/Collection/Chairs/chair9.jpg";

// ================= SOFAS =================

import sofa1 from "../../assets/Collection/Sofas/sofas (1).jpg";
import sofa2 from "../../assets/Collection/Sofas/sofas (2).jpg";
import sofa3 from "../../assets/Collection/Sofas/sofas (3).jpg";
import sofa4 from "../../assets/Collection/Sofas/sofas (4).jpg";
import sofa5 from "../../assets/Collection/Sofas/sofas (5).jpg";
import sofa6 from "../../assets/Collection/Sofas/sofas (6).jpg";
import sofa7 from "../../assets/Collection/Sofas/sofas (7).jpg";
import sofa8 from "../../assets/Collection/Sofas/sofas (8).jpg";
import sofa9 from "../../assets/Collection/Sofas/sofas (9).jpg";

// ================= HOME DECOR =================

import decor1 from "../../assets/Collection/HomeDecor/home decor1 (1).jpg";
import decor2 from "../../assets/Collection/HomeDecor/home decor1 (2).jpg";
import decor3 from "../../assets/Collection/HomeDecor/home decor1 (3).jpg";
import decor4 from "../../assets/Collection/HomeDecor/home decor1 (4).jpg";
import decor5 from "../../assets/Collection/HomeDecor/home decor1 (5).jpg";
import decor6 from "../../assets/Collection/HomeDecor/home decor1 (6).jpg";
import decor7 from "../../assets/Collection/HomeDecor/home decor1 (7).jpg";
import decor8 from "../../assets/Collection/HomeDecor/home decor1 (8).jpg";


function Collection() {

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");


  // ================= ALL IMAGES =================

  const allImages = [
    wood1,
    chair1,
    sofa1,
    decor1,
    wood2,
    chair2,
  ];


  // ================= CATEGORY IMAGES =================

  const woodImages = [
    wood1,
    wood2,
    wood3,
    wood4,
    wood5,
    wood6,
  ];

  const chairImages = [
    chair1,
    chair2,
    chair3,
    chair4,
    chair5,
    chair6,
    chair7,
    chair8,
    chair9,
  ];

  const sofaImages = [
    sofa1,
    sofa2,
    sofa3,
    sofa4,
    sofa5,
    sofa6,
    sofa7,
    sofa8,
    sofa9,
  ];

  const decorImages = [
    decor1,
    decor2,
    decor3,
    decor4,
    decor5,
    decor6,
    decor7,
    decor8,
  ];


  return (
    <section className="bg-[#f8f5f0] py-12 px-4 sm:px-6 lg:px-10">

      {/* ================= HEADING ================= */}

      <div className="text-center mb-10 font-dancing">

        <h1
          className="
            font-dancing
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-medium
            text-yellow-600
          "
          data-aos="fade-down"
        >
          Welcome To Our Newly Launched Collection
        </h1>

      </div>


      {/* ================= ALL COLLECTION ================= */}

      {!category && (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto ">

          {allImages.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md"
              data-aos="fade-up"
            >

              <img
                src={image}
                alt="Furniture collection"
                className="
                  w-full
                  h-64
                  sm:h-72
                  lg:h-80
                  object-cover
                  rounded-2xl
                  transition-transform
                  duration-500
                  hover:scale-110
                "
              />

            </div>

          ))}

        </div>

      )}


      {/* ================= WOOD FURNITURE ================= */}

      {category === "wood" && (

        <section>

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-semibold
              text-[#4b2e1b]
              text-center
              mb-8
              underline
              decoration-yellow-600
              decoration-4
              underline-offset-8
              tracking-wide
              [word-spacing:4px]
              sm:[word-spacing:6px]
              md:[word-spacing:8px]
                font-dancing
                aos:fade-up
            "
          >
            Wood Furniture
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto">

            {woodImages.map((image, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md"
                data-aos="fade-up"
              >

                <img
                  src={image}
                  alt={`Wood Furniture ${index + 1}`}
                  className="
                    w-full
                    h-64
                    sm:h-72
                    lg:h-80
                    object-cover
                    rounded-2xl
                    transition-transform
                    duration-500
                    hover:scale-110
                  "
                />

              </div>

            ))}

          </div>

        </section>

      )}


      {/* ================= CHAIRS ================= */}

      {category === "chairs" && (

        <section>

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-semibold
              text-[#4b2e1b]
              text-center
              mb-8
              underline
              decoration-yellow-600
              decoration-4
              underline-offset-8
              tracking-wide
              [word-spacing:4px]
              sm:[word-spacing:6px]
              md:[word-spacing:8px]
              font-dancing
              aos:fade-up
            ">
            Chairs
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto">

            {chairImages.map((image, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md"
                data-aos="fade-up"
              >

                <img
                  src={image}
                  alt={`Chair ${index + 1}`}
                  className="
                    w-full
                    h-64
                    sm:h-72
                    lg:h-80
                    object-cover
                    rounded-2xl
                    transition-transform
                    duration-500
                    hover:scale-110
                  "
                />

              </div>

            ))}

          </div>

        </section>

      )}


      {/* ================= SOFAS ================= */}

      {category === "sofas" && (

        <section>

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-semibold
              text-[#4b2e1b]
              text-center
              mb-8
              underline
              decoration-yellow-600
              decoration-4
              underline-offset-8
              tracking-wide
              [word-spacing:4px]
              sm:[word-spacing:6px]
              md:[word-spacing:8px]
                font-dancing
                aos:fade-up
            "
          >
            Sofas
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto">

            {sofaImages.map((image, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md"
                data-aos="fade-up"
              >

                <img
                  src={image}
                  alt={`Sofa ${index + 1}`}
                  className="
                    w-full
                    h-64
                    sm:h-72
                    lg:h-80
                    object-cover
                    rounded-2xl
                    transition-transform
                    duration-500
                    hover:scale-110
                  "
                />

              </div>

            ))}

          </div>

        </section>

      )}


      {/* ================= HOME DECOR ================= */}

      {category === "decor" && (

        <section>

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-semibold
              text-[#4b2e1b]
              text-center
              mb-8
              underline
              decoration-yellow-600
              decoration-4
              underline-offset-8
              tracking-wide
              [word-spacing:4px]
              sm:[word-spacing:6px]
              md:[word-spacing:8px]
              font-dancing
              aos:fade-up
            " >
            Home Decor
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto">

            {decorImages.map((image, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md"
                data-aos="fade-up"
              >

                <img
                  src={image}
                  alt={`Home Decor ${index + 1}`}
                  className="
                    w-full
                    h-64
                    sm:h-72
                    lg:h-80
                    object-cover
                    rounded-2xl
                    transition-transform
                    duration-500
                    hover:scale-110
                  "
                />

              </div>

            ))}

          </div>

        </section>

      )}

    </section>
  );
}

export default Collection;