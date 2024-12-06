"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "@/features/user-by-email/api";
import { useRouter } from "next/navigation";
import Button from "@/shared/components/Button";
import Link from "next/link";
import Input from "@/shared/components/Input";

interface LoginFormValues {
  username: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    setLoading(true);
    setLoginError("");
    try {
      await login(data);
      router.push("/user");
    } catch (error: any) {
      setLoginError(error.message || "Invalid username or password");
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg">
        <div className="flex">
          <div className="w-1/2 text-center py-3 font-bold border-b-2 border-yellow-500">
            LOG IN
          </div>
          <Link
            href="/user/register"
            className="w-1/2 text-center py-3 font-bold text-gray-500 relative group"
          >
            CREATE ACCOUNT
            <span className="absolute bottom-0 left-0 w-0 h-[1.6px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Log In</h1>

          <div>
            <Input
              {...register("username", { required: "Email is required" })}
              placeholder="Enter your email"
              error={errors.username?.message}
            />
          </div>

          <div>
            <Input
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              type="password"
              error={errors.password?.message}
            />
          </div>

          {loginError && <p className="text-red-500">{loginError}</p>}

          <Button type="submit" disabled={loading} className="w-full py-2 rounded-lg bg-yellow-400 text-black font-bold">
            {loading ? "Logging in..." : "LOG IN"}
          </Button>

          <Link href="/user/register" className="text-sm text-center text-gray-500">
            Forgot password?
          </Link>
        </form>
      </div>
    </div>
  );
}
