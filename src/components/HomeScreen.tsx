import { useLanguage } from "../contexts/LanguageContext"; // Updated import path
import { Progress } from "../components/ui/progress"; // Updated import path
import { Infinity, User, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HomeScreen = () => {
  const { t, language } = useLanguage();
  const [progress] = useState(65); // Example progress value
  const navigate = useNavigate(); // Initialize useNavigate

  const learningTopics = [
    { id: 1, title: "Savings", unlocked: true },
    { id: 2, title: "Earning Money", unlocked: true },
    { id: 3, title: "Spending Wisely", unlocked: false },
    { id: 4, title: "Budgeting", unlocked: false },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 ${language === "ar" ? "rtl" : "ltr"}`}>
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <Infinity className="w-8 h-8 text-primary" />
        <User className="w-8 h-8 text-gray-600" onClick={() => navigate('/auth')} /> {/* Add onClick for navigation */}
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

        {/* Learning Path */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-6">{t("home.learningPath")}</h2>
          <div className="space-y-4">
            {learningTopics.map((topic) => (
              <div
                key={topic.id}
                className={`bg-white rounded-lg shadow-md p-6 flex justify-between items-center ${
                  !topic.unlocked && "opacity-75"
                }`}
              >
                <span className="font-medium">{t(`home.topics.${topic.title}`)}</span>
                {!topic.unlocked && <Lock className="w-5 h-5 text-gray-400" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
