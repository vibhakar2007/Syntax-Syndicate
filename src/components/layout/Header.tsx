"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scroll ? "backdrop-blur-xl bg-black/50" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto grid place-items-center grid-cols-2 md:grid-cols-3 py-2">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <li className="hover:scale-110 transition-transform duration-200">
              <Link href={"/#work"}>Work</Link>
            </li>
            <li className="hover:scale-110 transition-transform duration-200">
              <Link href={"/#services"}>Services</Link>
            </li>
            <li className="hover:scale-110 transition-transform duration-200">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block text-right">
          <Button variant="outline" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-right">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu - moved outside nav */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md text-white flex flex-col h-screen transition-all duration-300 ${
            scroll ? "backdrop-blur-3xl bg-black/80" : "bg-transparent"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white">
            <Link href={"/#home"} onClick={() => setIsOpen(false)}>
              <Image
                src="/assets/logo-transparent.png"
                alt="TSS logo"
                height={500}
                width={500}
                priority
                className="size-20 object-cover hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center items-center gap-6 text-xl font-semibold">
            <Link
              href="/#work"
              onClick={() => setIsOpen(false)}
              className="hover:scale-110 transition-transform duration-200"
            >
              Work
            </Link>
            <Link
              href="/#services"
              onClick={() => setIsOpen(false)}
              className="hover:scale-110 transition-transform duration-200"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:scale-110 transition-transform duration-200"
            >
              About
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center p-4 text-sm text-gray-400">
            &lt; Syntax Syndicate &gt;
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
