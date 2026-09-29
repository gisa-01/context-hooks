"use client";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-white p-8 text-gray-900 dark:bg-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold">Welcome to My Page</h1>

        <p className="mt-4 text-gray-700 dark:text-gray-300">
          This is a simple page where we will learn how to implement dark mode
          using Tailwind CSS.
        </p>

        <div className="mt-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
          <h2 className="text-xl font-semibold">About This Page</h2>

          <p className="mt-2 text-gray-700 dark:text-gray-300">
            The content is static, but the appearance will change between light
            and dark mode.
          </p>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="mt-5 rounded bg-blue-500 px-4 py-2 text-white"
        >
          {isDark ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
    </main>
  );
}
