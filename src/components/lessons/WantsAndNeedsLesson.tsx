import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Home, ShoppingBag, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface QuizItem {
  id: number;
  name: string;
  image: string;
  isNeed: boolean;
}

const WantsAndNeedsLesson = () => {
  const { t } = useLanguage();
  const [showQuiz, setShowQuiz] = useState(false);
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
    <div className="max-w-4xl mx-auto p-4 pb-24">
      {!showQuiz ? (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Heart className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">{t("lessons.wantsAndNeeds.title")}</h1>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">{t("lessons.wantsAndNeeds.title")}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Home className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">{t("lessons.wantsAndNeeds.needs")}</h3>
                  </div>
                  <p className="text-gray-600">
                    {t("lessons.wantsAndNeeds.needsDescription")}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>{t("lessons.wantsAndNeeds.items.food")}</li>
                    <li>{t("lessons.wantsAndNeeds.items.water")}</li>
                    <li>{t("lessons.wantsAndNeeds.items.home")}</li>
                    <li>{t("lessons.wantsAndNeeds.items.clothes")}</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-6 h-6 text-secondary" />
                    <h3 className="font-semibold">{t("lessons.wantsAndNeeds.wants")}</h3>
                  </div>
                  <p className="text-gray-600">
                    {t("lessons.wantsAndNeeds.wantsDescription")}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>{t("lessons.wantsAndNeeds.items.toys")}</li>
                    <li>{t("lessons.wantsAndNeeds.items.videoGame")}</li>
                    <li>{t("lessons.wantsAndNeeds.items.candy")}</li>
                    <li>{t("lessons.wantsAndNeeds.items.smartphone")}</li>
                  </ul>
                </div>
              </div>
              
              <Button 
                className="mt-6"
                onClick={() => setShowQuiz(true)}
              >
                {t("lessons.startLesson")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t("lessons.wantsAndNeeds.quiz.title")}</h2>
          <p className="text-gray-600">{t("lessons.wantsAndNeeds.quiz.instruction")}</p>
          
          {currentItem < quizItems.length && (
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <img 
                    src={quizItems[currentItem].image} 
                    alt={quizItems[currentItem].name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-semibold text-center">{quizItems[currentItem].name}</h3>
                  
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => handleAnswer(true)}
                    >
                      <Home className="w-4 h-4" />
                      {t("lessons.wantsAndNeeds.quiz.need")}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => handleAnswer(false)}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      {t("lessons.wantsAndNeeds.quiz.want")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => {
                setShowQuiz(false);
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
      )}
    </div>
  );
};

export default WantsAndNeedsLesson;