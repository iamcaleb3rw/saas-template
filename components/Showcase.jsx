import React from "react";
import Image from "next/image";
import dashBoardImage from "@/public/dashboard.png";
import { BorderBeam } from "./magicui/border-beam";
import { CheckCircle } from "lucide-react";
import Particles from "./magicui/particles";
import NumberTicker from "./magicui/number-ticker";
import { CardStackDemo } from "./StackDemo";

const Showcase = () => {
  const features = [
    {
      name: "No credit card required",
    },
    {
      name: "Fast and cost efficient",
    },
    {
      name: "5 free generations",
    },
    {
      name: "Flexibility and customizability",
    },
  ];
  return (
    <div className="px-4 py-4 mb-12 relative flex flex-col gap-3 items-center justify-center">
      <h1 className="mt-5 text-xl font-semibold bg-gradient-to-r from-[#ffaa40] to-[#9c40ff] text-transparent bg-clip-text">
        Features
      </h1>
      <div className="flex flex-col lg:flex-row gap-3 justify-between w-full ">
        <div className="lg:max-w-[600px] p-2 border flex flex-col gap-3 justify-center rounded-3xl">
          <h1 className="text-3xl tracking-tighter font-semibold">
            Engage with content through interactive modules <br /> designed to
            reinforce learning through practice.
          </h1>

          <div>
            <ul>
              {features.map((item, index) => (
                <div className="flex gap-1">
                  <CheckCircle size={20} className="text-green-500 " />
                  <h1 className="text-muted-foreground">{item.name}</h1>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="border p-2 rounded-3xl">
          <div className="relative max-w-[1000px] z-20 border-2 rounded-2xl  overflow-hidden">
            <Image src={dashBoardImage} alt="showcase" className="w-[120%]" />
            <BorderBeam />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-3">
        <div className="relative overflow-hidden border col-span-12 sm:col-span-6 md:col-span-4 p-5 min-h-[140px] flex items-center justify-center flex-col rounded-3xl">
          <NumberTicker
            className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] text-transparent bg-clip-text"
            value={235}
          />

          <p className="text-lg tracking-tighter font-bold">
            Daily active users
          </p>
          <Particles
            color="#000000"
            className="inset-0 absolute"
            quantity={200}
            refresh
          />
        </div>
        <div className="flex items-center py-4 justify-center border col-span-12 sm:col-span-6 md:col-span-8 overflow-hidden min-h-[140px] rounded-3xl">
          <CardStackDemo />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
