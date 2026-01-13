"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <button onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </main>
  );
}

