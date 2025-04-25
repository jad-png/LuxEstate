import { create } from "zustand";
import api from "../services/api";

const usePropertyStore = create ((set) => ({
    properties: [],
    error: null,
    loading: false,
    propertiesByCategory: {},
    paginationByCategory: {},
    singleProperty: null,

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
    fetchCategorizedProperties: async (categoryId, page = 1, perPage = 6) => {
        set({ error: null });
        try {
            const response = await api.get(`/properties/category/${categoryId}`, {
                params: {
                    page,
                    per_page: perPage
                }
            });            
            const apiResponse = response.data.properties;
            const propertiesData = Array.isArray(apiResponse.data) ? apiResponse.data : [];
            const paginationData = apiResponse;

            set((state) => ({
                propertiesByCategory: {
                    ...state.propertiesByCategory,
                    [categoryId]: propertiesData,
                },
                paginationByCategory: {
                    ...state.paginationByCategory,
                    [categoryId]: {
                        current_page: paginationData.current_page || 1,
                        last_page: paginationData.last_page || 1,
                        per_page: paginationData.per_page || perPage,
                        total: paginationData.total || 0,
                    }
                }
            }));            
        } catch (error) {
            set ({
                error: error.response?.data?.message || 'Failed to fetch properties',
            });
        }
    },
    fetchPropertyById: async (propertyId) => {
        set({ loading: true, error: null, singleProperty: null});
        try {
            const response = await api.get(`properties/${propertyId}`);
    
            const apiResponse = response.data.property;
            set({ singleProperty: apiResponse, loading: false});
        } catch (error) {
            set({ 
                error: error.response?.data?.message || 'Failed to load this property',
            });
        }
    }
}));

export default usePropertyStore;