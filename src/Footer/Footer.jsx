import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Globe
} from "lucide-react";

function Footer() {
  return (
    <footer 
      data-aos="fade-up"
      className="bg-yellow-700 text-white italic"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 sm:px-8 ">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Brand */}
          <div>
            <h2 className="md:pt-5 font-dancing text-4xl text-yellow-200 hover:text-white transition-all duration-300 tracking-widest">
              Tehzeeb Furniture
            </h2>

            <p className="mt-4 text-amber-100 leading-7">
              Discover elegant furniture and timeless home décor crafted
              to bring comfort, beauty, and style to every home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-200 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/home"
                  className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/collection"
                  className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Collection
                </Link>
              </li>

              <li>
                <Link
                  to="/viewdetails"
                  className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  View Details
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-200 mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-amber-100">

              <div className="flex items-center gap-1">
                <MapPin size={20} />
                <p>Peshawar, Pakistan</p>
              </div>

              <div className="flex items-center gap-1">
                <Phone size={20} />
                <p>+92 332 0009936</p>
              </div>

              <div className="flex items-center gap-1">
                <Mail size={20} />
                <p>info@tehzeebfurniture.com</p>
              </div>

            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-200 mb-4">
              Follow Us
            </h3>

            <div className="flex gap-2">

              <a
                href="#"
                className="border border-yellow-300 p-2 rounded-full hover:bg-white hover:text-blue-600 hover:scale-110 transition-all duration-300"
              >
                <Globe size={20} />
              </a>

              <a
                href="#"
                className="border border-yellow-300 p-2 rounded-full hover:bg-white hover:text-pink-500 hover:scale-110 transition-all duration-300"
              >
                <Globe size={20} />
              </a>

              <a
                href="#"
                className="border border-yellow-300 p-2 rounded-full hover:bg-white hover:text-sky-500 hover:scale-110 transition-all duration-300"
              >
                <Globe size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-yellow-400 mt-2 pt-2 text-center">
          <p className="text-amber-100 text-base">
            © 2025 Tehzeeb Furniture & Home Decor. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;