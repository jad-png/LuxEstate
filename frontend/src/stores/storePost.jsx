import { create } from "zustand";
import api from "../services/api";

const useStorePost = create((set) => ({
  posts: { data: [], current_page: 1, last_page: 1, total: 0 },
  error: null,
  loading: false,

  fetchAllPosts: async (page = 1) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`blog/posts?page=${page}`);
      const apiResponse = response.data;
      console.log(response);

      set({ posts: apiResponse, loading: false, error: null });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to load categories",
        loading: false,
      });
    }
  },

  fetchPostsByCategory: async (categoryId, page = 1) => {
    set({ loading: true, erorr: null });
    try {
      const response = await api.get(`blog/posts/category/${categoryId}?page=${page}`);
      const apiResponse = response.data;
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
