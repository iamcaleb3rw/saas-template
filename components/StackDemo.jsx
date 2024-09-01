"use client";

import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";
export function CardStackDemo() {
  return (
    <div className="min-h-[15rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Kanye West",
    designation: "Artist, Fashion Designer",
    content: (
      <p>
        The only thing better than <Highlight>Graduation</Highlight> are these
        templates, <Highlight>I want to use them</Highlight> for my Yeezy store
        ASAP. Tap in with Caleb🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Entrepreneur",
    content: (
      <p>
        I dont like the SpaceX Landing page,{" "}
        <Highlight>Might as well fire my designers</Highlight> because yolo.
        Instead, I would<Highlight>like to use</Highlight> this template since
        it has a Mars look.
      </p>
    ),
  },
  {
    id: 2,
    name: "Mark Zuckerberg",
    designation: "CEO at Meta",
    content: (
      <p>
        Honestly, I thought about
        <Highlight>Stealing this design</Highlight>like I often do with
        Snapchat, but damn, these are
        <Highlight>too good to rip off</Highlight>. I am buying this as we
        speak.
      </p>
    ),
  },
];
