import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight, LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LessonNodeProps {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  unlocked: boolean;
  isLast: boolean;
  isActive: boolean;
  onStart: () => void;
}

const LessonNode = ({
  id,
  title,
  description,
  icon: Icon,
  unlocked,
  isLast,
  isActive,
  onStart,
}: LessonNodeProps) => {
  const { t } = useLanguage();

  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute left-7 top-16 h-16 w-0.5 bg-gray-200" />
      )}
      
      <Card className={`transition-all ${
        isActive ? "ring-2 ring-primary" : ""
      }`}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-full ${
              unlocked ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-400"
            }`}>
              <Icon className="w-6 h-6" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{title}</h3>
                {!unlocked && <Lock className="w-5 h-5 text-gray-400" />}
              </div>
              <p className="text-gray-600 mt-2">{description}</p>
              
              {unlocked && (
                <Button 
                  className="mt-4"
                  onClick={onStart}
                >
                  {t("lessons.startLesson")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonNode;