"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Button } from "./ui/button";
import Branding from "./Branding";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="border">
      <nav
        className={`fixed w-full top-0 left-0 z-30 transition duration-300 ${
          isScrolled ? "backdrop-blur-xl shadow-sm border-b" : "bg-transparent"
        } px-8 py-1 flex justify-between items-center`}
      >
        <Branding />
        <div>
          <Button className="hover:scale-[1.008] transition">
            Create Courses
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
