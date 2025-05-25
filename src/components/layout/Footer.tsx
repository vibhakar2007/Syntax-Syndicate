import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pb-4 pt-8">
      <div className="container mx-auto grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        {/* Logo and Description */}
        <div>
          <h3 className="font-semibold mb-2">About TSS</h3>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo-transparent.png"
              alt="TSS Logo"
              width={70}
              height={70}
              className="object-contain border"
            />
            <p className="text-sm text-muted-foreground text-center md:text-left mt-2">
              The Syntax Syndicate - Building websites that sell, scale, and
              dominate. Creating innovative solutions to make a positive impact
              on society.
            </p>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul>
            <li className="text-muted-foreground hover:text-white">
              <Link href="/work">Work</Link>
            </li>
            <li className="text-muted-foreground hover:text-white">
              <Link href="/service">Services</Link>
            </li>
            <li className="text-muted-foreground hover:text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="text-muted-foreground hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Handles */}
        <div>
          <h3 className="font-semibold mb-2">Connect with us</h3>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white"
            >
              <InstagramIcon size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white"
            >
              <TwitterIcon size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white"
            >
              <GithubIcon size={24} />
            </a>
          </div>
        </div>

        {/* Happy customers */}
        <div>
          <h3 className="font-semibold mb-2">Total Happy Customers</h3>
          <div className="flex">
            {"99489".split("").map((num, i) => (
              <div key={i} className="size-9 grid place-items-center border">
                {num}
              </div>
            ))}
            <div className="size-9 grid place-items-center border">+</div>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <br />
      {/* Copyright */}
      <div className="text-center text-sm">
        &copy; 2025 The Syntax Syndicate. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
