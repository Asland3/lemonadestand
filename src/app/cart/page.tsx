"use client";

import React from "react";
import {
  CardTitle,
  CardContent,
  CardFooter,
  Card,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import useCart from "@/hooks/use-cart";
import Link from "next/link";

function Cart() {
  const cart = useCart();

  return (
    <main className=" flex-1 flex flex-col md:flex-row gap-4 p-4 md:gap-8 md:p-6 lg:gap-1">
      <div className="flex-1 grid gap-4 ">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-lg md:text-xl">Your Items</h1>
        </div>
        <div className="grid gap-4">
          {cart.items.map((item) => (
            <div className="flex items-center gap-4" key={item.idDrink}>
              <Image
                alt="Thumbnail"
                className="rounded-lg aspect-square object-cover border"
                height="100"
                src={item.strDrinkThumb!}
                width="100"
              />
              <div className="grid gap-1 text-sm">
                <h2 className="font-semibold">{item.strDrink}</h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 dark:text-gray-400">
                    <span>Quantity x</span>
                    <span className="font-semibold">{item.quantity}</span>
                  </div>
                  <div className="ml-auto font-semibold dark:text-gray-400">
                    ${item.strPrice}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => cart.removeItem(item.idDrink!)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Card className="p-4 ">
          {cart.items.length > 0 ? (
            <>
              <CardTitle className="font-semibold text-lg md:text-xl mb-3">
                Cart Summary
              </CardTitle>

              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>Subtotal</div>
                  <div className="font-semibold">
                    ${cart.subTotal().toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Shipping</div>
                  <div className="font-semibold">
                    ${cart.shippingCost().toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Tax</div>
                  <div className="font-semibold">${cart.tax().toFixed(2)}</div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <div>Total</div>
                  <div className="font-semibold">
                    ${cart.totalPrice().toFixed(2)}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant={"outline"}>
                  <Link href="/">Continue Shopping</Link>
                </Button>
                <Button asChild size={"lg"} className="w-64">
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </CardFooter>
            </>
          ) : (
            <CardHeader className="flex items-center justify-center p-4 text-gray-500 dark:text-gray-400 font-bold">
              <h1>Your cart is empty</h1>
            </CardHeader>
          )}
        </Card>
      </div>
    </main>
  );
}

export default Cart;
