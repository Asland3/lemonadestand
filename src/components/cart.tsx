"use client";

import React from "react";
import ShoppingCartIcon from "../../public/shoppingCartIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import useCart from "@/hooks/use-cart";

function Cart() {
  const cart = useCart();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <div className="relative">
            <ShoppingCartIcon className="w-6 h-6 hover:text-black dark:hover:text-white transition" />
            {cart.items.length > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-4 -translate-y-1/2 inline-block px-1 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                {cart.items.reduce((total, item) => total + item.quantity!, 0)}
              </span>
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
        </CardHeader>

        {cart.items.length > 0 ? (
          <>
            <CardContent className="p-0">
              <div className="flex flex-col">
                {cart.items.map((item) => (
                  <div
                    className="grid grid-cols-[60px_1fr_auto] gap-4 p-4 border-t first:rounded-t-xl justify-center items-center"
                    key={item.idDrink}
                  >
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <Image
                        alt="Image"
                        className="object-cover"
                        height="120"
                        src={item.strDrinkThumb!}
                        style={{
                          aspectRatio: "120/120",
                          objectFit: "cover",
                        }}
                        width="120"
                      />
                    </div>
                    <div className="grid items-start gap-1.5">
                      <h1 className="font-semibold text-base sm:text-xl md:text-base lg:text-xl xl:text-base">
                        {item.strDrink}
                      </h1>
                      <div className="flex items-center gap-2 text-sm font-medium dark:text-gray-400">
                        <div>Quantity</div>
                        <div className="font-normal">x{item.quantity}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium dark:text-gray-400">
                        <div>Price</div>
                        <div className="font-semibold">${item.strPrice}</div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => cart.removeItem(item.idDrink!)}
                      >
                        <TrashIcon className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col justify-center border-t pt-5">
              <p className="font-semibold mb-2">
                Subtotal: ${cart.totalPrice()}{" "}
              </p>

              <Button className="w-full">Checkout</Button>
            </CardFooter>
          </>
        ) : (
          <CardContent className="flex items-center justify-center p-4 text-gray-500 dark:text-gray-400 border-t">
            Your cart is empty
          </CardContent>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Cart;
