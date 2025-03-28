import Image from "next/image";
import "./globals.css"
export default function Home() {
  return (
    <div className="flex-justify-between">
      <div>Reminders</div>
      <div>
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </div>
  );
}
