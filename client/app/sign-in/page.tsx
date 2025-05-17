import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn afterSignInUrl="/complete-profile" afterSignUpUrl="/complete-profile" />
  );
}