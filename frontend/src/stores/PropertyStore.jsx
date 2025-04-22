import { create } from "zustand";
import api from "../services/api";

const usePropertyStore = create ((set) => ({
    properties: [],
    loading: false,
    error: null,
    fetchProperties: async () => {
        set ({ loading: true, error: null });
        try {
            const response = await api.get('/properties');
            set ({ properties: response.data.properties, error: null });
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Failed to fetch properties',
            loading: false,
            });
        }
    }
}));

export default usePropertyStore;