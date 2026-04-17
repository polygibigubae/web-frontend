import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    resources: {
      en: {
        translation: {
          // Add translations here later
        },
      },
      am: {
        translation: {
          // Add translations here later
        },
      },
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
