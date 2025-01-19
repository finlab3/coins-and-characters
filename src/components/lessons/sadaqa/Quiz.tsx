import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Check } from "lucide-react";

interface QuizOption {
  id: number;
  text: string;
  image: string;
  isCorrect: boolean;
}

interface QuizProps {
  onBack: () => void;
}

const Quiz = ({ onBack }: QuizProps) => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      question: t("lessons.sadaqa.quiz.q1"),
      options: [
        {
          id: 1,
          text: t("lessons.sadaqa.quiz.q1a1"),
          image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
          isCorrect: true
        },
        {
          id: 2,
          text: t("lessons.sadaqa.quiz.q1a2"),
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          isCorrect: false
        }
      ]
    },
    {
      question: t("lessons.sadaqa.quiz.q2"),
      options: [
        {
          id: 1,
          text: t("lessons.sadaqa.quiz.q2a1"),
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          isCorrect: true
        },
        {
          id: 2,
          text: t("lessons.sadaqa.quiz.q2a2"),
          image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
          isCorrect: false
        }
      ]
    },
    {
      question: t("lessons.sadaqa.quiz.q3"),
      options: [
        {
          id: 1,
          text: t("lessons.sadaqa.quiz.q3a1"),
          image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
          isCorrect: false
        },
        {
          id: 2,
          text: t("lessons.sadaqa.quiz.q3a2"),
          image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
          isCorrect: true
        }
      ]
    }
  ];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      toast.success(t("lessons.sadaqa.quiz.correct"));
    } else {
      toast.error(t("lessons.sadaqa.quiz.incorrect"));
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
      toast.success(
        t("lessons.sadaqa.quiz.completed") + 
        ` ${score + (isCorrect ? 1 : 0)} / ${questions.length}`
      );
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t("lessons.sadaqa.quiz.title")}</h2>
      
      {!isCompleted && (
        <>
          <p className="text-gray-600 mb-4">{questions[currentQuestion].question}</p>
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option) => (
              <Card
                key={option.id}
                className="cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                onClick={() => handleAnswer(option.isCorrect)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={option.image}
                      alt={option.text}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <p className="text-gray-700">{option.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {isCompleted && (
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">
            {t("lessons.sadaqa.quiz.completed")}
          </h3>
          <p className="text-lg">
            {t("home.coinsCollected")}: {score}/{questions.length}
          </p>
        </div>
      )}

      <Button variant="outline" onClick={() => {
        onBack();
        setCurrentQuestion(0);
        setScore(0);
        setIsCompleted(false);
      }}>
        {t("auth.back")}
      </Button>
    </div>
  );
};

export default Quiz;