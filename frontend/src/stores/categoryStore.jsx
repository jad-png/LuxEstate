import { create } from "zustand";
import api from "../services/api";


const useCategoryStore = create((set) => ({
    categories: [],
    error: null, 
    fetchCategories: async () => {
        set({ error: null, categories: []});
        try {
            const response = await api.get('/category');
            const categoriesData = Array.isArray(response.data) ? response.data : [];
            console.log(categoriesData);
            
            set({ categories: categoriesData, error: null });
        } catch (error) {
            set({
                categories: [],
                error: error.response?.data?.message || 'Failed to load categories'
            });
        }
    }
}));

export default useCategoryStore;