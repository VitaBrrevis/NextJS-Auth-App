import { getUserInfo } from '@/entities/user/api';

export async function useAuthServerSide(context: any) {
  const token = context.req.cookies['auth_token'];
  if (!token) return null;

  try {
    const userData = await getUserInfo();
    return userData;
  } catch {
    return null;
  }
}
