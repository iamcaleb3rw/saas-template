"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Addcourse = () => {
  const { user } = useUser();
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap">
        <div className="text-2xl tracking-tight font-medium">
          Thanks,{" "}
          <span className="bg-gradient-to-r from-[#439cfb] to-[#e81cff] text-transparent bg-clip-text">
            {user?.firstName}!
          </span>
          {"  "} for helping me test my <br /> authentication system,
        </div>
        <Link href="/" target="_blank">
          <Button>Back to Homepage</Button>
        </Link>
      </div>
    </div>
  );
};

export default Addcourse;
