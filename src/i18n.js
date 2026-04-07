import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./locales/en-translation.json";
import fr from "./locales/fr-translation.json";
import es from "./locales/es-translation.json";
import de from "./locales/de-translation.json";
import nl from "./locales/nl-translation.json";
import ar from "./locales/ar-translation.json";
import pt from "./locales/pt-translation.json";
import zh from "./locales/zh-translation.json";
import it from "./locales/it-translation.json";
import ch from "./locales/ch-translation.json";
import hi from "./locales/hi-translation.json";
import ko from "./locales/ko-translation.json";
import ja from "./locales/ja-translation.json";

i18n
  .use(LanguageDetector) // Detect user browser language
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      de: { translation: de },
      nl: { translation: nl },
      ar: { translation: ar },
      pt: { translation: pt },
      zh: { translation: zh },
      it: { translation: it },
      ch: { translation: ch },
      hi: { translation: hi },
      ko: { translation: ko },
      ja: { translation: ja },
    },
    fallbackLng: "en", // fallback if user language not supported
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["localStorage"],
    },
  });

export default i18n;
