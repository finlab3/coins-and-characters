import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext"; // Add this import
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useToast } from "../components/ui/use-toast";
import { Wand2 } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const avatarOptions = [
  {
    id: 1,
    url: "Assets/Finlab-Fox.png",
    alt: "Cute panda avatar",
  },
  {
    id: 2,
    url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix",
    alt: "Fox avatar",
  },
  {
    id: 3,
    url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight",
    alt: "Bear avatar",
  },
  {
    id: 4,
    url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Luna",
    alt: "Bunny avatar",
  }
];

const ProfileScreen = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0]);
  const { toast } = useToast();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAvatarChange = (avatar: typeof avatarOptions[0]) => {
    setSelectedAvatar(avatar);
    toast({
      title: "Avatar Updated! 🎉",
      description: "Your new friend looks great!",
      duration: 2000,
    });
  };

  const { language, setLanguage } = useLanguage(); // Use the context

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <div className="min-h-screen bg-[#F2FCE2] p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#1F2937] flex items-center justify-center gap-2">
            My Profile
            <Wand2 className="w-8 h-8 text-primary animate-bounce-slow" />
          </h1>
          <p className="text-lg text-[#4B5563]">Choose your favorite friend!</p>
          {/* Change Language Button */}
          <Button onClick={toggleLanguage} className="mt-4">
            Change Language to {language === "en" ? "Arabic" : "English"}
          </Button>
        </div>

        {/* Current Avatar Display */}
        <Card className="p-6 bg-white/80 backdrop-blur">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32 border-4 border-primary">
              <AvatarImage src={selectedAvatar.url} alt={selectedAvatar.alt} />
              <AvatarFallback>😊</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold text-[#1F2937]">Your Friend</h2>
          </div>
        </Card>

        {/* Avatar Options */}
        <Card className="p-6 bg-white/80 backdrop-blur">
          <h3 className="text-lg font-semibold mb-4 text-[#1F2937]">Choose a New Friend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {avatarOptions.map((avatar) => (
              <Button
                key={avatar.id}
                variant="ghost"
                className={`p-2 rounded-lg transition-all ${
                  selectedAvatar.id === avatar.id
                    ? "ring-4 ring-primary"
                    : "hover:ring-2 hover:ring-primary/50"
                }`}
                onClick={() => handleAvatarChange(avatar)}
              >
                <Avatar className="w-16 h-16">
                  <AvatarImage src={avatar.url} alt={avatar.alt} />
                  <AvatarFallback>😊</AvatarFallback>
                </Avatar>
              </Button>
            ))}
          </div>
        </Card>

        {/* Logout Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/")}
            className="bg-[#F2FCE2] hover:bg-[#D1E7DD] text-white px-8 py-4 rounded-full text-xl font-semibold transition-all"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
