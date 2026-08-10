import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavHero from './Components/Header/NavHero';
import About from './Components/About/About';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import Home from './Pages/Home';
import Collection from './Components/Collection/Collection';
import Contact from './Components/Contact/Contact';

import Footer from './Footer/Footer';
import BackToTop from "./Components/BacktoTop/BackToTop";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  },[]);


  return (
    <BrowserRouter>

      {/* Navbar */}
      <NavHero />

      {/* Pages */}
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/collection"
          element={<Collection />}
        />

        <Route
          path="/viewdetails"
          element={<ViewDetails />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <BackToTop />

      <Footer />

    </BrowserRouter>
  );
}

export default App;