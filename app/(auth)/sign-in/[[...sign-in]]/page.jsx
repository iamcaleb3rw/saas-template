import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import signImage from "@/public/reading.svg";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Page() {
  return (
    <div className="border flex flex-col-reverse lg:flex-row">
      <div className="hidden w-[50vw] h-screen  lg:flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">
          A few clicks away <br /> from excellence
        </h1>
        <Image src={signImage} alt="Image" />
      </div>
      <div className="relative border-l w-full flex items-center justify-center shadow-xl">
        <SignIn className="z-20" />
        <BackgroundBeams className="z-0 pointer-events-none" />
      </div>
    </div>
  );
}
