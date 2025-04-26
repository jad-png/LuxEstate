import { create } from "zustand";
import api from "../services/api";

const useBlogCategory = create((set) => ({
  blogCategories: [],
  error: null,
  loading: false,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("blog/category");
      const apiResponse = response.data;
      
      set({ blogCategories: apiResponse, loading: false, error: null });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to load categories",
        loading: false,
      });
    }
  },
}));

export default useBlogCategory;