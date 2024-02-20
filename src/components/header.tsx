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
import { MoonIcon, SunIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import useCart from "@/hooks/use-cart";

function Header() {
  const { setTheme } = useTheme();

  const cart = useCart();

  return (
    <header className="sticky top-0 z-50 flex items-center h-14 border-b w-full lg:h-20 px-6 bg-white dark:bg-gray-900">
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
              <div className="relative">
                <ShoppingCartIcon className="w-6 h-6 hover:text-black dark:hover:text-white transition" />
                {cart.items.length > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-4 -translate-y-1/2 inline-block px-1 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                    {cart.items.reduce(
                      (total, item) => total + item.quantity!,
                      0
                    )}
                  </span>
                )}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <CardHeader>
              <CardTitle className="text-lg text-center">Your cart</CardTitle>
            </CardHeader>

            {cart.items.map((item) => (
              <CardContent className="w-[300px]" key={item.idDrink}>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    {item.strDrink}
                  </p>
                  <div className="flex flex-row justify-between">
                    <div className="overflow-hidden rounded-xl shadow-lg w-full lg:w-auto">
                      <Image
                        alt="Image"
                        className="object-cover"
                        height="70"
                        src={item.strDrinkThumb!}
                        width="70"
                      />
                    </div>

                    <div className="flex items-center ml-3">
                      <p className="mr-5">{item.quantity} x</p>
                      <p className="font-bold">{item.strPrice} $</p>
                      <div className="ml-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => cart.removeItem(item.idDrink!)}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            ))}

            <CardFooter className="flex flex-col justify-center">
              <p className="font-bold mb-2">Total: {cart.totalPrice()} $</p>

              <Button className="w-full">Go to Cart</Button>
            </CardFooter>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Header;
