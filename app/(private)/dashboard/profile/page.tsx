"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useForm } from "react-hook-form"


export default function Profile() {

  const form = useForm()

  const onSubmit = () => {

  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>You can update your profile from here.</CardDescription>
        </CardHeader>
        <Separator />
        <Form {...form} >
          <form onClick={form.handleSubmit(onSubmit)} >
            <CardContent className="py-4 flex flex-col gap-4" >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                    <FormDescription>
                      Your full name will be displayed on your public profile.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="example@example.com" />
                    </FormControl>
                    <FormDescription>
                      Your email address will be displayed on your public profile.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="picture"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Profile Picture
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="file" />
                    </FormControl>
                    <FormDescription>
                      Your profile picture will be displayed on your public profile.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </CardContent>
            <Separator />
            <CardFooter className="pt-4" >
              <Button>
                Update Profile
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Delete Account</CardTitle>
          <CardDescription>You can delete your account from here.</CardDescription>
        </CardHeader>
        <Separator />
        <CardFooter className="pt-4" >
          <Button variant="danger" >
            Delete Account
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
