import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { useState } from "react";
import QuizItem from "./QuizItem";

interface QuizProps {
  onBack: () => void;
}

interface QuizItem {
  id: number;
  name: string;
  image: string;
  isNeed: boolean;
}

const Quiz = ({ onBack }: QuizProps) => {
  const { t } = useLanguage();
  const [score, setScore] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);

  const quizItems: QuizItem[] = [
    {
      id: 1,
      name: t("lessons.wantsAndNeeds.items.water"),
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800",
      isNeed: true
    },
    {
      id: 2,
      name: t("lessons.wantsAndNeeds.items.videoGame"),
      image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=800",
      isNeed: false
    },
    {
      id: 3,
      name: t("lessons.wantsAndNeeds.items.food"),
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      isNeed: true
    },
    {
      id: 4,
      name: t("lessons.wantsAndNeeds.items.toys"),
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800",
      isNeed: false
    },
    {
      id: 5,
      name: t("lessons.wantsAndNeeds.items.home"),
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
      isNeed: true
    },
    {
      id: 6,
      name: t("lessons.wantsAndNeeds.items.candy"),
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800",
      isNeed: false
    },
    {
      id: 7,
      name: t("lessons.wantsAndNeeds.items.clothes"),
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800",
      isNeed: true
    },
    {
      id: 8,
      name: t("lessons.wantsAndNeeds.items.bicycle"),
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800",
      isNeed: false
    },
    {
      id: 9,
      name: t("lessons.wantsAndNeeds.items.medicine"),
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
      isNeed: true
    },
    {
      id: 10,
      name: t("lessons.wantsAndNeeds.items.smartphone"),
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      isNeed: false
    }
  ];

  const handleAnswer = (isNeed: boolean) => {
    const isCorrect = quizItems[currentItem].isNeed === isNeed;
    
    if (isCorrect) {
      toast.success(t("lessons.wantsAndNeeds.quiz.correct"));
      setScore(score + 1);
    } else {
      toast.error(t("lessons.wantsAndNeeds.quiz.incorrect"));
    }

    if (currentItem < quizItems.length - 1) {
      setCurrentItem(currentItem + 1);
    } else {
      toast.success(
        t("lessons.wantsAndNeeds.quiz.completed") + 
        ` ${score + (isCorrect ? 1 : 0)} / ${quizItems.length}`
      );
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t("lessons.wantsAndNeeds.quiz.title")}</h2>
      <p className="text-gray-600">{t("lessons.wantsAndNeeds.quiz.instruction")}</p>
      
      {currentItem < quizItems.length && (
        <QuizItem
          name={quizItems[currentItem].name}
          image={quizItems[currentItem].image}
          onAnswerSubmit={handleAnswer}
        />
      )}

      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={() => {
            onBack();
            setCurrentItem(0);
            setScore(0);
          }}
        >
          {t("auth.back")}
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">{t("home.coinsCollected")}:</span>
          <span className="font-bold">{score}/{quizItems.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
