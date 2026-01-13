import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decision Engine | nawafo.shop",
  description: "Intelligent decision systems — coming soon.",
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-2xl px-6 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Decision Engine
        </h1>

        <p className="text-lg md:text-xl text-white/80">
          Intelligent decision systems for strategic clarity and execution.
        </p>

        <div className="pt-4">
          <span className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-white/60">
            Launching soon — nawafo.shop
          </span>
        </div>
      </div>
    </main>
  );
}

