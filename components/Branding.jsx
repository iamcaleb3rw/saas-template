import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";

const Branding = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image src={Logo} alt="logo" width={40} />
      <div className="flex flex-col gap-0 leading-[16px] text-lg items-center justify-center font-semibold text-center">
        <p className="border-muted-foreground/50 border-b-2">A+</p>
        <p className="text-primary">A•I</p>
      </div>
    </div>
  );
};

export default Branding;
