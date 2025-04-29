import React from "react";

export function PostContent({ isOpen, onClose, post }) {
  if (!isOpen) return null;

  const sampleComments = post.comments;
  console.log(sampleComments);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
          Post Details
        </h2>
        <div className="space-y-4">
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
            <p className="text-[#666666] manrope">{post.user?.name}</p>
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
          {/* Comments and Reactions Section */}
          <div>
            <label className="block text-sm text-[#666666] manrope font-semibold mb-2">
              Comments and Reactions
            </label>
            <div className="space-y-3">
              <div className="border-t border-[#e5e5e5] pt-3">
                <p className="text-sm text-[#666666] manrope font-semibold">
                  Reactions
                </p>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-[#666666] manrope">
                    👍 Likes: {post.reactions}
                  </span>
                  <span className="text-[#666666] manrope">
                    {/* 👎 Dislikes: {.dislikes} */}
                  </span>
                </div>
              </div>
              <div className="border-t border-[#e5e5e5] pt-3">
                <p className="text-sm text-[#666666] manrope font-semibold">
                  Comments
                </p>
                {sampleComments.length > 0 ? (
                  sampleComments.map((comment) => (
                    <div
                      key={comment.id}
                      className="flex items-start justify-between py-2 border-b border-[#e5e5e5]"
                    >
                      <div>
                        <p className="text-[#666666] manrope font-medium">
                          {comment.user?.name}
                        </p>
                        <p className="text-[#666666] manrope">
                          {comment.content}
                        </p>
                        <p className="text-xs text-[#666666] manrope">
                          {comment.timestamp}
                        </p>
                      </div>
                      <button
                        className="text-red-600 hover:text-red-800 manrope text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-[#666666] manrope">No comments yet.</p>
                )}
              </div>
            </div>
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
