import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="my-2 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-xl">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for does not exist.
        </p>
      </div>
      <div className="my-2 hidden md:block text-right">
        <Button variant="default" asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
