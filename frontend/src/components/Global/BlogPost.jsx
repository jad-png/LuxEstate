import React
, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";

export function BlogPost({ post }) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [sharing, setSharing] = useState(false);
  // const [error, setError] = useState(null);
  // const [shareUrl, setShareUrl] = useState(null);
  const navigate = useNavigate();

  // const handleShare = async (platform) => {
  //     setSharing(true);
  //     setError(null);
  //     try {
  //       const response = await api.post("/blog/posts/share", {
  //         blog_post_id: post.id,
  //         platform,
  //       });
  //       const { share_url } = response.data;
  //       setShareUrl(share_url);
  //       window.open(share_url, "_blank", "noopener,noreferrer");
  //     } catch (err) {
  //       setError(err.response?.data?.message || "Failed to share post");
  //     } finally {
  //       setSharing(false);
  //       setIsModalOpen(false); // Close modal after sharing
  //     }
  //   }
  return (
    <div className="w-full md:w-full pr-0 md:pr-8 border-b px-10">
          <div key={post.id} className="pb-10 ">
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
                {post.category?.name || "Uncategorized"}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-[#666666] manrope">
                {new Date(post.created_at).toLocaleDateString()} • By{" "}
                {post.user.name || "Admin"}
              </p>
              <h2
                className="text-3xl font-semibold mt-2 dm-serif text-[#262626] hover:text-[#a27d56] transition-colors cursor-pointer"
                onClick={() => navigate(`/post/${post.id}`)}
              >
                {post.title}
              </h2>
              <p className="text-[#666666] mt-3 manrope leading-relaxed">
                {post.excerpt || post.content.substring(0, 75) + "..."}
              </p>
            </div>
          </div>
    </div>
  );
}
