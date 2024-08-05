import React from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const ProductCarousel = ({ products, category, onOpenPopup }) => {
  const scrollLeft = (id) => {
    document.getElementById(id).scrollLeft -= 300;
  };

  const scrollRight = (id) => {
    document.getElementById(id).scrollLeft += 300;
  };

  return (
    <div className="relative">
      <button
        onClick={() => scrollLeft(`product-list-${category}`)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white p-3 rounded-full hover:bg-amber-400 transition duration-300 z-10 shadow-lg"
      >
        <FaChevronLeft />
      </button>
      <div
        id={`product-list-${category}`}
        className="flex space-x-6 overflow-x-auto py-6 px-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <ProductCard product={product} onOpenPopup={onOpenPopup} />
          </motion.div>
        ))}
      </div>
      <button
        onClick={() => scrollRight(`product-list-${category}`)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white p-3 rounded-full hover:bg-amber-400 transition duration-300 z-10 shadow-lg"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProductCarousel;
