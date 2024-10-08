import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-emerald-500 text-white p-2 rounded-full shadow-lg hover:bg-emerald-700 focus:outline-none"
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
