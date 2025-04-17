import React from "react";

export function BlogPost() 
{
    return (
        <div className="w-full md:w-full pr-0 md:pr-8 border-b pb-10 px-10">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="City street"
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#a27d56] text-white text-xs uppercase tracking-wider px-3 py-1 manrope">
              MEDITATION
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-[#666666] manrope">
              December 28, 2021 • By Admin
            </p>
            <h2 className="text-3xl font-semibold mt-2 dm-serif text-[#262626] hover:text-[#a27d56] transition-colors">
              Introducing: ShelfBrackets
            </h2>
            <p className="text-[#666666] mt-3 manrope leading-relaxed">
              Kevin had a lot going on in his life and was trying to find the right educational environment to fit into his needs and schedule. There weren’t many opportunities around him outside of the local community college and he was stuck trying to find a way to learn. Dive into his...
            </p>
          </div>
        </div>
    );
}