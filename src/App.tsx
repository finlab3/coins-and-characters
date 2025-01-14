import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import WelcomeScreen from "@/components/WelcomeScreen";
import AuthScreen from "@/components/AuthScreen";
import HomeScreen from "@/components/HomeScreen";
import LessonsScreen from "@/components/LessonsScreen";
import RewardsScreen from "@/components/RewardsScreen";
import Navigation from "@/components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<AuthScreen />} />
            <Route path="/signup" element={<AuthScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/lessons" element={<LessonsScreen />} />
            <Route path="/rewards" element={<RewardsScreen />} />
            <Route path="/progress" element={<div className="h-screen bg-gray-50 p-6 pb-24">Progress (Coming Soon)</div>} />
            <Route path="/profile" element={<div className="h-screen bg-gray-50 p-6 pb-24">Profile (Coming Soon)</div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Navigation />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;