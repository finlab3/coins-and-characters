import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import LessonList from "./lessons/LessonList";

const LessonsScreen = () => {
  const { t, language } = useLanguage();
  const [activeNode, setActiveNode] = useState<number>(1);
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-50 pb-20 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">{t("lessons.moneyBasics")}</h1>
        
        {!showLesson && (
          <LessonList
            activeNode={activeNode}
            onNodeSelect={setActiveNode}
            onStartLesson={() => setShowLesson(true)}
          />
        )}
      </div>
    </div>
  );
};

export default LessonsScreen;