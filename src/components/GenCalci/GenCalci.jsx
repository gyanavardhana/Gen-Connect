import React, { useState } from "react";
import Navbar from "../Homepage/Navbar";
import { motion, AnimatePresence} from "framer-motion";
import { useEffect } from "react";
import { FaSearch, FaLightbulb } from "react-icons/fa";

// Example product data
const products = [
  {
    id: "1",
    name: "Laptop",
    description:
      "A high-performance laptop suitable for gaming and professional work.",
    image: "https://via.placeholder.com/150",
    attributes: {
      warranty: "2 years",
      ram: "16GB",
      storage: "512GB SSD",
      cpu: "Intel i7",
      maintenance: [
        { time: 1, note: "Warranty expires", ram: "14GB" },
        { time: 2, note: "RAM decreases further", ram: "12GB" },
      ],
    },
  },
  {
    id: "2",
    name: "Smartphone",
    description: "A smartphone with the latest features and high durability.",
    image: "https://via.placeholder.com/150",
    attributes: {
      warranty: "1 year",
      battery: "4000mAh",
      storage: "128GB",
      camera: "48MP",
      maintenance: [
        { time: 1, note: "Warranty expires", battery: "3800mAh" },
        { time: 2, note: "Battery decreases further", battery: "3500mAh" },
      ],
    },
  },
  {
    id: "3",
    name: "Washing Machine",
    description:
      "A high-efficiency washing machine with multiple modes and energy saving.",
    image: "https://via.placeholder.com/150",
    attributes: {
      warranty: "3 years",
      capacity: "7kg",
      energy_rating: "5 stars",
      maintenance: [
        { time: 1, note: "Warranty still valid" },
        { time: 3, note: "Warranty expires", capacity: "6.5kg" },
      ],
    },
  },
];

const GenCalci = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [timeOffset, setTimeOffset] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      const timer = setTimeout(() => setShowTooltip(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedProduct]);

  const handleSearch = () => {
    const product = products.find(
      (product) =>
        product.id === searchTerm ||
        product.name.toLowerCase() === searchTerm.toLowerCase()
    );
    setSelectedProduct(product);
    setTimeOffset(0);
    setShowTooltip(false);
  };

  const handleTimeChange = (event) => {
    const offset = parseInt(event.target.value, 10);
    setTimeOffset(offset);
  };

  const getAttributeColor = (key, value, originalValue) => {
    if (key === "warranty" && timeOffset > parseInt(value)) {
      return "text-red-500";
    }
    if (value !== originalValue) {
      return "text-red-500";
    }
    return "text-gray-800";
  };

  return (
    <>
      <Navbar />
      <div className="bg-neutral-100 min-h-screen p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 relative"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            GenCalci - Product Lifecycle Simulator
          </h1>
          <div className="mb-6 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter product ID or name"
              className="border border-gray-300 p-3 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-amber-500 pr-12"
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full bg-amber-500 text-white px-4 rounded-r hover:bg-amber-400 transition duration-300 flex items-center justify-center"
            >
              <FaSearch className="mr-2" />
              Search
            </button>
          </div>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-200 p-6 rounded-lg shadow-md relative mt-6"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {selectedProduct.description}
                  </p>
                  <div className="mb-4">
                    <label className="font-semibold text-gray-700 block mb-2">
                      Set Time Offset (years):
                    </label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="0"
                        max="5"
                        value={timeOffset}
                        onChange={handleTimeChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-4 text-amber-500 font-semibold">
                        {timeOffset}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Attributes:
                  </h3>
                  <ul className="bg-gray-50 p-4 rounded-lg">
                    {Object.entries(selectedProduct.attributes)
                      .filter(([key]) => key !== "maintenance")
                      .map(([key, value]) => {
                        const originalValue = value;
                        const maintenanceItem =
                          selectedProduct.attributes.maintenance.find(
                            (item) => item.time <= timeOffset && item[key]
                          );
                        const updatedValue = maintenanceItem
                          ? maintenanceItem[key]
                          : value;
                        return (
                          <li key={key} className="mb-2">
                            <span className="font-medium capitalize">
                              {key}:
                            </span>{" "}
                            <span
                              className={getAttributeColor(
                                key,
                                updatedValue,
                                originalValue
                              )}
                            >
                              {updatedValue}
                            </span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Maintenance History:
                  </h3>
                  <ul className="bg-gray-50 p-4 rounded-lg">
                    {selectedProduct.attributes.maintenance
                      .filter((item) => item.time <= timeOffset)
                      .map((item, index) => (
                        <li
                          key={index}
                          className="mb-3 p-2 bg-white rounded shadow"
                        >
                          <span className="font-medium">Year {item.time}:</span>{" "}
                          {item.note}
                          {Object.entries(item)
                            .filter(([key]) => key !== "time" && key !== "note")
                            .map(([key, value]) => (
                              <span
                                key={key}
                                className="block text-sm text-red-500 mt-1"
                              >
                                {key}: {value}
                              </span>
                            ))}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-8 bg-amber-500 text-white p-4 rounded-lg shadow-lg max-w-xs z-50"
                  >
                    <button
                      onClick={() => setShowTooltip(false)}
                      className="absolute top-2 right-2 text-white hover:text-gray-200"
                    >
                      &times;
                    </button>
                    <div className="flex items-start">
                      <FaLightbulb className="text-xl mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm">
                        Tip: Adjust the time offset slider to see how the
                        product degrades over time!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default GenCalci;
