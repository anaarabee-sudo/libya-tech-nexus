import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.en];
    return translation || key;
  };

  return { t, language };
};