import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzJson from "./languages/uz.json";
import enJson from "./languages/en.json";
const resources = {
  uz: {
    translation: uzJson,
  },
  en: {
    translation: enJson,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
