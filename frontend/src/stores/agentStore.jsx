import { create } from 'zustand';
import api from '../services/api';

const useAgentStore = create((set) => ({
    agents: [],
    loading: false,
    error: null,
    fetchAgents: async () => {
      set({ error: null });
      try {
        const response = await api.get('/agents');
        set({ agents: response.data, loading: false });
      } catch (error) {
        set({
          error: error.response?.data?.message || 'Failed to fetch agents',
        });
      }
    },
  }));

export default useAgentStore;