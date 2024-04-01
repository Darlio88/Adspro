import AdNavigation from "@/components/AdsNav";
import Header from "@/components/Header";
import ProfileNavigation from "@/components/ProfileNav";
import React from "react";

function ProfilePage() {
  return (
    <main className=" min-h-screen px-24">
      <Header />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ProfileNavigation />
        </div>
        <div>
          <AdNavigation />
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
