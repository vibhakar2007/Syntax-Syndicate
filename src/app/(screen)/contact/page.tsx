import React from "react";
import ContactForm from "@/components/form/ContactForm";

export default function Contact() {
  return (
    <div className="container grid grid-cols-2 max-md:grid-cols-1 h-extended gap-10 mx-auto mt-20">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <h1 className="lg:text-5xl text-3xl text-center font-bold leading-normal">
          Get in Touch
        </h1>
        <p>
          We are here to help you with your project. Fill out the form below and
          we will get back to you as soon as possible.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <ContactForm />
      </div>
    </div>
  );
}
