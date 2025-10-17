import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import uz from "./uz";
import ru from "./ru"; 

const resources = {
  en: { translation: en },
  uz: { translation: uz },
  ru: { translation: ru }, 
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",     
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;