import React from "react";

export function FeatureItem({ feature, onDelete }) {
  const handleDelete = async () => {
    // Implement delete functionality here
    console.log("Delete feature with ID:", feature.id);
  };
  return (
    <tr className="border-b border-[#e5e5e5] text-[#666666] manrope">
      <td className="py-3 px-4">{feature.id}</td>
      <td className="py-3 px-4">{feature.name}</td>
      <td className="py-3 px-4">
        <button className="text-[#a27d56] hover:text-[#8b6a47] manrope">
          Edit
        </button>
        <button
          onClick={() => onDelete(feature.id)}  
          className="ml-2 text-red-600 hover:text-red-800 manrope"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
