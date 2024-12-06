"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Аnyohaseyo</h1>
      <div className="space-y-4">
        <Link
          href="/user/register"
          className="block w-64 py-3 text-center bg-yellow-500 text-white font-bold rounded-lg shadow hover:bg-yellow-600 transition-colors"
        >
          Register
        </Link>
        <Link
          href="/user/login"
          className="block w-64 py-3 text-center bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition-colors"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
