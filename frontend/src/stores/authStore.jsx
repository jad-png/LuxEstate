import { create } from "zustand";
import api from "../services/api";

const useAuthStore = create((set) => {
  return {
    user: null,
    isAuthenticated: false,
    register: async (name, email, phone,  password, passwordConfirmation, role_id) => {
      try {
        const response = await api.post('auth/register', {
          name, email, phone, password, password_confirmation: passwordConfirmation, role_id 
        });

        const data = response.data;

        set({ user: data.user, isAuthenticated: true});
        localStorage.setItem('token', data.token);
      } catch (error) {
        console.error('Registration error:', error.response?.data?.message || error.message);
        throw error;
      }
    },

    login: async (email, password) => {
      try {
        const response = await api.post("auth/login", { email, password });
        const data = response.data;

        set({ user: data.user, isAuthenticated: true });
        localStorage.setItem("token", data.token);
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
      set ({ user: null, isAuthenticated: false});
      localStorage.removeItem('token');
    }
  };
});

export default useAuthStore;
