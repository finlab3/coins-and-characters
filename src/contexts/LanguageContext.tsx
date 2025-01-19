import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
  t: (key: string) => string;
  language: "en" | "ar";
  setLanguage: (lang: "en" | "ar") => void;
}

const LanguageContext = createContext<LanguageContextType>({
  t: (key: string) => key,
  language: "en",
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  en: {
    "welcome.title": "Welcome to FINLAB!",
    "welcome.subtitle": "Learn about money with Fils the Fox",
    "welcome.start": "Let's Learn!",
    "welcome.login": "Login",
    "welcome.signup": "Sign Up",
    "auth.login": "Login",
    "auth.signup": "Sign Up",
    "auth.name": "Name",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.namePlaceholder": "Enter your name",
    "auth.emailPlaceholder": "Enter your email",
    "auth.passwordPlaceholder": "Enter your password",
    "auth.loginButton": "Login",
    "auth.signupButton": "Sign Up",
    "auth.noAccount": "Don't have an account? Sign up",
    "auth.hasAccount": "Already have an account? Login",
    "auth.back": "Back",
    "nav.home": "Home",
    "nav.lessons": "Lessons",
    "nav.rewards": "Rewards",
    "nav.progress": "Progress",
    "nav.profile": "Profile",
    "home.dailyGoal": "Daily Goal",
    "home.coinsCollected": "coins collected",
    "home.learningPath": "Learning Path",
    "home.topics.Savings": "Savings",
    "home.topics.Earning Money": "Earning Money",
    "home.topics.Spending Wisely": "Spending Wisely",
    "home.topics.Budgeting": "Budgeting",
    "lessons.moneyBasics": "Money Basics",
    "lessons.startLesson": "Start Lesson",
    "lessons.whatIsMoney.title": "What is Money?",
    "lessons.whatIsMoney.description": "Learn the basics of money and its importance",
    "lessons.barterSystem.title": "The Barter System",
    "lessons.barterSystem.description": "Discover how trade worked before money",
    "lessons.firstCoins.title": "First Coins",
    "lessons.firstCoins.description": "Explore the history of the first coins",
    "lessons.modernMoney.title": "Modern Money",
    "lessons.modernMoney.description": "Understanding today's monetary system",
    "rewards.title": "Rewards"
  },
  ar: {
    "welcome.title": "!FINLAB مرحباً بك في",
    "welcome.subtitle": "تعلم عن المال مع الثعلب فلس",
    "welcome.start": "!هيا نتعلم",
    "welcome.login": "تسجيل الدخول",
    "welcome.signup": "إنشاء حساب",
    "auth.login": "تسجيل الدخول",
    "auth.signup": "إنشاء حساب",
    "auth.name": "الاسم",
    "auth.email": "البريد الإلكتروني",
    "auth.password": "كلمة المرور",
    "auth.namePlaceholder": "أدخل اسمك",
    "auth.emailPlaceholder": "أدخل بريدك الإلكتروني",
    "auth.passwordPlaceholder": "أدخل كلمة المرور",
    "auth.loginButton": "تسجيل الدخول",
    "auth.signupButton": "إنشاء حساب",
    "auth.noAccount": "ليس لديك حساب؟ سجل الآن",
    "auth.hasAccount": "لديك حساب بالفعل؟ سجل دخول",
    "auth.back": "رجوع",
    "nav.home": "الرئيسية",
    "nav.lessons": "الدروس",
    "nav.rewards": "المكافآت",
    "nav.progress": "التقدم",
    "nav.profile": "الملف الشخصي",
    "home.dailyGoal": "الهدف اليومي",
    "home.coinsCollected": "العملات المجمعة",
    "home.learningPath": "مسار التعلم",
    "home.topics.Savings": "التوفير",
    "home.topics.Earning Money": "كسب المال",
    "home.topics.Spending Wisely": "الإنفاق بحكمة",
    "home.topics.Budgeting": "الميزانية",
    "lessons.moneyBasics": "أساسيات المال",
    "lessons.startLesson": "ابدأ الدرس",
    "lessons.whatIsMoney.title": "ما هو المال؟",
    "lessons.whatIsMoney.description": "تعلم أساسيات المال وأهميته",
    "lessons.barterSystem.title": "نظام المقايضة",
    "lessons.barterSystem.description": "اكتشف كيف كانت التجارة قبل المال",
    "lessons.firstCoins.title": "العملات الأولى",
    "lessons.firstCoins.description": "استكشف تاريخ العملات الأولى",
    "lessons.modernMoney.title": "المال الحديث",
    "lessons.modernMoney.description": "فهم النظام النقدي اليوم",
    "rewards.title": "المكافآت",
    // New translations for Wants and Needs lesson
    "lessons.wantsAndNeeds.title": "الرغبات والاحتياجات",
    "lessons.wantsAndNeeds.description": "تعلم الفرق بين ما نريد وما نحتاج",
    "lessons.wantsAndNeeds.needs": "الاحتياجات",
    "lessons.wantsAndNeeds.wants": "الرغبات",
    "lessons.wantsAndNeeds.needsDescription": "الاحتياجات هي الأشياء الضرورية للبقاء والحياة الصحية:",
    "lessons.wantsAndNeeds.wantsDescription": "الرغبات هي الأشياء التي تجعل الحياة أكثر متعة ولكنها ليست ضرورية للبقاء:",
    "lessons.wantsAndNeeds.quiz.title": "اختبار: هل هو رغبة أم حاجة؟",
    "lessons.wantsAndNeeds.quiz.instruction": "!صنف كل عنصر في الفئة الصحيحة",
    "lessons.wantsAndNeeds.quiz.need": "حاجة",
    "lessons.wantsAndNeeds.quiz.want": "رغبة",
    "lessons.wantsAndNeeds.quiz.correct": "!إجابة صحيحة",
    "lessons.wantsAndNeeds.quiz.incorrect": "!حاول مرة أخرى",
    "lessons.wantsAndNeeds.quiz.completed": "!اكتمل الاختبار",
    "lessons.wantsAndNeeds.items.water": "ماء",
    "lessons.wantsAndNeeds.items.videoGame": "جهاز ألعاب فيديو",
    "lessons.wantsAndNeeds.items.food": "طعام",
    "lessons.wantsAndNeeds.items.toys": "ألعاب",
    "lessons.wantsAndNeeds.items.home": "منزل",
    "lessons.wantsAndNeeds.items.candy": "حلوى",
    "lessons.wantsAndNeeds.items.clothes": "ملابس",
    "lessons.wantsAndNeeds.items.bicycle": "دراجة",
    "lessons.wantsAndNeeds.items.medicine": "دواء",
    "lessons.wantsAndNeeds.items.smartphone": "هاتف ذكي"
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const t = (key: string): string => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
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