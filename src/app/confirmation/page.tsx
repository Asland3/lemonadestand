import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Confirmation() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center pt-28">
      <h1 className="text-3xl font-bold tracking-tight">
        Thank you for your purchase!
      </h1>
      <p className="text-base text-gray-500">Hope you enjoy your cocktails!</p>
      <Button asChild size={"lg"}>
        <Link href="/">Home</Link>
      </Button>
      <Image
        alt="Image"
        className="pt-10"
        height="337"
        src="/celebration.svg"
        width="600"
      />
    </div>
  );
}

export default Confirmation;
