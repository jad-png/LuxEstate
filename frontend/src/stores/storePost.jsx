import { create } from "zustand";
import api from "../services/api";

const useStorePost = create(() => ({
  posts: [],
  error: null,
  loading: false,

  fetchPostsByCategory: async (set) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("");
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
