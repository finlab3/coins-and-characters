import { ScrollArea } from "@/components/ui/scroll-area";
import { Coins, BookOpen, History, Calendar, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LessonNode from "./LessonNode";
import WhatIsMoneyLesson from "./WhatIsMoneyLesson";
import WantsAndNeedsLesson from "./WantsAndNeedsLesson";

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
      description: t("lessons.whatIsMoney.description"),
      icon: Coins,
      unlocked: true,
      component: WhatIsMoneyLesson,
    },
    {
      id: 2,
      title: t("lessons.wantsAndNeeds.title"),
      description: t("lessons.wantsAndNeeds.description"),
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