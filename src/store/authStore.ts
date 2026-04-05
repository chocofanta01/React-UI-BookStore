import { create } from "zustand";

interface InternalState {
  isLoggedIn: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}

export const useAuthStore = create<InternalState>((set) => ({
  isLoggedIn: !!localStorage.getItem("token"),
  storeLogin: (token: string) => {
    set({ isLoggedIn: true });
    localStorage.setItem("token", token);
  },
  storeLogout: () => {
    set({ isLoggedIn: false });
    localStorage.removeItem("token");
  },
}));
