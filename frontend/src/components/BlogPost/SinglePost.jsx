import React, { useEffect, useState } from "react";
import { BlogSideBar } from "../Global/BlogSideBar";
import Comments from "../Global/Comments";
import useStorePost from "../../stores/storePost";
import { useNavigate, useParams } from "react-router";
import api from "../../services/api";

export function SinglePost() {
  const { post, loading, fetchSinglePost } = useStorePost();
  const { postId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [error, setError] = useState(null);
  const [shareUrl, setShareUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSinglePost(postId);
  }, [postId, fetchSinglePost]);

  const handleShare = async (platform) => {
    setSharing(true);
    setError(null);
    try {
      const response = await api.post("/blog/posts/share", {
        blog_post_id: post.id,
        platform,
      });
      const { share_url } = response.data;
      setShareUrl(share_url);
      window.open(share_url, "_blank", "noopener,noreferrer");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to share post");
    } finally {
      setSharing(false);
      setIsModalOpen(false);
    }
  };
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row lg:gap-10 px-4 py-6">
      <div className="flex flex-col items-center gap-6 w-full lg:w-3/4">
        <div className="w-full md:w-full pr-0 md:pr-8 border-b pb-10 px-10">
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : error ? (
            <div className="text-center py-10 text-red-600">Error: {error}</div>
          ) : post ? (
            <>
              <div className="relative">
                <img
                  src={
                    post.image_url ||
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                  }
                  alt={post.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#a27d56] text-white text-xs uppercase tracking-wider px-3 py-1 manrope">
                  {post.category_id || "Uncategorized"}
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-2 items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <span className="w-[6.5rem] bg-[#a27d56] text-white text-xs uppercase tracking-wider px-3 py-1 manrope">
                      {post.category?.name || "Uncategorized"}
                    </span>
                    <p className="text-sm text-[#666666] manrope">
                      {new Date(post.created_at).toLocaleDateString()} • By{" "}
                      {post.user || "Admin"}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#a27d56] text-white px-2 hover:bg-[#8b6a47] transition-colors duration-200"
                    aria-label="Share this post"
                  >
                    Share
                  </button>
                </div>
                <h1 className="text-5xl font-semibold my-5 dm-serif text-[#262626]">
                  {post.title}
                </h1>
                <p className="text-[#666666] mt-3 manrope leading-relaxed">
                  {typeof post.content === "string" && post.content
                    ? post.content
                    : "No content available."}
                </p>
                <div className="mt-6">
                  <p className="text-[#666666] manrope leading-relaxed">
                    {post.content}
                  </p>
                </div>
              </div>
              <Comments post={post} />
            </>
          ) : (
            <div className="text-center py-10 text-gray-600">
              Post not found.
            </div>
          )}
        </div>
      </div>
      <BlogSideBar />
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold text-[#262626] mb-4">Share Post</h3>
            {error && (
              <p className="text-red-500 mb-4" aria-live="assertive">{error}</p>
            )}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleShare("twitter")}
                disabled={sharing}
                className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50"
                aria-label="Share on Twitter"
              >
                {sharing && "twitter" === "twitter" ? "Sharing..." : "Twitter"}
              </button>
              <button
                onClick={() => handleShare("facebook")}
                disabled={sharing}
                className="bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 transition-colors duration-200 disabled:opacity-50"
                aria-label="Share on Facebook"
              >
                {sharing && "facebook" === "facebook" ? "Sharing..." : "Facebook"}
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                disabled={sharing}
                className="bg-blue-800 text-white px-4 py-2 hover:bg-blue-900 transition-colors duration-200 disabled:opacity-50"
                aria-label="Share on LinkedIn"
              >
                {sharing && "linkedin" === "linkedin" ? "Sharing..." : "LinkedIn"}
              </button>
              <button
                onClick={() => handleShare("whatsapp")}
                disabled={sharing}
                className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 transition-colors duration-200 disabled:opacity-50"
                aria-label="Share on WhatsApp"
              >
                {sharing && "whatsapp" === "whatsapp" ? "Sharing..." : "WhatsApp"}
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-[#a27d56] hover:text-[#8b6a47] transition-colors duration-200"
              aria-label="Close modal"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
