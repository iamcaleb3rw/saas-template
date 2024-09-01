import React from "react";
import { Button } from "./ui/button";
import { CheckCircle, X } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold tracking-tight text-center">Pricing</h1>
      <p className="text-sm text-center text-muted-foreground">
        Build on Index for free with your entire company. Upgrade for <br />
        unlimited dashboards, editors, connections and dedicated enterprise
        features.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border gap-2 p-8 mt-4">
        <div className="border rounded-xl flex flex-col gap-2 p-6 min-h-[300px]">
          <p className="text-sm">Starter</p>
          <h1 className="text-2xl font-bold tracking-tighter">Free</h1>
          <Link href="/sign-up">
            <Button variant="outline" className="mt-3 shadow-sm">
              Get Started for Free
            </Button>
          </Link>
          <div className="flex flex-col gap-[3px]">
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">
                up to 5 customizations
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <X className="text-red-600" size={15} />
              <p className="text-sm text-muted-foreground">Setup assistance</p>
            </div>
            <div className="flex gap-1 items-center">
              <X className="text-red-500" size={15} />
              <p className="text-sm text-muted-foreground">
                Unlimited components
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">
                Full design template
              </p>
            </div>
          </div>
        </div>
        <div className="relative border rounded-xl flex flex-col gap-2 p-6 min-h-[300px]">
          <div className="absolute -top-[1px] left-[50%] -translate-x-[50%] h-[2px] w-[100px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="flex justify-between">
            <p className="text-sm">Pro</p>
            <Badge>Popular</Badge>
          </div>
          <div className="text-2xl font-bold tracking-tighter">
            8.99$
            <span className="text-lg font-medium text-muted-foreground">
              /month
            </span>
          </div>
          <Link href="/sign-up">
            <Button className="mt-3 shadow-sm">Get Started with Pro</Button>
          </Link>
          <div className="flex flex-col gap-[3px]">
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">
                up to 5 customizations
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">Setup assistance</p>
            </div>
            <div className="flex gap-1 items-center">
              <X className="text-red-500" size={15} />
              <p className="text-sm text-muted-foreground">
                Unlimited components
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">
                Full design template
              </p>
            </div>
          </div>
        </div>
        <div className="border rounded-xl flex flex-col gap-2 p-6 min-h-[300px]">
          <div className="flex justify-between">
            <p className="text-sm">Premiere</p>
          </div>
          <div className="text-2xl font-bold tracking-tighter">
            19.99$
            <span className="text-lg font-medium text-muted-foreground">
              /month
            </span>
          </div>
          <Link href="/sign-up">
            <Button variant="secondary" className="mt-3 shadow-sm">
              Get Started with Premiere
            </Button>
          </Link>
          <div className="flex flex-col gap-[3px]">
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">
                up to 10 customizations
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">Setup assistance</p>
            </div>
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-500" size={15} />
              <p className="text-sm text-muted-foreground">
                Unlimited components
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">
                Full design template
              </p>
            </div>
          </div>
        </div>
        <div className="border rounded-xl flex flex-col gap-2 p-6 min-h-[300px] bg-black text-white">
          <div className="flex justify-between">
            <p className="text-sm">Enterprise</p>
          </div>
          <div className="text-2xl font-bold tracking-tighter">Custom</div>
          <Link href="/sign-up">
            <Button variant="secondary" className="mt-3 shadow-sm">
              Get Started with Enterprise
            </Button>
          </Link>

          <div className="flex flex-col gap-[3px]">
            <h1 className="text-sm">Everything on premiere plus:</h1>
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">Custom features</p>
            </div>
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">
                Ability to chose components
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-500" size={15} />
              <p className="text-sm text-muted-foreground">Admin dashboard</p>
            </div>
            <div className="flex gap-1 items-center">
              <CheckCircle className="text-green-600" size={15} />
              <p className="text-sm text-muted-foreground">Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
