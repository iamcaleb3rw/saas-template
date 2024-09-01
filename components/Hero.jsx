import React from "react";
import DotPattern from "./magicui/dot-pattern";
import { Button } from "./ui/button";
import heroImage from "@/public/heroimg.svg";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import AvatarCircles from "./magicui/avatar-circles";
import WordRotate from "./magicui/word-rotate";
import Link from "next/link";

const Hero = () => {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];

  const spanWords = ["Learning", "Teaching", "Mastery", "Research"];

  return (
    <div className="py-10 w-full h-full relative min-h-[90vh] border-b flex justify-center items-center px-8 overflow-hidden">
      <div className="flex flex-col items-center gap-3 z-20">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-8 text-center">
          Experience{" "}
          <WordRotate
            words={spanWords}
            className="bg-gradient-to-r inline from-[#40c9ff] to-[#e81cff] text-transparent bg-clip-text"
          >
            Learning
          </WordRotate>{" "}
          <br /> like never before
        </div>
        <p className="text-lg max-w-[500px] text-center text-muted-foreground">
          A+ is the ultimate AI tool that helps teachers create courses and
          students organise their resources
        </p>
        <div>
          <Link href="/dashboard">
            <Button size="lg">Try now | For Free</Button>
          </Link>
        </div>
        <p className="text-muted-foreground/90 mt-2">
          Join 200+ happy Academics
        </p>
        <AvatarCircles avatarUrls={avatarUrls} numPeople={200} />
      </div>
      <div className="w-40 h-20 bg-primary absolute -top-10 -left-14 filter blur-3xl rounded-full"></div>
      <div className="w-60 h-40 bg-primary absolute bottom-0 -right-20 filter blur-[80px] rounded-full"></div>
      <DotPattern />
    </div>
  );
};

export default Hero;
