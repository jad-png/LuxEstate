import React from "react";

export function PropertyCard({
  name,
  location,
  price,
  description,
  photos,
  video,
  dateAdded,
  popularity,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5] flex flex-col">
      {/* Photos */}
      <div className="relative mb-4">
        <div className="h-64 bg-[#f8f3e9] rounded-lg flex items-center justify-center text-[#666666] manrope">
          {photos[0] ? (
            <img
              src={photos[0]}
              alt={name}
              className="h-full w-full object-cover rounded-lg"
            />
          ) : (
            "Photo Placeholder"
          )}
        </div>
        <div className="absolute bottom-2 right-2 flex space-x-1">
          {photos.slice(1, 4).map((photo, index) => (
            <div
              key={index}
              className="h-12 w-12 bg-[#f8f3e9] rounded-md flex items-center justify-center text-[#666666] manrope text-xs"
            >
              {photo ? (
                <img
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover rounded-md"
                />
              ) : (
                `+${photos.length - 1}`
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video Placeholder */}
      <div className="mb-4">
        <div className="h-40 bg-[#f8f3e9] rounded-lg flex items-center justify-center text-[#666666] manrope">
          {video ? "Video Placeholder" : "No Video Available"}
        </div>
      </div>

      {/* Property Details */}
      <h3 className="text-xl font-semibold dm-serif text-[#262626]">{name}</h3>
      <p className="text-[#666666] manrope">{location}</p>
      <p className="text-[#a27d56] manrope font-semibold mt-1">
        ${price.toLocaleString()}
      </p>
      <p className="text-[#666666] manrope mt-2">{description}</p>
      <div className="mt-2 text-sm text-[#666666] manrope">
        <p>Date Added: {dateAdded}</p>
        <p>Popularity: {popularity} views</p>
      </div>
      <button className="mt-4 px-4 py-2 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]">
        View Details
      </button>
    </div>
  );
}
