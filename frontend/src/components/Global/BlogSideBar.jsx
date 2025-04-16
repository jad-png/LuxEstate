import React from "react";

export function BlogSideBar() {
  return (
    <div className="w-full md:w-1/3 mt-8 md:mt-0">
      <div className="bg-white p-6 border-l border-[#e5e5e5]">
        <h3 className="text-xl font-semibold text-[#a27d56] dm-serif border-b border-[#e5e5e5] pb-3">
          Categories
        </h3>
        <ul className="mt-4 text-[#666666] manrope">
          <li className="mt-2">• Food (2)</li>
          <li className="mt-2">• Health (3)</li>
          <li className="mt-2">• Meditation (1)</li>
          <li className="mt-2">• Nature (3)</li>
          <li className="mt-2">• Spirituality (4)</li>
          <li className="mt-2">• Uncategorized (5)</li>
        </ul>
        <div className="mt-6 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
          />
        </div>
      </div>
      <div className="border-b relative top-4 left-2 w-[32.5rem]"></div>
      <div className="mt-8 bg-white p-6 border-l border-[#e5e5e5]">
        <div>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Book a visit"
            className="w-full h-40 object-cover"
          />
          <h3 className="text-xl font-semibold mt-4 dm-serif text-[#262626]">
            Book A Visit
          </h3>
          <p className="text-sm text-[#666666] manrope mt-2">SALES@EXAMP.COM</p>
          <p className="text-sm text-[#666666] manrope mt-1">+1 121-25</p>
        </div>
      </div>
    </div>
  );
}
