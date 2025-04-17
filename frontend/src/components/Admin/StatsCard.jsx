import React from "react";

export function StatsCard() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5] flex items-center">
          <div className="text-3xl mr-4">icon</div>
          <div>
            <h3 className="text-[#666666] manrope">title</h3>
            <p className="text-2xl font-semibold dm-serif text-[#262626]">value</p>
          </div>
        </div>
    );
};
