import React from "react";

export function PostModal() {
  return (
    <div className="">
      <div className="bg-white p-8 shadow-md w-full mt-4">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
          Create New Blog Post
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Title *
            </label>
            <input
              type="text"
              placeholder="e.g., My New Blog Post"
              className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Content *
            </label>
            <textarea
              placeholder="Write your blog post content here..."
              rows="6"
              className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56] resize-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Status
            </label>
            <select className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]">
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              placeholder="e.g., Lifestyle, News, Updates"
              className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]">
            Share Post
          </button>
        </div>
      </div>
    </div>
  );
}
