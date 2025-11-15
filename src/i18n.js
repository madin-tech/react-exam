import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./languages/uz.json";
import en from "./languages/en.json";
const resources = {
  en: {
    translation: uz,
  },
  fr: {
    translation: en,
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "uz", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
