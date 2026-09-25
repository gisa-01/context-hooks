"use client";

import Counter from "@/components/Counter";
import ThemeDisplay from "@/components/ThemeDisplay";
import UserDisplay from "@/components/UserDisplay";
import { ThemeProvider } from "@/context/ThemeContext";
import UserProvider from "@/context/UserContext";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-blue-500 text-center mb-10">
          The counter App
        </h1>
        <Counter />
        <ThemeProvider>
          <ThemeDisplay />
        </ThemeProvider>
        <UserProvider>
          <UserDisplay />
        </UserProvider>
      </div>
    </>
  );
}
