import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

interface QuizOption {
  id: number;
  text: string;
  image: string;
  isCorrect: boolean;
}

const WhatIsMoneyLesson = () => {
  const { t } = useLanguage();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const quizOptions: QuizOption[] = [
    {
      id: 1,
      text: "A medium of exchange used to buy and sell goods and services",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=60",
      isCorrect: true
    },
    {
      id: 2,
      text: "Only physical coins and paper bills",
      image: "https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=800&auto=format&fit=crop&q=60",
      isCorrect: false
    },
    {
      id: 3,
      text: "Just digital numbers in a bank account",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      isCorrect: false
    }
  ];

  const handleOptionSelect = (optionId: number) => {
    if (!hasSubmitted) {
      setSelectedOption(optionId);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      toast.error("Please select an answer first!");
      return;
    }

    setHasSubmitted(true);
    const selectedAnswer = quizOptions.find(option => option.id === selectedOption);
    
    if (selectedAnswer?.isCorrect) {
      toast.success("Correct! Well done! 🎉");
    } else {
      toast.error("That's not quite right. Try again!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 pb-24">
      {!showQuiz ? (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Coins className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">{t("lessons.whatIsMoney.title")}</h1>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Introduction to Money</h2>
              <p className="text-gray-600">
                Money is a fundamental part of our daily lives. It serves three main purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Medium of Exchange: We use it to buy and sell things</li>
                <li>Store of Value: We can save it for future use</li>
                <li>Unit of Account: We use it to measure the value of things</li>
              </ul>
              <p className="text-gray-600">
                Before money, people used a barter system where they directly exchanged goods 
                and services. However, this system had many limitations, which led to the 
                development of money as we know it today.
              </p>
              <Button 
                className="mt-4"
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
          <h2 className="text-2xl font-bold">Quiz: What is Money?</h2>
          <p className="text-gray-600">Select the best definition of money:</p>
          
          <div className="grid gap-4">
            {quizOptions.map((option) => (
              <Card 
                key={option.id}
                className={`cursor-pointer transition-all ${
                  selectedOption === option.id ? 'ring-2 ring-primary' : ''
                } ${
                  hasSubmitted && option.isCorrect ? 'bg-green-50' : ''
                }`}
                onClick={() => handleOptionSelect(option.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={option.image} 
                      alt={option.text}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-gray-700">{option.text}</p>
                      {hasSubmitted && option.isCorrect && (
                        <div className="flex items-center gap-2 text-green-600 mt-2">
                          <Check className="w-4 h-4" />
                          <span className="text-sm">Correct Answer</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => {
                setShowQuiz(false);
                setSelectedOption(null);
                setHasSubmitted(false);
              }}
            >
              Back to Lesson
            </Button>
            {!hasSubmitted && (
              <Button onClick={handleSubmit}>
                Submit Answer
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatIsMoneyLesson;