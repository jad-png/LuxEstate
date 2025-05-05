import { create } from "zustand";
import api from "../services/api";

const useStorePost = create((set) => ({
  posts: { data: [], current_page: 1, last_page: 1, total: 0 },
  post: [],
  error: null,
  loading: false,

  fetchAllPosts: async (page = 1) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`blog/posts?page=${page}`);
      const apiResponse = response.data;
  
      // Filter out only the published posts
      const publishedPosts = apiResponse.data.filter(post => post.status === "Published");
  
      // Replace the data array with filtered posts
      set({
        posts: {
          ...apiResponse,
          data: publishedPosts,
        },
        loading: false,
        error: null,
      });
    }  catch (error) {
      set({
        error: error.response?.data?.message || "Failed to load categories",
        loading: false,
      });
    }
  },

  fetchPostsByCategory: async (categoryId, page = 1) => {
    set({ loading: true, erorr: null });
    try {
      const response = await api.get(
        `blog/posts/category/${categoryId}?page=${page}`
      );
      const apiResponse = response.data;
      set({ posts: apiResponse, loading: false, error: null });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to load categories",
        loading: false,
      });
    }
  },

  fetchSinglePost: async (postId) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/blog/posts/${postId}`);
      const apiResponse = response.data.post;
      console.log("Single Post Response:", response.data); // Debug log
      set({ post: apiResponse, loading: false, error: null });
    } catch (error) {
      console.error("Single Post Error:", error.response?.data); // Debug log
      set({
        error: error.response?.data?.message || "Failed to load categories",
        loading: false,
      });
    }
  },
}));

export default useStorePost;
