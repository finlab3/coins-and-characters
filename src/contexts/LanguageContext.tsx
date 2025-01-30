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
    "welcome.login": "Login / Create Account",
    "auth.login": "Login",
    "auth.signup": "Sign Up",
    "auth.name": "Name",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.age": "Age",
    "auth.school": "School",
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
    "lessons.whatIsMoney.description": "What Is Money explores the nature, history, and role of money, uncovering how it shapes society and the global economy.",
    "lessons.wantsAndNeeds.title": "What is Wants And Needs?",
    "lessons.wantsAndNeeds.description":"The Wants and Needs lesson helps students differentiate essential needs from non-essential wants. Through examples and discussions, they’ll learn to prioritize needs, budget effectively, and make responsible financial decisions.",
    "lessons.barterSystem.title": "The Barter System",
    "lessons.barterSystem.description": "Discover how trade worked before money",
    "lessons.firstCoins.title": "First Coins",
    "lessons.firstCoins.description": "Explore the history of the first coins",
    "lessons.modernMoney.title": "Modern Money",
    "lessons.modernMoney.description": "Understanding today's monetary system",
    "rewards.title": "Rewards",
    "lessons.sadaqa.title": "Understanding Sadaqa",
    "lessons.sadaqa.description": "Learn about the importance of charity in Islam",
    "lessons.sadaqa.whatIs": "What is Sadaqa?",
    "lessons.sadaqa.definition": "Sadaqa is a voluntary act of giving in Islam, done out of compassion, love, and faith.",
    "lessons.sadaqa.benefits": "Benefits of Sadaqa",
    "lessons.sadaqa.benefit1": "Purifies wealth and heart",
    "lessons.sadaqa.benefit2": "Helps those in need",
    "lessons.sadaqa.benefit3": "Strengthens community bonds",
    "lessons.sadaqa.benefit4": "Brings blessings and rewards",
    "lessons.sadaqa.forms": "Forms of Sadaqa",
    "lessons.sadaqa.form1": "Monetary donations",
    "lessons.sadaqa.form2": "Sharing food and necessities",
    "lessons.sadaqa.form3": "Teaching others",
    "lessons.sadaqa.form4": "Kind words and actions",
    "lessons.sadaqa.quiz.title": "Test Your Knowledge",
    "lessons.sadaqa.quiz.q1": "Which is a better form of giving Sadaqa?",
    "lessons.sadaqa.quiz.q1a1": "Giving regularly, even if small amounts",
    "lessons.sadaqa.quiz.q1a2": "Waiting to give a large amount once",
    "lessons.sadaqa.quiz.q2": "What can be given as Sadaqa?",
    "lessons.sadaqa.quiz.q2a1": "Food and basic necessities",
    "lessons.sadaqa.quiz.q2a2": "Only money",
    "lessons.sadaqa.quiz.q3": "Who benefits from Sadaqa?",
    "lessons.sadaqa.quiz.q3a1": "Only the receiver",
    "lessons.sadaqa.quiz.q3a2": "Both the giver and receiver",
    "lessons.sadaqa.quiz.correct": "Correct! Well done! 🎉",
    "lessons.sadaqa.quiz.incorrect": "That's not quite right. Try again!",
    "lessons.sadaqa.quiz.completed": "Quiz Completed!",
    // New translations for additional screens
    "welcome.screen": "Welcome Screen",
    "auth.screen": "Authentication Screen",
    "profile.screen": "Profile Screen",
    // Add more translations as needed
  },
  ar: {
    "welcome.title": "!FINLAB مرحباً بك في",
    "welcome.subtitle": "تعلم عن المال مع الثعلب فلس",
    "welcome.start": "!هيا نتعلم",
    "welcome.login": " إنشاء حساب أو تسجيل الدخول",
    "auth.login": "تسجيل الدخول",
    "auth.signup": "إنشاء حساب",
    "auth.name": "الاسم",
    "auth.email": "البريد الإلكتروني",
    "auth.password": "كلمة المرور",
    "auth.age": "العمر",
    "auth.school": "المدرسة",
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
    "lessons.wantsAndNeeds.title": "ما هي الرغبات والاحتياجات؟",
    "lessons.wantsAndNeeds.description":"يساعد درس الرغبات والاحتياجات الطلاب على التمييز بين الاحتياجات الأساسية والرغبات غير الأساسية. من خلال الأمثلة والنقاشات، سيتعلمون كيفية تحديد الأولويات، وإعداد الميزانية بفعالية، واتخاذ قرارات مالية مسؤولة.",
    "rewards.title": "المكافآت",
    "lessons.sadaqa.title": "فهم الصدقة",
    "lessons.sadaqa.description": "تعلم عن أهمية الصدقة في الإسلام",
    "lessons.sadaqa.whatIs": "ما هي الصدقة؟",
    "lessons.sadaqa.definition": "الصدقة هي عمل تطوعي للعطاء في الإسلام، يتم من منطلق الرحمة والمحبة والإيمان.",
    "lessons.sadaqa.benefits": "فوائد الصدقة",
    "lessons.sadaqa.benefit1": "تطهير المال والقلب",
    "lessons.sadaqa.benefit2": "مساعدة المحتاجين",
    "lessons.sadaqa.benefit3": "تقوية روابط المجتمع",
    "lessons.sadaqa.benefit4": "جلب البركات والثواب",
    "lessons.sadaqa.forms": "أشكال الصدقة",
    "lessons.sadaqa.form1": "التبرعات المالية",
    "lessons.sadaqa.form2": "مشاركة الطعام والضروريات",
    "lessons.sadaqa.form3": "تعليم الآخرين",
    "lessons.sadaqa.form4": "الكلمات والأفعال الطيبة",
    "lessons.sadaqa.quiz.title": "اختبر معرفتك",
    "lessons.sadaqa.quiz.q1": "ما هو الأفضل في إعطاء الصدقة؟",
    "lessons.sadaqa.quiz.q1a1": "العطاء بانتظام، حتى لو بمبالغ صغيرة",
    "lessons.sadaqa.quiz.q1a2": "الانتظار لإعطاء مبلغ كبير مرة واحدة",
    "lessons.sadaqa.quiz.q2": "ما الذي يمكن تقديمه كصدقة؟",
    "lessons.sadaqa.quiz.q2a1": "الطعام والضروريات الأساسية",
    "lessons.sadaqa.quiz.q2a2": "المال فقط",
    "lessons.sadaqa.quiz.q3": "من يستفيد من الصدقة؟",
    "lessons.sadaqa.quiz.q3a1": "المتلقي فقط",
    "lessons.sadaqa.quiz.q3a2": "المعطي والمتلقي معاً",
    "lessons.sadaqa.quiz.correct": "!صحيح! أحسنت 🎉",
    "lessons.sadaqa.quiz.incorrect": "!هذا غير صحيح. حاول مرة أخرى",
    "lessons.sadaqa.quiz.completed": "!اكتمل الاختبار"
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
