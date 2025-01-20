import { auth } from "@/auth";
import React from "react";

const Middleware = async () => {
  const session = await auth();
  console.log(session);
  return (
    <section className="flex h-full flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">Middleware page</h1>
      <p className="text-lg">{session?.user?.name}</p>
      <p>Logged in using: {}</p>
    </section>
  );
};

export default Middleware;
