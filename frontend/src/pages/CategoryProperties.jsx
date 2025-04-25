import React, { useState, useEffect } from "react";
import useCategoryStore from "../stores/categoryStore";
import usePropertyStore from "../stores/PropertyStore";
import { Link, useNavigate, useParams } from "react-router";

export function CategoryProperties() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const {
    categories,
    error: categoryError,
    fetchCategories,
  } = useCategoryStore();

  const {
    propertiesByCategory,
    paginationByCategory,
    fetchCategorizedProperties,
    error: propertyError,
  } = usePropertyStore();

  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId || "");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  // this fetch for categories on mount
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [fetchCategories, categories.length]);

  // and fetch on categories based on the selectedCategoryId
  useEffect(() => {
    if (
      selectedCategoryId &&
      !propertyError
    ) {
      fetchCategorizedProperties(selectedCategoryId, currentPage, perPage);
    }
  }, [
    selectedCategoryId,
    propertyError,
    fetchCategorizedProperties,
    currentPage,
    perPage
  ]);

  // while this set a default selectedCategoryId whis is the first record in categories
  useEffect(() => {
    if (categories.length > 0 && !selectedCategoryId) {
      const firstCategory = categories[0].id.toString();
      setSelectedCategoryId(firstCategory);
      navigate(`/properties-category/${firstCategory}`, { replace: true });
    }
  }, [categories, selectedCategoryId, navigate]);

  // retrieve the categoryId, from URI
  useEffect(() => {
    if (categoryId && categoryId !== selectedCategoryId) {
      setSelectedCategoryId(categoryId);
      setCurrentPage(1);
    }
  }, [categoryId, selectedCategoryId]);

  const handleCategorychange = (e) => {
    const newCategoryId = e.target.value;
    setSelectedCategoryId(newCategoryId);
    setCurrentPage(1);
    navigate(`/properties-category/${newCategoryId}`);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth'});
  };

  const handleViewPlan = (propertyId) => {
    navigate(`/property/${propertyId}`);
  }

  const pagination = paginationByCategory[selectedCategoryId] || {};
  const current_page = pagination.current_page || 1;
  const last_page = pagination.last_page || 1;

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-gradient-to-b from-white to-amber-50">
      {/* Category Selection */}
      <div className="mb-10 w-full">
        {categoryError && (
          <p className="text-center text-red-500 bg-red-50 p-3 shadow-sm">
            {categoryError}
          </p>
        )}
        {!categoryError && (
          <div className="flex justify-end mb-8">
            <select
              value={selectedCategoryId}
              onChange={handleCategorychange}
              className="w-52 bg-[#dfa075] text-center px-6 py-3 text-white focus:outline-none cursor-pointer transition-all duration-200 shadow-sm"
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
          <div className="transition-all duration-300">
            {propertyError && (
              <p className="text-center text-red-500 bg-red-50 p-3 shadow-sm">
                {propertyError}
              </p>
            )}

            {!propertyError && propertiesByCategory[selectedCategoryId] ? (
              propertiesByCategory[selectedCategoryId].length === 0 ? (
                <p className="text-center text-gray-600 p-8 bg-gray-50 shadow-sm">
                  No properties available in this category.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {propertiesByCategory[selectedCategoryId].map((property) => (
                    <div className="bg-white p-6 shadow-sm border border-[#e5e5e5] flex flex-col">
                      {/* Photos */}
                      <div className="h-64 bg-[#f8f3e9] flex items-center justify-center text-[#666666] manrope">
                        {property.image ? (
                          <img
                            src={property.image}
                            alt={property.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          "Photo Placeholder"
                        )}
                      </div>
                      {/* Video Placeholder */}

                      {/* Property Details */}
                      <h3 className="text-xl font-semibold dm-serif text-[#262626] mt-4">
                        {property.title}
                      </h3>
                      <p className="text-[#666666] manrope">
                        {property.location}
                      </p>
                      <p className="text-[#a27d56] manrope font-semibold mt-1">
                        ${property.price.toLocaleString()}
                      </p>
                      <p className="text-[#666666] manrope mt-2">
                        {property.description}
                      </p>
                      <div className="mt-2 text-sm text-[#666666] manrope">
                      <p>Date Added: {new Date(property.created_at).toLocaleDateString('fr-FR')}</p>
                      </div>
                      <button onClick={() => handleViewPlan(property.id)} className="mt-4 px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
                
              )
            ) : (
              !propertyError && (
                <p className="text-center text-gray-600 p-8 bg-gray-50 animate-pulse">
                  Select a category to view properties.
                </p>
              )
            )}
          </div>
        )}
{paginationByCategory[selectedCategoryId] && (
    <div className="flex justify-center mt-8 space-x-4">
      <button
        onClick={() => handlePageChange(current_page - 1)}
        disabled={current_page <= 1}
        className={`px-4 py-2 ${
          current_page <= 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[#dfa075] text-white hover:bg-[#c89060]'
        } transition-all duration-200`}
      >
        Previous
      </button>
      <span className="px-4 py-2 text-gray-700">
        Page {current_page} of {last_page}
      </span>
      <button
        onClick={() => handlePageChange(current_page + 1)}
        disabled={current_page >= last_page}
        className={`px-4 py-2 ${
          current_page >= last_page
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[#dfa075] text-white hover:bg-[#c89060]'
        } transition-all duration-200`}
      >
        Next
      </button>
    </div>
  )}

          </div>
    </section>
  );
}

export default CategoryProperties;
