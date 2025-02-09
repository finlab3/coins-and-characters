
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import LessonList from "./lessons/LessonList";
import WhatIsMoneyLesson from "./lessons/WhatIsMoneyLesson";
import WantsAndNeedsLesson from "./lessons/WantsAndNeedsLesson";
import SadaqaLesson from "./lessons/SadaqaLesson";
import { 
  History, 
  Briefcase,
  Coins,
  CreditCard,
  TrendingUp,
  Heart,
  Calculator
} from "lucide-react";

const LessonsScreen = () => {
  const { t, language } = useLanguage();
  const [activeNode, setActiveNode] = useState<number>(1);
  const [showLesson, setShowLesson] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

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
      setSelectedPillar(id);
    }
  };

  const handleBackFromLesson = () => {
    setShowLesson(false);
    setSelectedPillar(null);
  };

  const renderLesson = () => {
    switch (activeNode) {
      case 1:
        return <WhatIsMoneyLesson onBack={handleBackFromLesson} />;
      case 2:
        return <WantsAndNeedsLesson onBack={handleBackFromLesson} />;
      case 3:
        return <SadaqaLesson onBack={handleBackFromLesson} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 pb-20 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">{t("lessons.moneyBasics")}</h1>
        
        {!selectedPillar ? (
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
        ) : (
          !showLesson ? (
            <LessonList
              activeNode={activeNode}
              onNodeSelect={setActiveNode}
              onStartLesson={() => setShowLesson(true)}
            />
          ) : (
            renderLesson()
          )
        )}
      </div>
    </div>
  );
};

export default LessonsScreen;
