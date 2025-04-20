import React from "react";
import { PropertyCard } from "../components/favorites/PropertyCard";

export function Properties() {
  const [filterOptions, setFilterOptions] = React.useState({
    location: "all",
    priceRange: "all",
    propertyType: "all",
  });
  const [sortOption, setSortOption] = React.useState("price-asc");

  // Static property data
  const properties = [
    {
      name: "Manhattan Penthouse",
      location: "401 Broadway, NY",
      price: 1200000,
      description:
        "A stunning penthouse with panoramic views of the city skyline, featuring 4 bedrooms, 3 bathrooms, and a private rooftop terrace.",
      photos: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      video: "https://via.placeholder.com/video.mp4",
      dateAdded: "2025-04-01",
      popularity: 250,
    },
    {
      name: "Brooklyn Heights Villa",
      location: "123 Clark St, Brooklyn",
      price: 850000,
      description:
        "A luxurious villa with modern amenities, including a gourmet kitchen, 3 bedrooms, and a spacious living area with high ceilings.",
      photos: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      video: null,
      dateAdded: "2025-04-10",
      popularity: 180,
    },
    {
      name: "Upper East Side Condo",
      location: "789 Park Ave, NY",
      price: 950000,
      description:
        "An elegant condo in the heart of the Upper East Side, offering 2 bedrooms, 2 bathrooms, and access to a private gym and pool.",
      photos: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      video: "https://via.placeholder.com/video.mp4",
      dateAdded: "2025-03-15",
      popularity: 300,
    },
  ];
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
        Luxury Properties
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            name={property.name}
            location={property.location}
            price={property.price}
            description={property.description}
            photos={property.photos}
            video={property.video}
            dateAdded={property.dateAdded}
            popularity={property.popularity}
          />
        ))}
      </div>
    </div>
  );
}

export default Properties;
