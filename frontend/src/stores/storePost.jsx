import { create } from "zustand";
import api from "../services/api";

const useStorePost = create(() => ({
  posts: [],
  error: null,
  loading: false,

  fetchAllPosts: async (set) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get('/posts');
      const apiResponse = response.data;
console.log(apiResponse);

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