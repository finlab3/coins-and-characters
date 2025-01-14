import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "welcome.title": "Welcome to FINLAB!",
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
    "lessons.moneyBasics": "Money Basics",
    "lessons.startLesson": "Start Lesson",
    "lessons.whatIsMoney.title": "What is Money?",
    "lessons.whatIsMoney.description": "Learn about the basic concept of money and why we use it in our daily lives.",
    "lessons.barterSystem.title": "The Barter System",
    "lessons.barterSystem.description": "Discover how people traded goods before money was invented.",
    "lessons.firstCoins.title": "First Coins in History",
    "lessons.firstCoins.description": "Explore the fascinating story of the first coins and how they changed trade forever.",
    "lessons.modernMoney.title": "Modern Money",
    "lessons.modernMoney.description": "Understanding different types of modern money and digital payments.",
    "rewards.title": "My Rewards",
  },
  ar: {
    "welcome.title": "!FINLAB مرحباً بك في",
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
    "lessons.moneyBasics": "أساسيات المال",
    "lessons.startLesson": "ابدأ الدرس",
    "lessons.whatIsMoney.title": "ما هو المال؟",
    "lessons.whatIsMoney.description": "تعرف على المفهوم الأساسي للمال ولماذا نستخدمه في حياتنا اليومية.",
    "lessons.barterSystem.title": "نظام المقايضة",
    "lessons.barterSystem.description": "اكتشف كيف كان الناس يتبادلون السلع قبل اختراع المال.",
    "lessons.firstCoins.title": "أول العملات في التاريخ",
    "lessons.firstCoins.description": "استكشف القصة المثيرة لأول العملات وكيف غيرت التجارة إلى الأبد.",
    "lessons.modernMoney.title": "المال الحديث",
    "lessons.modernMoney.description": "فهم الأنواع المختلفة من المال الحديث والمدفوعات الرقمية.",
    "rewards.title": "مكافآتي",
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