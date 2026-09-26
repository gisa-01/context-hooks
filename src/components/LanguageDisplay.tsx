"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageDisplay() {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <p>Current language: {language}</p>

      <button 
        className="w-fit px-2 py-1 bg-amber-300 rounded-xl text-center"
        onClick={() => setLanguage("en")}>English</button>
      <button 
        className="w-fit px-2 py-1 bg-amber-300 rounded-xl text-center"
        onClick={() => setLanguage("fr")}>French</button>
      <button 
        className="w-fit px-2 py-1 bg-amber-300 rounded-xl text-center"
        onClick={() => setLanguage("rw")}>Kinyarwanda</button>
    </div>
  );
}