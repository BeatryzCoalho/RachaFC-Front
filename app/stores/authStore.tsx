import { create } from 'zustand';

const API_URL = import.meta.env.VITE_API_URL;// ajusta pra sua API

export interface User {
  id: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  is_admin?: boolean; // seu campo custom
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  checkAuth: () => Promise<void>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  // 🔍 verifica sessão (cookie já salvo no browser)
  checkAuth: async () => {
  console.log('🔍 checkAuth começou');

  set({ isLoading: true });

  try {
    const response = await fetch(`${API_URL}/users/me`, {
      credentials: 'include',
    });

    console.log('📡 response:', response.status);

    if (response.ok) {
      const user = await response.json();
      console.log('✅ user:', user);

      set({ user, isAuthenticated: true, isLoading: false });
      return;
    }

    console.log('❌ não autenticado');
    set({ user: null, isAuthenticated: false, isLoading: false });

  } catch (error) {
    console.error('🔥 erro:', error);

    set({ user: null, isAuthenticated: false, isLoading: false });
  }
},

  // 🔐 login
  login: async (email: string, password: string) => {
    try {
      const formData = new URLSearchParams();
      formData.append('username', email); // FastAPI Users usa "username"
      formData.append('password', password);

      const response = await fetch(`${API_URL}/auth/jwt/login`, {
        method: 'POST',
        body: formData,
        credentials: 'include', // 🔥 salva cookie
      });

      if (!response.ok) {
        return false;
      }

      // após login, busca usuário
      await useAuthStore.getState().checkAuth();
      return true;
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    }
  },

  // 🚪 logout
  logout: async () => {
    try {
      await fetch(`${API_URL}/auth/jwt/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Erro no logout:', error);
    } finally {
      set({ user: null, isAuthenticated: false });
      window.location.href = '/login';
    }
  },
}));