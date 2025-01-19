import { useState } from "react";
import LessonContent from "./wants-and-needs/LessonContent";
import Quiz from "./wants-and-needs/Quiz";

const WantsAndNeedsLesson = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-4 pb-24">
      {!showQuiz ? (
        <LessonContent onStartQuiz={() => setShowQuiz(true)} />
      ) : (
        <Quiz onBack={() => setShowQuiz(false)} />
      )}
    </div>
  );
};

export default WantsAndNeedsLesson;