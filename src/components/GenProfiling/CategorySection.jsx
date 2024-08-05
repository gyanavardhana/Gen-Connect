import React from "react";
import ProductCarousel from "./ProductCarousel";

const CategorySection = ({ demoData, onOpenPopup, selectedGeneration }) => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-l-4 border-amber-500 pl-3">
        {selectedGeneration.charAt(0).toUpperCase() +
          selectedGeneration.slice(1)}{" "}
        Favorites
      </h2>
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-bold mb-8 ml-5 text-gray-800 border-l-4 border-amber-500 pl-3">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <ProductCarousel
            products={demoData.filter(
              (product) => product.category === category
            )}
            category={category}
            onOpenPopup={onOpenPopup}
          />
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
