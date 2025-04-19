import React from "react";

export function PostContent({ isOpen, onClose, post }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
          Post Details
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#666666] manrope font-semibold">
              ID
            </label>
            <p className="text-[#666666] manrope">{post.id}</p>
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope font-semibold">
              Title
            </label>
            <p className="text-[#666666] manrope">{post.title}</p>
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope font-semibold">
              Publisher
            </label>
            <p className="text-[#666666] manrope">{post.publisher}</p>
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope font-semibold">
              Status
            </label>
            <p className="text-[#666666] manrope">{post.status}</p>
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope font-semibold">
              Content
            </label>
            <p className="text-[#666666] manrope">{post.content}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-red-600 manrope rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5]"
          >
            Deny
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
