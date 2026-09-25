"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeDisplay() {
 const {theme, setTheme } = useTheme();

  return (
    <>
      <div>
        <p
          className={`${
            theme === "light"
              ? "bg-white text-black"
              : "bg-black text-white"
          } font-semibold mt-5`}
        >
          Current theme: {theme}
        </p>
        <button
          className="w-fit px-2 py-1 bg-amber-300 rounded-xl text-center"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          Change theme
        </button>
      </div>
    </>
  );
}
