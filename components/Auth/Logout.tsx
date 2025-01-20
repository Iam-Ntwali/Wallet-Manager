"use client";

import { logout } from "@/actions/authActions";

export const Logout = () => {
  return (
    <button
      onClick={() => logout()}
      className="text-white hover:cursor-pointer bg-black text-base text-normal px-4 py-2 rounded-md"
    >
      Logout
    </button>
  );
};
