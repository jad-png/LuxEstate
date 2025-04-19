import React from "react";

export function OrderItem ({ id, date, total, status })
{
    return (
        <tr className="border-b border-[#e5e5e5] text-[#666666] manrope">
          <td className="py-3 px-4">{id}</td>
          <td className="py-3 px-4">{date}</td>
          <td className="py-3 px-4">${total.toLocaleString()}</td>
          <td className="py-3 px-4">
            <span
              className={`px-2 py-1 rounded ${
                status === "Delivered" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {status}
            </span>
          </td>
        </tr>
      );
}