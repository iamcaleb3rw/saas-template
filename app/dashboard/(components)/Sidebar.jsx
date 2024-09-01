"use client";
import Branding from "@/components/Branding";
import { Home, Compass, Shield, LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: Compass,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: LogOut,
      path: "/dashboard/logout",
    },
  ];

  return (
    <div className="fixed border-r p-4 shadow-lg h-full md:w-64">
      <Branding />
      <hr className="w-full my-4" />
      <div>
        <ul className="flex flex-col gap-2">
          {Menu.map((item, index) => (
            <Link href={item.path}>
              <div
                className={`flex items-center gap-3 text-muted-foreground hover:bg-secondary cursor-pointer p-2 rounded-lg ${
                  item.path == pathname && "bg-purple-500/10 border text-black"
                }`}
              >
                <div className="text-purple-500 flex flex-col">
                  <item.icon size={30} />
                </div>
                <div>{item.name}</div>
              </div>
            </Link>
          ))}
        </ul>

        <div className="absolute w-[90%] bottom-10 border py-5 px-2 rounded-lg bg-secondary/10">
          <Progress value={34} siz />
          <h1>3 out 5 Free courses</h1>
          <h1 className="text-sm text-muted-foreground">
            Upgrade your plan for unlimited course generation
          </h1>
          <Link href="/dashboard/upgrade">
            <Button className="w-full">Upgrade to Pro </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
