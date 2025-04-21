import React from "react";

export function CreateBlogPost() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md border border-[#e5e5e5] w-full">
        <h1 className="text-2xl font-semibold dm-serif text-[#262626] mb-6 text-center">
          Create a Blog Post
        </h1>

        <form className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter the title of your blog post"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Content
            </label>
            <textarea
              placeholder="Write your blog post content here"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56] h-48 resize-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              placeholder="e.g., luxury, penthouse, manhattan"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>

          {/* Picture Upload */}
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Upload Picture
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]"
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}
