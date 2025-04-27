import React, { useEffect } from "react";
import { BlogSideBar } from "../Global/BlogSideBar";
import Comments from "../Global/Comments";
import useStorePost from "../../stores/storePost";
import { useParams } from "react-router";

export function SinglePost() {
  const { post, loading, error, fetchSinglePost } = useStorePost();
  const { postId } = useParams();
  
  useEffect(() => {
    fetchSinglePost(postId);
  }, [postId, fetchSinglePost]);
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
                  {post.category?.name || "Uncategorized"}
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-2 items-center">
                  <div className="w-[6.5rem] bg-[#a27d56] text-white text-xs uppercase tracking-wider px-3 py-1 manrope">
                    {post.category?.name || "Uncategorized"}
                  </div>
                  <p className="text-sm text-[#666666] manrope">
                    {new Date(post.created_at).toLocaleDateString()} • By{" "}
                    {post.user || "Admin"}
                  </p>
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
              <Comments postId={postId} />
            </>
          ) : (
            <div className="text-center py-10 text-gray-600">Post not found.</div>
          )}
        </div>
      </div>
      <BlogSideBar />
    </div>
  );
}
