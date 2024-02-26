"use client";

import { CocktailsModel } from "@/cocktailsmodel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import cocktailsData from "@/lib/cocktials.json";
import useCart from "@/hooks/use-cart";

export default function Home() {
  const [cocktails, setCocktails] = useState<CocktailsModel[]>([]);

  useEffect(() => {
    setCocktails(cocktailsData.cocktailsData);
    console.log(cocktailsData.cocktailsData);
  }, []);

  const cart = useCart();

  const onAddtoCart = (cocktail: CocktailsModel) => {
    cart.addItem(cocktail);
  };

  return (
    <main className="flex-1">
      <div className="bg-gray-100 border-b border-gray-200 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl/none lg:text-6xl/none lg:leading-tight">
                Welcome to Malthes Cocktails
              </h1>

              <p className="max-w-[600px] mt-6 text-base text-gray-500 md:text-xl dark:text-gray-400 lg:text-base/each lg:mt-4">
                We craft the finest cocktails for your enjoyment. Let us delight
                your taste buds.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <Button
                  className="inline-flex w-[200px] items-center justify-center rounded-md bg-gray-900 px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("cocktails")!
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore the Menu
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg w-full lg:w-auto">
              <Image
                alt="Image"
                className="object-cover "
                height="337"
                src="/drinkingCocktail.jpg"
                width="600"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-gray-100 py-12 dark:bg-gray-950 lg:px-6">
        <div id="cocktails" className="grid grid-cols-1 md:grid-cols-3 gap-32 ">
          {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink} className="flex flex-col gap-5">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  {cocktail.strDrink}
                </h2>
                <p className="text-gray-500 dark:text-gray-400"></p>
              </div>

              <div className="">
                <Image
                  alt="Image"
                  className="aspect-square object-cover rounded-xl"
                  height="400"
                  src={cocktail.strDrinkThumb!}
                  width="400"
                />
              </div>

              <div className="flex items-end space-x-4">
                <span className="text-2xl font-bold">${cocktail.strPrice}</span>
                <Button size="sm" onClick={() => onAddtoCart(cocktail)}>
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
