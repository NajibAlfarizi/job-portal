import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp afterSignInUrl="/complete-profile" afterSignUpUrl="/complete-profile" />
  );
}