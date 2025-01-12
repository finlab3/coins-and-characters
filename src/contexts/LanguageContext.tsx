import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "welcome.title": "Welcome to FinKids!",
    "welcome.subtitle": "Learn about money with Fils the Fox",
    "welcome.start": "Let's Learn!",
    "nav.home": "Home",
    "nav.lessons": "Lessons",
    "nav.rewards": "Rewards",
    "nav.progress": "Progress",
    "nav.profile": "Profile",
    "home.dailyGoal": "Daily Goal",
    "home.coinsCollected": "coins collected today",
    "home.learningPath": "Learning Path",
    "home.topics.Savings": "Savings",
    "home.topics.Earning Money": "Earning Money",
    "home.topics.Spending Wisely": "Spending Wisely",
    "home.topics.Budgeting": "Budgeting",
  },
  ar: {
    "welcome.title": "!FinKids مرحباً بك في",
    "welcome.subtitle": "تعلم عن المال مع الثعلب فلس",
    "welcome.start": "!هيا نتعلم",
    "nav.home": "الرئيسية",
    "nav.lessons": "الدروس",
    "nav.rewards": "المكافآت",
    "nav.progress": "التقدم",
    "nav.profile": "الملف الشخصي",
    "home.dailyGoal": "الهدف اليومي",
    "home.coinsCollected": "العملات المجمعة اليوم",
    "home.learningPath": "مسار التعلم",
    "home.topics.Savings": "التوفير",
    "home.topics.Earning Money": "كسب المال",
    "home.topics.Spending Wisely": "الإنفاق بحكمة",
    "home.topics.Budgeting": "الميزانية",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};