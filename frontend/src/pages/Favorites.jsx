import React from "react";
import { PropertyCard } from "../components/favorites/PropertyCard";

const Favorites = () => {
    const favoriteProperties = [
        {
          name: "Manhattan Loft",
          location: "401 Broadway, NY",
          price: 500000,
        },
        {
          name: "Brooklyn Heights Apt",
          location: "123 Clark St, Brooklyn",
          price: 350000,
        },
      ];
      return (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
            My Favorite Properties
          </h1>
          {favoriteProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteProperties.map((property, index) => (
                <PropertyCard
                  key={index}
                  name={property.name}
                  location={property.location}
                  price={property.price}
                />
              ))}
            </div>
          ) : (
            <p className="text-[#666666] manrope">
              You have no favorite properties yet.
            </p>
          )}
        </div>
      );
}

export default Favorites;