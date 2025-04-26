import React, { useEffect } from "react";
import useStorePost from "../../stores/storePost";
import { useNavigate } from "react-router";

export function BlogPost() {
  const { posts, loading, error, fetchAllPosts } = useStorePost();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);
  return (
    <div className="w-full md:w-full pr-0 md:pr-8 border-b pb-10 px-10">
      {posts.length === 0 ? (
        <div>No posts available.</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="border-b pb-10 mb-10">
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
                {post.author || "Admin"}
              </p>
              <h2
                className="text-3xl font-semibold mt-2 dm-serif text-[#262626] hover:text-[#a27d56] transition-colors cursor-pointer"
                onClick={() => navigate(`/post/${post.id}`)}
              >
                {post.title}
              </h2>
              <p className="text-[#666666] mt-3 manrope leading-relaxed">
                {post.excerpt || post.content.substring(0, 150) + "..."}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
