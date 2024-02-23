import Link from "next/link";
import React from "react";

import Cart from "./cart";
import ThemeDropdown from "./theme-dropdown";

function Header() {
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
      <div className="ml-auto flex items-center space-x-4">
        <ThemeDropdown />
        <Cart />
      </div>
    </header>
  );
}

export default Header;
