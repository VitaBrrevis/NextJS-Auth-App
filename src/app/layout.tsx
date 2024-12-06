import React from 'react';
import '@/shared/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-hidden">{children}</body>
    </html>
  );
}
