import { createContext, useState  } from "react";

type Language = 'en' | 'fr' | 'rw';

type LanguageContexType = {
  language:Language;
  setLanguage: (language: Language) => void;
}
;
export const LanguageContext = createContext<LanguageContexType | null>(null);

export function  LanguageProvider ({children}: { children: React.ReactNode}) {
  const [language, setLanguage] = useState<Language>('en');

  return(
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
}