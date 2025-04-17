import React from "react";

export function Pagination()
{
    return (
        <div className="container mx-auto px-4 py-8 flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center bg-[#a27d56] text-white text-sm manrope hover:bg-[#8b6a47] transition-colors">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white text-[#666666] text-sm manrope border border-[#e5e5e5] hover:bg-[#f5f5f5] transition-colors">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white text-[#666666] text-sm manrope border border-[#e5e5e5] hover:bg-[#f5f5f5] transition-colors">
              &gt;
            </button>
          </div>
        </div>
    );
}