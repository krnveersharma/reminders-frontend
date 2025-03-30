"use client";
import Image from "next/image";
import "./globals.css";
import getUser from "@/utils/getUser";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const router=useRouter()

  useEffect(() => {
    (async () => {
      const userDetails = await getUser(dispatch);
      console.log("user details are:", userDetails);
    })();
  }, []);
  return (
    <>
      {user !== null ? (
        <div className="flex-justify-between">
          <div>Reminders</div>
        </div>
      ) : (
        <div>
          <button>Login</button>
          <button onClick={()=>router.push("/sign-up")}>Signup</button>
        </div>
      )}
    </>
  );
}
