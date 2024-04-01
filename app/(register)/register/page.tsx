import Register from "@/components/Register";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";

function RegisterPage() {
  return (
    <main>
      <Header />
      <div className="grid">
        <div>
          <Register />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default RegisterPage;
