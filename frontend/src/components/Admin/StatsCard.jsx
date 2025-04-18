import React from "react";

export function StatsCard() {
    return (
        <div className="bg-white mb-2 md:mb-0 p-6 shadow-sm border border-[#e5e5e5] flex items-center md:w-[28rem] md:h-40">
          <div className="text-3xl mr-8">icon</div>
          <div>
            <h3 className="text-[#666666] manrope md:font-bold md:text-2xl md:p-2 md:text-center">Users per day</h3>
            <p className="text-2xl font-semibold dm-serif text-[#262626] md:text-2xl md:p-2">5930</p>
          </div>
        </div>
    );
};
