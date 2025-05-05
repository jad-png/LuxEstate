import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import usePropertyStore from "../stores/PropertyStore";
import { Bed, Square, Bath, PlayCircle, ArrowLeft } from "lucide-react";

export function propertyDetails() {
    const { id } = useParams();
    const { singleProperty, error, loading, fetchPropertyById } = usePropertyStore();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    // Open lightbox for full-screen image viewing
    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
    };

    // Close lightbox
    const closeLightbox = (e) => {
        e.stopPropagation();
        setIsLightboxOpen(false);
    };

    return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-gradient-to-b from-white to-amber-50">
      {/* Sticky Back Link */}
      <div className="mb-6 sticky top-0 bg-amber-50 py-2 z-10">
        <Link
          to={`/properties-category/${category?.id}`}
          className="flex items-center text-[#a27d56] hover:underline manrope transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to {category?.name || 'Category'}
        </Link>
      </div>

      {/* Property Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left: Media Gallery */}
        <div>
          {images.length > 0 ? (
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold dm-serif text-[#262626] mb-6">Images</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    onClick={() => openLightbox(index)}
                    className="cursor-pointer rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      src={image.image_path}
                      alt={`${title} image`}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <p className="text-[#666666] manrope">No images available.</p>
            </div>
          )}
          {videos.length > 0 && (
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold dm-serif text-[#262626] mb-6">Videos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="relative rounded-lg shadow-lg overflow-hidden"
                  >
                    <video
                      src={video.url}
                      controls
                      className="h-64 w-full object-cover"
                    />
                    <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-80" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Property Header Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold dm-serif text-[#262626] mb-4">{title}</h1>
            <p className="text-[#666666] manrope text-lg mb-3">{location}</p>
            <p className="text-[#a27d56] manrope font-semibold text-3xl mb-4">${price.toLocaleString()}</p>
            <p className="text-[#666666] manrope capitalize mb-4">
              Status: <span className="font-semibold">{status}</span>
            </p>
            <div className="flex space-x-6 text-[#666666] manrope mb-6">
              <div className="flex items-center">
                <Bed className="w-6 h-6 mr-2 text-[#a27d56]" />
                <span>{bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center">
                <Square className="w-6 h-6 mr-2 text-[#a27d56]" />
                <span>{area} m²</span>
              </div>
            </div>
          </div>
          <button
            className="bg-[#a27d56] text-white px-6 py-3 rounded-lg manrope font-semibold hover:bg-[#8a6f4b] transition-colors duration-200"
            onClick={() => alert("Contact us for more details!")} // Replace with actual contact logic
          >
            Inquire Now
          </button>
        </div>
      </div>

      {/* Lightbox for Full-Screen Image Viewing */}
      {isLightboxOpen && images.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <img
            src={images[currentImageIndex].image_path}
            alt={`${title} image ${currentImageIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent closing on image click
          />
        </div>
      )}

      {/* Property Details */}
      <div className="mb-12">
        <h2 className="text-2xl lg:text-3xl font-semibold dm-serif text-[#262626] mb-6">Details</h2>
        <div className="bg-white p-6 shadow-sm border border-[#e5e5e5] rounded-lg">
          <p className="text-[#666666] manrope mb-4">
            <span className="font-semibold">Description:</span> {description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center text-[#666666] manrope">
              <Bed className="w-6 h-6 mr-2 text-[#a27d56]" />
              <span className="font-semibold">Bedrooms:</span> {bedrooms}
            </div>
            <div className="flex items-center text-[#666666] manrope">
              <Square className="w-6 h-6 mr-2 text-[#a27d56]" />
              <span className="font-semibold">Area:</span> {area} m²
            </div>
            {category?.bathrooms && (
              <div className="flex items-center text-[#666666] manrope">
                <Bath className="w-6 h-6 mr-2 text-[#a27d56]" />
                <span className="font-semibold">Bathrooms:</span> {category.bathrooms}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Property Features */}
      {features.length > 0 ? (
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold dm-serif text-[#262626] mb-6">Features</h2>
          <div className="bg-white p-6 shadow-sm border border-[#e5e5e5] rounded-lg">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-[#666666] manrope">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-center">
                  <span className="w-2 h-2 bg-[#a27d56] rounded-full mr-2"></span>
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold dm-serif text-[#262626] mb-6">Features</h2>
          <p className="text-[#666666] manrope">No features available.</p>
        </div>
      )}

      {/* Category Details */}
      {category && (
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold dm-serif text-[#262626] mb-6">Category Details</h2>
          <div className="bg-white p-6 shadow-sm border border-[#e5e5e5] rounded-lg flex flex-col md:flex-row gap-6">
            {category.image_url && (
              <img
                src={category.image_url}
                alt={category.name}
                className="h-48 w-full md:w-1/3 object-cover rounded-lg shadow-sm"
              />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold dm-serif text-[#262626] mb-3">{category.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#666666] manrope">
                <div className="flex items-center">
                  <Bed className="w-6 h-6 mr-2 text-[#a27d56]" />
                  <span className="font-semibold">Bedrooms:</span> {category.bedrooms}
                </div>
                <div className="flex items-center">
                  <Bath className="w-6 h-6 mr-2 text-[#a27d56]" />
                  <span className="font-semibold">Bathrooms:</span> {category.bathrooms}
                </div>
                <div className="flex items-center">
                  <Square className="w-6 h-6 mr-2 text-[#a27d56]" />
                  <span className="font-semibold">Square Footage:</span> {category.square_footage} m²
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
    ); 
};

export default propertyDetails;