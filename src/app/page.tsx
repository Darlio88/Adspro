import Image from "next/image";

//components
import Header from "@/components/Header";
import Register from "@/components/Register/Register";
import Login from "@/components/Login/Login";

export default function Home() {
  return (
    <main className=" min-h-screen px-24">
      <Header />
      {/* <Register />
      <Login /> */}
    </main>
  );
}
