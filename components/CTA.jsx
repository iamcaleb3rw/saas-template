import React from "react";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <div className="h-[40vh] flex p-6 justify-between items-center">
      <h1 className="text-4xl tracking-tighter font-semibold text-zinc-700 max-w-[450px]">
        This template could be yours by this second
      </h1>
      <div className="flex gap-2">
        <Button className="bg-zinc-700">Chat with the designer</Button>
        <Button variant="outline">Hop on a call</Button>
      </div>
    </div>
  );
};

export default Cta;
