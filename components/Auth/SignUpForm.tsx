"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { register } from "@/actions/authActions";

export const SignUpForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await register(
        formData.email,
        formData.password,
        formData.name
      );

      if (result.error) {
        toast({
          variant: "destructive",
          title: "Registration failed",
          description: result.error,
        });
      } else {
        toast({
          title: "Account created!",
          description: "Please sign in with your new account",
        });
        router.push("/auth/sign-in");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create account",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-200">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-3 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-100"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-3 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-100"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-200"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="w-full px-3 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-100"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </section>
  );
};
