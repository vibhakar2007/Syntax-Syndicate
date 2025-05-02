import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="grid grid-rows-2 grid-cols-1 gap-4">
      <section className="max-w flex grow flex-col md:flex-row gap-4">
        <section className="flex-1 order-2 md:order-1">
          <div>
            <Image
              src="/assets/logo.png"
              alt="This is sytanx syndicate logo"
              height={500}
              width={500}
              className="m-auto object-cover size-80"
            />
          </div>
          <div>
            <h1 className="text-center text-4xl md:text-6xl font-semibold">
              The Syntax Syndicate
            </h1>
            <div className="block md:hidden mx-8">
              <div className="my-1 font-semibold text-xl md:text-3xl text-center">
                thesyntaxsyndicate@gmail.com
              </div>
              <div className="my-1 font-semibold text-xl md:text-3xl text-center">
                +91-89460-59859
              </div>
            </div>
          </div>
        </section>
        <section className="flex-1 flex justify-center order-1 md:order-2">
          <div className="max-h-[600px] max-w-[480px] border rounded-lg shadow-[2px_2px_11.9px_0px_#FFFFFF61] shadow-[-2px_-2px_5.5px_0px_#00000038] bg-[#171717]">
            <form className="mx-4 my-4 min-w-[280px] flex flex-col items-center gap-4">
              <div>
                <label className="my-2 block font-semibold">Your Name</label>
                <input
                  type="text"
                  className="h-[36px] rounded shadow-[2px_2px_3.5px_0px_#FDFDFD45] bg-[#0A0A0A] outline-1 focus:outline-offset focus:outline-white placeholder:text-sm"
                  placeholder="Type your name here..."
                />
              </div>
              <div>
                <label className="my-2 block font-semibold">Your Email</label>
                <input
                  type="email"
                  className="h-[36px] rounded shadow-[2px_2px_3.5px_0px_#FDFDFD45] bg-[#0A0A0A] outline-1 focus:outline-offset focus:outline-white placeholder:text-sm"
                  placeholder="Type your email here..."
                />
              </div>
              <div>
                <label className="my-2 block font-semibold">Your Message</label>
                <textarea
                  className="rounded shadow-[2px_2px_3.5px_0px_#FDFDFD45] bg-[#0A0A0A] outline-1 focus:outline-offset focus:outline-white placeholder:text-sm"
                  placeholder="Type your message here..."
                />
              </div>
              <Button
                color="gray"
                size={"default"}
                variant={"default"}
                className="max-w-[100px] bg-white text-black"
              >
                Send
              </Button>
            </form>
          </div>
        </section>
      </section>
      <section className="flex">
        <div className="flex grow flex-col lg:flex-row justify-between items-center max-w-[1200px] m-auto">
          <div className="hidden md:block mx-8">
            <div className="my-1 font-semibold text-xl md:text-3xl text-center">
              thesyntaxsyndicate@gmail.com
            </div>
            <div className="my-1 font-semibold text-xl md:text-3xl text-center">
              +91-89460-59859
            </div>
          </div>
          <div className="mx-8">
            <Image
              src="/assets/logo.png"
              alt="This is sytanx syndicate logo"
              height={500}
              width={500}
              className="object-cover size-15"
            />
          </div>
          <div className="flex flex-row justify-around gap-2 w-full mx-8">
            <div>
              <Image
                src="/assets/instagram.png"
                alt="This is sytanx syndicate instagram"
                height={500}
                width={500}
                className="object-cover size-10"
              />
            </div>
            <div>
              <Image
                src="/assets/facebook.png"
                alt="This is sytanx syndicate instagram"
                height={500}
                width={500}
                className="object-cover size-10"
              />
            </div>
            <div>
              <Image
                src="/assets/x.png"
                alt="This is sytanx syndicate instagram"
                height={500}
                width={500}
                className="object-cover size-10"
              />
            </div>
            <div>
              <Image
                src="/assets/linkedln.png"
                alt="This is sytanx syndicate instagram"
                height={500}
                width={500}
                className="object-cover size-10"
              />
            </div>
            <div>
              <Image
                src="/assets/whatsapp.png"
                alt="This is sytanx syndicate instagram"
                height={500}
                width={500}
                className="object-cover size-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
