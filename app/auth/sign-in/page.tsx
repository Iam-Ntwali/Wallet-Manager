import React from "react";
// import { LoginWithGoogle } from "@/components/Auth/LoginWithGoogle";
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

        {/* <div className="relative w-full my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-900 text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <LoginWithGoogle /> */}

        <small className="text-xs text-gray-100 text-center mt-3">
          By Signing, you agree with our <br />
          <a
            href="/privacy"
            className="underline-offset-2 font-bold underline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            privacy policy
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="underline-offset-2 font-bold underline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            terms of service
          </a>
          .
        </small>
      </div>
    </div>
  );
};
export default SignIn;
