import { createI18n } from "vue-i18n";
import locales from "@/locales/locales.json";

const defaultLanguage = locales[0].code;
const language = localStorage.getItem('lang') || defaultLanguage;

const messages = {};

for (let i = 0; i < locales.length; i++) {
    messages[locales[i].code] = locales[i];
}

const i18n = createI18n({
    legacy: false,
    locale: language,
    fallbackLocale: defaultLanguage,
    messages: messages
});

export default i18n;