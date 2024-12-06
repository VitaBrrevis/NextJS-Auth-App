import React from "react";

export default function Input({
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <div className="space-y-1">
      <input
        {...props}
        className="border border-gray-300 px-4 py-2 rounded-lg w-full placeholder-gray-500"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
