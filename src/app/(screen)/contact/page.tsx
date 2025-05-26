import React from "react";
import ContactForm from "@/components/form/ContactForm";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="container grid grid-cols-2 max-md:grid-cols-1 gap-4 min-h-extended mx-auto mt-12">
      {/* Contact form */}
      <div className="border rounded-xl p-4">
        <div>
          <h1 className="lg:text-2xl text-xl font-semibold">Get in touch</h1>
          <p className="text-muted-foreground text-sm">
            Reach us for any query or feedback.
          </p>
        </div>
        <div className="flex flex-wrap justify-center my-4 gap-4">
          <ContactForm />
        </div>
      </div>
      <div className="space-y-4">
        {/* Contact Info */}
        <div className="border rounded-xl p-4">
          <h1 className="lg:text-2xl text-xl font-semibold">
            Contact Information
          </h1>
          <div className="gap-4 space-y-3 mt-4">
            <div className="flex items-center gap-2">
              <Mail className="text-muted-foreground" />{" "}
              <p>thesyntaxsyndicate@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-muted-foreground" />{" "}
              <p>Available upon Request</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-muted-foreground" /> <p>India</p>
            </div>
          </div>
        </div>
        {/* Social Handles */}
        <div className="border rounded-xl p-4">
          <div>
            <h1 className="lg:text-2xl text-xl font-semibold">
              Connect with us
            </h1>
            <p className="text-muted-foreground text-sm">
              Reach us for any query or feedback.
            </p>
          </div>
          <div className="flex flex-wrap my-4 gap-4">
            <Button variant="outline">
              <Github /> <p>Github</p>
            </Button>
            <Button variant="outline">
              <Linkedin /> <p>Linkedin</p>
            </Button>
            <Button variant="outline">
              <Instagram /> <p>Instagram</p>
            </Button>
            <Button variant="outline">
              <Twitter /> <p>Twitter</p>
            </Button>
          </div>
        </div>
        {/* Availability and Accessibility */}
        <div className="border rounded-xl p-4">
          <div className="mb-4">
            <h1 className="lg:text-2xl text-xl font-semibold">
              Availability Hours
            </h1>
            <p className="text-muted-foreground text-sm">
              Know when we are available to assist you.
            </p>
          </div>
          <div className="space-y-1">
            <div className="grid grid-cols-2">
              <p>Monday - Saturday</p>
              <p>5:00 PM - 8:00 PM (IST)</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Sunday</p>
              <p>9:00 AM - 6:00 PM (IST)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
