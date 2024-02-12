"use client";

import Link from "next/link";
import React from "react";
import ShoppingCartIcon from "../../public/shoppingCartIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="flex items-center h-14 border-b w-full lg:h-20 px-6">
      <nav className="hidden space-x-4 lg:flex">
        <Link className="font-semibold" href="#">
          Home
        </Link>
        <Link href="#">Menu</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Contact</Link>
      </nav>
      <div className="ml-auto flex items-center space-x-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          <ShoppingCartIcon className="w-6 h-6 hover:text-black dark:hover:text-white transition" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
