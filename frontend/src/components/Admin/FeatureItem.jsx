import React from "react";

export function FeatureItem ({ feature }) {
    return (
        <tr className="border-b border-[#e5e5e5] text-[#666666] manrope">
          <td className="py-3 px-4">{feature.id}</td>
          <td className="py-3 px-4">{feature.name}</td>
          <td className="py-3 px-4">
            <button className="text-[#a27d56] hover:text-[#8b6a47] manrope">Edit</button>
            <button className="ml-2 text-red-600 hover:text-red-800 manrope">Delete</button>
          </td>
        </tr>
    );
};