import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`relative overflow-hidden bg-yellow-500 text-white py-3 px-4 w-full rounded-lg font-bold transition-all duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
      }`}
    >
      {children}
      {!disabled && (
        <span className="absolute top-0 left-[-100%] w-full h-full bg-white blur-md opacity-30 rotate-12 transition-transform duration-500 group-hover:left-full"></span>
      )}
    </button>
  );
}
