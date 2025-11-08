"use client";

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image"; // Import the Image component
import Link from "next/link"; // Import the Link component

export const Nav = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={
        "fixed top-0 right-0 px-4 py-2 flex items-center justify-between w-full h-14 z-50"
      }
    >
      {/* Link to homepage with your logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/soul-yatri-logo.png" // Path to your logo in /public
          alt="Soul Yatri Logo"
          width={28} // Set the display width
          height={28} // Set the display height
          className="size-7" // You can adjust sizing here
        />
        <span className="font-medium">Soul Yatri</span>
      </Link>

      {/* Theme toggle button */}
      <div className={"flex items-center gap-1"}>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5 rounded-full"}
        >
          <span>
            {theme === "dark" ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
