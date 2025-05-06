"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import sendMail from "@/lib/actions/sendMail";
import { Loader2, Send } from "lucide-react";
import { genHTMLForContactUsMail } from "@/lib/utils/mail/generate.mail";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isPending, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      const mail = await sendMail({
        subject: "Contact Us | SyntaxSyndicate",
        html: genHTMLForContactUsMail(data),
      });

      if (!mail) {
        console.error("Error sending email, Please try again later");
        return;
      }

      console.log("Email Sent, We will reach out to you soon");
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="e.g., john@doe.tld"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  cols={8}
                  rows={10}
                  className=""
                  placeholder="e.g., We need expertise of SyntaxSyndicate to develop us the best website out there."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          type="submit"
          className="flex justify-center items-center gap-2"
        >
          Submit {isPending ? <Loader2 className="animate-spin" /> : <Send />}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
