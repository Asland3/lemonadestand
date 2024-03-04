import Link from "next/link";
import React from "react";

import ThemeDropdown from "./theme-dropdown";
import CartDropdown from "./cart-dropdown";
import { CocktailLogo } from "../../public/cocktail";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-14 border-b w-full lg:h-20 px-6 bg-white dark:bg-gray-900">
      <nav className="hidden space-x-4 lg:flex">
        <Link href="/">
          <CocktailLogo className="w-6 h-6" />
        </Link>
        <Link className="font-semibold whitespace-nowrap" href="/">
          Cocktail Shop
        </Link>
      </nav>
      <div className="hidden lg:flex justify-center w-full"></div>
      <div className="ml-auto flex items-center space-x-4">
        <Button asChild size={"sm"} variant={"link"}>
          <Link href={"/dashboard"}>Secret admin dashboard</Link>
        </Button>
        <ThemeDropdown />
        <CartDropdown />
      </div>
    </header>
  );
}

export default Header;
