import React from "react";
import { Link } from "react-router-dom";

import wood1 from "../../assets/ViewDetails/wood1.jpg";
import wood2 from "../../assets/ViewDetails/wood2.jpg";
import wood3 from "../../assets/ViewDetails/wood3.jpg";
import wood4 from "../../assets/ViewDetails/wood4.jpg";
import wood5 from "../../assets/ViewDetails/wood5.jpg";
import wood6 from "../../assets/ViewDetails/wood6.jpg";
import wood7 from "../../assets/ViewDetails/wood7.jpg";
import wood8 from "../../assets/ViewDetails/wood8.jpg";
// Product Data
const products = [
  {
    id: 1,
    name: "Dining Set",
    category: "Wood",
    image: wood1,
    price: 20000,
    discount: 20,
  },
  {
    id: 2,
    name: "Wood Chair",
    category: "Wood",
    image: wood2,
    price: 25000,
    discount: 15,
  },
  {
    id: 3,
    name: "Lounge Sofa Set",
    category: "Wood",
    image: wood3,
    price: 30000,
    discount: 10,
  },
  {
    id: 4,
    name: "The Smeeth Deal",
    category: "Wood",
    image: wood4,
    price: 23000,
    discount: 20,
  },
  {
    id: 5,
    name: "Pure White Sofa Set",
    category: "Wood",
    image: wood5,
    price: 20000,
    discount: 20,
  },
  {
    id: 6,
    name: "Full House Deal",
    category: "Wood",
    image: wood6,
    price: 30000,
    discount: 15,
  },
  {
    id: 7,
    name: "Full Room Deal",
    category: "Wood",
    image: wood7,
    price: 12000,
    discount: 12,
  },
  {
    id: 8,
    name: "The 400 Kitchen Set",
    category: "Wood",
    image: wood8,
    price: 23000,
    discount: 20,
  },
];

function ViewDetails() {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-5">

          <h1
            className="
              leading-relaxed
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              font-medium
              font-dancing
              tracking-wider
              [word-spacing:8px]
              sm:[word-spacing:12px]
              text-yellow-600
            "
          >
            Our Products
          </h1>

          <p
            className="
              leading-relaxed
              text-xl
              sm:text-2xl
              md:text-3xl
              font-medium
              font-dancing
              tracking-wider
              [word-spacing:5px]
              sm:[word-spacing:10px]
              text-yellow-950
            "
          >
            ~Explore our complete wooden furniture collection~
          </p>

        </div>

        {/* PRODUCTS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            w-full
            mx-auto
          "
        >

          {products.map((product) => {

            const discountAmount =
              (product.price * product.discount) / 100;

            const finalPrice =
              product.price - discountAmount;

            return (
              <div  data-aos="fade-up"
                    data-aos-duration="800"
                key={product.id}
                className="
                  bg-white
                  rounded-xl
                  shadow-md
                  overflow-hidden
                  hover:shadow-xl
                  transition
                  duration-300
                  
                "
              >

                {/* Image */}
                <div className="relative">

                  {product.discount > 0 && (
                    <span  data-aos="fade-up"
                      data-aos-duration="1000"
                      className="
                        absolute
                        top-3
                        left-3
                        z-10
                        bg-[#c58b25]
                        text-white
                        text-xs
                        sm:text-sm
                        font-semibold
                        px-3
                        py-1
                        rounded-full
                      "
                    >
                      {product.discount}% OFF
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-64
                      sm:h-72
                      md:h-80
                      object-cover
                    "
                  />

                </div>

                {/* Details */}
                <div className="p-4 sm:p-5">

                  {/* Category */}
                  <p
                    className="
                      text-[#8b5e34]
                      text-xs
                      sm:text-sm
                      uppercase
                      tracking-wider
                    "
                  >
                    {product.category}
                  </p>

                  {/* Product Name */}
                  <h2
                    className="
                      text-lg
                      sm:text-xl
                      md:text-2xl
                      font-semibold
                      text-[#4b2e1b]
                      mt-1
                    "
                  >
                    {product.name}
                  </h2>

                  {/* Price */}
                  <div className="mt-3 flex flex-wrap items-center gap-2">

                    {product.discount > 0 && (
                      <span
                        className="
                          line-through
                          text-gray-400
                          text-sm
                          sm:text-base
                        "
                      >
                        Rs. {product.price.toLocaleString()}
                      </span>
                    )}

                    <span
                      className="
                        font-bold
                        text-[#8b5e34]
                        text-lg
                        sm:text-xl
                      "
                    >
                      Rs. {finalPrice.toLocaleString()}
                    </span>

                  </div>

                  {/* Saving */}
                  {product.discount > 0 && (
                    <p className="text-green-700 text-sm mt-1">
                      Save Rs. {discountAmount.toLocaleString()}
                    </p>
                  )}

                  {/* Contact */}
                  <Link
                    to="/contact"
                    className="block mt-4"
                  >
                    <button
                      className="
                        w-full
                        bg-[#8b5e34]
                        hover:bg-[#6b4423]
                        text-white
                        py-2
                        sm:py-3
                        rounded-lg
                        transition
                        duration-300
                        text-sm
                        sm:text-base
                      "
                    >
                      Contact to Order
                    </button>
                  </Link>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default ViewDetails;