
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LessonContent from "./sadaqa/LessonContent";
import Quiz from "./sadaqa/Quiz";

interface Props {
  onBack?: () => void;
}

const SadaqaLesson = ({ onBack }: Props) => {
  const { t } = useLanguage();
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-4 pb-24">
      <div className="mb-6">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("auth.back")}
        </Button>
      </div>
      {!showQuiz ? (
        <LessonContent onStartQuiz={() => setShowQuiz(true)} />
      ) : (
        <Quiz onBack={() => setShowQuiz(false)} />
      )}
    </div>
  );
};

export default SadaqaLesson;
