import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "../components/ui/button";
import { Infinity, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen bg-gradient-to-br from-primary to-secondary p-6 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="text-white hover:text-white/80"
          >
            {language === "en" ? "العربية" : "English"}
          </Button>
        </div>
        
        <div className="flex justify-center mb-6">
          <Infinity className="w-16 h-16 text-white animate-bounce-slow" />
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">{t("welcome.title")}</h1>
        <p className="text-xl text-white/90 mb-8">{t("welcome.subtitle")}</p>

        <div className="relative w-64 h-64 mx-auto mb-20">
          <img
            src="/lovable-uploads/e13a68a6-44e0-4a54-ad4d-8569479a7095.png"
            alt="Fils the Fox"
            className="w-full h-full object-contain animate-fade-in"
          />
        </div>

        <div className="flex gap-4 justify-center mb-24">
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            {t("welcome.login")}
          </Button>
        </div>

        <Button
          onClick={() => navigate("/home")}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
        >
          <BookOpen className="w-6 h-6" />
          {t("welcome.start")}
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
