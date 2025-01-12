import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
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

        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
          <img
            src="/placeholder.svg"
            alt="Fils the Fox"
            className="w-full h-full object-contain relative z-10"
          />
        </div>

        <Button
          onClick={() => navigate("/home")}
          className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
        >
          <BookOpen className="w-6 h-6" />
          {t("welcome.start")}
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;