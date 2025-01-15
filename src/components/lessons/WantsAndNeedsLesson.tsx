import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Home, ShoppingBag, ArrowRight, Check, X } from "lucide-react";
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
      name: "Water",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800",
      isNeed: true
    },
    {
      id: 2,
      name: "Video Game Console",
      image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=800",
      isNeed: false
    },
    {
      id: 3,
      name: "Food",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      isNeed: true
    },
    {
      id: 4,
      name: "Toys",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800",
      isNeed: false
    },
    {
      id: 5,
      name: "Home",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
      isNeed: true
    },
    {
      id: 6,
      name: "Candy",
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800",
      isNeed: false
    },
    {
      id: 7,
      name: "Clothes",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800",
      isNeed: true
    },
    {
      id: 8,
      name: "Bicycle",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800",
      isNeed: false
    },
    {
      id: 9,
      name: "Medicine",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
      isNeed: true
    },
    {
      id: 10,
      name: "Smartphone",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      isNeed: false
    }
  ];

  const handleAnswer = (isNeed: boolean) => {
    const isCorrect = quizItems[currentItem].isNeed === isNeed;
    
    if (isCorrect) {
      toast.success("Correct! 🎉");
      setScore(score + 1);
    } else {
      toast.error("Not quite right. Try again!");
    }

    if (currentItem < quizItems.length - 1) {
      setCurrentItem(currentItem + 1);
    } else {
      toast.success(`Quiz completed! You got ${score + (isCorrect ? 1 : 0)} out of ${quizItems.length} correct!`);
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
            <h1 className="text-2xl font-bold">Wants vs Needs</h1>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Understanding Wants and Needs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Home className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">Needs</h3>
                  </div>
                  <p className="text-gray-600">
                    Needs are things we must have to survive and live a healthy life:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Food and Water</li>
                    <li>Shelter (Home)</li>
                    <li>Clothes</li>
                    <li>Healthcare</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-6 h-6 text-secondary" />
                    <h3 className="font-semibold">Wants</h3>
                  </div>
                  <p className="text-gray-600">
                    Wants are things that make life more fun but aren't necessary for survival:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Toys</li>
                    <li>Video Games</li>
                    <li>Candy</li>
                    <li>New Smartphone</li>
                  </ul>
                </div>
              </div>
              
              <Button 
                className="mt-6"
                onClick={() => setShowQuiz(true)}
              >
                Take the Quiz
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Quiz: Is it a Want or a Need?</h2>
          <p className="text-gray-600">Sort each item into the correct category!</p>
          
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
                      Need
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => handleAnswer(false)}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Want
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
              Back to Lesson
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Score:</span>
              <span className="font-bold">{score}/{quizItems.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WantsAndNeedsLesson;