import { UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="border border-l-0 shadow-sm flex p-5 justify-between items-center">
      <div></div>
      <UserButton />
    </div>
  );
};

export default Header;
