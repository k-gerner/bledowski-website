"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../public/locales/en/common.json";
import fr from "../public/locales/fr/common.json";
import pl from "../public/locales/pl/common.json";
import de from "../public/locales/de/common.json";

// Prevent re-initializing during HMR or Fast Refresh
if (!i18n.isInitialized) {
    i18n
        .use(initReactI18next)
        .init({
            lng: "en", // Always start with 'en' on server to avoid hydration mismatch
            fallbackLng: "en",
            interpolation: { escapeValue: false },
            resources: {
                en: { common: en },
                fr: { common: fr },
                pl: { common: pl },
                de: { common: de }
            }
        });
}

export default i18n;
