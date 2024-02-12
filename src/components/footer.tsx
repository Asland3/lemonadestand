import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex items-center h-14 border-t w-full lg:h-20 px-6">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2023 Acme Cocktails. All rights reserved.
      </p>
      <div className="ml-auto flex items-center space-x-4">
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          <TwitterLogoIcon className="w-4 h-4 hover:text-black transition" />
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          <GitHubLogoIcon className="w-4 h-4 hover:text-black transition" />
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          <InstagramLogoIcon className="w-4 h-4 hover:text-black transition" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
