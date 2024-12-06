import { create } from "zustand";

interface User {
    username: string | null;
    name: string | null;
  }
  

interface UserState extends User {
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  username: null,
  name: null,
  setUser: (user) =>
    set(() => ({
      username: user.username,
      name: user.name,
    })),
  clearUser: () =>
    set(() => ({
      username: null,
      name: null,
    })),
}));
