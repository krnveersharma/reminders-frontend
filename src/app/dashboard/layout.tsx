import React from "react";
import LeftBar from "../components/LeftBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[220px_1fr] h-screen bg-gray-100 px-32">
      <LeftBar />
      <div className="p-6 overflow-y-auto">{children}</div>
    </div>
  );
}
