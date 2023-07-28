import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AuthForm from "@/components/custom/auth/auth-form";

export default function Page() {
  return (
    <Card className="w-full max-w-md"  >
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your email address to sign in</CardDescription>
      </CardHeader>
      <AuthForm formType="sign-in" />
    </Card >
  )
}
