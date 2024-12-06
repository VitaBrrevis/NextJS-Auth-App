import { api } from '@/shared/lib/api';

interface LoginPayload {
  username: string;
  password: string;
}
export async function login(payload: LoginPayload) {
    try {
      const response = await api.post('/v1/auth/login', payload);
      const token = response.data.accessToken;
  
      if (token) {
        localStorage.setItem('auth_token', token);
      } else {
        throw new Error('Token not received from API');
      }
  
      return response.data;
    } catch (err: any) {
      console.error('Login API error:', err.response?.data || err.message);
      throw new Error(err.response?.data?.message || 'Login failed');
    }
  }
  

interface RegisterPayload {
  username: string;
  name: string;
  password: string;
}

export async function register(payload: RegisterPayload) {
  try {
    const response = await api.post('/v1/auth/register', payload);
    return response.data;
  } catch (err) {
    throw new Error('Registration failed');
  }
}
