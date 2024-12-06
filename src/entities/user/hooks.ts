import { useUserStore } from './model';
import { getUserInfo } from './api';

export function useCurrentUser() {
  const { username, name, setUser, clearUser } = useUserStore();

  async function fetchUser() {
    try {
        
      const userData = await getUserInfo();
      setUser(userData);
    } catch {
      clearUser();
    }
  }

  return { username, name, fetchUser };
}
