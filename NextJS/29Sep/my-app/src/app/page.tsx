"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({ // Define the shape of the form data.
  email: z.string().email(),  // Email validation
  password: z.string().min(6),// Password validation
});

export default function Home() { // Functional component Home that renders the login form.
  const form = useForm<z.infer<typeof formSchema>>({ // Define the form using the useForm hook.
    resolver: zodResolver(formSchema), // Use the zodResolver to validate the form data.
    defaultValues: { // Set the default values for the form.
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => { // Define the onSubmit function.
    try {
      // API call to login
      await fetch("/api/login", { // Send a POST request to the login API endpoint.
        method: "POST",
        body: JSON.stringify(data),
        cache: "no-store",
      });
    } catch (err) {
      console.log("🚀 ~ onSubmit ~ err:", err);
    }
  };

  return (
    <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="border p-5 min-w-96 bg-slate-50 rounded-md">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-center">
          Login
        </h1>
        <Form {...form}> {/* Render the form. */}
          <form
            onSubmit={form.handleSubmit(onSubmit)} // Handle form submission.
            className="flex gap-5 w-full flex-col py-5" 
          >
            <FormField // Render the form fields.
              name="email"
              control={form.control} // Pass the form control to the FormField.
              render={({ field }) => ( // Render the form field.
                <FormItem> 
                  <FormLabel>Email</FormLabel>  {/* Label for the form field. */}
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      className="w-full"
                      {...field}  //Pass the form field to the Input component. 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control} // Pass the form control to the FormField.
              render={({ field }) => ( // Render the form field.
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      type="password"
                      className="w-full"
                      {...field} // Pass the form field to the Input component.
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link
              href={"/register"}
              className="text-blue-500 text-sm text-right"
            >
              Don&apos;t have account? Register here..
            </Link>
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}