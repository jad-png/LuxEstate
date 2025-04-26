import { create } from "zustand";
import api from "../services/api";

const useStorePost = create((set) => ({
  posts: [],
  error: null,
  loading: false,

  fetchAllPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("blog/posts");
      const apiResponse = response.data.data;
      console.log(response);

      set({ posts: apiResponse, loading: false, error: null });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to load categories",
        loading: false,
      });
    }
  },

  fetchPostsByCategory: async (categoryId) => {
    set({ loading: true, erorr: null });
    try {
      const response = await api.get(`blog/posts/category/${categoryId}`);
      const apiResponse = response.data.data;
      set({ posts: apiResponse, loading: false, error: null });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to load categories",
        loading: false, 
      });
    }
  },
}));

export default useStorePost;
