import React, { createContext, useContext, useState, ReactNode } from "react";

const LanguageContext = createContext();

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
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
