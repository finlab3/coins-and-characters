import { useLanguage } from "../contexts/LanguageContext";
import { Progress } from "../components/ui/progress";
import { 
  Infinity, 
  User, 
  Coins, 
  History,
  Briefcase,
  CreditCard,
  TrendingUp,
  Heart,
  Calculator
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const { t, language } = useLanguage();
  const [progress] = useState(65);
  const navigate = useNavigate();

  const financePillars = [
    { id: 1, title: "Money History", icon: History, unlocked: true, color: "#8B5CF6" },
    { id: 2, title: "Earn", icon: Briefcase, unlocked: true, color: "#F97316" },
    { id: 3, title: "Save", icon: Coins, unlocked: true, color: "#0EA5E9" },
    { id: 4, title: "Spend", icon: CreditCard, unlocked: false, color: "#D946EF" },
    { id: 5, title: "Invest", icon: TrendingUp, unlocked: false, color: "#22C55E" },
    { id: 6, title: "Give", icon: Heart, unlocked: false, color: "#EF4444" },
    { id: 7, title: "Money Math", icon: Calculator, unlocked: false, color: "#6366F1" },
  ];

  const handlePillarClick = (id: number) => {
    if (financePillars.find(pillar => pillar.id === id)?.unlocked) {
      navigate('/lessons');
      console.log(`Navigating to lesson for pillar ${id}`);
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${language === "ar" ? "rtl" : "ltr"}`}>
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <Infinity className="w-8 h-8 text-primary" />
        <User className="w-8 h-8 text-gray-600" onClick={() => navigate('/profile')} />
      </nav>

      {/* Daily Goal Tracker */}
      <div className="max-w-md mx-auto mt-8 p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">{t("home.dailyGoal")}</h2>
          <Progress value={progress} className="h-4" />
          <p className="text-sm text-gray-600 mt-2">
            {progress}/100 {t("home.coinsCollected")}
          </p>
        </div>

        {/* Smart Finance Pillars */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-6">{t("home.smartFinance")}</h2>
          <div className="grid grid-cols-2 gap-4">
            {financePillars.map((pillar) => (
              <div
                key={pillar.id}
                onClick={() => handlePillarClick(pillar.id)}
                className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transform transition-transform hover:scale-105 ${
                  !pillar.unlocked && "opacity-75"
                }`}
              >
                <pillar.icon 
                  className={`w-8 h-8`} 
                  style={{ color: pillar.unlocked ? pillar.color : '#9CA3AF' }}
                />
                <span className="font-medium text-center">{t(`home.pillars.${pillar.title}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;