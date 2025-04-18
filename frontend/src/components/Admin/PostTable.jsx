import React from "react";

export function PostTable() {
    return (
        <div className="">
      <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
        <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
          Post's Management
        </h2>
        <table className="w-full text-left manrope">
          <thead>
            <tr className="border-b border-[#e5e5e5] text-[#666666]">
              <th className="py-2">ID</th>
              <th className="py-2">Title</th>
              <th className="py-2">Publisher</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-center">Action</th>
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
              <td className="py-2">
                <div className="flex items-center justify-center gap-2 border pl-10">
                    <button>Publish</button>
                    <button>Draft</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
};