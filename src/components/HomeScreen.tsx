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
    { id: 1, title: "Money History", icon: History, unlocked: true, color: "#8B5CF6", bgColor: "#F1F0FB" },
    { id: 2, title: "Earn", icon: Briefcase, unlocked: true, color: "#F97316", bgColor: "#FDE1D3" },
    { id: 3, title: "Save", icon: Coins, unlocked: true, color: "#0EA5E9", bgColor: "#D3E4FD" },
    { id: 4, title: "Spend", icon: CreditCard, unlocked: true, color: "#D946EF", bgColor: "#FFDEE2" },
    { id: 5, title: "Invest", icon: TrendingUp, unlocked: true, color: "#22C55E", bgColor: "#F2FCE2" },
    { id: 6, title: "Give", icon: Heart, unlocked: true, color: "#EF4444", bgColor: "#FEC6A1" },
    { id: 7, title: "Money Math", icon: Calculator, unlocked: true, color: "#6366F1", bgColor: "#E5DEFF" },
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
                style={{ backgroundColor: pillar.bgColor }}
                className={`rounded-full aspect-square shadow-md p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transform transition-transform hover:scale-105`}
              >
                <pillar.icon 
                  className={`w-8 h-8`} 
                  style={{ color: pillar.color }}
                />
                <span className="font-medium text-center text-sm">{t(`home.pillars.${pillar.title}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;