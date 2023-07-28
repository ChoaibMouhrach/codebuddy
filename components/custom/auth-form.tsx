"use client";

import { FaGoogle, FaGithubAlt } from "react-icons/fa"
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form"
import {
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Link from "next/link";

const schema = z.object({
  email: z.string().email()
});

type TData = z.infer<typeof schema>;

interface AuthFormProps {
  formType: "sign-in" | "sign-up";
}

export default function AuthForm({ formType }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: TData) => {
    setIsLoading(true);
    console.log(data)
    setIsLoading(false);
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <CardContent className="flex flex-col gap-6" >
          <div className="grid grid-cols-2 gap-4" >
            <Button variant="outline" > <FaGithubAlt className="mr-2" /> Github</Button>
            <Button variant="outline" > <FaGoogle className="mr-2" /> Google</Button>
          </div>
          <div className="flex items-center gap-4 " >
            <Separator className="shrink flex-1" />
            <p className="text-muted-foreground" >OR SIGN IN WITH</p>
            <Separator className="shrink flex-1" />
          </div>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input  {...field} placeholder="example@example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-6" >
          <Button className="w-full" isLoading={isLoading} >Sign In</Button>
          {
            formType === "sign-in" ? (
              <p className="text-muted-foreground text-center" >
                Don't have an account ? <Link href="/sign-up" className="text-white" >Sign Up</Link>
              </p>
            ) : (
              <p className="text-muted-foreground text-center" >
                Alreadt have an account ? <Link href="/sign-in" className="text-white" >Sign In</Link>
              </p>
            )
          }
        </CardFooter>
      </form>
    </Form>
  )
}
