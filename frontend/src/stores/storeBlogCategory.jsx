import { create } from "zustand";
import api from "../services/api";

const useBlogCategory = create((set) => ({
  blogCategory: [],
  error: null,
  loading: false,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("blog/category");
      const apiResponse = response.data.categories;
      set({ blogCategory: apiResponse, error: null });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to load",
      });
    }
  },
}));

export default useBlogCategory;