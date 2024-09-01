import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative border p-6 flex items-center justify-center overflow-hidden">
      <SignUp />
      <div className="w-40 h-20 bg-primary absolute -top-10 -left-14 filter blur-3xl rounded-full"></div>
      <div className="w-60 h-40 bg-primary absolute -top-10 -right-20 filter blur-[80px] rounded-full"></div>
    </div>
  );
}
