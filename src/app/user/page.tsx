'use client';

import { redirect } from 'next/navigation';
import { getUserInfo, logout } from '@/entities/user/api';

async function fetchUserInfo() {
  const token = localStorage.getItem('auth_token');

  if (!token) {
    window.location.assign('/user/login');
  }

  try {
    const userInfo = await getUserInfo(token);
    return userInfo;
  } catch (error) {
    console.log(error);
  }
}

export default async function UserPage() {
  const user = await fetchUserInfo();

  const handleLogout = async () => {
    try {
      await logout();
      window.location.assign('/user/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="relative min-h-screen">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">haha {user.username} got rickrolled</h1>
      <img
        src="/images/rickroll-rick.gif"
        alt="Rickroll GIF"
        className="w-96 rounded-lg shadow-lg"
      />
      </div>
    </div>
  );
}
