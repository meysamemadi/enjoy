import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
  tr: () => import("./dictionaries/tr.json").then((module) => module.default),
  kr: () => import("./dictionaries/kr.json").then((module) => module.default),
  ch: () => import("./dictionaries/ch.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
