import { api } from '@/shared/lib/api';

interface User {
  username: string;
  name: string;
}

export async function getUserInfo(token: string): Promise<User> {
  try {
    const response = await api.get('/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch user info');
  }
}

export async function logout(): Promise<void> {
  try {
    localStorage.removeItem('auth_token');
  } catch (err) {
    throw new Error('Failed to logout');
  }
}
