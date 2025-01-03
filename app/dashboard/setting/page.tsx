import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Setting() {
  return (
    <div className="flex items-center justify-center h-screen">
      <UserProfile routing="hash" />
    </div>
  );
}

export default Setting;
