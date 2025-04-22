import { create } from 'zustand';
import api from '../services/api';

const useAgentStore = create((set) => ({
    agents: [],
    error: null,
    fetchAgents: async () => {
      set({ error: null });
      try {
        const response = await api.get('/agents');
        const agentsData = Array.isArray(response.data) ? response.data : [];
 console.log(agentsData);
 
        set({ agents: agentsData});
      } catch (error) {
        set({
          error: error.response?.data?.message || 'Failed to fetch agents',
        });
      }
    },
  }));

export default useAgentStore;