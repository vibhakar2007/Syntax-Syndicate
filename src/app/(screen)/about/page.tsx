import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"
import Image from "next/image"

const About = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-6rem)] max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10">
      {/* Mobile logo */}
      <div className="flex justify-center mb-4 md:hidden">
        <Image
          src="/assets/logo-transparent.png"
          alt="TSS logo"
          width={120}
          height={120}
          className="object-contain h-28 w-28"
          priority
        />
      </div>

      {/* Main content container */}
      <div className="flex-1 w-full flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6">
        {/* Text content */}
        <div className="md:w-1/2 lg:w-[55%] xl:w-1/2 text-center md:text-left">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-snug md:leading-normal lg:leading-relaxed">
            At Syntax Syndicate, we build websites that don&apos;t just sit
            pretty — they sell, they scale, and they dominate. In a crowded
            digital world, average doesn&apos;t cut it. You need a site that
            turns heads, drives traffic, and makes your competition rethink
            everything. Whether you&apos;re starting from scratch or leveling up
            an existing brand, we bring unmatched skill, creativity, and
            strategy to the table — so you don&apos;t just exist online; you own
            it.
          </p>
        </div>

        {/* Desktop logo */}
        <div className="hidden md:flex md:w-1/2 lg:w-[45%] xl:w-1/2 items-center justify-center">
          <Image
            src="/assets/logo-transparent.png"
            alt="TSS logo"
            width={400}
            height={400}
            className="object-contain h-[30vh] md:h-[35vh] lg:h-[40vh] w-auto"
            priority
          />
        </div>
      </div>

      {/* Buttons container */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8 lg:mt-10">
        <Button
          asChild
          variant="default"
          className="text-xs md:text-sm lg:text-base px-4 md:px-6"
        >
          <Link href="/#work">Learn more &gt;</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-xs md:text-sm lg:text-base px-4 md:px-6"
        >
          <Link href="/contact">Hire Us</Link>
        </Button>
      </div>
    </div>
  )
}

export default About
