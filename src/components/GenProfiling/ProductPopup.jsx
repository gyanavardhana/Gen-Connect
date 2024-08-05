import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductPopup = ({ selectedProduct, onClose }) => {
  return (
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
              onClick={onClose}
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
                    Add to Wishlist
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductPopup;
