import { SignIn, SignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8">
        <div className="flex justify-center mb-8">
          <img 
            src="/src/assets/mastersolis-logo.png" 
            alt="Mastersolis Logo" 
            className="h-12"
          />
        </div>
        
        <div className="flex gap-2 mb-6 justify-center">
          <Button
            variant={isSignIn ? "default" : "outline"}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </Button>
          <Button
            variant={!isSignIn ? "default" : "outline"}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </Button>
        </div>

        <div className="flex justify-center">
          {isSignIn ? (
            <SignIn routing="hash" signUpUrl="#" />
          ) : (
            <SignUp routing="hash" signInUrl="#" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
