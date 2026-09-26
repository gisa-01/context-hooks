import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error ('Use theme must be used inside ThemeProvider');
  }
  return context;
}