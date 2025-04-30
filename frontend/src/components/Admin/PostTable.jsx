import React, { Fragment, useEffect, useState } from "react";
import { PostContent } from "./PostContent";
import api from "../../services/api";

export function PostTable() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("/blog/all/posts");
      const apiResponse = response.data;

      setPosts(apiResponse);
      setLoading(false);
    } catch (error) {
      setError("Failed to load posts");
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const openPostDetails = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleStatusUpdate = async (postId, status) => {
    setError(null);
    setSuccess(null);
    try {
      await api.put(`/blog/posts/${postId}`, { status });
      setSuccess("Post published successfully!");
      fetchPosts();
    } catch (error) {
      setError("Failed to publish post");
      console.error("Error publishing post:", error);
    }
  }
  return (
    <div className="">
      <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
        <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
          Post's Management
        </h2>
        
        <div className="relative">
          <table className="w-full table-fixed text-left manrope">
            <thead>
              <tr className="border-b border-[#e5e5e5] text-[#666666]">
                <th className="py-2 w-1/12">ID</th>
                <th className="py-2 w-1/4">Title</th>
                <th className="py-2 w-1/4">Publisher</th>
                <th className="py-2 w-1/6">Status</th>
                <th className="py-2 w-1/3 text-center">Action</th>
              </tr>
            </thead>
          </table>
          
          <div className="max-h-[400px] overflow-y-auto overflow-x-hidden">
            <table className="w-full table-fixed text-left manrope">
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-[#e5e5e5] text-[#666666]"
                  >
                    <td className="py-2 w-1/12">{post.id}</td>
                    <td className="py-2 w-1/4 truncate">{post.title}</td>
                    <td className="py-2 w-1/4 truncate">{post.user?.name}</td>
                    <td className="py-2 w-1/6">
                      <span
                        className={`px-2 py-1 rounded ${
                          post.status === "Draft"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="py-2 w-1/3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => openPostDetails(post)}
                          className="px-2 py-1 text-[#a27d56] hover:text-[#8b6a47] manrope"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(post.id, "Published")}
                          className="px-2 py-1 text-green-600 hover:text-green-800 manrope">
                          Publish
                        </button>
                        <button 
                          onClick={() => handleStatusUpdate(post.id, "Draft")}
                          className="px-2 py-1 text-yellow-600 hover:text-yellow-800 manrope">
                          Draft
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && selectedPost && (
        <PostContent
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPost(null);
          }}
          post={selectedPost}
        />
      )}
    </div>
  );
}
