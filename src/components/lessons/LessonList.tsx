import { ScrollArea } from "@/components/ui/scroll-area";
import { Coins, BookOpen, History, Calendar, Heart, HandHeart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LessonNode from "./LessonNode";
import WhatIsMoneyLesson from "./WhatIsMoneyLesson";
import WantsAndNeedsLesson from "./WantsAndNeedsLesson";
import SadaqaLesson from "./SadaqaLesson";

interface LessonData {
  id: number;
  title: string;
  description: string;
  icon: typeof Coins;
  unlocked: boolean;
  component: React.ComponentType;
}

interface LessonListProps {
  activeNode: number;
  onNodeSelect: (id: number) => void;
  onStartLesson: () => void;
}

const LessonList = ({ activeNode, onNodeSelect, onStartLesson }: LessonListProps) => {
  const { t } = useLanguage();

  const lessonNodes: LessonData[] = [
    {
      id: 1,
      title: t("lessons.whatIsMoney.title"),
      description: t("What Is Money explores the nature, history, and role of money, uncovering how it shapes society and the global economy."),
      icon: Coins,
      unlocked: true,
      component: WhatIsMoneyLesson,
    },
    {
      id: 2,
      title: t("Lessons Wants And Needs"),
      description: t("The Wants and Needs lesson helps students differentiate essential needs from non-essential wants. Through examples and discussions, they’ll learn to prioritize needs, budget effectively, and make responsible financial decisions."),
      icon: Heart,
      unlocked: true,
      component: WantsAndNeedsLesson,
    },
    {
      id: 3,
      title: t("lessons.sadaqa.title"),
      description: t("lessons.sadaqa.description"),
      icon: HandHeart,
      unlocked: true,
      component: SadaqaLesson,
    },
    {
      id: 4,
      title: t("lessons.barterSystem.title"),
      description: t("lessons.barterSystem.description"),
      icon: BookOpen,
      unlocked: false,
      component: WhatIsMoneyLesson,
    },
    {
      id: 5,
      title: t("lessons.firstCoins.title"),
      description: t("lessons.firstCoins.description"),
      icon: History,
      unlocked: false,
      component: WhatIsMoneyLesson,
    },
    {
      id: 6,
      title: t("lessons.modernMoney.title"),
      description: t("lessons.modernMoney.description"),
      icon: Calendar,
      unlocked: false,
      component: WhatIsMoneyLesson,
    },
  ];

  return (
    <ScrollArea className="h-[calc(100vh-200px)] pr-4">
      <div className="space-y-6">
        {lessonNodes.map((node, index) => (
          <LessonNode
            key={node.id}
            {...node}
            isLast={index === lessonNodes.length - 1}
            isActive={activeNode === node.id}
            onStart={() => {
              onNodeSelect(node.id);
              onStartLesson();
            }}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default LessonList;