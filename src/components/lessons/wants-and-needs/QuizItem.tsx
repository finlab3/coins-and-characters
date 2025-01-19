import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface QuizItemProps {
  name: string;
  image: string;
  onAnswerSubmit: (isNeed: boolean) => void;
}

const QuizItem = ({ name, image, onAnswerSubmit }: QuizItemProps) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold text-center">{name}</h3>
          
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => onAnswerSubmit(true)}
            >
              <Home className="w-4 h-4" />
              {t("lessons.wantsAndNeeds.quiz.need")}
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => onAnswerSubmit(false)}
            >
              <ShoppingBag className="w-4 h-4" />
              {t("lessons.wantsAndNeeds.quiz.want")}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizItem;