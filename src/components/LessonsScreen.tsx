import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import LessonList from "./lessons/LessonList";
import WhatIsMoneyLesson from "./lessons/WhatIsMoneyLesson";
import WantsAndNeedsLesson from "./lessons/WantsAndNeedsLesson";
import SadaqaLesson from "./lessons/SadaqaLesson";

const LessonsScreen = () => {
  const { t, language } = useLanguage();
  const [activeNode, setActiveNode] = useState<number>(1);
  const [showLesson, setShowLesson] = useState(false);

  const renderLesson = () => {
    switch (activeNode) {
      case 1:
        return <WhatIsMoneyLesson />;
      case 2:
        return <WantsAndNeedsLesson />;
      case 3:
        return <SadaqaLesson />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 pb-20 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">{t("lessons.moneyBasics")}</h1>
        
        {!showLesson ? (
          <LessonList
            activeNode={activeNode}
            onNodeSelect={setActiveNode}
            onStartLesson={() => setShowLesson(true)}
          />
        ) : (
          renderLesson()
        )}
      </div>
    </div>
  );
};

export default LessonsScreen;