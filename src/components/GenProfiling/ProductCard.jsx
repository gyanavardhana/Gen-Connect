import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onOpenPopup }) => {
    return (
        <motion.div 
            className="w-64 bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <div className="h-64 overflow-hidden relative group">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button 
                        className="bg-amber-500 text-white py-2 px-4 rounded-full hover:bg-amber-400 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onOpenPopup(product)}
                    >
                        Quick View
                    </motion.button>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 h-12 overflow-hidden">{product.title}</h2>
                <p className="text-gray-600 text-sm mb-2 capitalize">{product.category}</p>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-900 font-bold text-lg">${product.price.toFixed(2)}</p>
                    <div className="flex items-center bg-amber-100 px-2 py-1 rounded">
                        <span className="text-amber-500 mr-1">★</span>
                        <span className="text-gray-700 text-sm">{product.rating.rate}</span>
                    </div>
                </div>
                <motion.button 
                    className="w-full bg-amber-500 text-white py-2 px-4 rounded-full hover:bg-amber-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onOpenPopup(product)}
                >
                    View Options
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
