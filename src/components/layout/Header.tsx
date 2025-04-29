"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 bg-transparent ${scroll && "backdrop-blur-xl"}`}
    >
      <nav className="container mx-auto grid place-items-center grid-cols-3">
        <div className="font-bold">
          <Link href={"/#home"}>
            <Image
              src="/assets/logo.png"
              alt="TSS logo"
              height={500}
              width={500}
              priority
              className="size-20 object-cover hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>
        <div className="menu">
          <ul className="flex gap-4">
            <li>
              <Link
                href={"/#work"}
                className="hover:text-complement cursor-pointer"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href={"/#services"}
                className="hover:text-complement cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/#about"}
                className="hover:text-complement cursor-pointer"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Button variant={"outline"} asChild>
            <Link href={"/contact"}>Contact</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
