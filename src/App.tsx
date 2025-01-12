import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import WelcomeScreen from "@/components/WelcomeScreen";
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
            <Route path="/home" element={<div className="h-screen bg-gray-50 p-6 pb-24">Home Screen (Coming Soon)</div>} />
            <Route path="/lessons" element={<div className="h-screen bg-gray-50 p-6 pb-24">Lessons (Coming Soon)</div>} />
            <Route path="/rewards" element={<div className="h-screen bg-gray-50 p-6 pb-24">Rewards (Coming Soon)</div>} />
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