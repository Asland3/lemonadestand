import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="bg-gray-100 border-b border-gray-200 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl/none lg:text-6xl/none lg:leading-tight">
                Welcome to Acme Cocktails
              </h1>
              <p className="max-w-[600px] mt-6 text-base text-gray-500 md:text-xl dark:text-gray-400 lg:text-base/each lg:mt-4">
                We craft the finest cocktails for your enjoyment. Let us delight
                your taste buds.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <Link
                  className="inline-flex w-[200px] items-center justify-center rounded-md bg-gray-900 px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                  href="#"
                >
                  Explore the Menu
                </Link>
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
      <div className="grid gap-6 lg:grid-cols-2 xl:gap-12 bg-gray-100 py-12 px-4 dark:bg-gray-950 lg:px-6">
        <div className="flex flex-col justify-between space-y-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Margarita
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              The classic Margarita is a perfect balance of sweet, sour, and
              tequila.
            </p>
          </div>
          <div className="flex items-end space-x-4">
            <span className="text-2xl font-bold">$10.00</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Image"
            className="aspect-square object-cover rounded-xl"
            height="400"
            src="/placeholder.svg"
            width="400"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Image"
            className="aspect-square object-cover rounded-xl"
            height="400"
            src="/placeholder.svg"
            width="400"
          />
        </div>
        <div className="flex flex-col justify-between space-y-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Mojito
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              The Mojito is a refreshing cocktail made with rum, lime juice, and
              fresh mint.
            </p>
          </div>
          <div className="flex items-end space-x-4">
            <span className="text-2xl font-bold">$12.00</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
