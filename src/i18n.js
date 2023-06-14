import { createI18n } from "vue-i18n";

import enI18n from "./locales/en.json";
import frI18n from "./locales/fr.json";

const defaultLanguage = "en";
const language = localStorage.getItem('lang') || defaultLanguage;

const i18n = createI18n({
    legacy: false,
    locale: language,
    fallbackLocale: defaultLanguage,
    messages: {
        en: enI18n,
        fr: frI18n
    }
});

export default i18n;