'use client';

import { useState } from 'react';
import { register } from './api';

interface RegisterPayload {
  username: string;
  name: string;
  password: string;
}

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerUser = async (payload: RegisterPayload) => {
    setLoading(true);
    setError(null);

    try {
      await register(payload);
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { register: registerUser, loading, error, setError };
}
