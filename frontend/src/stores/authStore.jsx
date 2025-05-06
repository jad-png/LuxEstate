import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import api from "../services/api";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      register: async (name, email, phone, password, passwordConfirmation, role_id) => {
        try {
          const response = await api.post('auth/register', {
            name,
            email,
            phone,
            password,
            password_confirmation: passwordConfirmation,
            role_id
          });

          const data = response.data;

          set({ user: data.user, token: data.token, isAuthenticated: true });
        } catch (error) {
          console.error('Registration error:', error.response?.data?.message || error.message);
          throw error;
        }
      },
      login: async (email, password) => {
        try {
          const response = await api.post("auth/login", { email, password });
          const data = response.data;
          console.log(data);
          
          set({ user: data.user, token: data.token, isAuthenticated: true });
        } catch (error) {
          console.error(
            "Login error:",
            error.response?.data?.message || error.message
          );
          set({ user: null, isAuthenticated: false });
          throw error;
        }
      },
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
        useAuthStore.persist.clearStorage();
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;