import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Home, ShoppingBag, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LessonContentProps {
  onStartQuiz: () => void;
}

const LessonContent = ({ onStartQuiz }: LessonContentProps) => {
  const { t } = useLanguage();

  return (
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
            onClick={onStartQuiz}
          >
            {t("lessons.startLesson")}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonContent;