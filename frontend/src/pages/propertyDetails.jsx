import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import usePropertyStore from "../stores/PropertyStore";

export function propertyDetails() {
    const { id } = useParams();
    const { singleProperty, error, loading, fetchPropertyById } = usePropertyStore();

    useEffect(() => {
        fetchPropertyById(id);
    }, [id, fetchPropertyById]);

    if (loading) {
      return (
        <div className="py-16 px-4 max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-lg animate-pulse">Loading property details...</p>
        </div>
      );
    }
    
    if (error) {
      return (
        <div className="py-16 px-4 max-w-7xl mx-auto text-center">
          <p className="text-red-500 bg-red-50 p-3 shadow-sm">{error}</p>
        </div>
      );
    }

    if (!singleProperty) {
        return (
            <div className="py-16 px-4 max-w-7xl mx-auto text-center">
              <p className="text-gray-600 text-lg">Property not found.</p>
            </div>
          );
    }

    const { title, description, location, price, bedrooms, area, status, images = [], videos = [], features = [], category } = singleProperty;

    return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-gradient-to-b from-white to-amber-50">
      {/* Back Link */}
      <div className="mb-6">
        <Link
          to={`/properties-category/${category?.id}`}
          className="text-[#a27d56] hover:underline manrope"
        >
          &larr; Back to {category?.name || 'Category'}
        </Link>
      </div>

      {/* Property Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold dm-serif text-[#262626]">{title}</h1>
        <p className="text-[#666666] manrope mt-2">{location}</p>
        <p className="text-[#a27d56] manrope font-semibold text-2xl mt-2">
          ${price.toLocaleString()}
        </p>
        <p className="text-[#666666] manrope mt-2 capitalize">
          Status: <span className="font-semibold">{status}</span>
        </p>
      </div>

       {/* Property Details */}
       <div className="mb-8">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-4">Details</h2>
        <div className="bg-white p-6 shadow-sm border border-[#e5e5e5] rounded-lg">
          <p className="text-[#666666] manrope mb-2">
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p className="text-[#666666] manrope mb-2">
            <span className="font-semibold">Bedrooms:</span> {bedrooms}
          </p>
          <p className="text-[#666666] manrope mb-2">
            <span className="font-semibold">Area:</span> {area} m²
          </p>
        </div>
      </div>


      {/* Category Details */}
      {category && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-4">Category Details</h2>
          <div className="bg-white p-6 shadow-sm border border-[#e5e5e5] rounded-lg flex flex-col md:flex-row gap-6">
            {category.image_url && (
              <img
                src={category.image_url}
                alt={category.name}
                className="h-48 w-full md:w-1/3 object-cover rounded-lg shadow-sm"
              />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold dm-serif text-[#262626]">{category.name}</h3>
              <p className="text-[#666666] manrope mt-2">
                <span className="font-semibold">Bedrooms:</span> {category.bedrooms}
              </p>
              <p className="text-[#666666] manrope mt-2">
                <span className="font-semibold">Bathrooms:</span> {category.bathrooms}
              </p>
              <p className="text-[#666666] manrope mt-2">
                <span className="font-semibold">Square Footage:</span> {category.square_footage} m²
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
    ); 
};

export default propertyDetails;