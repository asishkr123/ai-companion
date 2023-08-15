"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import MobileSidebar from "@/components/MobileSidebar";

const fonts = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href={"/"}>
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              fonts.className
            )}
          >
            Companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant={"premium"} size="sm">
          Upgrade <Sparkles className="h-4 w-4 fill-white text-white" />
        </Button>
        <ModeToggle />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  );
};

export default Navbar;
