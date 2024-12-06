'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRegister } from '../hooks';
import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface RegisterFormValues {
  name: string;
  username: string;
  password: string;
}

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<RegisterFormValues>();
  const { register: registerUser, error, loading } = useRegister();
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    await registerUser(data);

    if (error) {
      router.push('/user/login');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg">
        <div className="flex">
          <Link
            href="/user/login"
            className="w-1/2 text-center py-3 font-bold text-gray-500 relative group"
          >
            LOG IN
            <span className="absolute bottom-0 right-0 w-full h-[1.6px] bg-yellow-500 transition-transform duration-300 scale-x-0 origin-right group-hover:scale-x-100"></span>

          </Link>
          <div className="w-1/2 text-center py-3 font-bold border-b-2 border-yellow-500">
            CREATE ACCOUNT
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Create account</h1>
          <Input
            {...register('name')}
            placeholder="First Name"
            required
          />
          <Input
            {...register('username')}
            placeholder="Username"
            required
          />
          <Input
            {...register('password')}
            placeholder="Password"
            type="password"
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg bg-yellow-400 text-black font-bold"
          >
            {loading ? 'Registering...' : 'Create'}
          </Button>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Link href="/user/login" className="text-sm text-center text-gray-500">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}
