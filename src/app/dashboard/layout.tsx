import React from "react";
import LeftBar from "../components/LeftBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <LeftBar />
      <div className="p-4">{children}</div>
    </div>
  );
}
