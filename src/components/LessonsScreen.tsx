import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Coins, BookOpen, History, Calendar, ArrowRight, Lock, Heart } from "lucide-react";
import { useState } from "react";
import WhatIsMoneyLesson from "./lessons/WhatIsMoneyLesson";
import WantsAndNeedsLesson from "./lessons/WantsAndNeedsLesson";

interface LessonNode {
  id: number;
  title: string;
  description: string;
  icon: typeof Coins;
  unlocked: boolean;
  component: React.ComponentType;
}

const LessonsScreen = () => {
  const { t, language } = useLanguage();
  const [activeNode, setActiveNode] = useState<number>(1);
  const [showLesson, setShowLesson] = useState(false);

  const lessonNodes: LessonNode[] = [
    {
      id: 1,
      title: t("lessons.whatIsMoney.title"),
      description: t("lessons.whatIsMoney.description"),
      icon: Coins,
      unlocked: true,
      component: WhatIsMoneyLesson,
    },
    {
      id: 2,
      title: "Wants and Needs",
      description: "Learn the difference between things we want and things we need",
      icon: Heart,
      unlocked: true,
      component: WantsAndNeedsLesson,
    },
    {
      id: 3,
      title: t("lessons.barterSystem.title"),
      description: t("lessons.barterSystem.description"),
      icon: BookOpen,
      unlocked: false,
      component: WhatIsMoneyLesson,
    },
    {
      id: 4,
      title: t("lessons.firstCoins.title"),
      description: t("lessons.firstCoins.description"),
      icon: History,
      unlocked: false,
      component: WhatIsMoneyLesson,
    },
    {
      id: 5,
      title: t("lessons.modernMoney.title"),
      description: t("lessons.modernMoney.description"),
      icon: Calendar,
      unlocked: false,
      component: WhatIsMoneyLesson,
    },
  ];

  if (showLesson) {
    const ActiveLesson = lessonNodes.find(node => node.id === activeNode)?.component;
    return ActiveLesson ? <ActiveLesson /> : null;
  }

  return (
    <div className={`min-h-screen bg-gray-50 pb-20 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">{t("lessons.moneyBasics")}</h1>
        
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <div className="space-y-6">
            {lessonNodes.map((node, index) => (
              <div key={node.id} className="relative">
                {index !== lessonNodes.length - 1 && (
                  <div className="absolute left-7 top-16 h-16 w-0.5 bg-gray-200" />
                )}
                
                <Card className={`transition-all ${
                  activeNode === node.id ? "ring-2 ring-primary" : ""
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${
                        node.unlocked ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-400"
                      }`}>
                        <node.icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">{node.title}</h3>
                          {!node.unlocked && <Lock className="w-5 h-5 text-gray-400" />}
                        </div>
                        <p className="text-gray-600 mt-2">{node.description}</p>
                        
                        {node.unlocked && (
                          <Button 
                            className="mt-4"
                            onClick={() => {
                              setActiveNode(node.id);
                              setShowLesson(true);
                            }}
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
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default LessonsScreen;