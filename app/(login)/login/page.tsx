import Login from "@/components/Login";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";

function LoginPage() {
  return (
    <main>
      <Header />
      <div className="grid">
        <div>
          <Login />
        </div>
      </div>
      <Footer />
    </main>
  );
}
export default LoginPage;
