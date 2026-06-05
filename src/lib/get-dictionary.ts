const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import("../data/locales/en.json").then((module) => module.default),
  fr: () => import("../data/locales/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const loader = dictionaries[locale] || dictionaries.en;
  return loader();
};
