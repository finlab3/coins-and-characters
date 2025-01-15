import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Clock, Lock, Settings } from "lucide-react";

interface LessonProgress {
  id: number;
  title: string;
  completed: boolean;
  timeSpent: number;
  score: number;
}

const ProgressScreen = () => {
  const { t, language } = useLanguage();
  
  // Mock data - in a real app, this would come from a backend
  const lessonsProgress: LessonProgress[] = [
    {
      id: 1,
      title: t("lessons.whatIsMoney.title"),
      completed: true,
      timeSpent: 15,
      score: 90
    },
    {
      id: 2,
      title: t("lessons.barterSystem.title"),
      completed: true,
      timeSpent: 12,
      score: 85
    },
    {
      id: 3,
      title: t("lessons.firstCoins.title"),
      completed: false,
      timeSpent: 0,
      score: 0
    },
    {
      id: 4,
      title: t("lessons.modernMoney.title"),
      completed: false,
      timeSpent: 0,
      score: 0
    }
  ];

  const totalLessons = lessonsProgress.length;
  const completedLessons = lessonsProgress.filter(lesson => lesson.completed).length;
  const overallProgress = (completedLessons / totalLessons) * 100;

  return (
    <div className={`min-h-screen bg-gray-50 pb-24 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="max-w-4xl mx-auto p-4">
        <Tabs defaultValue="progress" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="progress">Student Progress</TabsTrigger>
            <TabsTrigger value="parental">Parental Controls</TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Overall Progress</h2>
                <Progress value={overallProgress} className="mb-2" />
                <p className="text-sm text-gray-600">
                  {completedLessons} of {totalLessons} lessons completed
                </p>
              </CardContent>
            </Card>

            <ScrollArea className="h-[calc(100vh-400px)]">
              <div className="space-y-4">
                {lessonsProgress.map((lesson) => (
                  <Card key={lesson.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          {lesson.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : (
                            <Lock className="w-5 h-5 text-gray-400" />
                          )}
                          <div>
                            <h3 className="font-medium">{lesson.title}</h3>
                            {lesson.completed && (
                              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                <Clock className="w-4 h-4" />
                                <span>{lesson.timeSpent} minutes</span>
                                <span className="text-green-600">Score: {lesson.score}%</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="parental" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold">Parental Controls</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Daily Learning Goals</h3>
                    <Progress value={75} className="mb-2" />
                    <p className="text-sm text-gray-600">Target: 30 minutes/day</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Weekly Progress Report</h3>
                    <p className="text-sm text-gray-600">
                      Receive detailed weekly reports about your child's learning progress,
                      including time spent, lessons completed, and quiz scores.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Learning Schedule</h3>
                    <p className="text-sm text-gray-600">
                      Set preferred learning hours and receive notifications when goals
                      are achieved or missed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProgressScreen;