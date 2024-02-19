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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="flex items-center h-14 border-b w-full lg:h-20 px-6 dark:bg-gray-900">
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
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <ShoppingCartIcon className="w-6 h-6 hover:text-black dark:hover:text-white transition" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    Margarita
                  </p>
                  <div className="flex flex-row">
                    <div className="overflow-hidden rounded-xl shadow-lg w-full lg:w-auto">
                      <Image
                        alt="Image"
                        className="object-cover"
                        height="70"
                        src="/strawberry.jpg"
                        width="70"
                      />
                    </div>

                    <div className="flex flex-col items-center justify-center ml-3">
                      <p className="font-bold">$10.00</p>
                      <div className=" mt-2">
                        <button>-</button>
                        <span className="mx-2">1</span>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col justify-center">
                <p className="font-bold mb-2">Total: $10.00</p>

                <Button>Go to Cart</Button>
              </CardFooter>
            </Card>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Header;
