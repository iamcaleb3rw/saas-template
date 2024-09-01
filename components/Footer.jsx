import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center border-t p-4">
      <div className="flex gap-1">
        <p>Built by</p>
        <Link
          href="https://calebganza.vercel.app"
          target="_blank"
          className="underline text-primary/70"
        >
          Caleb Ganza
        </Link>
      </div>
      <Link href="https://calcade.vercel.app" target="_blank">
        Calcade Inc.
      </Link>
    </div>
  );
};

export default Footer;
