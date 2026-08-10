import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;
  

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-yellow-600 hover:bg-[#6b4423] text-white p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer z-50"
    >
      <ChevronUp size={24} />
    </button>
  );
}

export default BackToTop;