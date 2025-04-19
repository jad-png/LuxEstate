import React from "react";
import { Link } from "react-router";

export function PropertyCard({ name, location, price }) {
    return (
        // TODO: add building id to access and see it's content
        <Link to="/building" className="bg-white p-4 shadow-sm border border-[#e5e5e5] flex flex-col">
          <div className="h-40 bg-[#f8f3e9] mb-3 flex items-center justify-center text-[#666666] manrope">
            Image Placeholder
          </div>
          <h3 className="text-lg font-semibold dm-serif text-[#262626]">{name}</h3>
          <p className="text-[#666666] manrope">{location}</p>
          <p className="text-[#a27d56] manrope font-semibold mt-1">${price.toLocaleString()}</p>
          <button
            className="mt-3 px-3 py-1 text-red-600 manrope border border-[#e5e5e5] hover:bg-[#f5f5f5]"
          >
            Remove from Favorites
          </button>
        </Link>
    );
}