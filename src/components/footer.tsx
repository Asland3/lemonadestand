import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex items-center h-14 border-t w-full lg:h-20 px-6 dark:bg-gray-900 ">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2024 Malthe Cocktails. All rights reserved.
      </p>
      <div className="ml-auto flex items-center space-x-4">
        <Link
          className="text-gray-500 dark:text-gray-400"
          href="https://discord.com/"
          target="_blank"
        >
          <DiscordLogoIcon className="w-4 h-4 hover:text-black dark:hover:text-white transition" />
        </Link>
        <Link
          className="text-gray-500 dark:text-gray-400"
          href="https://github.com/Asland3"
          target="_blank"
        >
          <GitHubLogoIcon className="w-4 h-4 hover:text-black dark:hover:text-white transition" />
        </Link>
        <Link
          className="text-gray-500 dark:text-gray-400"
          href="https://www.linkedin.com/in/malthe-thomsen/"
          target="_blank"
        >
          <LinkedInLogoIcon className="w-4 h-4 hover:text-black dark:hover:text-white transition" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
