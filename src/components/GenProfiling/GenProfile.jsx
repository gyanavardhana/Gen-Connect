import React, { useState } from "react";
import Navbar from "../Homepage/Navbar";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faSubscript, faHashtag, faVrCardboard, faHeart } from "@fortawesome/free-solid-svg-icons";

// Import JSON data
import boomersData from "./data/bommers.js";
import millennialsData from "./data/millineals.js";
import genZData from "./data/genz.js";
import genAlphaData from "./data/genalpha.js";

const GenProfile = () => {
  const [selectedGeneration, setSelectedGeneration] = useState("boomers");
  const [demoData, setDemoData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Mapping JSON data to each generation
  const generationData = {
    boomers: boomersData,
    millennials: millennialsData,
    "gen z": genZData,
    "gen alpha": genAlphaData,
  };

  const generations = ["boomers", "millennials", "gen z", "gen alpha"];

  const categories = {
    boomers: ["furniture", "gardening", "tools", "home decor"],
    millennials: [
      "home",
      "travel",
      "health",
      "technology",
      "fitness",
    ],
    "gen z": [
      "lifestyle",
      "technology",
      "gaming",
      "fashion",
      "entertainment",
    ],
    "gen alpha": ["toys", "electronics", "learning"],
  };

  // Set demo data based on the selected generation
  React.useEffect(() => {
    setDemoData(generationData[selectedGeneration]);
  }, [selectedGeneration]);

  const handleGenerationChange = (generation) => {
    setSelectedGeneration(generation);
  };

  const scrollLeft = (id) => {
    document.getElementById(id).scrollLeft -= 300;
  };

  const scrollRight = (id) => {
    document.getElementById(id).scrollLeft += 300;
  };

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const getCategoryProducts = (category) => {
    return demoData.filter((product) => product.category === category);
  };

  return (
    <div className="min-h-screen bg-neutral-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Generation Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full shadow-lg">
            {generations.map((generation, index) => (
              <button
                key={generation}
                onClick={() => handleGenerationChange(generation)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  selectedGeneration === generation
                    ? "bg-amber-500 text-white shadow-md transform scale-105"
                    : "text-gray-600 hover:bg-gray-100"
                } ${index !== 0 ? "ml-2" : ""}`}
              >
                {generation.charAt(0).toUpperCase() + generation.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Product Display Area */}
        <motion.div
          key={selectedGeneration}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-l-4 border-amber-500 pl-3">
            {selectedGeneration.charAt(0).toUpperCase() +
              selectedGeneration.slice(1)}{" "}
            Favorites
          </h2>

          {categories[selectedGeneration].map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-3xl font-bold mb-8 ml-5 text-gray-800 border-l-4 border-amber-500 pl-3">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
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
                  {getCategoryProducts(category).map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block"
                    >
                      <ProductCard
                        product={product}
                        onOpenPopup={handleOpenPopup}
                      />
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
            </div>
          ))}
        </motion.div>
      </div>

      {/* Popup */}
      {/* Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-gray-800 transition-colors duration-300"
                onClick={handleClosePopup}
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-gray-600 mb-4 capitalize">
                    {selectedProduct.category}
                  </p>
                  <p className="text-gray-800 mb-4">
                    {selectedProduct.description}
                  </p>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-amber-500 mr-2">
                      ${selectedProduct.price.toFixed(2)}
                    </span>
                    <div className="bg-amber-100 px-2 py-1 rounded">
                      <span className="text-amber-500 mr-1">★</span>
                      <span className="text-gray-700">
                        {selectedProduct.rating.rate} (
                        {selectedProduct.rating.count} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <motion.button
                      className="flex-1 bg-amber-500 text-white py-2 px-4 rounded-full hover:bg-amber-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                    <motion.button
                      className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selectedProduct.generation === "boomers" && (
                        <>
                          <FontAwesomeIcon
                            icon={faCalculator}
                            className="mr-2"
                          />
                          Budget Calculator
                        </>
                      )}
                      {selectedProduct.generation === "millennials" && (
                        <>
                          <FontAwesomeIcon
                            icon={faSubscript}
                            className="mr-2"
                          />
                          Subscription
                        </>
                      )}
                      {selectedProduct.generation === "Gen Z" && (
                        <>
                          <FontAwesomeIcon icon={faHashtag} className="mr-2" />
                           Hashtag Share
                        </>
                      )}
                      {selectedProduct.generation === "Gen Alpha" && (
                        <>
                          <FontAwesomeIcon
                            icon={faVrCardboard}
                            className="mr-2"
                          />
                          AR Product View
                        </>
                      )}
                      {![
                        "boomers",
                        "millennials",
                        "Gen Z",
                        "Gen Alpha",
                      ].includes(selectedProduct.generation) && (
                        <>
                          <FontAwesomeIcon icon={faHeart} className="mr-2" />
                          Add to Wishlist
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GenProfile;
