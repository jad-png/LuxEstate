import React, { useEffect } from "react";
import { BlogPost } from "../Global/BlogPost";
import { BlogSideBar } from "../Global/BlogSideBar";
import { Pagination } from "../Global/Pagination";
import useStorePost from "../../stores/storePost";
import { useParams, useSearchParams } from "react-router";

export function BlogSection() {
  const { posts, loading, error, fetchAllPosts, fetchPostsByCategory } =
    useStorePost();
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    if (categoryId) {
      fetchPostsByCategory(categoryId, page);
    } else {
      fetchAllPosts(page);
    }
  }, [fetchPostsByCategory, categoryId, page, fetchAllPosts]);  
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row lg:gap-10 px-4 py-6">
      <div className="flex flex-col items-center gap-6 w-full lg:w-3/4">
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-600">Error: {error}</div>
        ) : posts.data.length === 0 ? (
          <div className="text-center py-10 text-gray-600">No posts available.</div>
        ) : (
          posts.data.map((post) => <BlogPost key={post.id} post={post} />)
        )}
        <div className="w-full">
          <div className="w-56">
            <Pagination />
          </div>
        </div>
      </div>
      <BlogSideBar />
    </div>
  );
}
