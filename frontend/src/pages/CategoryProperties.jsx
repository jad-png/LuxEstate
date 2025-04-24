import React, { useState, useEffect } from "react";
import useCategoryStore from "../stores/categoryStore";
import usePropertyStore from "../stores/PropertyStore";

export function CategoryProperties() {
  const {
    categories,
    error: categoryError,
    fetchCategories,
  } = useCategoryStore();
  const {
    propertiesByCategory,
    fetchCategorizedProperties,
    error: propertyError,
  } = usePropertyStore();
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [fetchCategories, categories.length]);

  useEffect(() => {
    if (
      selectedCategoryId &&
      !propertiesByCategory[selectedCategoryId] &&
      !propertyError
    ) {
      fetchCategorizedProperties(selectedCategoryId);
    }
  }, [
    selectedCategoryId,
    propertiesByCategory,
    propertyError,
    fetchCategorizedProperties,
  ]);
  console.log(propertiesByCategory);
  
  useEffect(() => {
    if (categories.length > 0 && !selectedCategoryId) {
      setSelectedCategoryId(categories[0].id.toString());
    }
  }, [categories, setSelectedCategoryId, selectedCategoryId]);
// console.log(selelctedC);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-medium text-center mb-8">
        Properties by Category
      </h1>
      {/* Category Selection */}
      <div className="mb-8">
        {categoryError && (
          <p className="text-center text-red-500">{categoryError}</p>
        )}
        {!categoryError && (
          <div className="flex justify-center">
            <select
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
              className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              {categories.length === 0 ? (
                <option value="">No categories available</option>
              ) : (
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))
              )}
            </select>
          </div>
        )}
        {selectedCategoryId && (
        <div>
          {propertyError && <p className="text-center text-red-500">{propertyError}</p>}
          {!propertyError && propertiesByCategory[selectedCategoryId] ? (
            propertiesByCategory[selectedCategoryId].length === 0 ? (
              <p className="text-center text-gray-600">No properties available in this category.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {propertiesByCategory[selectedCategoryId].map((property) => (
                  <div key={property.id} className="border rounded-lg p-4 shadow-md">
                    <h2 className="text-xl font-medium mb-2">{property.residence}</h2>
                    <p className="text-sm text-gray-600">Bed/Bath: {property.bed_bath}</p>
                    <p className="text-sm text-gray-600">Square Feet: {property.sq_ft}</p>
                    <p className="text-sm text-gray-600">
                      Sale Price: {property.sale_price ? `$${property.sale_price.toLocaleString()}` : 'N/A'}
                    </p>
                    <p className="text-sm text-gray-600">
                      Rent Price: {property.rent_price ? `$${property.rent_price.toLocaleString()}` : 'N/A'}
                    </p>
                    {property.images && property.images.length > 0 && (
                      <img
                        src={property.images[0].url || '/api/placeholder/400/300'}
                        alt={property.residence}
                        className="w-full h-48 object-cover mt-4 rounded-lg"
                      />
                    )}
                  </div>
                ))}
              </div>
            )
          ) : (
         !propertyError && <p className="text-center text-gray-600">Select a category to view properties.</p>
          )}
        </div>
      )}
      </div>
    </section>
  );
}

export default CategoryProperties;
