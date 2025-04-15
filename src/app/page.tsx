"use client";
import Image from "next/image";
import "./globals.css";
import getUser from "@/utils/getUser";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const userDetails = await getUser(dispatch);
      if(userDetails){
        router.push("/dashboard")
      }
      setLoading(false);
    })();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-4 text-gray-600 text-lg">Loading...</span>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {user ? (
        <section className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4 text-blue-700">Welcome back!</h1>
          <p className="text-gray-700 mb-6">Here are your reminders:</p>
          {/* Replace with your reminders list */}
          <div className="bg-blue-50 rounded p-4 text-blue-800">Reminders</div>
        </section>
      ) : (
        <section className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4 text-blue-700">Welcome!</h1>
          <p className="text-gray-600 mb-6">Please log in or sign up to continue.</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push("/login")}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              aria-label="Login"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/sign-up")}
              className="px-6 py-2 bg-gray-200 text-blue-700 rounded hover:bg-blue-300 transition"
              aria-label="Sign up"
            >
              Signup
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
