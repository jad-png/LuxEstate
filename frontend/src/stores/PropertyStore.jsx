import { create } from "zustand";
import api from "../services/api";

const usePropertyStore = create ((set) => ({
    properties: [],
    error: null,
    propertiesByCategory: {},

    fetchProperties: async () => {
        set ({ error: null });
        try {
            const response = await api.get('/properties');
            set ({ properties: response.data.properties, error: null });
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Failed to fetch properties',
        
            });
        }
    },
    fetchCategorizedProperties: async (categoryId) => {
        set({ error: null });
        try {
            const response = await api.get(`/properties/category/${categoryId}`);
            const propertiesData = Array.isArray(response.data.data) ? response.data.data : [];

            set ((state) => ({
                propertiesByCategory: {
                    ...state.propertiesByCategory,
                    [categoryId]: propertiesData,
                },
            }));
        } catch (error) {
            set ({
                error: error.response?.data?.message || 'Failed to fetch properties',
            });
        }
    }
}));

export default usePropertyStore;