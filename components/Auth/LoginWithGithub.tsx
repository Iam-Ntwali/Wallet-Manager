"use client";
import { loginByProvider } from "@/actions/authActions";
import React from "react";
import { FaGithub } from "react-icons/fa";

export const LoginWithGithub = () => {
  return (
    <div
      onClick={() => loginByProvider("github")}
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 hover:cursor-pointer"
    >
      <FaGithub className="text-white mr-2" size={20} />
      <p className="text-white text-sm font-normal">Login with Github</p>
    </div>
  );
};
