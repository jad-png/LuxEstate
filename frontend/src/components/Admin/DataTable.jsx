import React from "react";

export function DataTable() {
  return (
    <div>
      <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
        <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
          Property Management
        </h2>
        <table className="w-full text-left manrope">
          <thead>
            <tr className="border-b border-[#e5e5e5] text-[#666666]">
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Location</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#e5e5e5] text-[#666666]">
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2">
                <span
                //   className={`px-2 py-1 rounded ${
                //     // item.status === "Available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                //   }`}
                >
                  status
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
