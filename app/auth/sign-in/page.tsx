import React from "react";
import { SignInForm } from "@/components/Auth/SignInForm";

const SignIn = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-500 min-h-screen">
      <div className="w-[400px] bg-gray-900 p-4 shadow-md flex flex-col items-center rounded-lg gap-4">
        <h1 className="text-3xl w-full text-center font-bold mb-3">Sign In</h1>
        <p className="text-base md:text-lg text-gray-300 mb-3">
          Welcome to Wallet Manager App.
        </p>

        <SignInForm />

        <small className="text-xs text-gray-100 text-center mt-3">
          By Signing, you agree with our <br />
          <a
            href="/privacy"
            className="underline-offset-2 font-bold underline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Terms of service
          </a>
          .
        </small>
      </div>
    </div>
  );
};
export default SignIn;
