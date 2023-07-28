import AuthForm from "@/components/custom/auth-form"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page() {
  return (
    <Card className="w-full max-w-md" >
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Enter you email address to sign up</CardDescription>
      </CardHeader>
      <AuthForm formType="sign-up" />
    </Card >
  )
}
