import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Star, Coins, Trophy, Gift } from "lucide-react";

const RewardsScreen = () => {
  const { t } = useLanguage();
  
  // Mockup data - in a real app this would come from an API
  const rewards = {
    stars: 127,
    coins: 350,
    progress: 65,
    badges: [
      { id: 1, name: "First Lesson", icon: "🎓", unlocked: true },
      { id: 2, name: "Savings Master", icon: "💰", unlocked: true },
      { id: 3, name: "Budget Pro", icon: "📊", unlocked: false },
      { id: 4, name: "Investment Guru", icon: "📈", unlocked: false },
    ],
    storeItems: [
      { id: 1, name: "Custom Avatar", price: 500, icon: "👤" },
      { id: 2, name: "Special Theme", price: 300, icon: "🎨" },
      { id: 3, name: "Extra Lives", price: 200, icon: "❤️" },
      { id: 4, name: "Power Boost", price: 400, icon: "⚡" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 pb-24">
      {/* Title Section with Animation */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {t("rewards.title") || "Rewards"}
        </h1>
        <Trophy className="text-primary animate-bounce-slow" size={32} />
      </div>

      {/* Currency Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <Star className="text-secondary" size={24} />
              <span className="text-xl font-semibold">{rewards.stars} Stars</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <Coins className="text-primary" size={24} />
              <span className="text-xl font-semibold">{rewards.coins} Coins</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Progress to Next Reward</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={rewards.progress} className="h-4" />
          <p className="text-sm text-gray-500 mt-2">{rewards.progress}% Complete</p>
        </CardContent>
      </Card>

      {/* Badges Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Badge Collection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rewards.badges.map((badge) => (
              <div
                key={badge.id}
                className={`flex flex-col items-center p-4 rounded-lg border ${
                  badge.unlocked
                    ? "bg-white"
                    : "bg-gray-100 opacity-50"
                }`}
              >
                <span className="text-4xl mb-2">{badge.icon}</span>
                <span className="text-sm font-medium text-center">
                  {badge.name}
                </span>
                <Badge
                  variant={badge.unlocked ? "secondary" : "outline"}
                  className="mt-2"
                >
                  {badge.unlocked ? "Unlocked" : "Locked"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Store Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Rewards Store</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rewards.storeItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center p-4 rounded-lg border bg-white hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-2">{item.icon}</span>
                <span className="text-sm font-medium text-center mb-2">
                  {item.name}
                </span>
                <div className="flex items-center gap-1">
                  <Coins className="text-primary" size={16} />
                  <span className="text-sm font-semibold">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RewardsScreen;