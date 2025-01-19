import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, HandHeart, Heart, Gift, Coins } from "lucide-react";

interface LessonContentProps {
  onStartQuiz: () => void;
}

const LessonContent = ({ onStartQuiz }: LessonContentProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <HandHeart className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold">{t("lessons.sadaqa.title")}</h1>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              {t("lessons.sadaqa.whatIs")}
            </h2>
            <p className="text-gray-600">{t("lessons.sadaqa.definition")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              {t("lessons.sadaqa.benefits")}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>{t("lessons.sadaqa.benefit1")}</li>
              <li>{t("lessons.sadaqa.benefit2")}</li>
              <li>{t("lessons.sadaqa.benefit3")}</li>
              <li>{t("lessons.sadaqa.benefit4")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Coins className="w-5 h-5 text-primary" />
              {t("lessons.sadaqa.forms")}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>{t("lessons.sadaqa.form1")}</li>
              <li>{t("lessons.sadaqa.form2")}</li>
              <li>{t("lessons.sadaqa.form3")}</li>
              <li>{t("lessons.sadaqa.form4")}</li>
            </ul>
          </section>

          <Button onClick={onStartQuiz} className="mt-4">
            {t("lessons.startQuiz")}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonContent;