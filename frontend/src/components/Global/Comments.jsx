import React from "react";

export function Comments() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div>
        {/* Comments Section */}
        <div className="flex items-start py-6 border-b border-[#e5e5e5]">
          <div className="w-12 h-12 bg-[#e5e5e5] flex items-center justify-center text-[#666666] manrope text-sm"></div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-[#262626] manrope font-semibold">
                  Jad-S3R
                </h4>
                <p className="text-sm text-[#666666] manrope">21.03.2025</p>
              </div>
              <button className="text-[#a27d56] manrope text-sm uppercase hover:text-[#8b6a47] transition-colors">
                Reply
              </button>
            </div>
            <p className="text-[#666666] manrope mt-2 leading-relaxed">
              Great Post, i did really liked the content!
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold dm-serif text-[#262626] mb-6">
            Leave a Comment
          </h3>
          <div className="flex flex-col md:flex-row gap-4"></div>
          <textarea
            placeholder="Your Comment *"
            rows="5"
            className="w-full mt-4 p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56] resize-none"
          />
          <button className="mt-4 bg-[#a27d56] text-white px-6 py-4 manrope uppercase tracking-wider hover:bg-[#8b6a47] transition-colors">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
