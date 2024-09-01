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
      <div className="flex justify-between items-center">
        <div className="text-2xl tracking-tight font-medium">
          Welcome back,{" "}
          <span className="bg-gradient-to-r from-[#439cfb] to-[#e81cff] text-transparent bg-clip-text">
            {user?.firstName}!
          </span>
          {"  "} Let's create
        </div>
        <Link href="/create-course">
          <Button>+ Create new course</Button>
        </Link>
      </div>
    </div>
  );
};

export default Addcourse;
