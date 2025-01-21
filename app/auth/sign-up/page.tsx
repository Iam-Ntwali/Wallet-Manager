import { SignUpForm } from "@/components/Auth/SignUpForm";

const SignUp = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-500 min-h-screen">
      <div className="w-[400px] bg-gray-900 p-4 shadow-md flex flex-col items-center rounded-lg gap-4">
        <h1 className="text-3xl w-full text-center font-bold mb-3">
          Create Account
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-3">
          Join Wallet Manager App today.
        </p>

        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
